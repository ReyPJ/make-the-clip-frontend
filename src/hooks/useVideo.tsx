import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import type {
  PostVideoRequest,
  VideoRegenerateRequeste,
} from '@/lib/types/videoTypes'
import { video } from '@/lib/services/video'

export function useVideo(videoId?: string) {
  const queryClient = useQueryClient()

  // Get list of all videos
  const {
    data: videos,
    isLoading: isLoadingVideos,
    error: videosError,
  } = useQuery({
    queryKey: ['videos'],
    queryFn: video.list,
    staleTime: 2 * 60 * 1000, // 2 minutes
  })

  // Get single video by ID
  const {
    data: videoDetail,
    isLoading: isLoadingVideo,
    error: videoError,
  } = useQuery({
    queryKey: ['video', videoId],
    queryFn: () => video.get(videoId!),
    enabled: !!videoId,
    staleTime: 1 * 60 * 1000, // 1 minute
  })

  // Get video status (for polling during processing)
  const {
    data: videoStatus,
    isLoading: isLoadingStatus,
    refetch: refetchStatus,
  } = useQuery({
    queryKey: ['video-status', videoId],
    queryFn: () => video.status(videoId!),
    enabled: !!videoId,
    refetchInterval: (query) => {
      // Poll every 5 seconds while processing
      const status = query.state.data?.status
      return status === 'processing' || status === 'uploaded' ? 5000 : false
    },
  })

  // Upload video mutation
  const uploadVideo = useMutation({
    mutationFn: (data: PostVideoRequest) => video.upload(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['videos'] })
    },
  })

  // Delete video mutation
  const deleteVideo = useMutation({
    mutationFn: (id: string) => video.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['videos'] })
      if (videoId) {
        queryClient.removeQueries({ queryKey: ['video', videoId] })
        queryClient.removeQueries({ queryKey: ['video-status', videoId] })
      }
    },
  })

  // Regenerate clips mutation
  const regenerateClips = useMutation({
    mutationFn: (data: VideoRegenerateRequeste) => video.regenerate(data),
    onSuccess: () => {
      if (videoId) {
        queryClient.invalidateQueries({ queryKey: ['video', videoId] })
        queryClient.invalidateQueries({ queryKey: ['video-status', videoId] })
      }
    },
  })

  return {
    // List
    videos,
    isLoadingVideos,
    videosError,

    // Single video
    videoDetail,
    isLoadingVideo,
    videoError,

    // Status
    videoStatus,
    isLoadingStatus,
    refetchStatus,

    // Mutations
    upload: uploadVideo.mutate,
    uploadAsync: uploadVideo.mutateAsync,
    isUploading: uploadVideo.isPending,
    uploadError: uploadVideo.error,

    delete: deleteVideo.mutate,
    deleteAsync: deleteVideo.mutateAsync,
    isDeleting: deleteVideo.isPending,
    deleteError: deleteVideo.error,

    regenerate: regenerateClips.mutate,
    regenerateAsync: regenerateClips.mutateAsync,
    isRegenerating: regenerateClips.isPending,
    regenerateError: regenerateClips.error,
  }
}

import type {
  BaseVideo,
  GetListVideosResponse,
  PostVideoRequest,
  VideoByIdResponse,
  VideoRegenerateRequeste,
  VideoStatusResponse,
} from '@/lib/types/videoTypes'
import { api } from '@/lib/api'

export const video = {
  upload: async (video_data: PostVideoRequest) => {
    const { data } = await api.post<BaseVideo>('/videos/upload', video_data)
    return data
  },

  list: async () => {
    const { data } = await api.get<GetListVideosResponse>(`/videos`)
    return data
  },

  get: async (video_id: string) => {
    const { data } = await api.get<VideoByIdResponse>(`/videos/${video_id}`)
    return data
  },

  status: async (video_id: string) => {
    const { data } = await api.get<VideoStatusResponse>(
      `/videos/${video_id}/status`,
    )
    return data
  },

  delete: async (video_id: string) => {
    const { data } = await api.delete(`/videos/${video_id}`)
    return data
  },

  regenerate: async (regenerate_data: VideoRegenerateRequeste) => {
    const { data } = await api.post(
      `/videos/${regenerate_data.video_id}/regenerate`,
      regenerate_data,
    )
    return data
  },
}

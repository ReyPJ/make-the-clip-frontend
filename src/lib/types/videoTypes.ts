type VideoStatus = 'uploaded' | 'processing' | 'completed' | 'failed'
export interface BaseVideo {
  id: string
  title?: string
  filename: string
  duration_seconds: number
  status: VideoStatus
  storage_key: string
  created_at: string
}

interface ClipItem {
  id: string
  title: string
  start_time: number
  end_time: number
  duration_seconds: number
  viral_score: number
  download_url: string
  created_at: string
}

export interface PostVideoRequest {
  file: File
  title?: string
  clips_to_generate: number
}

type ListVideoItem = Omit<BaseVideo, 'storage_key'> & {
  clips_count: number
}
export type VideoByIdResponse = BaseVideo & {
  transcription: string | null
  error_message: string | null
  processed_at: string
  download_url: string | null
  clips: Array<ClipItem>
}

export type VideoStatusResponse = {
  video_id: string
  status: VideoStatus
  error_message: string | null
  processed_at: string | null
}

export type VideoRegenerateRequeste = Omit<
  VideoStatusResponse,
  'error_message' | 'processed_at'
> & {
  task_id: string
  clips_deleted: number
}

export type GetListVideosResponse = Array<ListVideoItem>

interface BaseUser {
  id: string
  email: string
  plan: string
  clips_limit_per_month: number
  clips_generated_this_month: number
}

interface UserMe extends BaseUser {
  videos_uploaded_this_month: number
  max_video_duration_minutes: number
  is_active: boolean
  created_at: string
}

interface ApiAuthResponse<TUser> {
  user: TUser
  message: string
}

export interface ApiAuthRequest {
  email: string
  password: string
}

type RegisterUser = Omit<BaseUser, 'clips_generated_this_month'>
type LoginUser = BaseUser

// Response Types
export type RegisterResponse = ApiAuthResponse<RegisterUser>
export type LoginResponse = ApiAuthResponse<LoginUser>
export type UserMeResponse = UserMe

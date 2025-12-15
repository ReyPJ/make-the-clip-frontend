import type {
  ApiAuthRequest,
  LoginResponse,
  RegisterResponse,
  UserMeResponse,
} from '@/lib/types/authTypes'
import { api } from '@/lib/api'

export const auth = {
  login: async (credentials: ApiAuthRequest) => {
    const { data } = await api.post<LoginResponse>('/auth/login', credentials)
    return data
  },

  register: async (credentials: ApiAuthRequest) => {
    const { data } = await api.post<RegisterResponse>(
      '/auth/register',
      credentials,
    )
    return data
  },

  logout: async () => {
    await api.post('/auth/logout')
  },

  getCurrentUser: async () => {
    const { data } = await api.get<UserMeResponse>('/auth/me')
    return data
  },
}

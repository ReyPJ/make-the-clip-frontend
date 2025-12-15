import axios from 'axios'
import type { AxiosError, InternalAxiosRequestConfig } from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const api = axios.create({
  baseURL: `${API_URL}/api/v1`,
  withCredentials: true,
})

// Interceptors to handle token refresh
let isRefreshing = false
let failedQueue: Array<{
  resolve: (value?: unknown) => void
  reject: (error: Error) => void
}> = []

const processQueue = (error: Error | null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error)
    } else {
      prom.resolve()
    }
  })
  failedQueue = []
}

// Send the X-API-Key header with every request
api.interceptors.request.use((config) => {
  config.headers['X-API-Key'] = import.meta.env.VITE_API_KEY
  return config
})

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean
    }

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url?.includes('/auth/login') &&
      !originalRequest.url?.includes('/auth/register') &&
      !originalRequest.url?.includes('/auth/refresh')
    ) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject })
        })
          .then(() => api(originalRequest))
          .catch((err) => Promise.reject(err))
      }

      originalRequest._retry = true
      isRefreshing = true

      try {
        await api.post('/auth/refresh')
        processQueue(null)
        return api(originalRequest)
      } catch (refreshError) {
        processQueue(new Error('Session expired'))
        return Promise.reject(refreshError)
      } finally {
        isRefreshing = false
      }
    }

    return Promise.reject(error)
  },
)

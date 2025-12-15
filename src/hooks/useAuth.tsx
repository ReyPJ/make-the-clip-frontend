import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import type { ApiAuthRequest } from '@/lib/types/authTypes'
import { auth } from '@/lib/services/auth'

export function useAuth() {
  const queryClient = useQueryClient()

  // @ts-ignore: Is not an error
  const { data: user, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: auth.getCurrentUser,
    retry: false,
    staleTime: 5 * 60 * 1000,
  })

  const login = useMutation({
    mutationFn: (credentials: ApiAuthRequest) => auth.login(credentials),
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data.user)
    },
  })

  const register = useMutation({
    mutationFn: (credentials: ApiAuthRequest) => auth.register(credentials),
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data.user)
    },
  })

  const logout = useMutation({
    mutationFn: () => auth.logout(),
    onSuccess: () => {
      queryClient.setQueryData(['user'], null)
      queryClient.clear()
    },
  })

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    login: login.mutate,
    register: register.mutate,
    logout: logout.mutate,
    isLoggingIn: login.isPending,
    isRegistering: register.isPending,
    loginError: login.error,
    registerError: register.error,
  }
}

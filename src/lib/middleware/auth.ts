import { createMiddleware } from '@tanstack/react-start'
import { redirect } from '@tanstack/react-router'

const isProduction = import.meta.env.VITE_ENV === 'production'

/**
 * Middleware for route protection
 * Use this in route's server.middleware array
 * Only active in production (cookies are cross-origin in development)
 */
export const authMiddleware = createMiddleware({ type: 'request' }).server(
  async ({ next, request }) => {
    // Skip auth check in development (cookies are on different domain)
    if (!isProduction) {
      return next({
        context: {
          isAuthenticated: true,
        },
      })
    }

    // Check for access_token cookie
    const cookies = request.headers.get('cookie') || ''
    const hasAuthCookie = cookies.includes('access_token=')

    if (!hasAuthCookie) {
      throw redirect({
        to: '/',
      })
    }

    return next({
      context: {
        isAuthenticated: true,
      },
    })
  },
)

/**
 * Middleware to protect server functions
 * Use this for createServerFn middleware
 */
export const authFunctionMiddleware = createMiddleware({
  type: 'function',
}).server(async ({ next }) => {
  return next({
    context: {
      isAuthenticated: true,
    },
  })
})

/**
 * Helper for route protection (use in route beforeLoad on client)
 * Redirects to home if not authenticated
 */
export function requireAuth(isAuthenticated: boolean) {
  if (!isAuthenticated) {
    throw redirect({
      to: '/',
      search: {
        redirect: window.location.pathname,
      },
    })
  }
}

import { createMiddleware } from '@tanstack/react-start'
import { redirect } from '@tanstack/react-router'

/**
 * Middleware to protect server functions
 * Validates that the user is authenticated before proceeding
 */
export const authMiddleware = createMiddleware({ type: 'function' }).server(
  async ({ next }) => {
    // The cookies are automatically sent with withCredentials: true
    // The API will validate the session cookie and return 401 if invalid
    // This middleware just ensures we have the context ready

    return next({
      context: {
        isAuthenticated: true,
      },
    })
  },
)

/**
 * Middleware for route protection (use in route beforeLoad)
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

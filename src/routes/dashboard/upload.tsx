import { createFileRoute } from '@tanstack/react-router'
import { authMiddleware } from '@/lib/middleware/auth'

export const Route = createFileRoute('/dashboard/upload')({
  component: RouteComponent,
  server: {
    middleware: [authMiddleware],
  },
})

function RouteComponent() {
  return <div>Hello "/dashboard/upload"!</div>
}

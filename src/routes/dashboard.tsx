import { Outlet, createFileRoute } from '@tanstack/react-router'
import { authMiddleware } from '@/lib/middleware/auth'

export const Route = createFileRoute('/dashboard')({
  component: DashboardLayout,
  server: {
    middleware: [authMiddleware],
  },
})

function DashboardLayout() {
  return (
    <div>
      {/* Layout compartido para todas las rutas /dashboard/* */}
      <Outlet />
    </div>
  )
}

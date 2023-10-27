import { UserButton } from '@clerk/nextjs'
import { ModeToggle } from '@/components/mode-toggle'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-4 p-24">
      <p className="text-3xl font-bold text-indigo-500">
        This is a protected route
      </p>
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </main>
  )
}

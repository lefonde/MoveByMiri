import { APP_NAME } from '@yoga/shared'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold">{APP_NAME}</h1>
    </main>
  )
}

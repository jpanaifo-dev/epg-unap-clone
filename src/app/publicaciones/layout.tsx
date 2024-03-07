'use client'
import { PublicationsProvider } from '@/providers/publicationProvider'

export default function PublicationLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <PublicationsProvider>
      <div className="w-full">{children}</div>
    </PublicationsProvider>
  )
}

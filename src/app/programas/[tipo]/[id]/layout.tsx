'use client'
import { BannerSection } from '../(sections)/bannerSection'

export default function DetailLayout ({
  children,
  params
}: {
  children: React.ReactNode
  params: { id: number, tipo: string }
}) {
  return (
    <div>
      <BannerSection id={params.id} />
      {children}
    </div>
  )
}

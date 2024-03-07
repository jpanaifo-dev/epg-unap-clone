'use client'
import { useEffect } from 'react'
import { BannerHome } from '@/components'
import { usePublications } from '@/hooks/usePublications'
import { usePrograms } from '@/hooks/usePrograms'

export const BannerSection = () => {
  const { getListPublications, publicationsList } = usePublications()
  const { getListCountPrograms, countPrograms, loading } = usePrograms()

  useEffect(() => {
    getListPublications(6, 1, '', '')
    getListCountPrograms()
  }, [])

  return (
    <>
      <BannerHome
        loading={loading}
        publicaciones={publicationsList}
        tiposProgramas={countPrograms}
      />
    </>
  )
}

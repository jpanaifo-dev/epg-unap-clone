'use client'
import { useEffect } from 'react'
import { usePublications } from '@/hooks/usePublications'
import uiLoading from '@/app/loading'
import { DetailsSection } from '../(sections)/detailsSectino'
import { RealeasesSection } from '../(sections)/releasesSections'
interface PageProps {
  params: { id: string }
}
export default function Page ({ params: { id } }: PageProps) {
  const { getPublication, getComunicados, loading, publication, comunicados } =
    usePublications()

  useEffect(() => {
    getComunicados()
    getPublication(parseInt(id))
  }, [])

  return (
    <>
      {loading ? (
        uiLoading()
      ) : (
        <div className="block lg:flex sm:gap-6">
          <div className="lg:p-6 lg:w-3/4 pb-4">
            <DetailsSection publication={publication} />
          </div>
          <div className="lg:w-1/4 bg-primary-50">
            <RealeasesSection comunicados={comunicados} />
          </div>
        </div>
      )}
    </>
  )
}

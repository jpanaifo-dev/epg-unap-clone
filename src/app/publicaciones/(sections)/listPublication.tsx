'use client'
import { CardPublication } from '@/components'
import { useLogicPublications } from '@/providers/publicationProvider'
import { SearchSection } from './searchSection'

export const ListPublication = () => {
  const { publicationsList } = useLogicPublications()
  return (
    <div>
      <div>
        <SearchSection />
      </div>
      {publicationsList?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4">
          {publicationsList?.map((item, index: number) => (
            <CardPublication
              key={index}
              publication={item}
              type={item?.typePublication?.type_card ?? ''}
            />
          ))}
        </div>
      ) : (
        <p>No hay publicaciones recientes</p>
      )}
    </div>
  )
}

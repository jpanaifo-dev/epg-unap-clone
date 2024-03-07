'use client'
import { useEffect } from 'react'
import { CardPublication, MainSection } from '@/components'
import { Button, Divider } from '@nextui-org/react'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import Link from 'next/link'
import { usePublications } from '@/hooks/usePublications'

export default function EventSection () {
  const { getListPublications, publicationsList } = usePublications()

  useEffect(() => {
    getListPublications(3, 1, '', 'eventos')
  }, [])

  return (
    <div>
      <MainSection>
        <div className="mb-4 w-full">
          <h3 className="text-xl xl:text-2xl font-bold pb-7">
            Nuestros eventos
          </h3>
          <Divider />
          <div className="w-full flex justify-end mt-2">
            <Button
              variant="light"
              color="primary"
              className="font-semibold"
              endContent={<IconArrowNarrowRight size={24} />}
              as={Link}
              href="/publicaciones"
            >
              Ver todos los eventos
            </Button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {publicationsList?.map(
            (item, index) =>
              index === 0 && (
                <CardPublication key={index} type="event" publication={item} />
              )
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {publicationsList?.map(
              (item, index) =>
                index > 0 && (
                  <CardPublication
                    key={index}
                    type="event"
                    publication={item}
                  />
                )
            )}
          </div>
        </div>
      </MainSection>
    </div>
  )
}

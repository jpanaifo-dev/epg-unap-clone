'use client'
import { MainSection, CardPublication } from '@/components'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Button, Link, Divider } from '@nextui-org/react'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import { usePublications } from '@/hooks/usePublications'
import { useEffect } from 'react'

const responsive = {
  largeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
    partialVisibilityGutter: 40
  },
  mediumDesktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 50
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
    partialVisibilityGutter: 30
  },
  mobile: {
    breakpoint: { max: 640, min: 320 },
    items: 1,
    partialVisibilityGutter: 80
  },
  smallMobile: {
    breakpoint: { max: 320, min: 0 },
    items: 1,
    partialVisibilityGutter: 30
  }
}

export const NewsSection = () => {
  const { getListPublications, publicationsList } = usePublications()

  useEffect(() => {
    getListPublications(12, 1, '', 'noticias')
  }, [])

  return (
    <div className="bg-primary-50 mb-0 pb-0">
      <MainSection>
        <div className="mb-4 w-full">
          <h3 className="text-xl xl:text-2xl font-bold pb-7">Más noticias</h3>
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
              Ver todos las noticias
            </Button>
          </div>
        </div>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          arrows={true}
          partialVisible
        >
          {publicationsList?.length > 0 ? (
            publicationsList?.map((item, index) => (
              <div key={index} className="mr-4 h-full py-4">
                <CardPublication
                  publication={{
                    title: item?.title,
                    image: item?.image,
                    fecha: item?.fecha,
                    link: item?.link,
                    hora: item?.hora,
                    lugar: item?.lugar,
                    typePublication: item?.typePublication,
                    description: item?.description
                  }}
                />
              </div>
            ))
          ) : (
            <div>
              <h2>Sin datos</h2>
            </div>
          )}
        </Carousel>
      </MainSection>
    </div>
  )
}

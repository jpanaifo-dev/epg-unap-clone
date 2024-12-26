'use client'
import { useEffect, lazy, Suspense } from 'react'
import { Button, Divider } from '@nextui-org/react'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import { CardGalleryProgram } from '@/components'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { usePrograms } from '@/hooks'
import Link from 'next/link'

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

const LazyCarousel = lazy(() => import('react-multi-carousel'))

export const ProgramsActiveSection = () => {
  // const { programsList, getListPrograms } = usePrograms()

  // useEffect(() => {
  //   getListPrograms(12, 1, '', '', '1', '', '', '')
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <main className="flex justify-center bg-cover relative bg-primary-50">
      <section className="container section-home">
        <div className=" mb-4 w-full">
          <h3 className="text-xl xl:text-2xl font-bold pb-7">
            Programas en convocatoria
          </h3>
          <Divider />
          <div className="w-full flex justify-end mt-2">
            <Button
              variant="light"
              color="primary"
              className="font-semibold"
              endContent={<IconArrowNarrowRight size={24} />}
              as={Link}
              href="/programas"
            >
              Ver todos los programas
            </Button>
          </div>
        </div>
        {/* <Suspense fallback={<div>Loading...</div>}>
          <LazyCarousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            partialVisible
          >
            {programsList?.length > 0 ? (
              programsList?.map((item, index) => (
                <div key={index} className="mr-4 h-full pt-4 pb-8">
                  <CardGalleryProgram
                    en_convocatoria={item.en_convocatoria}
                    title={item.title}
                    image={item.image}
                    modality={item.modality}
                    programType={item.programType}
                    faculty={item.faculty}
                    link={`/programas/${item.programType?.key}/${item.id}`}
                  />
                </div>
              ))
            ) : (
              <div>
                <h2>Sin datos</h2>
              </div>
            )}
          </LazyCarousel>
        </Suspense> */}
      </section>
    </main>
  )
}

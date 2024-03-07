'use client'
import { useState } from 'react'
import { Divider, Link } from '@nextui-org/react'
import { useLogicPublications } from '@/providers/publicationProvider'
import { CardPublication } from '@/components'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { CarouselSection } from './carouselSection'

const responsive = {
  desktop: {
    breakpoint: { max: 8000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
}

export const HomePublication = () => {
  const { publicationTypes, publicationsList, comunicados } =
    useLogicPublications()

  const [isHover, setIsHover] = useState(false)

  return (
    <div className="">
      <div className="">
        {comunicados?.length > 0 && (
          <section
            className="grid grid-cols-1 pb-6"
            onMouseEnter={() => {
              setIsHover(true)
            }}
            onMouseLeave={() => {
              setIsHover(false)
            }}
          >
            <Carousel
              responsive={responsive}
              className="w-full z-0"
              infinite
              autoPlay
              autoPlaySpeed={5000}
              showDots
              arrows={isHover}
            >
              {comunicados?.map((item, index) => (
                <CarouselSection key={index} data={item} />
              ))}
            </Carousel>
          </section>
        )}
        {publicationTypes?.length > 0 && (
          <>
            {publicationTypes?.map((item, index) => (
              <section key={index} className="py-4">
                <div className="mb-4 w-full">
                  <h3 className="text-xl xl:text-2xl font-bold pb-7">
                    {item?.nombre}
                  </h3>
                  <Divider />
                  <div className="w-full flex justify-end mt-2">
                    <Link
                      color="primary"
                      className="font-semibold capitalize"
                      showAnchorIcon
                      anchorIcon={<IconArrowNarrowRight size={20} />}
                      as={Link}
                      href={`/publicaciones/${item?.key}`}
                    >
                      Ver más {item?.nombre}
                    </Link>
                  </div>
                </div>
                {
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4">
                    {publicationsList
                      ?.filter(
                        (publication) =>
                          publication?.typePublication?.key === item?.key
                      )
                      ?.map((item, index) => (
                        <CardPublication key={index} publication={item} />
                      ))}
                  </div>
                }
              </section>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

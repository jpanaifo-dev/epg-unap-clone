'use client'

import { Image } from '@nextui-org/react'
import { BreadcrumbComponent } from '../Breadcrumb/Breadcrumb'

export const Banner = ({
  image,
  title,
  description,
  customSection
}: {
  title?: string
  image?: string
  description?: string
  customSection?: JSX.Element
}) => {
  return (
    <section className="w-full relative h-[24rem] md:h-[28rem]">
      <main className="flex flex-col w-full h-full justify-between px-4 sm:px-6 py-12  z-10 absolute top-0 right-0 left-0 bg-black/70">
        <div className="container py-6 ">
          <BreadcrumbComponent />
        </div>
        <div className="container">
          <h1 className="w-fit text-2xl sm:text-3xl lg:text-4xl font-bold text-white uppercase md:mb-3">
            {title}
          </h1>
          <div>
            <hr className="w-24 h-1 bg-yellow-400 mb-3" />
          </div>
          <div className="">
            {customSection ?? (
              <h3 className="text-white font-medium lg:text-lg">
                {description}
              </h3>
            )}
          </div>
        </div>
      </main>
      <Image
        src={image || '/images/banner-default.webp'}
        alt={title}
        className="object-cover w-full h-full z-0"
        removeWrapper
        radius="none"
      />
    </section>
  )
}

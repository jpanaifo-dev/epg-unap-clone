'use client'
import { IPublicationFileList } from '@/types'
import { Image } from '@nextui-org/react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

interface IProps {
  dataList: IPublicationFileList[]
}

export const PublicationImages = (props: IProps) => {
  const { dataList } = props

  return (
    <article>
      <Swiper
        pagination={{
          dynamicBullets: true
        }}
        loop
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {dataList?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <ItemSlider {...item} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </article>
  )
}

export const ItemSlider = (item: IPublicationFileList) => {
  const { file, description } = item

  return (
    <article className="rounded-lg">
      <Image
        alt="description"
        src={
          file ||
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV953LLT612kt6UhgdxG9ruFiReF9iqV5Qjw&s'
        }
        removeWrapper
        className="object-cover object-center w-full lg:h-[620px] rounded-t-lg"
        radius="none"
        loading="lazy"
        placeholder="blur"
      />
      <section className="bg-black p-2 text-white text-sm rounded-b-lg">
        <p>{description || 'Descripción de la imagen'}</p>
      </section>
    </article>
  )
}

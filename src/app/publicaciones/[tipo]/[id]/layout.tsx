import { Image } from '@nextui-org/react'
import img_banner from '@/assets/images/banner_publicaciones.webp'
import { MainSection } from '@/components'
export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Image
        src={img_banner.src}
        alt="banner"
        className="w-full h-96 object-cover"
        radius="none"
        removeWrapper
        loading="lazy"
      />
      <MainSection>{children}</MainSection>
    </>
  )
}

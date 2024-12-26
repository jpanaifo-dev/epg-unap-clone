import { Banner, ListServices } from '@/components'
import { imgBannerServicios } from '@/assets'
export default function Page() {
  return (
    <>
      <Banner
        title="Nuestros servicios"
        image={imgBannerServicios.src}
        description="Facilita tus procesos, aquí algunos de nuestros servicios"
      />
      <main className="container section">
        <ListServices />
      </main>
    </>
  )
}

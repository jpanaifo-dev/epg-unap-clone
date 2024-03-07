'use client'
import { Banner, Sidebar } from '@/components'
import img_banner from '@/assets/images/banner_publicaciones.webp'
import { useLogicPublications } from '@/providers/publicationProvider'

const initialItems = [
  {
    key: '',
    optionName: 'Todas las publicaciones',
    href: '/publicaciones'
  }
]

export default function PublicationLayout ({
  children,
  params
}: {
  children: React.ReactNode
  params: {
    tipo: string
  }
}) {
  const title = params?.tipo !== undefined ? params.tipo : 'Publicaciones'

  const { publicationTypes } = useLogicPublications()

  const moreItems = publicationTypes?.map((item) => ({
    key: item?.key ?? '',
    optionName: item?.nombre,
    href: `/publicaciones/${item.key}`
  }))

  const items = initialItems.concat(moreItems ?? [])

  return (
    <>
      <Banner
        title={title}
        image={img_banner.src}
        description="Mantente informado de las últimas noticias y novedades de la Escuela de Postgrado de la UNAP"
      />
      <Sidebar items={items}>
        <div className="w-full">{children}</div>
      </Sidebar>
    </>
  )
}

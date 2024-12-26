import estudiantes from '@/assets/images/estudiantes-banner.webp'
import { Banner, Sidebar } from '@/components'
import { ISidebarItem } from '@/components/core/Sidebar/ISidebarItem'

const items: ISidebarItem[] = [
  {
    id: 'presentacion',
    label: 'Presentación',
    title: 'Presentación',
    href: '/sobre-escuela'
  },
  {
    id: 'historia',
    label: 'Reseña histórica',
    title: 'Reseña histórica',
    href: '/sobre-escuela/historia'
  },
  {
    id: 'reglamentos',
    label: 'Reglamentos',
    title: 'Reglamentos',
    href: '/sobre-escuela/reglamentos'
  },
  {
    id: 'autoridades',
    label: 'Autoridades',
    title: 'Autoridades de la EPG - UNAP',
    href: '/sobre-escuela/autoridades'
  },
  {
    id: 'directorio',
    label: 'Directorio por Facultades',
    title:
      'Directores, coordinadores y programas de las unidades de postgrado por facultades',
    href: '/sobre-escuela/directorio-facultades'
  },
  {
    id: 'organigrama',
    label: 'Administrativos',
    title: 'Lista de Administrativos',
    href: '/sobre-escuela/administrativos'
  }
]

export default function LayoutAboutSchool({
  children
}: {
  children: JSX.Element
}) {
  return (
    <>
      <Banner
        title="Sobre la escuela"
        description="Conoce más sobre la escuela de postgrado de la UNAP"
        image={estudiantes.src}
      />
      <main className="container">
        <Sidebar items={items}>{children}</Sidebar>
      </main>
    </>
  )
}

import estudiantes from '@/assets/images/estudiantes-banner.webp'
import { Banner, Sidebar } from '@/components'

const items = [
  {
    key: 'presentacion',
    optionName: 'Presentación',
    sectionTitle: 'Presentación',
    href: '/sobre-escuela'
  },
  {
    key: 'historia',
    optionName: 'Reseña histórica',
    sectionTitle: 'Reseña histórica',
    href: '/sobre-escuela/historia'
  },
  {
    key: 'reglamentos',
    optionName: 'Reglamentos',
    sectionTitle: 'Reglamentos',
    href: '/sobre-escuela/reglamentos'
  },
  {
    key: 'autoridades',
    optionName: 'Autoridades',
    sectionTitle: 'Autoridades de la EPG - UNAP',
    href: '/sobre-escuela/autoridades'
  },
  {
    key: 'organigrama',
    optionName: 'Administrativos',
    sectionTitle: 'Lista de Administrativos',
    href: ''
  },
  {
    key: 'directorio',
    optionName: 'Directorio por Facultades',
    sectionTitle:
      'Directores, coordinadores y programas de las unidades de postgrado por facultades',
    sectionContent: '',
    href: ''
  }
]

export default function LayoutAboutSchool ({
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
      <div>
        <Sidebar items={items}>{children}</Sidebar>
      </div>
    </>
  )
}

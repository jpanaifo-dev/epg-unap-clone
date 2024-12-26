import { Banner, Sidebar } from '@/components'
import estudiantes from '@/assets/images/estudiantes-banner.webp'

const items = [
  {
    key: 'procesos',
    optionName: 'Procesos',
    sectionTitle: 'Procesos',
    href: '/procesos-estudiantes'
  },
  {
    key: 'reglamentos',
    optionName: 'Reglamentos',
    sectionTitle: 'Reglamentos',
    href: '/procesos-estudiantes/reglamentos'
  },
  {
    key: 'sustentaciones',
    optionName: 'Sustentaciones',
    sectionTitle: 'Sustentaciones',
    href: '/procesos-estudiantes/sustentaciones'
  },
  {
    key: 'beneficios',
    optionName: 'Beneficios',
    sectionTitle: 'Servicios para estudiantes',
    href: '/procesos-estudiantes/beneficios'
  },
  {
    key: 'enlaces',
    optionName: 'Enlaces externos',
    sectionTitle: 'Enlaces externos',
    href: '/procesos-estudiantes/enlaces'
  }
]

export default function StudentLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Banner
        title="Estudiantes"
        description="La Universidad Nacional de la Amazonía Peruana (UNAP) ofrece una amplia gama de servicios a sus estudiantes, desde servicios de salud hasta servicios de apoyo académico."
        image={estudiantes.src}
      />
      {/* <Sidebar items={items}>{children}</Sidebar> */}
    </>
  )
}

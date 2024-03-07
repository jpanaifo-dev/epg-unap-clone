'use client'
import { Banner, Sidebar } from '@/components'
import estudiantes from '@/assets/images/estudiantes-banner.webp'
import { AboutSection, BannerCustom, SidebarCustom } from './(sections)'
import { ConvocatoriaProvider } from '@/providers/convocatoriaProvider'

const items = [
  {
    optionName: 'Calendario de admisión',
    sectionTitle: 'Calendario de admisión',
    key: 'admision',
    href: '/admision'
  },
  {
    optionName: 'Procesos para admisión',
    sectionTitle: 'Guía para el proceso de admisión',
    key: 'procesos-admision',
    href: '/admision/procesos-admision'
  },
  {
    optionName: 'Journey del postulante',
    sectionTitle: 'Journey del postulante',
    key: 'journey-postulante',
    href: '/admision/journey-postulante'
  },
  {
    optionName: 'Convocatorias',
    sectionTitle: 'Lista de convocatorias',
    key: 'convocatorias',
    href: '/admision/convocatorias'
  }
]

export default function AdmisionLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ConvocatoriaProvider>
      <Banner
        title="Admisión"
        image={estudiantes.src}
        customSection={<BannerCustom />}
      />
      <Sidebar items={items} customSection={<SidebarCustom />}>
        {children}
      </Sidebar>
      <AboutSection />
    </ConvocatoriaProvider>
  )
}

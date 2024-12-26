'use client'
import { Banner, Sidebar } from '@/components'
import estudiantes from '@/assets/images/estudiantes-banner.webp'
import { AboutSection, BannerCustom, SidebarCustom } from './(sections)'
import { ConvocatoriaProvider } from '@/providers/convocatoriaProvider'
import { ISidebarItem } from '@/components/core/Sidebar/ISidebarItem'

const items: ISidebarItem[] = [
  {
    id: 'admision',
    label: 'Calendario de admisión',
    title: 'Calendario de admisión',
    href: '/admision'
  },
  {
    label: 'Procesos para admisión',
    title: 'Guía para el proceso de admisión',
    id: 'procesos-admision',
    href: '/admision/procesos-admision'
  },
  {
    label: 'Journey del postulante',
    title: 'Journey del postulante',
    id: 'journey-postulante',
    href: '/admision/journey-postulante'
  },
  {
    label: 'Convocatorias',
    title: 'Lista de convocatorias',
    id: 'convocatorias',
    href: '/admision/convocatorias'
  }
]

export default function AdmisionLayout({
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
      <main className="container">
        <Sidebar items={items} customSection={<SidebarCustom />}>
          {children}
        </Sidebar>
      </main>
      <AboutSection />
    </ConvocatoriaProvider>
  )
}

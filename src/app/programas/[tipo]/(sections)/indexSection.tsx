'use client'
import { AboutSection } from './AboutSection'
import { AdmitionSection } from './AdmissionSection'
import { GraduatedProfileSection } from './GraduatedProfileSection'
import { PlanSection } from './PlanSection'
import { Sidebar } from '@/components'

const items = [
  {
    key: '',
    optionName: 'Sobre el programa',
    sectionTitle: 'Información general',
    sectionContent: <AboutSection />
  },
  {
    key: 'plan-estudios',
    optionName: 'Plan de estudios',
    sectionTitle: 'Plan de estudios',
    sectionContent: <PlanSection />
  },
  {
    key: 'perfil',
    optionName: 'Perfil',
    sectionTitle: 'Perfil del egresado',
    sectionContent: <GraduatedProfileSection />
  },
  {
    key: 'admision',
    optionName: 'Admisión',
    sectionTitle: 'Admisión',
    sectionContent: <AdmitionSection />
  }
]

export const IndexSection = () => {
  return (
    <>
      <Sidebar items={items} isState={true} />
    </>
  )
}

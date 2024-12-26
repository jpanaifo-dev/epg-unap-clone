import { Sidebar } from '@/components/core'
import { ISidebarItem } from '@/components/core/Sidebar/ISidebarItem'
import { IPlanEstudioListApi, IProgramList } from '@/types'
import { AboutSection } from './AboutSection'
import { GraduatedProfileSection } from './GraduatedProfileSection'
import { PlanSection } from './PlanSection'

interface IProps {
  program: IProgramList
  planEstudio: IPlanEstudioListApi[]
}

export const DetailsLayout = (props: IProps) => {
  const { program, planEstudio } = props

  const data: ISidebarItem[] = [
    {
      id: 'informacion-general',
      title: 'Información General',
      label: 'Información General',
      sectionContent: <AboutSection program={program} />
    },
    {
      id: 'perfil del estudiante',
      label: 'Perfil del estudiante',
      title: 'Perfil del estudiante',
      sectionContent: <GraduatedProfileSection program={program} />
    },
    {
      id: 'plan-de-estudio',
      label: 'Plan de estudio',
      title: 'Planes de estudio',
      sectionContent: <PlanSection data={planEstudio} />
    }
  ]

  return (
    <main className="container">
      <Sidebar items={data} />
    </main>
  )
}

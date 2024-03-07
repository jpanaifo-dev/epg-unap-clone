import { MainSection } from '@/components'
import { ServicesSection } from './sections/servicesSection'
import { MoreServicesSection } from './sections/moreServices'

export default function StudentBenefitsPage () {
  return (
    <>
      <MainSection>
        <div className="space-y-8">
          <h2 className="font-bold text-2xl lg:text-3xl mb-3">
            Servicios para los estudiantes
          </h2>
          <ServicesSection />
          <h2 className="font-bold text-2xl  mb-3">Otros recursos</h2>
          <MoreServicesSection />
        </div>
      </MainSection>
    </>
  )
}

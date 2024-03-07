import { MainSection } from '@/components'
import { DegreeSection } from './sections/degree-section'
import { EnrollmentSection } from './sections/enrollment-section'
import { LinksSection } from './sections/links-section'
import { RulesSection } from './sections/rules-section'

export default function StudentProcesPage () {
  return (
      <MainSection>
        <div className="space-y-6">
          <EnrollmentSection />
          <RulesSection />
          <DegreeSection />
          <DegreeSection />
          <LinksSection />
        </div>
      </MainSection>
  )
}

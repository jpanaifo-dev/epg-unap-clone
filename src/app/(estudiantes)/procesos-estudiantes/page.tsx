import RutasPage from './rutas/page'
// import { DegreeSection } from './sections/degree-section'
// import { EnrollmentSection } from './sections/enrollment-section'
// import { LinksSection } from './sections/links-section'
// import { RulesSection } from './sections/rules-section'

export default function StudentProcesPage() {
  return (
    <>
      <div className="space-y-6">
        {/* <EnrollmentSection /> */}
        <RutasPage />
        {/* <RulesSection />
        <DegreeSection />
        <LinksSection /> */}
      </div>
    </>
  )
}

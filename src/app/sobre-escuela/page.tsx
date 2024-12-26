import { ContactUsSection, InfoEscuelaSection } from '@/components'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const meta = {
    title: `EPG-UNAP | SOBRE LA ESCUELA`,
    description:
      'Conoce más sobre la Escuela de Postgrado de la Universidad Nacional de la Amazonía Peruana.'
  }

  return meta
}

export default function EscuelaPage() {
  return (
    <>
      <InfoEscuelaSection />
      <ContactUsSection />
    </>
  )
}

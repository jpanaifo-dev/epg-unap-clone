import { HistoriaEscuelaSection } from '@/components'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const meta = {
    title: `EPG-UNAP | HISTORIA`,
    description:
      'Conoce la historia de la Escuela de Postgrado de la Universidad Nacional de la Amazonía Peruana.'
  }

  return meta
}

export default function Page() {
  return <HistoriaEscuelaSection />
}

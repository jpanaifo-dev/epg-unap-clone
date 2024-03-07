import { Banner } from '@/components'
import estudiantes from '@/assets/images/estudiantes-banner.webp'

export default function TeacherLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Banner
        title="Docentes"
        description="La Universidad Nacional de la Amazonía Peruana (UNAP) ofrece una amplia gama de servicios a sus estudiantes, desde servicios de salud hasta servicios de apoyo académico."
        image={estudiantes.src}
      />
      {children}
    </>
  )
}

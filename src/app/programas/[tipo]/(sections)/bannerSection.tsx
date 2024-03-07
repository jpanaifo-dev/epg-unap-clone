import { ProgramBanner } from '@/components'
import img_test from '@/assets/images/banner_publicaciones.webp'
import { usePrograms } from '@/hooks/usePrograms'
import { useEffect } from 'react'

export const BannerSection = ({ id }: { id: number }) => {
  const { getDataProgramById, program } = usePrograms()

  useEffect(() => {
    getDataProgramById(id)
  }, [id])

  return (
    <ProgramBanner
      infoLink="#"
      image={img_test.src}
      inscriptionLink="#"
      programName={program?.nombre ?? ''}
      modality={program?.modalidad?.nombre ?? ''}
      programType={program?.tipo_programa?.nombre ?? ''}
      startDate=""
      enConvocatoria={program?.en_convocatoria ?? false}
    />
  )
}

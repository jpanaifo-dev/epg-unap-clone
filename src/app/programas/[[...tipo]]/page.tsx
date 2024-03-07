'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Banner } from '@/components'
import estudiantes from '@/assets/images/estudiantes-banner.webp'
import { ListSection } from '../(sections)/listSection'
import { AsideSection } from '../(sections)/asideSection'
import { ModalFilters } from '../(sections)/modalFilters'
import { SearchSection } from '../(sections)/searchSection'
import { useLogicPrograms } from '@/providers/programsProvider'
import { useProgramTypes } from '@/hooks/useProgramType'
import { type IProgramType } from '@/types'

const findPerKey = ({ array, key }: { array: IProgramType[], key: string }) => {
  if (key === 'formacion-continua') {
    return {
      nombre: 'Formación continua',
      is_formacion_continua: true,
      key: 'formacion-continua'
    }
  }

  const result = array?.find((item) => item.key === key)
  return result ?? null
}

export default function Page ({ params }: { params: { tipo: string } }) {
  const router = useRouter()
  const { setTypeProgram, setIsFContinue } = useLogicPrograms()
  const { pgTypesNotContinue, getFCProgramTypes, loading } = useProgramTypes()

  useEffect(() => {
    getFCProgramTypes()
  }, [])

  const key_params =
    params?.tipo?.toString() === 'formacion-continua'
      ? 'formacion-continua'
      : params?.tipo?.toString()

  const typeProgram = findPerKey({
    array: pgTypesNotContinue,
    key: key_params ?? ''
  })

  const getTypeProgram = async () => {
    await typeProgram
    if (typeProgram !== null && loading === false) {
      if (typeProgram?.is_formacion_continua === true) {
        setTypeProgram('')
        setIsFContinue('1')
      } else {
        setIsFContinue('')
        setTypeProgram(key_params || '')
      }
    }
    if (
      typeProgram === null &&
      loading === false &&
      params?.tipo !== undefined
    ) {
      router.push('/programas')
    }
  }

  useEffect(() => {
    getTypeProgram()
  }, [pgTypesNotContinue, params])

  // const title = type_program.replace(/-/g, ' ') || 'Programas en convocatoria'
  const title = typeProgram?.nombre ?? 'Nuestros programas'
  const isFcontinue = typeProgram?.is_formacion_continua ?? false

  return (
    <>
      <Banner title={title} description="" image={estudiantes.src} />
      <div className="sticky top-16 max-h-screen sm:top-24 z-30 ">
        <SearchSection />
      </div>
      <div className="flex w-full pb-6  lg:pb-8 gap-6  bg-white container max-w-7xl">
        <AsideSection isFContinue={isFcontinue} />
        <ModalFilters isFContinue={isFcontinue} />
        <ListSection />
      </div>
    </>
  )
}

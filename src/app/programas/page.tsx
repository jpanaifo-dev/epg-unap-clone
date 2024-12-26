import { Banner } from '@/components'
import { Metadata } from 'next'
import { fetchProgramsList } from '@/api'
import { IProgramList, IResApi } from '@/types'
import { ProgramsList } from '@/components'

interface IProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}
export async function generateMetadata(): Promise<Metadata> {
  const meta = {
    title: `PROGRAMAS EPG-UNAP | BÚSQUEDAD`,
    description:
      'Conoce todos los programas que tenemos para ti y elige el que más se adapte a tus necesidades.'
  }

  return meta
}

export default async function Page(props: IProps) {
  const { searchParams } = props
  const { search, page, facultad, continua, order } = searchParams as {
    search: string
    page: string
    facultad: string
    order: string
    continua: string
  }

  const dataInitial: IResApi<IProgramList> = {
    count: 0,
    next: null,
    previous: null,
    results: []
  } as IResApi<IProgramList>

  let dataPrograms = dataInitial
  //   const isContinua = tipo === 'formacion-continua'
  //   const tipoPrograma = !isContinua ? tipo.toUpperCase() : undefined
  // const tipoProgramaContinua = continua ? continua.toUpperCase() : undefined

  try {
    const response = await fetchProgramsList(
      {
        nombre__icontains: search,
        // tipo__nombre: tipoPrograma || tipoProgramaContinua,
        page: page ? parseInt(page) : undefined,
        // tipo__is_continua: isContinua ? true : undefined,
        facultad: facultad ? parseInt(facultad) : undefined,
        ordering: order === 'desc' ? '-nombre' : 'nombre'
      },
      'list'
    )

    if (response.ok) {
      dataPrograms = await response.json()
    }
  } catch (error) {
    console.error('Error fetching data  ', error)
  }

  return (
    <main>
      <Banner
        title={`PROGRAMAS EPG-UNAP | BÚSQUEDAD`}
        description="Conoce todos los programas que tenemos para ti y elige el que más se adapte a tus necesidades."
        image="/images/banner-programs.webp"
      />
      <ProgramsList data={dataPrograms} />
    </main>
  )
}

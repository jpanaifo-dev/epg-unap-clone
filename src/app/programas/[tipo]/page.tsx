import { Banner } from '@/components'
import { Metadata } from 'next'
import { fetchProgramsList } from '@/api'
import { IProgramList, IResApi } from '@/types'
import { ProgramsList } from '@/components'

interface IProps {
  params: {
    tipo: string
  }
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}
export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const tipo = params.tipo

  const meta = {
    title: `PROGRAMAS EPG-UNAP | ${tipo.toUpperCase().replace(/-/g, ' ')}`,
    description:
      'Conoce todos los programas que tenemos para ti y elige el que más se adapte a tus necesidades.'
  }

  return meta
}

export default async function Page(props: IProps) {
  const { tipo } = props.params
  const { searchParams } = props
  const { search, page, facultad, continua, order } = searchParams as {
    search: string
    page: string
    facultad: string
    order: string
    continua: string
  }

  const title = tipo.replace(/-/g, ' ')

  const dataInitial: IResApi<IProgramList> = {
    count: 0,
    next: null,
    previous: null,
    results: []
  } as IResApi<IProgramList>

  let dataPrograms = dataInitial
  const isContinua = tipo === 'formacion-continua'
  const tipoPrograma = !isContinua ? tipo.toUpperCase() : undefined
  const tipoProgramaContinua = continua ? continua.toUpperCase() : undefined

  try {
    const response = await fetchProgramsList(
      {
        nombre__icontains: search,
        tipo__nombre: tipoPrograma || tipoProgramaContinua,
        page: page ? parseInt(page) : undefined,
        tipo__is_continua: isContinua ? true : undefined,
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
        title={title}
        description="Conoce todos los programas que tenemos para ti y elige el que más se adapte a tus necesidades."
        image="/images/banner-programs.webp"
      />
      <ProgramsList data={dataPrograms} />
    </main>
  )
}

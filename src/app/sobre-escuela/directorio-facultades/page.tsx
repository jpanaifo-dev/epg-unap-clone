import { Metadata } from 'next'
import { fetchFacultiesApi, fetchDirectory } from '@/api'
import { IFacultad, IResApi, IDirectoryList } from '@/types'
import { DirectorioList } from '@/components'

export async function generateMetadata(): Promise<Metadata> {
  const meta = {
    title: `EPG-UNAP | DIRECTORIO DE FACULTADES`,
    description:
      'Conoce el directorio de las facultades de la Escuela de Postgrado de la Universidad Nacional de la Amazonía Peruana.'
  }

  return meta
}

interface IProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

export default async function Page(props: IProps) {
  const { searchParams } = props
  const { faculty } = searchParams as { faculty: string }

  let facultades: IFacultad[] | null = null
  let directorio: IResApi<IDirectoryList> | null = null

  try {
    const res = await fetchFacultiesApi({})

    if (res.ok) {
      facultades = (await res.json()) as IFacultad[]
    }
  } catch (error) {
    console.error('Error fetching faculties', error)
  }

  if (facultades && facultades.length > 0) {
    try {
      const res = await fetchDirectory({
        is_active: true,
        faculty: faculty || facultades[0].id.toString()
      })

      if (res.ok) {
        directorio = (await res.json()) as IResApi<IDirectoryList>
      }
    } catch (error) {
      console.error('Error fetching directory', error)
    }
  }

  return <DirectorioList data={facultades} directorio={directorio} />
}

import { Metadata } from 'next'
import { fetchDirectory } from '@/api'
import { IResApi, IDirectoryList } from '@/types'
import { AdministrativosList, StaffDetails } from '@/components'

export async function generateMetadata(): Promise<Metadata> {
  const meta = {
    title: `EPG-UNAP | ADMINISTRATIVOS`,
    description:
      'Conoce a los administrativos de la Escuela de Postgrado de la Universidad Nacional de la Amazonía Peruana.'
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
  const { search, detalle } = searchParams as {
    search: string
    detalle: string
  }

  let directorio: IResApi<IDirectoryList> | null = null

  let perfil: IDirectoryList | null = null

  try {
    const res = await fetchDirectory({
      person__apellido_paterno__icontains: search
    })

    if (res.ok) {
      directorio = (await res.json()) as IResApi<IDirectoryList>
    }
  } catch (error) {
    console.error('Error fetching faculties', error)
  }

  try {
    const res = await fetchDirectory({
      id: detalle
    })

    if (res.ok) {
      const data = (await res.json()) as IResApi<IDirectoryList>
      perfil = data.results[0]
    }
  } catch (error) {
    console.error('Error fetching faculties', error)
  }

  return (
    <main>
      <AdministrativosList data={directorio} />
      {detalle && <StaffDetails data={perfil} />}
    </main>
  )
}

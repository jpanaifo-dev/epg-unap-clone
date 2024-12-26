import { Metadata } from 'next'
import { AutoridadesList } from '@/components'
import { fetchDirectory } from '@/api'
import { IResApi, IDirectoryList } from '@/types'

export async function generateMetadata(): Promise<Metadata> {
  const meta = {
    title: `EPG-UNAP | AUTORIDADES`,
    description:
      'Conoce a las autoridades de la Escuela de Postgrado de la Universidad Nacional de la Amazonía Peruana.'
  }

  return meta
}

export default async function Page() {
  let autoridades: IResApi<IDirectoryList> | null = null

  try {
    const res = await fetchDirectory({
      is_authority: true,
      is_active: true
    })

    if (res.ok) {
      autoridades = (await res.json()) as IResApi<IDirectoryList>
    }
  } catch (error) {
    console.error('Error fetching authorities', error)
  }

  return <AutoridadesList data={autoridades} />
}

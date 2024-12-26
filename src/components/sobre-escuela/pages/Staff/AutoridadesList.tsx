import { CardAuthority } from '@/components'
import { IDirectoryList, IResApi } from '@/types'

interface IProps {
  data: IResApi<IDirectoryList> | null
}

export const AutoridadesList = (props: IProps) => {
  const { data } = props

  return (
    <main className="flex flex-col gap-6">
      {data &&
        data.results.map((item) => (
          <CardAuthority
            key={item.id}
            fullName={item.person.full_name}
            role={item.charge.nombre}
            image={item.person.foto || undefined}
          />
        ))}
    </main>
  )
}

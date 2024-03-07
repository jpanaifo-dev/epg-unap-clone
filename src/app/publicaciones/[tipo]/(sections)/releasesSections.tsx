import { type IPublicationForList } from '@/types'
import { CardPublication } from '@/components'
import { Divider } from '@nextui-org/react'

interface RealeasesSectionProps {
  comunicados: IPublicationForList[] | null | undefined
}

export const RealeasesSection = ({ comunicados }: RealeasesSectionProps) => {
  return (
    <div className="w-full lg:p-5">
      <h1 className="text-lg font-bold text-zinc-600">Avisos importantes</h1>
      <Divider />
      <div className=" lg:block mt-4 space-y-4">
        {comunicados?.slice(0, 3).map((comunicado, index) => (
          <div key={index}>
            <CardPublication publication={comunicado} type="small" />
          </div>
        ))}
      </div>
    </div>
  )
}

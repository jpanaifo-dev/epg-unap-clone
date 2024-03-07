import img_test from '@/assets/images/students/carnet.webp'
import { ContactBar } from '@/components'
import { type IPublication } from '@/types'

interface DetailsSectionProps {
  publication: IPublication | null | undefined
}

export const DetailsSection = ({ publication }: DetailsSectionProps) => {
  return (
    <div className="h-fit">
      <section className="pb-6">
        <img
          src={img_test.src}
          alt="img_publicación"
          className="w-full h-96 object-cover my-6"
        />
        <h1 className="text-2xl sm:text-3xl font-bold">
          {publication?.titulo}
        </h1>
        <h1 className="text-xl mb-4">{publication?.fecha}</h1>
        <p>{publication?.descripcion}</p>
      </section>
      <section className="s">
        <ContactBar label="Compartir" />
      </section>
    </div>
  )
}

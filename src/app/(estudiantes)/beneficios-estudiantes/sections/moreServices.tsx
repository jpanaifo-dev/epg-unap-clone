import { CardSimple } from '@/components'
import repository from '@/assets/images/students/repository.webp'

const data = [
  {
    name: 'REPOSITORIO INSTITUCIONAL - EPG',
    href: 'https://repositorio.unapiquitos.edu.pe/handle/20.500.12737/2604',
    image: repository
  }
]

export const MoreServicesSection = () => {
  return (
    <div className="py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.map((item, index) => (
        <div key={index}>
          <CardSimple
            image={item.image.src}
            title={item.name}
            urlLink={item?.href}
            isBlank={true}
            height="h-52"
          />
        </div>
      ))}
    </div>
  )
}

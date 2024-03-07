import { Button, Image, Link } from '@nextui-org/react'
import { MainSection } from '@/components'
import { IconDiscountCheckFilled, IconCertificate } from '@tabler/icons-react'

const itemsIndicators = [
  'Ofrece autonomía y destaca por su excelencia académica en diversos programas de posgrado.',
  'Facultad calificada y recursos de investigación avanzados para una educación de alta calidad',
  'Contribuye al progreso regional, brindando oportunidades de crecimiento profesional y formación especializada',
  'Proporciona a los estudiantes oportunidades significativas para avanzar en sus carreras y desarrollo personal.'
]

export default function InfoSection () {
  return (
    <MainSection>
      <h3 className="text-lg font-bold mb-4 block md:hidden">
        Preparándote para el futuro: Bienvenidos a la Escuela de Postgrado.
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 sm:gap-6">
        <div className="w-full md:order-1 space-y-4 sm:h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="grid gap-4 items-center justify-end">
              <Image
                className="hidden sm:block w-full rounded-md sm:h-96 lg:h-80 xl:h-72 xl:w-60 object-cover"
                src="https://img.freepik.com/foto-gratis/estudiante-feliz-sombrero-graduacion-diploma-gris_231208-12979.jpg?w=996&t=st=1696896200~exp=1696896800~hmac=f254c454faf0b5df9169331807ed9679a83b21aef21cf989f971f35b04393ba3"
                alt="Graduado de la universidad"
                removeWrapper={true}
              />
            </div>
            <div className="grid gap-4">
              <div>
                <Image
                  className="w-full rounded-md sm:h-96 lg:h-80 xl:h-64 xl:w-60 object-cover"
                  src="https://img.freepik.com/foto-gratis/estudiante-feliz-sombrero-graduacion-diploma-gris_231208-12979.jpg?w=996&t=st=1696896200~exp=1696896800~hmac=f254c454faf0b5df9169331807ed9679a83b21aef21cf989f971f35b04393ba3"
                  alt="Graduado de la universidad"
                  removeWrapper={true}
                />
              </div>
              <div>
                <Image
                  className="w-full rounded-md sm:h-96 lg:h-80 xl:h-64 xl:w-60 object-cover"
                  src="https://img.freepik.com/foto-gratis/estudiante-feliz-sombrero-graduacion-diploma-gris_231208-12979.jpg?w=996&t=st=1696896200~exp=1696896800~hmac=f254c454faf0b5df9169331807ed9679a83b21aef21cf989f971f35b04393ba3"
                  alt="Graduado de la universidad"
                  removeWrapper={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-7">
          <h3 className="text-3xl font-bold hidden md:block">
            Preparándote para el futuro: Bienvenidos a la Escuela de
            Postgrado.
          </h3>
          <p className="line-clamp-[7] ">
            La EPG-UNAP, con autonomía y excelencia, ofrece maestrías y
            doctorados, destacando facultad calificada, investigación avanzada y
            contribución al desarrollo regional. ¡Explora los programas de
            posgrado de la UNAP y descubre las oportunidades que te esperan!
          </p>
          <div className="relative">
            <div className="absolute top-0 left-4 sm:left-6 lg:left-8">
              <div className="bg-primary-800 text-white p-3 rounded-2xl w-fit">
                <IconCertificate size={28} />
              </div>
            </div>
            <div className="py-10 mt-4 px-4 sm:px-6 lg:px-8 lg:mt-5 bg-yellow-50/90 rounded-lg ">
              <h4 className="font-bold mb-2">La Escuela de Postgrado:</h4>
              <ul className="list-inside space-y-2">
                {itemsIndicators?.map((item, index) => (
                  <li key={index}>
                    <IconDiscountCheckFilled className="inline-block mr-2 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MainSection>
  )
}

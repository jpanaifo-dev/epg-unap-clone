'use client'
import { Image } from '@nextui-org/react'
import { IconDiscountCheckFilled, IconCertificate } from '@tabler/icons-react'
import { motion } from 'framer-motion'

const itemsIndicators = [
  'Ofrece autonomía y destaca por su excelencia académica en diversos programas de posgrado.',
  'Facultad calificada y recursos de investigación avanzados para una educación de alta calidad',
  'Contribuye al progreso regional, brindando oportunidades de crecimiento profesional y formación especializada',
  'Proporciona a los estudiantes oportunidades significativas para avanzar en sus carreras y desarrollo personal.'
]

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { y: 200, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export const InfoSection = () => {
  return (
    <main className="container section-home">
      <motion.h3
        className="text-xl font-bold mb-4 block md:hidden"
        initial={{ opacity: 0, x: -2000 }}
        viewport={{
          once: true
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.4 // Animation duration
          }
        }}
      >
        Preparándote para el futuro: Bienvenidos a la Escuela de Postgrado -
        UNAP
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 sm:gap-6">
        <div className="w-full md:order-1 space-y-4 sm:h-full">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={container}
          >
            <motion.div
              className="grid gap-4 items-center justify-end"
              variants={item}
            >
              <Image
                className="hidden sm:block w-full rounded-md sm:h-96 lg:h-80 xl:h-72 xl:w-60 object-cover"
                src="https://img.freepik.com/foto-gratis/estudiante-feliz-sombrero-graduacion-diploma-gris_231208-12979.jpg?w=996&t=st=1696896200~exp=1696896800~hmac=f254c454faf0b5df9169331807ed9679a83b21aef21cf989f971f35b04393ba3"
                alt="Graduado de la universidad"
                removeWrapper={true}
              />
            </motion.div>
            <div className="grid gap-4">
              <motion.div variants={item}>
                <Image
                  className="w-full rounded-md sm:h-96 lg:h-80 xl:h-64 xl:w-60 object-cover"
                  src="https://img.freepik.com/foto-gratis/estudiante-feliz-sombrero-graduacion-diploma-gris_231208-12979.jpg?w=996&t=st=1696896200~exp=1696896800~hmac=f254c454faf0b5df9169331807ed9679a83b21aef21cf989f971f35b04393ba3"
                  alt="Graduado de la universidad"
                  removeWrapper={true}
                />
              </motion.div>
              <motion.div variants={item}>
                <Image
                  className="w-full rounded-md sm:h-96 lg:h-80 xl:h-64 xl:w-60 object-cover"
                  src="https://img.freepik.com/foto-gratis/estudiante-feliz-sombrero-graduacion-diploma-gris_231208-12979.jpg?w=996&t=st=1696896200~exp=1696896800~hmac=f254c454faf0b5df9169331807ed9679a83b21aef21cf989f971f35b04393ba3"
                  alt="Graduado de la universidad"
                  removeWrapper={true}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col space-y-7">
          <motion.h3
            className="text-3xl font-bold hidden md:block"
            initial={{ opacity: 0, x: -200 }}
            viewport={{
              once: true
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.7 // Animation duration
              }
            }}
          >
            Preparándote para el futuro: Bienvenidos a la Escuela de Postgrado.
          </motion.h3>
          <motion.p
            className="line-clamp-[7] "
            initial={{ opacity: 0, x: -200 }}
            viewport={{
              once: true
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.7 // Animation duration
              }
            }}
          >
            La EPG-UNAP, con autonomía y excelencia, ofrece maestrías y
            doctorados, destacando facultad calificada, investigación avanzada y
            contribución al desarrollo regional. ¡Explora los programas de
            posgrado de la UNAP y descubre las oportunidades que te esperan!
          </motion.p>
          <motion.main
            className="relative"
            initial={{ opacity: 0, x: -200 }}
            viewport={{
              once: true
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.7 // Animation duration
              }
            }}
          >
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
          </motion.main>
        </div>
      </div>
    </main>
  )
}

/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useState } from 'react'
import { type IProgramType } from '@/types'
import { CardSimple } from '@/components'
import { capitalize } from '@/utils'
import maestriasImg from '@/assets/images/tiposProgramas/maestria.webp'
import doctoradosImg from '@/assets/images/tiposProgramas/doctorado.webp'
import fcontinuaImg from '@/assets/images/tiposProgramas/fcontinua.webp'

import { useProgramTypes } from '@/hooks'

const formacionContinua: IProgramType = {
  id: 3,
  nombre: 'Formacion-Continua',
  is_continua: true,
  color: '#DBBB46'
}

const imgPrograms = [
  { id: 1, img: maestriasImg },
  { id: 2, img: doctoradosImg },
  { id: 3, img: fcontinuaImg }
]

export const ProgramSection = () => {
  const [programTypesList, setProgramTypesList] = useState<IProgramType[]>([])
  const { getProgramTypes, programTypes } = useProgramTypes()

  useEffect(() => {
    getProgramTypes()
  }, [])

  useEffect(() => {
    if (programTypes?.length > 0) {
      setProgramTypesList([formacionContinua, ...programTypes])
    }
  }, [programTypes])

  return (
    <main className="container section-home">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="order-2 sm:order-1">
          <div className="grid grid-cols-1 gap-3 sm:gap-4 xl:gap-6 lg:mx-16">
            {programTypesList?.map((item, index: number) => (
              <div
                key={index}
                className={`sm:flex w-full ${index % 2 !== 0 && 'justify-end'}`}
              >
                <div className="sm:w-96">
                  <CardSimple
                    image={imgPrograms[index]?.img.src ?? ''}
                    title={`${capitalize(item?.nombre)}${
                      index !== 0 ? 's' : ''
                    }`}
                    urlLink={`/programas/${item.nombre.toLowerCase()}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 sm:order-2 flex items-center h-full">
          <div>
            <h3 className="text-lg  font-bold sm:text-xl xl:text-2xl  mb-6">
              ¡Lleva tu potencial al máximo! Con nuestros programas de POSTGRADO
            </h3>
            <p>
              Te invitamos a explorar nuevas fronteras de liderazgo e
              innovación. En este viaje educativo, encontrarás el espacio
              perfecto para convertir tus ideas en realidades tangibles,
              impulsando tu crecimiento profesional y llevando tus habilidades
              al siguiente nivel.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

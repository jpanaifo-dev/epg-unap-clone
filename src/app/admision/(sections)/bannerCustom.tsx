'use client'
// import { useEffect, useState } from 'react'
import { Button, Link } from '@nextui-org/react'
import { IconDownload } from '@tabler/icons-react'
import { useLogicConvocatorias } from '@/providers/convocatoriaProvider'

export const BannerCustom = () => {
  const { convocatoriasAbiertas } = useLogicConvocatorias()

  return (
    <div className="space-y-4">
      <div>
        {convocatoriasAbiertas?.length > 0 && (
          <>
            {convocatoriasAbiertas[0]?.is_open ? (
              <div className="flex flex-col gap-2">
                <div className="bg-black/60">
                  <h3 className="text-white font-medium">
                    Convocatoria 2021-II
                  </h3>
                </div>
                <p className="text-white">
                  La convocatoria para el proceso de admisión 2021-II se
                  encuentra abierta. El examen de admisión se llevará a cabo el
                  día 12 de junio del 2021.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <div className="bg-black/60 w-fit p-1 pl-2 pr-4">
                  <h3 className="text-white font-medium text-lg">
                    Convocatoria 2021-II
                  </h3>
                </div>
                <p className="text-white">
                  La convocatoria para el proceso de admisión 2021-I se
                  encuentra cerrada. El examen de admisión se llevó a cabo el
                  día 12 de diciembre del 2020.
                </p>
              </div>
            )}
          </>
        )}
      </div>
      <div className="flex flex-col sm:flex-row max-w-[10rem] sm:max-w-none  gap-2 lg:gap-4">
        <div>
          <Button color="primary" as={Link} showAnchorIcon={true}>
            Más información
          </Button>
        </div>
        <div>
          <Button
            variant="bordered"
            endContent={<IconDownload size={16} />}
            className="text-white"
          >
            Descargar resultados
          </Button>
        </div>
      </div>
    </div>
  )
}

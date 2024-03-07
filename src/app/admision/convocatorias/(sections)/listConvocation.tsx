'use client'
import { useEffect } from 'react'
import { useConvocatorias } from '@/hooks/useConvocatorias'
import { Accordion, AccordionItem, Input, Link } from '@nextui-org/react'
export const ListConvocation = () => {
  const { fetchConvocatorias, convocatorias } = useConvocatorias()
  useEffect(() => {
    fetchConvocatorias()
  }, [])
  return (
    <div>
      <div className="py-4">
        <Input placeholder="Buscar convocatoria" variant="bordered" size="sm" />
      </div>
      <div>
        <Accordion variant="light">
          {convocatorias?.map((convocatoria, index) => (
            <AccordionItem
              key={index}
              aria-label={`accordion-${index}`}
              title={`Convocatoria - ${convocatoria.ano_convocatoria}`}
              subtitle={
                <>
                  <Link>Descargar resultados</Link>
                </>
              }
            >
              <div className="space-y-4">
                <h1 className="text-zinc-600 font-medium">
                  Programas relacionados
                </h1>
                <div className="space-y-2">
                  {convocatoria?.programas?.map((programa) => (
                    <div key={programa.id}>
                      <p className="capitalize">
                        {programa?.tipo_programa?.nombre}
                      </p>
                      <h3>{programa.nombre}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

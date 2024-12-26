'use client'
import { Suspense } from 'react'
import { CardStaff } from '@/components'
import { IDirectoryList, IFacultad, IResApi } from '@/types'
import { Accordion, AccordionItem } from '@nextui-org/react'
import { useFilterFromUrl } from '@/hooks'

interface IProps {
  data: IFacultad[] | null
  directorio: IResApi<IDirectoryList> | null
}

export const DirectorioList = (props: IProps) => {
  const { data, directorio } = props
  const { getParams, updateFilter } = useFilterFromUrl()

  const faculty = getParams(
    'faculty',
    `${data && data.length > 0 ? data[0].id.toString() : ''}`
  )

  const onSelectionChange = (keys: 'all' | Set<React.Key>) => {
    const value =
      keys !== undefined && keys !== 'all' ? keys.values().next().value : ''
    updateFilter('faculty', value)
  }

  return (
    <section>
      <main>
        <Suspense fallback={<div>Cargando...</div>}>
          {data && data.length > 0 && (
            <Accordion
              defaultExpandedKeys={[faculty]}
              selectedKeys={[faculty]}
              onSelectionChange={onSelectionChange}
              disallowEmptySelection
            >
              {data.map((item) => (
                <AccordionItem
                  key={item.id.toString()}
                  aria-label={item.nombre}
                  title={item.nombre}
                >
                  <section className="grid grid-cols-3">
                    {directorio &&
                      directorio.results.length > 0 &&
                      directorio.results.map((dir) => (
                        <CardStaff
                          key={dir.id}
                          id={item.id.toString()}
                          fullName={dir.person.full_name}
                          email={dir.person.correo}
                          role={
                            dir?.program
                              ? `Coordinador(a) del programa:  ${dir?.program?.nombre}`
                              : 'Director(a) de unidad'
                          }
                          disabledImage
                        />
                      ))}
                  </section>
                  <section>
                    {!directorio ||
                      (directorio && directorio?.results?.length === 0 && (
                        <main className="py-12 flex flex-col gap-1 justify-center items-center">
                          <h2 className="font-bold">Sin resultados</h2>
                          <p className="text-sm text-grayEpg-500">
                            No existen integrantes en esta unidad | No se ha
                            encontrado información
                          </p>
                        </main>
                      ))}
                  </section>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </Suspense>
      </main>
    </section>
  )
}

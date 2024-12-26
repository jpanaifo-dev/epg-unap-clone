'use client'
import { Suspense } from 'react'
import { CardGalleryProgram, CardListProgram } from '@/components'
import { IProgramList, IResApi } from '@/types'
import { useFilterFromUrl } from '@/hooks'
import { FooterPagination } from './FooterPagination'
import { ProgramFilter } from './ProgramFilter'
import Image from 'next/image'
interface IProps {
  data: IResApi<IProgramList>
}

export const ProgramsList = (props: IProps) => {
  const { data } = props
  const { getParams, updateFilter } = useFilterFromUrl()

  const page = Number(getParams('page', '1'))
  const view = getParams('view', 'grid')

  return (
    <article className="section flex flex-col gap-6">
      <ProgramFilter />

      <section className="container flex flex-col gap-6">
        <Suspense fallback={<div>Cargando...</div>}>
          {data?.results?.length > 0 && (
            <>
              {view === 'grid' && (
                <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
                  {data &&
                    data.results.length > 0 &&
                    data?.results?.map((program: IProgramList) => (
                      <CardGalleryProgram key={program.id} data={program} />
                    ))}
                </section>
              )}
              {view === 'list' && (
                <section className="flex flex-col gap-6">
                  {data &&
                    data.results.length > 0 &&
                    data?.results?.map((program: IProgramList) => (
                      <CardListProgram key={program.id} data={program} />
                    ))}
                </section>
              )}
            </>
          )}
          {data?.results?.length === 0 && (
            <div className="flex flex-col gap-4 items-center justify-center p-8 py-16">
              <Image
                src="/svg/not-programs.svg"
                width={300}
                height={300}
                alt="No se encontraron programas"
              />
              <p className="font-medium">No se encontraron resultados</p>
            </div>
          )}
        </Suspense>
        {data?.results?.length > 0 && (
          <FooterPagination
            data={data}
            page={page}
            onChangePage={(page: number) =>
              updateFilter('page', page.toString())
            }
          />
        )}
      </section>
    </article>
  )
}

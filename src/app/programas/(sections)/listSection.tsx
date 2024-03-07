import { CardGalleryProgram, CardListProgram } from '@/components'
import { useLogicPrograms } from '@/providers/programsProvider'
import { Pagination } from '@nextui-org/react'
import { useFilterFromUrl } from '@/hooks/useFilterFromUrl'

export const ListSection = () => {
  const { getParams } = useFilterFromUrl()
  const { programsList, setFilters, filters, count } = useLogicPrograms()
  const typeList = getParams('type_list', '')
  const textSearch = getParams('search', '')

  return (
    <div className="w-full py-4">
      {textSearch !== '' && (
        <div className="pb-6">
          <h2 className="">
            Resultados encontrados de:{' '}
            <span className="font-bold">{textSearch}</span>
          </h2>
        </div>
      )}
      {programsList?.length > 0 ? (
        <>
          {typeList === '' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4">
              {programsList?.map((program, index) => (
                <CardGalleryProgram
                  key={index}
                  title={program.title}
                  modality={program.modality}
                  programType={program.programType}
                  image={program.image}
                  faculty={program.faculty}
                  en_convocatoria={program.en_convocatoria}
                  link={`${program.programType.key}/${program.id}`}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {programsList?.map((program, index) => (
                <CardListProgram
                  key={index}
                  title={program.title}
                  modality={program.modality}
                  programType={program.programType}
                  image={program.image}
                  faculty={program.faculty}
                  en_convocatoria={program.en_convocatoria}
                  link={`${program.programType.key}/${program.id}`}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <div>
          <h1>No hay datos</h1>
        </div>
      )}

      <div className="flex items-center justify-center pt-8">
        <Pagination
          initialPage={parseInt(filters.currentPage)}
          total={count}
          showControls
          page={parseInt(filters.currentPage)}
          onChange={(page) => {
            setFilters('currentPage', page.toString())
          }}
        />
      </div>
    </div>
  )
}

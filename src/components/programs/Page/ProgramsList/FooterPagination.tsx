import { IProgramList, IResApi } from '@/types'
import { Pagination } from '@nextui-org/react'

interface IProps {
  data: IResApi<IProgramList>
  page: number
  onChangePage: (page: number) => void
}

export const FooterPagination = (props: IProps) => {
  const { data, page, onChangePage } = props
  return (
    <footer className="flex items-center justify-between">
      <div>
        <p className="font-medium">
          Resultados: {data?.results.length} de {data?.count} | Página: {page}{' '}
          de {Math.ceil(data.count / data.results.length)}
        </p>
      </div>
      <div>
        <Pagination
          radius="sm"
          total={Math.ceil(data.count / 15)}
          showControls
          onChange={onChangePage}
          page={page}
        />
      </div>
    </footer>
  )
}

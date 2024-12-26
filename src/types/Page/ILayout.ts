export interface ILayoutProps {
  children: React.ReactNode
  params: IParams
  searchParams: ISearchParams
}

export interface IParams {
  [key: string]: string
}

interface ISearchParams {
  [key: string]: string | string[] | undefined
}

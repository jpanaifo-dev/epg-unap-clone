import { DetailsLayout, ProgramBanner } from '@/components'
import { fetchProgramDetail, fetchPlanEstudio } from '@/api'
import { IProgramList, IResApi, IPlanEstudioListApi } from '@/types'
interface IProps {
  params: {
    id: string
  }
}

export default async function Page(props: IProps) {
  const { id } = props.params

  let dataProgram: IProgramList = {} as IProgramList
  let dataPlanEstudio: IPlanEstudioListApi[] = [] as IPlanEstudioListApi[]

  try {
    const response = await fetchProgramDetail(parseInt(id))

    if (response.ok) {
      const data: IResApi<IProgramList> =
        (await response.json()) as IResApi<IProgramList>
      dataProgram = data.results[0]
    }
  } catch (error) {
    console.error(error)
    dataProgram = {} as IProgramList
  }

  try {
    const response = await fetchPlanEstudio({ programa: parseInt(id) })

    if (response.ok) {
      const data: IPlanEstudioListApi[] =
        (await response.json()) as IPlanEstudioListApi[]
      dataPlanEstudio = data
    }
  } catch (error) {
    console.error(error)
    dataPlanEstudio = [] as IPlanEstudioListApi[]
  }

  return (
    <main className="">
      <ProgramBanner program={dataProgram} />
      <DetailsLayout program={dataProgram} planEstudio={dataPlanEstudio} />
    </main>
  )
}

import { type Metadata } from 'next'
import { type IProgram } from '@/types'
import { getProgramById } from '@/api/client/programs'
import { IndexSection } from '../(sections)/indexSection'

interface IProps {
  params: { id: string, tipo: string }
}

export async function generateMetadata ({ params }: IProps): Promise<Metadata> {
  const programData: Promise<IProgram> = await getProgramById(
    parseInt(params.id)
  )
  const program = await programData

  return {
    title: `EPG-UNAP | ${program?.nombre}`,
    description: `This is the page of ${program?.nombre}`
  }
}

// export async function getStaticProps({ params }: Params) {
//   const programData: Promise<IProgram> = await usePrograms().getDataProgramById(
//     parseInt(params.id)
//   )
//   const program = await programData

//   return {
//     props: {
//       program
//     }
//   }
// }

// export async function generateMetadata({ params }: IProps): Promise<Metadata> {
//   return {
//     title: 'Detalles',
//     description: 'Description'
//   }
// }

// export const metadata: Metadata = {
//   title: 'Detalles',
//   description: 'Description'
// }

export default async function Page ({ params }: IProps) {
  return (
    <>
      <IndexSection />
    </>
  )
}

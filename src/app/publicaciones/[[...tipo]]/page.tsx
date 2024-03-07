'use client'
import { useEffect } from 'react'
import { ListPublication } from '../(sections)/listPublication'
import { useLogicPublications } from '@/providers/publicationProvider'
import { HomePublication } from '../(sections)/homePublication'
import uiLoading from '@/app/loading'

export default function Page ({ params }: { params: { tipo: string } }) {
  const { setTypePublication, loading } = useLogicPublications()

  if (loading === true) {
    return uiLoading()
  }

  useEffect(() => {
    setTypePublication(params.tipo !== undefined ? params.tipo : '')
  }, [params])

  return (
    <>{params.tipo === undefined ? <HomePublication /> : <ListPublication />}</>
  )
}

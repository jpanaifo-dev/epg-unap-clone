import React from 'react'
import { IPublicationList } from '@/types'
import { Card, CardBody, CardFooter } from '@nextui-org/react'
import Link from 'next/link'
import { convertYYMMDDtoDDMMYY } from '@/utils'

interface IProps {
  data: IPublicationList
}

const renderHtml = (html: string) => {
  return (
    <div
      className="font-light line-clamp-3"
      dangerouslySetInnerHTML={{
        __html: html
      }}
    />
  )
}

export const CardPublicationSm = (props: IProps) => {
  const { data } = props
  const type = data?.type?.description.toLowerCase()

  return (
    <Card
      radius="sm"
      shadow="none"
      className="max-w-lg"
      as={Link}
      href={`/publicaciones/${type}/${data.id}`}
      isPressable
      isHoverable
    >
      <CardBody className="">
        <main>
          <section className="flex justify-between"></section>
          <h2 className="text-lg font-semibold mt-2">{data?.title}</h2>
          <div className="text-sm text-gray-500 mt-2 line-clamp-3">
            {renderHtml(data?.content)}
          </div>
        </main>
      </CardBody>
      <CardFooter className="justify-between">
        <footer className="flex justify-between items-center w-full">
          <p className="text-sm text-gray-500">
            {convertYYMMDDtoDDMMYY(data?.created_at, true)}
          </p>
          <p className="text-sm text-gray-500">
            Autor: <span className="text-gray-500">EPG - UNAP</span>
          </p>
        </footer>
      </CardFooter>
    </Card>
  )
}

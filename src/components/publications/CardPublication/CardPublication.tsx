import React from 'react'
import { IPublicationFileList } from '@/types'
import { Button, Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import Link from 'next/link'
import { convertDate } from '@/utils'
import { IconCalendarEvent } from '@tabler/icons-react'

interface IProps {
  data: IPublicationFileList
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

export const CardPublication = (props: IProps) => {
  const { data } = props
  const type = data?.publication?.type?.description.toLowerCase()

  return (
    <Card
      radius="sm"
      shadow="none"
      className="w-full max-w-2xl p-0"
      as={Link}
      href={`/publicaciones/${type}/${data.id}`}
      isPressable
    >
      <CardBody className="p-0">
        <Image
          alt={data.description}
          src={data.file}
          removeWrapper
          className="object-cover object-center w-full h-48"
          loading="lazy"
          placeholder="blur"
        />
        <main className="px-2">
          <section className="flex justify-between">
            <div className="flex gap-3 items-center mt-6">
              <IconCalendarEvent
                size={20}
                className="text-gray-500"
                stroke={1.5}
              />
              <p className="text-sm text-gray-500">
                {convertDate(data.uploaded_at)}
              </p>
            </div>
          </section>
          <h2 className="text-lg font-semibold mt-2">
            {data?.publication?.title}
          </h2>
          <div className="text-sm text-gray-500 mt-2 line-clamp-3">
            {renderHtml(data?.publication?.content)}
          </div>
        </main>
      </CardBody>
      <CardFooter className="justify-between px-2">
        <Button className="px-6" radius="sm" color="primary">
          Ver más
        </Button>
      </CardFooter>
    </Card>
  )
}

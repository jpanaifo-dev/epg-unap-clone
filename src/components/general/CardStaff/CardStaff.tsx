'use client'

import { Card, CardBody, Image, Link as NextUILink } from '@nextui-org/react'
import Link from 'next/link'
import blankImage from '@/assets/images/blank.png'
import { capitalize } from '@/utils'

export function CardStaff ({
  name,
  profileUrl,
  image,
  role,
  faculty,
  hasImage
}: {
  name: string
  profileUrl: string
  image?: string | null
  role?: string
  faculty?: string
  hasImage: boolean
}) {
  return (
    <Card className="min-w-full w-full lg:w-72 h-58 border border-zinc-300 shadow-none rounded-lg">
      {hasImage && (
        <Image
          src={image ?? blankImage.src}
          alt={name}
          radius="none"
          width={'100%'}
          className="object-cover rounded-none min-h-[13rem] max-h-[13rem]"
          style={{ objectPosition: 'top' }}
        />
      )}
      <CardBody className="p-4 space-y-2 flex-col justify-between">
        {faculty !== undefined && (
          <p className="text-neutral-400 text-xs font-normal leading-none uppercase">
            {faculty}
          </p>
        )}
        <h2 className="text-black text-lg font-bold leading-7 text-start">
          {name}
        </h2>

        {role !== undefined && faculty === undefined && (
          <p className="text-zinc-400 text-sm font-bold leading-tight line-clamp-2">
            {capitalize(role)}
          </p>
        )}

        {role !== undefined && faculty !== undefined && (
          <p className="text-zinc-400 text-sm font-bold leading-tight line-clamp-2">
            {capitalize(role)} de la facultad de {''}
            {faculty !== undefined && capitalize(faculty)}
          </p>
        )}
        <footer className="flex justify-end items-center">
          <NextUILink
            as={Link}
            isExternal={false}
            showAnchorIcon
            href={profileUrl}
          >
            <span className="text-blue-600 text-base font-normal leading-normal">
              Ver perfil
            </span>
          </NextUILink>
        </footer>
      </CardBody>
    </Card>
  )
}

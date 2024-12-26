'use client'
import { useState } from 'react'
import { Button, Card, CardFooter, Image } from '@nextui-org/react'
import { IconChevronRight } from '@tabler/icons-react'
import Link from 'next/link'

export function CardSimple({
  image,
  title,
  urlLink,
  isBlank = false,
  height = 'h-40'
}: {
  image: string
  title: string
  urlLink: string
  isBlank?: boolean
  height?: string
}) {
  const [isHover, setIsHover] = useState<boolean>(false)
  const titleValue = title.replace(/-/g, ' ')

  return (
    <Card
      className={`min-w-xs shadow-none border border-zinc-300 hover:cursor-pointer ${height}`}
      isHoverable
      onMouseEnter={() => {
        setIsHover(true)
      }}
      onMouseLeave={() => {
        setIsHover(false)
      }}
      radius="sm"
      as={Link}
      href={urlLink}
      target={isBlank ? '_blank' : '_self'}
    >
      <Image
        src={image}
        alt="Card Image"
        className="rounded-none object-cover z-0 w-full h-full"
        removeWrapper
      />
      <CardFooter
        className={`
        p-4 w-full h-full justify-center absolute bottom-0
        bg-gradient-to-t from-primary-900/70 via-primary-900/40 to-primary-900/20
        ${
          isHover ? 'transition duration-300 ease-in-out bg-primary-900/40' : ''
        }
      `}
      >
        <div className="w-full mb-2">
          <h3 className="text-2xl text-white font-bold w-full">{titleValue}</h3>
        </div>
        <div>
          <Button
            variant="bordered"
            className={`text-white border-white transition duration-300 ease-in-out ${
              isHover && 'transition duration-300 ease-in-out  border-3'
            }`}
            endContent={<IconChevronRight size={isHover ? 24 : 20} />}
            isIconOnly
          />
        </div>
      </CardFooter>
    </Card>
  )
}

'use client'
import { Image } from '@nextui-org/react'
import Link from 'next/link'
import { useState } from 'react'

interface IProps {
  fullName: string
  role: string
  href?: string
  image?: string
}

export const CardAuthority = (props: IProps) => {
  const { fullName, role, href, image } = props
  const [isHovered, setIsHovered] = useState(false)

  return (
    <main
      className="flex gap-4 w-full hover:cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={image}
        alt={fullName}
        radius="sm"
        removeWrapper
        className={`w-72 h-72 min-w-72 object-cover`}
      />
      <div className="bg-primary-800 p-6 w-full sm:p-8 lg:p-10 xl:p-12 rounded-lg flex flex-col justify-around">
        <div>
          <h1 className="text-3xl lg:text-4xl text-white font-bold">
            {fullName}
          </h1>
          <h3 className="text-white text-lg">{role}</h3>
        </div>
        <div>
          <Link href={href || '#'} className="text-grayEpg-300">
            Ver perfil
          </Link>
        </div>
      </div>
    </main>
  )
}

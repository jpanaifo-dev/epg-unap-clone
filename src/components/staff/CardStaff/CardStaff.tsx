'use client'
import { IconPhone, IconMail } from '@tabler/icons-react'
import { Button, Image } from '@nextui-org/react'
import Link from 'next/link'

interface IProps {
  id: string
  fullName: string
  role?: string
  phone?: string
  email?: string
  disabledImage?: boolean
  dark?: boolean
  onPress?: (id: string) => void
}

export function CardStaff(prop: IProps) {
  const { id, fullName, role, email, phone, onPress, disabledImage, dark } =
    prop
  return (
    <main className="flex gap-4 w-full max-w-xl">
      {!disabledImage && (
        <Image
          src="/images/bg-card.webp"
          alt={fullName}
          radius="sm"
          removeWrapper
          className="w-56 h-48 object-cover rounded-lg filter grayscale"
        />
      )}
      <main
        className={`flex flex-col gap-4  px-6 py-2 w-full rounded-md justify-around ${
          dark && 'text-white bg-primary-800 '
        }`}
      >
        <div className="flex flex-col gap-1 w-full">
          <header>
            <h3 className="">{role}</h3>
            <h1
              className={`text-2xl font-bold ${
                dark ? 'text-white' : 'text-primary-800'
              }`}
            >
              {fullName}
            </h1>
          </header>
          <main>
            {email && (
              <Link
                className="flex items-center space-x-2 text-primary-800 hover:text-primary-600"
                href={`mailto:${email}`}
                target="_blank"
              >
                <IconMail size={20} />
                <p>{email}</p>
              </Link>
            )}
            {phone && (
              <div className="flex items-center space-x-2">
                <IconPhone size={20} />
                <p>{phone}</p>
              </div>
            )}
          </main>
        </div>
        <div>
          {/* <Link href={href || '#'}>Ver perfil</Link> */}
          <Button radius="sm" onPress={() => onPress && onPress(id)}>
            Ver perfil
          </Button>
        </div>
      </main>
    </main>
  )
}

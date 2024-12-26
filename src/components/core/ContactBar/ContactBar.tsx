'use client'
import {
  IconBrandWhatsapp,
  IconMail,
  IconPhone,
  IconBrandFacebook
} from '@tabler/icons-react'
import Link from 'next/link'

export function ContactBar({
  label,
  linkWhatsApp,
  linkEmail
}: {
  label?: string
  linkWhatsApp?: string
  linkEmail?: string
}) {
  return (
    <div className="bg-[#DDEDFF] p-4 rounded-lg text-primary-900 flex justify-between">
      <div className="gap-2 flex items-center">
        <h3 className="font-bold ">{label ?? 'Contacto'}</h3>
        <div className="flex gap-3">
          <Link href={linkWhatsApp ?? '/#'}>
            <div className="border-1 border-primary-800 p-1 rounded-lg">
              <IconBrandWhatsapp size={24} color="#081B5E" />
            </div>
          </Link>
          <Link href={linkEmail ?? '/#'}>
            <div className="border-1 border-primary-800 p-1 rounded-lg">
              <IconMail size={24} color="#081B5E" />
            </div>
          </Link>
          <div className="border-1 border-primary-800 p-1 rounded-lg">
            <IconPhone size={24} color="#081B5E" />
          </div>
        </div>
      </div>
      <div className="gap-2 flex items-center ">
        <h3 className="font-bold">Síguenos</h3>
        <div className="flex">
          <Link href="https://web.facebook.com/postgradounap/" target="_blank">
            <div className="border-1 border-primary-800 p-1 rounded-lg">
              <IconBrandFacebook size={24} color="#081B5E" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

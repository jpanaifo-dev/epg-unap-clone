'use client'

import React, { useState, useEffect } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link as NextUILink,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Image,
  Button,
  Divider
} from '@nextui-org/react'
import epg from '@/assets/images/epg-logo.png'
import {
  IconChevronDown,
  IconChevronUp,
  IconX,
  IconMenu2
} from '@tabler/icons-react'
import Link from 'next/link'
import { useProgramTypes } from '@/hooks/useProgramType'
import { capitalize } from '@/utils'

const initialItems = [
  { title: 'Inicio', href: '/' },
  { title: 'La escuela', href: '/sobre-escuela' },
  { title: 'Admision', href: '/admision' }
]

export function HeaderNavbar () {
  const { getFCProgramTypes, pgTypesNotContinue } = useProgramTypes()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDocentesOpen, setIsDocentesOpen] = useState(false)
  const [isEstudiantesOpen, setIsEstudiantesOpen] = useState(false)

  useEffect(() => {
    getFCProgramTypes()
  }, [])

  const moreItems = pgTypesNotContinue?.map((item) => ({
    title: capitalize(item.nombre) + 's',
    href: `/programas/${item.key}`
  }))
  moreItems.push({
    title: 'Formación continua',
    href: '/programas/formacion-continua'
  })
  const items = initialItems.concat(moreItems ?? [])

  const menuItems = [
    {
      key: 'docentes',
      title: 'Recursos para docentes',
      subItems: [
        { name: 'Lista de docentes', href: '/lista-docentes' },
        { name: 'Recursos para docentes', href: '/recursos-docentes' }
      ],
      isOpen: isDocentesOpen
    },
    {
      key: 'estudiantes',
      title: 'Estudiantes',
      subItems: [
        {
          name: 'Beneficios',
          href: '/beneficios-estudiantes'
        },
        { name: 'Procesos', href: '/procesos-estudiantes' }
      ],
      isOpen: isEstudiantesOpen
    }
  ]

  const handleMenuItemClicked = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsDocentesOpen(false)
    setIsEstudiantesOpen(false)
  }

  return (
    <Navbar
      onMenuOpenChange={(open) => {
        setIsMenuOpen(open)

        if (!open) {
          setIsDocentesOpen(false)
          setIsEstudiantesOpen(false)
        }
      }}
      isMenuOpen={isMenuOpen}
      className="bg-primary-800 w-full"
      height="5rem"
      maxWidth="xl"
    >
      <NavbarBrand>
        <Link href="/">
          <div className='flex items-center gap-2'>
            {/* <div className='w-[130px]'>
              <Image src={epg2.src} className="min-w-[8rem]" width={50} />
            </div> */}
            {/* <div className='w-[88px]'>
              <Image src={unap.src} className='min-w-[5.5rem]' width={50} />
            </div> */}
              <div className='w-[32px]'>
                <Image src={epg.src} className='min-w-[2rem]' width={25} />
              </div>
              <div>
                <div className='flex h-[20px] space-x-2 items-center'>
                  <div className='flex items-center text-white text-sm font-bold gap-4'>
                    <div className='flex flex-col font-bold text-white leading-tight text-xl'>
                      <span>Escuela de Postgrado</span>
                      {/* <span>POSTGRADO UNAP</span> */}
                    </div>
                  </div>
                  <Divider className='bg-white w-[2px]' orientation="vertical" />
                  <div><span className='text-white font-bold text-xl'>UNAP</span></div>
                </div>
                <div className='text-white text-xs'>Programas y Servicios de Posgrado en la UNAP</div>
              </div>
          </div>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden md:flex gap-4" justify="end">
        {items.map((item, index) => (
          <NavbarItem key={`${item.title}-${index}`}>
            <NextUILink as={Link} href={item.href} className="text-white">
              {item.title}
            </NextUILink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="md:hidden"
        icon={
          isMenuOpen ? (
            <IconX className="text-white" />
          ) : (
            <IconMenu2 className="text-white" />
          )
        }
      />
      <NavbarMenu className="pt-12 space-y-3 scrollbar-hide">
        {items.map((item, index) => (
          <NavbarMenuItem key={`${item.title}-${index}`}>
            <NextUILink
              as={Link}
              className="w-full text-black px-4"
              href={item.href}
              size="lg"
              onClick={handleMenuItemClicked}
            >
              {item.title}
            </NextUILink>
          </NavbarMenuItem>
        ))}

        {menuItems.map((menuItem, index) => (
          <NavbarMenuItem key={`${menuItem.title}-${index}`}>
            <Button
              onClick={() => {
                if (menuItem.key === 'docentes') {
                  setIsDocentesOpen(!isDocentesOpen)
                } else if (menuItem.key === 'estudiantes') {
                  setIsEstudiantesOpen(!isEstudiantesOpen)
                }
              }}
              endContent={
                menuItem.isOpen ? (
                  <IconChevronUp size={20} />
                ) : (
                  <IconChevronDown size={20} />
                )
              }
              className="bg-transparent text-lg w-full justify-between"
            >
              {menuItem.title}
            </Button>
            {menuItem.isOpen && (
              <ul className="pl-10">
                {menuItem.subItems.map((subItem, subIndex) => (
                  <li key={`${subItem.name}-${subIndex}`} className="pt-3">
                    <NextUILink
                      as={Link}
                      href={subItem.href}
                      className="w-full text-black "
                      size="lg"
                      onClick={handleMenuItemClicked}
                    >
                      {subItem.name}
                    </NextUILink>
                  </li>
                ))}
              </ul>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

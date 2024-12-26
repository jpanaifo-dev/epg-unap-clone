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
  Button
} from '@nextui-org/react'
import Image from 'next/image'
import {
  IconChevronDown,
  IconChevronUp,
  IconX,
  IconMenu2
} from '@tabler/icons-react'
import Link from 'next/link'
import { useProgramTypes } from '@/hooks'
import { capitalize } from '@/utils'
import { usePathname } from 'next/navigation'

const initialItems = [
  { title: 'Inicio', href: '/' },
  { title: 'La escuela', href: '/sobre-escuela' },
  { title: 'Admision', href: '/admision' }
]

export function HeaderNavbar() {
  const { getProgramTypes, programTypes } = useProgramTypes()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDocentesOpen, setIsDocentesOpen] = useState(false)
  const [isEstudiantesOpen, setIsEstudiantesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    getProgramTypes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const moreItems = programTypes?.map((item) => ({
    title: capitalize(item.nombre) + 's',
    href: `/programas/${item.nombre.toLowerCase()}`
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
      className="bg-primary-800 w-full z-50 right-0 left-0"
      height="4rem"
      maxWidth="2xl"
    >
      <NavbarBrand>
        <Link href="/">
          <Image
            src="/images/logo-epg-lg.webp"
            width={200}
            height={100}
            alt="Image"
          />
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden md:flex gap-4" justify="end">
        {items.map((item, index) => (
          <NavbarItem
            key={`${item.title}-${index}`}
            isActive={pathname === item.href}
          >
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
          <NavbarMenuItem
            key={`${item.title}-${index}`}
            isActive={pathname === item.href}
          >
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

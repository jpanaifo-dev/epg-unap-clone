'use client'

import React, { useState } from 'react'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link as NextUILink,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  DropdownTrigger,
  Button
} from '@nextui-org/react'
import Link from 'next/link'

export function FooterNavbar () {
  const [isDocentesOpen, setIsDocentesOpen] = useState(false)
  const [isEstudiantesOpen, setIsEstudiantesOpen] = useState(false)

  return (
    <Navbar
      className="bg-[#BC9A22] md:h-[2.8rem] px-0 w-full top-[4rem] fixed"
      height="0.8rem"
      maxWidth="xl"
    >
      <NavbarContent justify="end" className="hidden md:flex">
        <NavbarItem isActive>
          <Dropdown
            onOpenChange={() => {
              setIsDocentesOpen(true)
            }}
            onClose={() => {
              setIsDocentesOpen(false)
            }}
          >
            <DropdownTrigger>
              <Button
                endContent={
                  isDocentesOpen ? (
                    <IconChevronUp size={20} />
                  ) : (
                    <IconChevronDown size={20} />
                  )
                }
                className="bg-transparent text-white p-2"
              >
                Recursos para docentes
              </Button>
            </DropdownTrigger>

            <DropdownMenu>
              <DropdownItem>
                <NextUILink
                  as={Link}
                  href="/lista-docentes"
                  className="text-black"
                >
                  Lista de docentes
                </NextUILink>
              </DropdownItem>
              <DropdownItem>
                <NextUILink
                  as={Link}
                  href="/recursos-docentes"
                  className="text-black"
                >
                  Recursos para docentes
                </NextUILink>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        <NavbarItem>
          <Dropdown
            onOpenChange={() => {
              setIsEstudiantesOpen(true)
            }}
            onClose={() => {
              setIsEstudiantesOpen(false)
            }}
          >
            <DropdownTrigger>
              <Button
                endContent={
                  isEstudiantesOpen ? (
                    <IconChevronUp size={20} />
                  ) : (
                    <IconChevronDown size={20} />
                  )
                }
                className="bg-transparent text-white p-2"
              >
                Estudiantes
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem>
                <NextUILink
                  as={Link}
                  href="/beneficios-estudiantes"
                  className="text-black"
                >
                  Beneficios
                </NextUILink>
              </DropdownItem>
              <DropdownItem>
                <NextUILink
                  as={Link}
                  href="/procesos-estudiantes"
                  className="text-black"
                >
                  Procesos
                </NextUILink>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        <NavbarItem>
          <NextUILink as={Link} href="/publicaciones" className="text-white">
            Publicaciones
          </NextUILink>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

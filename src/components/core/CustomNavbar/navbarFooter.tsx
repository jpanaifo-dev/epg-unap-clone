/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from 'react'
import {
  IconChevronDown,
  IconChevronUp,
  IconSchool,
  IconFiles,
  IconIdBadge2,
  IconTimeline
} from '@tabler/icons-react'

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  DropdownTrigger,
  Button
} from '@nextui-org/react'
import Link from 'next/link'
import { NavbarItemLink } from './NavbarItemLink'
import { usePublicationTypes } from '@/hooks'

const icons = {
  docentes: <IconSchool size={40} stroke={1.5} className="text-primary-800" />,
  recursos: <IconFiles size={40} stroke={1.5} className="text-primary-800" />,
  estudiantes: (
    <IconIdBadge2 size={40} stroke={1.5} className="text-primary-800" />
  ),
  servicios: <IconSchool size={40} stroke={1.5} className="text-primary-800" />,
  procesos: <IconTimeline size={40} stroke={1.5} className="text-primary-800" />
}

const MenuDropdown = {
  docentes: [
    {
      title: 'Lista de docentes',
      href: '/lista-docentes',
      description: 'Conoce a los docentes de la institución de la EPG - UNAP',
      icon: icons.docentes
    },
    {
      title: 'Recursos para docentes',
      href: '/recursos-docentes',
      description:
        'Si eres docente, aquí encontrarás recursos para tu labor educativa',
      icon: icons.recursos
    }
  ],
  estudiantes: [
    {
      title: 'Beneficios',
      href: '/beneficios-estudiantes',
      description: 'Si eres estudiante, conoce los beneficios que te ofrecemos',
      icon: icons.estudiantes
    },
    {
      title: 'Procesos',
      href: '/procesos-estudiantes',
      description: 'Conoce los procesos que debes seguir como estudiante',
      icon: icons.procesos
    }
  ],
  publicaciones: [
    {
      title: 'Noticias',
      href: '/publicaciones/noticia',
      description: 'Conoce las publicaciones de la EPG - UNAP'
    },
    {
      title: 'Eventos',
      href: '/publicaciones/evento',
      description: 'Conoce los eventos de la EPG - UNAP'
    }
  ]
}

export function FooterNavbar() {
  const [isDocentesOpen, setIsDocentesOpen] = useState(false)
  const [isEstudiantesOpen, setIsEstudiantesOpen] = useState(false)
  const { publicationTypes, getListPublicationTypes } = usePublicationTypes()

  useEffect(() => {
    getListPublicationTypes({ isActive: true })
  }, [])

  return (
    <Navbar
      className="bg-[#BC9A22] md:h-[2.8rem] px-0 w-full top-[4rem] fixed z-50"
      height="0.8rem"
      maxWidth="2xl"
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
            radius="sm"
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
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: 'gap-4',
                title: 'font-semibold text-primary-800'
              }}
            >
              {MenuDropdown.docentes.map((item, index) => (
                <DropdownItem
                  key={index}
                  as={Link}
                  href={item.href}
                  description={item.description}
                >
                  {item.title}
                </DropdownItem>
              ))}
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
            radius="sm"
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
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: 'gap-4',
                title: 'font-semibold text-primary-800'
              }}
            >
              {MenuDropdown.estudiantes.map((item, index) => (
                <DropdownItem
                  key={index}
                  as={Link}
                  href={item.href}
                  description={item.description}
                >
                  {item.title}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItemLink href="/servicios">Servicios</NavbarItemLink>
        {publicationTypes && publicationTypes.results.length > 0 && (
          <NavbarItem>
            <Dropdown radius="sm">
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
                  Publicaciones
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="ACME features"
                className="w-[340px]"
                itemClasses={{
                  base: 'gap-4',
                  title: 'font-semibold text-primary-800'
                }}
              >
                {publicationTypes?.results?.map((item, index) => (
                  <DropdownItem
                    key={index}
                    as={Link}
                    href={`/publicaciones/${item.description.toLowerCase()}`}
                    description={`Conoce las publicaciones de ${item.description}`}
                  >
                    {item.description}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  )
}

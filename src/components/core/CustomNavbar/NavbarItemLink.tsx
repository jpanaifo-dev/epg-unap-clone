import { NavbarItem, Link as NextUILink } from '@nextui-org/react'
import Link from 'next/link'

export const NavbarItemLink = ({
  href,
  children
}: {
  href: string
  children: React.ReactNode
}) => (
  <NavbarItem>
    <NextUILink as={Link} href={href} className="text-white text-sm">
      {children}
    </NextUILink>
  </NavbarItem>
)

'use client'
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react'
import { Icon123, IconArrowRight, IconChevronRight, IconChevronRightPipe } from '@tabler/icons-react'
import { usePathname } from 'next/navigation'

const generateBreadcrumbs = (pathname: string) => {
  const paths = pathname.split('/').filter(Boolean)
  return paths.map((path, index) => {
    return {
      name: path,
      path: paths.slice(0, index + 1).join('/'),
    }
  })
}

export const BreadcrumbComponent = () => {
  const pathname = usePathname()
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb" separator={
            <IconChevronRight size={14} color='#DDDCDC' />
        }
      >
        <BreadcrumbItem
          aria-label="home"
          href="/"
          key="home"
          classNames={{
            item: 'text-grayEpg-400 capitalize',
          }}
        >
          Inicio
        </BreadcrumbItem>
        {generateBreadcrumbs(pathname).map((breadcrumb, index) => (
          <BreadcrumbItem
            aria-label="breadcrum-item"
            key={index}
            href={'/' + breadcrumb.path}
            classNames={{
              item: 'text-grayEpg-200 capitalize',
            }}
          >
            {breadcrumb.name.toLowerCase().trim().replace(/-/g, ' ')}
          </BreadcrumbItem>
        ))}
      </Breadcrumbs>
    </div>
  )
}
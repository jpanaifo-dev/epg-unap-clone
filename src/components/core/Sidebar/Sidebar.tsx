'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Button, Select, SelectItem } from '@nextui-org/react'
import type { ISidebarItem } from './ISidebarItem'
import Link from 'next/link'

interface SidebarProps {
  items: ISidebarItem[]
  children?: React.ReactNode
  customSection?: React.ReactNode
}

export function Sidebar({ items, children, customSection }: SidebarProps) {
  const [selectedItem, setSelectedItem] = useState<ISidebarItem>(items[0])
  const pathname = usePathname()

  const handleItemClicked = (item: ISidebarItem) => {
    setSelectedItem(item)
  }

  const itemSelected = items.find((item) => item.href === pathname)

  return (
    <div className="flex flex-col lg:flex-row lg:flex gap-6 w-full section-sidebar">
      <header className="block sm:hidden sticky top-[77px] bg-white z-40 py-4">
        <Select
          aria-label="Select"
          radius="sm"
          variant="bordered"
          size="lg"
          selectedKeys={[selectedItem.id.toString()]}
          disallowEmptySelection
        >
          {items?.map((item) => (
            <SelectItem key={item.id}>{item.label}</SelectItem>
          ))}
        </Select>
      </header>
      <aside className="hidden lg:block sticky top-28 h-fit w-[17rem] xl:w-[18rem]">
        {items.map((item, index) => (
          <SidebarItem
            key={index}
            id={item.id}
            label={item.label}
            {...(item.href ? { href: item.href } : {})}
            {...(!item.href
              ? {
                  onSelected() {
                    handleItemClicked(item)
                  }
                }
              : {})}
            isActive={
              item?.href ? item.href === pathname : item.id === selectedItem.id
            }
          />
        ))}
        {customSection !== null && (
          <div className="hidden sm:block">
            <div className="mt-8 mb-4">{customSection}</div>
          </div>
        )}
      </aside>
      <article className="lg:w-full sm:px-4 flex flex-col gap-4">
        <h2 className="font-bold text-2xl lg:text-3xl">
          {itemSelected?.href ? itemSelected?.title : selectedItem?.title}
        </h2>
        <div>{selectedItem?.sectionContent}</div>{' '}
        <article className="">{children}</article>
      </article>
    </div>
  )
}

interface ISidebarItemProps {
  id: string
  label: string
  href?: string
  isActive?: boolean
  onSelected?: (id: string) => void
}

export const SidebarItem = (props: ISidebarItemProps) => {
  const { id, label, href, isActive, onSelected } = props
  return (
    <div className="flex items-center gap-4">
      <Button
        aria-label="button"
        as={href ? Link : 'button'}
        {...(href ? { href } : {})}
        variant="light"
        radius="none"
        size="lg"
        fullWidth
        className={`flex items-center justify-start text-lg py-2 px-6 bg-primary-50 hover:bg-primary-100/80 hover:cursor-pointer font-normal text-zinc-500 ${
          isActive
            ? 'text-primary-800 border-l-5 border-primary-800'
            : ' border-l-5 border-grayEpg-300'
        }`}
        {...(onSelected ? { onClick: () => onSelected(id) } : {})}
        disableAnimation
      >
        {label}
      </Button>
    </div>
  )
}

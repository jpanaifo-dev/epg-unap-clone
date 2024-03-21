'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Link, Tabs, Tab, Button } from '@nextui-org/react'
import type { ISidebarItem } from './ISidebarItem'
import { MainSection } from '@/components'

interface SidebarProps {
  items: ISidebarItem[]
  children?: React.ReactNode
  customSection?: React.ReactNode
  isState?: boolean
}

export function Sidebar({
  items,
  children,
  customSection,
  isState = false
}: SidebarProps) {
  const [selectedItem, setSelectedItem] = useState<ISidebarItem>(items[0])
  const pathname = usePathname()
  const pathnameSelected = pathname.split('/')[2]

  const handleItemClicked = (item: ISidebarItem) => {
    setSelectedItem(item)
  }

  return (
    <MainSection>
      <div className="lg:flex gap-6 w-full">
        <div className="flex overflow-x-auto scrollbar-hide mb-7 space-x-4 lg:hidden">
          {isState ? (
            <Tabs
              aria-label="options"
              size="lg"
              selectedKey={selectedItem.key}
              onSelectionChange={(key) => {
                setSelectedItem(items?.find((item) => item?.key === key))
              }}
            >
              {items.map((item) => (
                <Tab key={item?.key} title={item.optionName} />
              ))}
            </Tabs>
          ) : (
            <Tabs aria-label="options" size="lg" selectedKey={pathnameSelected}>
              {items.map((item) => (
                <Tab
                  key={item?.key}
                  title={item.optionName}
                  href={item?.href}
                />
              ))}
            </Tabs>
          )}
        </div>
        <div className="hidden lg:block sticky top-24 h-full w-[17rem] xl:w-[18rem]">
          <div className="bg-primary-50 h-fit py-4 ">
            {isState ? (
              <>
                {items.map((item, index) => (
                  <Button
                    key={index}
                    variant="light"
                    radius="none"
                    onClick={() => {
                      handleItemClicked(item)
                    }}
                    fullWidth
                    className={`text-lg py-2 px-4 hover:bg-primary-100/80 hover:cursor-pointer font-normal justify-start text-zinc-500 ${
                      selectedItem === item &&
                      'text-primary-800 border-l-4 border-primary-800'
                    }`}
                    size="lg"
                  >
                    {item.optionName}
                  </Button>
                ))}
              </>
            ) : (
              <>
                {items?.map((item, index) => (
                  <Link
                    key={item?.href === null ? index : item?.optionName}
                    className={`w-full text-lg py-2 px-4 hover:bg-primary-100/80 hover:cursor-pointer font-normal text-zinc-500 ${
                      item?.href === pathname &&
                      'text-primary-800 border-l-4 border-primary-800'
                    }`}
                    href={item.href}
                    color="foreground"
                  >
                    {item.optionName}
                  </Link>
                ))}
              </>
            )}
          </div>
          <div className="hidden sm:block">
            {customSection !== null && (
              <div className="mt-8 mb-4">{customSection}</div>
            )}
          </div>
        </div>
        <div className="lg:w-full sm:px-4">
          <h2 className="font-bold text-2xl lg:text-[27px] mb-3">
            {isState ? (
              selectedItem.sectionTitle
            ) : (
              <>{items.find((item) => item.href === pathname)?.sectionTitle}</>
            )}
          </h2>
          {isState ? (
            <div>{selectedItem?.sectionContent}</div>
          ) : (
            <>{children}</>
          )}
        </div>
      </div>
    </MainSection>
  )
}

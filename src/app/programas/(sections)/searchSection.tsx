import { useLogicPrograms } from '@/providers/programsProvider'
import { Button, ButtonGroup, Input } from '@nextui-org/react'
import { IconSearch, IconListDetails, IconCategory } from '@tabler/icons-react'
import { useFilterFromUrl } from '@/hooks/useFilterFromUrl'

export const SearchSection = () => {
  const { setFilters } = useLogicPrograms()
  const { getParams } = useFilterFromUrl()

  const isGallery = getParams('type_list', '')
  const textSearch = getParams('search', '')

  return (
    <div className="bg-white pt-2">
      <div className="py-4 w-full">
        <div className="flex w-full gap-2 sm:gap-6 items-center container max-w-7xl">
          <div className="hidden lg:block w-full lg:max-w-[14rem] xl:max-w-[16rem]">
            <h1 className="text-sm font-bold sm:text-lg text-zinc-600 w-full">
              Facilita tu búsqueda
            </h1>
          </div>
          <div className="flex w-full gap-2 sm:gap-4 items-center">
            <Input
              fullWidth
              isClearable
              startContent={<IconSearch size={20} />}
              radius="sm"
              placeholder="Buscar"
              variant="bordered"
              value={textSearch}
              onValueChange={(value) => {
                setFilters('search', value)
              }}
              size="sm"
            />
            <div className="hidden sm:block">
              <ButtonGroup radius="sm" size="md">
                <Button
                  startContent={<IconCategory size={20} />}
                  onClick={() => {
                    setFilters('type_list', '')
                  }}
                  color={isGallery === '' ? 'primary' : 'default'}
                  variant={isGallery !== '' ? 'bordered' : undefined}
                >
                  Galeria
                </Button>
                <Button
                  startContent={<IconListDetails size={20} />}
                  onClick={() => {
                    setFilters('type_list', 'list')
                  }}
                  color={isGallery === 'list' ? 'primary' : 'default'}
                  variant={isGallery !== 'list' ? 'bordered' : undefined}
                >
                  Lista
                </Button>
              </ButtonGroup>
            </div>
            <div className="block sm:hidden">
              <ButtonGroup radius="sm" size="lg">
                <Button
                  startContent={<IconCategory size={16} />}
                  isIconOnly
                  color={isGallery === '' ? 'primary' : 'default'}
                  variant={isGallery !== '' ? 'bordered' : undefined}
                  onClick={() => {
                    setFilters('type_list', '')
                  }}
                />
                <Button
                  startContent={<IconListDetails size={16} />}
                  isIconOnly
                  color={isGallery === 'list' ? 'primary' : 'default'}
                  variant={isGallery !== 'list' ? 'bordered' : undefined}
                  onClick={() => {
                    setFilters('type_list', 'list')
                  }}
                />
              </ButtonGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

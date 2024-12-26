'use client'
import { Button, ButtonGroup, Select, SelectItem } from '@nextui-org/react'
import {
  IconSortAscendingLetters,
  IconSortDescendingLetters
} from '@tabler/icons-react'
import { useFilterFromUrl } from '@/hooks'

export const OrderFilter = () => {
  const { getParams, updateFilter } = useFilterFromUrl()

  const order = getParams('order', 'asc')

  const handleOrderChange = (val: string) => {
    if (val === 'asc') {
      updateFilter('order', '')
    } else {
      updateFilter('order', 'desc')
    }
  }

  return (
    <div>
      {order !== 'asc' ? (
        <Button
          isIconOnly
          variant="bordered"
          onPress={() => handleOrderChange('asc')}
        >
          <IconSortAscendingLetters size={24} />
        </Button>
      ) : (
        <Button
          isIconOnly
          variant="bordered"
          onPress={() => handleOrderChange('desc')}
        >
          <IconSortDescendingLetters size={24} />
        </Button>
      )}
    </div>
  )
}

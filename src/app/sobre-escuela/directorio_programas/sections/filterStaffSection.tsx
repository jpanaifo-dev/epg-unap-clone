'use client'
import { Input, Select, SelectItem, Button } from '@nextui-org/react'
import { IconSearch } from '@tabler/icons-react'

export default function FilterStaffSection () {
  const itemsData = ['opcion1', 'opcion2', 'opcion3']

  return (
    <>
      <div className="grid md:flex gap-3 mb-6">
        <Input
          type="text"
          variant="bordered"
          placeholder="Buscar personal..."
          className="w-full rounded-none"
          size="lg"
        />
        <Select
          variant="bordered"
          label="Filtrar por"
          className="max-w-xs"
          size="sm"
        >
          {itemsData.map((item) => (
            <SelectItem key={item}>{item}</SelectItem>
          ))}
        </Select>
        <Button
          color="primary"
          className="w-full md:max-w-[120px]"
          size="lg"
          endContent={<IconSearch size={18} />}
        >
          Buscar
        </Button>
      </div>
    </>
  )
}

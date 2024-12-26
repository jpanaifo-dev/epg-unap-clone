'use client'
import { Input, Select, SelectItem, Button } from '@nextui-org/react'
import { IconSearch } from '@tabler/icons-react'

export default function FilterTeacherSection() {
  const itemsData = ['opcion1', 'opcion2', 'opcion3']
  return (
    <>
      <div className="grid md:flex gap-3">
        <Input
          type="text"
          variant="bordered"
          placeholder="Buscar docente..."
          className="w-full rounded-none"
          size="lg"
          radius="sm"
        />
        <Select
          variant="bordered"
          label="Filtrar por"
          className="w-full sm:max-w-xs"
          size="sm"
          radius="sm"
        >
          {itemsData.map((item) => (
            <SelectItem key={item}>{item}</SelectItem>
          ))}
        </Select>
        <div>
          <Button
            color="primary"
            className="w-full md:max-w-[120px]"
            size="lg"
            endContent={
              <div>
                <IconSearch size={18} />
              </div>
            }
            radius="sm"
          >
            Buscar
          </Button>
        </div>
      </div>
    </>
  )
}

'use client'
import { Input, Button } from '@nextui-org/react'
import { IconSearch } from '@tabler/icons-react'

export default function FilterAdminsSection () {
  return (
    <>
      <div className="grid md:flex gap-3 mb-4">
        <Input
          type="text"
          variant="bordered"
          placeholder="Buscar personal..."
          className="w-full rounded-none"
          size="lg"
        />
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

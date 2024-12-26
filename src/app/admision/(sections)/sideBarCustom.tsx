import { Button, Link } from '@nextui-org/react'

export const SidebarCustom = () => {
  return (
    <div className="border border-yellow-500 p-4 rounded-lg">
      <h1 className="font-medium mb-2">
        ¡Elige el programa que se adecue a tí!
      </h1>
      <div>
        <Button
          color="warning"
          className="text-white"
          as={Link}
          href="/programas"
          target="_blank"
          showAnchorIcon
          radius="sm"
        >
          Ver programas
        </Button>
      </div>
    </div>
  )
}

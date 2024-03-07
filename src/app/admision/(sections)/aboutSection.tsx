import { MainSection } from '@/components'
import { Button } from '@nextui-org/react'
import { IconArrowNarrowRight } from '@tabler/icons-react'

export const AboutSection = () => {
  return (
    <div className="bg-primary-50">
      <MainSection>
        <div className="block sm:flex gap-6 py-6">
          <h1 className="text-2xl">
            Somos una comunidad donde las personas viven, trabajan y aprenden
            conectadas.
            <span className="font-bold">
              ¡Sé parte de la Escuela de Postgrado!
            </span>
          </h1>
          <div>
            <Button
              color="primary"
              className="mt-4"
              endContent={<IconArrowNarrowRight size={20} />}
            >
              Postula aquí
            </Button>
          </div>
        </div>
      </MainSection>
    </div>
  )
}

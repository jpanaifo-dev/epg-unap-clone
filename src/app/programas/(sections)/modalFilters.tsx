'use client'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure
} from '@nextui-org/react'
import { FiltersSection } from './filtersSection'
import { IconAdjustments } from '@tabler/icons-react'

export const ModalFilters = ({ isFContinue }: { isFContinue: boolean }) => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure()
  return (
    <>
      <div className="fixed z-10 right-4 bottom-4 lg:hidden">
        <Button
          onPress={onOpen}
          color="primary"
          startContent={<IconAdjustments size={20} />}
          className="font-bold"
        >
          Filtros
        </Button>
      </div>
      <Modal isOpen={isOpen} placement="bottom" onOpenChange={onOpenChange}>
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">
              Facilita tu búsqueda
            </ModalHeader>
            <ModalBody>
              <FiltersSection isFContinue={isFContinue} />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cerrar
              </Button>
              <Button color="primary" onPress={onClose}>
                Aplicar filtros
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  )
}

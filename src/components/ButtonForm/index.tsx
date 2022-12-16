import { Button, ButtonProps, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { ReactNode } from 'react'
import { FaWpforms } from 'react-icons/fa'
import FormButton from "./FormButton";

interface ButtonFormInterface extends ButtonProps{
  router?: String,
  plane?: String,
  children: ReactNode
}


export function ButtonForm({ children, ...rest }: ButtonFormInterface) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size='3xl'
      >
        <ModalOverlay />
        <ModalContent bgColor='Green.500'>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormButton />
          </ModalBody>
        </ModalContent>
      </Modal>

      <Button
        w='100%'
        py='24px'
        bgColor='#f0ef37'
        _hover={{
          bgColor: '#e6d234', transition: '0.5s'
        }}
        fontSize='18px'
        onClick={onOpen}
        fontWeight='bold'
        color='Blue.800'
        {...rest}
      >
        {children}
      </Button>
    </>
  )
}
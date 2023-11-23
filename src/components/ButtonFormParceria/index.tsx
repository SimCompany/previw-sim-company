import { Button, ButtonProps, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { ReactNode } from 'react'
import { FaWpforms } from 'react-icons/fa'
import FormButton from "./FormButton";
import FormButtonParceria from "./FormButton";
import Head from "next/head";

interface ButtonFormInterface extends ButtonProps {
  router?: String,
  plane?: String,
  children: ReactNode
}




export function ButtonFormParceria({ children, ...rest }: ButtonFormInterface) {
  // const { isOpen, onOpen, onClose } = useDisclosure()
function OpenForm(){
  window.open("https://b24-6et9y7.bitrix24.site/crm_form_niz7m/", "_blank")
}

  return (
    <>
      {/* <Modal
        isOpen={isOpen}
        onClose={onClose}
        size='2xl'
      >
        <ModalOverlay />
        <ModalContent >
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormButtonParceria bgColorProp='white' colorProps='black' />
          </ModalBody>
        </ModalContent>
      </Modal> */}

      <Button
        w='100%'
        py='24px'
        bgColor='Green.300'
        _hover={{
          bgColor: 'Green.500', transition: '0.5s'
        }}
        fontSize='18px'
        // onClick={onOpen}
        fontWeight='bold'
        color='Blue.800'
        {...rest}
        onClick={OpenForm}
      >

        {children}
      </Button>
    </>
  )
}
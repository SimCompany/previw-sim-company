import { ReactNode } from 'react'
import { Box, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

interface ArrowButtonInterface {
  link: any
  children?: ReactNode
}


export function ArrowButton({ link, children }: ArrowButtonInterface) {
  return (
    <Link href={link}>
      <Box my='1' display='flex' alignItems='center' justifyContent='start'>
        <Text color='Green.500' _hover={{ mr: '1.5', transition: '1s' }} transition='0.5s' cursor="pointer">{!children ? 'Acessar' : children} </Text>
        <Icon as={BsArrowRightShort} color='Green.500' fontSize='20px' mr='2' />
      </Box>
    </Link>
  )
}
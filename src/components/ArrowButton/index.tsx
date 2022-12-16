import { Box, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

interface ArrowButtonInterface {
  link: any

}


export function ArrowButton({ link }: ArrowButtonInterface) {
  return (
    <Link href={link}>
      <Box my='2' display='flex' alignItems='center' justifyContent='start'>
        <Text color='Green.500' _hover={{ mr: '1.5', transition: '1s' }} transition='0.5s' cursor="pointer">Acessar </Text>
        <Icon as={BsArrowRightShort} color='Green.500' fontSize='20px' mr='2' />
      </Box>
    </Link>
  )
}
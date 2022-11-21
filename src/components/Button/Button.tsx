import { Button as ButtonaChakra, ButtonProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ButtonChakraProps extends ButtonProps {
  children: ReactNode
}


export default function ButtonChakra({ children, ...rest }: ButtonChakraProps) {

  return (
    <ButtonaChakra _hover={{
      bgColor: '#e6d234', transition: '0.,5s'
    }} px='60px' py='6' bgColor='#f0ef37' color='Blue.800' fontWeight='bold' boxShadow='base' fontSize={{ base: '14px', sm: '16px', md: '18px', xl: '20px' }} borderRadius='5' {...rest}>
  { children }
    </ButtonaChakra >
  )
}
import { Button as ButtonaChakra, ButtonProps } from '@chakra-ui/react'
import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonChakraProps extends ButtonProps {
  children: ReactNode,
  link?: any
}


export default function ButtonChakra({ link, children, ...rest }: ButtonChakraProps) {


  if (!!link) {
    return (
      <Link href={link} scroll={true}>
        <ButtonaChakra _hover={{
          bgColor: '#e6d234', transition: '0.,5s'
        }} px='60px' py='6' bgColor='#f0ef37' color='Blue.800' fontWeight='bold' boxShadow='base' fontSize={{ base: '14px', sm: '16px', md: '18px', xl: '20px' }} borderRadius='5' {...rest}>
          {children}
        </ButtonaChakra >
      </Link>
    )
  }

  return (
    <ButtonaChakra _hover={{
      bgColor: '#e6d234', transition: '0.,5s'
    }} px='60px' py='6' bgColor='#f0ef37' color='Blue.800' fontWeight='bold' boxShadow='base' fontSize={{ base: '14px', sm: '16px', md: '18px', xl: '20px' }} borderRadius='5' {...rest}>
      {children}
    </ButtonaChakra >
  )
}
import { Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface H1Props extends TextProps {
  children: ReactNode
}



export default function H2({ children, ...rest }: H1Props) {

  return (
    <Text as='h2' lineHeight={{ base: '1.1', sm: '1', lg: '1.25' }} fontSize={{ base: '30px', sm: '32px', md: '35px', lg: '40px', xl: '45px', '2xl': '50px' }} fontWeight='extrabold' color='Green.300' {...rest}>
      {children}
    </Text>
  )
}
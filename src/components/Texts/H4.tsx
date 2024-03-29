import { Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface H3Props extends TextProps {
  children: ReactNode
}



export default function H4({ children, color = 'Green.300', ...rest }: H3Props) {

  return (
    <Text as='h4' fontSize={{ base: 'xl', md: '1xl', lg: '2xl' }} letterSpacing={0} fontWeight='bold' color={color} {...rest}>
      {children}
    </Text>
  )
}
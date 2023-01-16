import { Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface H3Props extends TextProps {
  children: ReactNode
}



export default function H3({ children, color = 'Blue.800', ...rest }: H3Props) {


  return (
    <Text as='h3' fontSize={{ base: '30px', lg: '40px' }} letterSpacing={0} fontWeight='extrabold' color={color} {...rest}>
      {children}
    </Text>
  )
}
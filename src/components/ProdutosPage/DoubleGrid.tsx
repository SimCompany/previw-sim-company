import { Box, Flex, FlexProps, Grid, GridItem, GridProps } from "@chakra-ui/react";
import Image from "next/image";

import { ReactNode } from 'react'

interface DoubleGridProps extends FlexProps {
  children: ReactNode
  urlImage?: any
  alt?:string
  paragraphPosition?: any
}


export default function DoubleGrid({ children, paragraphPosition, alt, urlImage, ...rest }: DoubleGridProps) {

  return (
    <Box display='flex' mx={{ base: '5%', md: '10%' }} w={{ base: '90%', md: '80%' }} {...rest} alignItems='center' >
      <Box alignContent='center' justifyContent='center' flex='1'>
        {urlImage && <Image src={urlImage} alt={alt} />}
      </Box>

      <Box mx='2.5%' textAlign={paragraphPosition} mt={{ base: '10px', lg: '0px' }} mb={{ base: '50px', md: '0px' }} flex='1'>
        {children}
      </Box>
    </Box>
  )
}
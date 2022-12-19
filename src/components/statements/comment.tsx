import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { ReactNode } from 'react'

import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'

type CommentType = {
  children: ReactNode,
  heigth?: any,
  quotesMT?: any,
  author: string
}


export default function Comment({ heigth = ['400'], quotesMT = ['300'], children, author }: CommentType) {

  return (
    <Box h={heigth} position='relative'>
      <Flex ml={{ base: '10%', md: '15%' }} position='absolute'>
        <Icon as={RiDoubleQuotesL} fontSize={70} />
      </Flex>

      <Box mx={{ base: '15%', md: '25%' }} pt={{ base: '75px', md: '100px' }}>
        {children}
        <Text mt='10' fontWeight='medium'>{author}</Text>
      </Box>

      <Flex justifyContent='end' position='absolute' top={quotesMT} w={{ base: '90%', md: '85%' }}>
        <Icon as={RiDoubleQuotesR} fontSize={70} />
      </Flex>
    </Box>
  )
}
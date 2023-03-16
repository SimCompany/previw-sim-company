import { Box, Divider, Flex, Grid, GridItem, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { RiInstagramLine } from "react-icons/ri";
import { TiSocialFacebookCircular, TiSocialLinkedinCircular } from "react-icons/ti";
import MenuItem from "../Menu/MenuItem";

import LogoWhatsApp from './../../img/global/whatsapp-logo-png-2261.png'

export default function Footer() {

  return (
    <Box as='footer' bg='Blue.800' >
      <Link href='https://api.whatsapp.com/send?phone=5511994354243'>
      <Box position='fixed' right='20px' bottom='20px' zIndex={9999} cursor='pointer'>
        <Image src={LogoWhatsApp} alt='whatsapp' width='50px' height='50px' />
      </Box>
      </Link>
      <Grid
        bgColor='Blue.800'
        gridTemplateColumns={{ base: '1fr', sm: ' 1fr 1fr', lg: '1fr 1fr 1fr' }}
        gridColumnGap='10'
        p={{ base: '50px 5%', sm: '5% 10%', lg: '5% 15%' }}
        mt='0px'>
        <GridItem mb={{ base: '20px', sm: '0px' }}>
          <Text as='h6' letterSpacing='2px' fontSize='20px' color='white'>CONTATO</Text>
          <Stack spacing={1} fontSize='14px'>
            <Text mt='2' fontWeight='light' color='white'>contato@simcompany.com.br</Text>
            <Text fontWeight='light' color='white'>(11) 5039-9046</Text>
          </Stack>
          <Text as='h6' letterSpacing='2px' fontSize='20px' color='white' mt='4'>ENDEREÇO</Text>
          <Text fontWeight='light' fontSize='14px' color='white' mt='2'>Rua Dr. Campos, n°  78 sala 22 e 23, centro - Cerquilho - SP - CPF: 18.520.103</Text>

          <HStack mt='8'>
            <Link href='https://www.instagram.com/sim.company/'>
              <Icon as={RiInstagramLine} mt='0.5' color='white' fontSize='26' />
            </Link>

            <Link href='https://www.linkedin.com/company/sim-company/'>
              <Icon as={TiSocialLinkedinCircular} color='white' fontSize='30' />
            </Link>
          </HStack>
        </GridItem>

        <GridItem mb={{ base: '20px', sm: '0px' }}>
          <Text as='h6' letterSpacing='2px' fontSize='20px' color='white' mb='2'>COMUNICAÇÃO</Text>
          <Stack spacing={2} color='white' fontSize='14px'>
            <MenuItem link='/produtos/comunicacao/goto-connect'>GoTo Connect</MenuItem>
            <MenuItem link='/produtos/comunicacao/goto-room'>GoTo Room</MenuItem>
            <MenuItem link='/produtos/comunicacao/goto-contact-center'>GoTo Contact Center</MenuItem>
            <MenuItem link='/produtos/comunicacao/goto-meeting'>GoTo Meeting</MenuItem>
            <MenuItem link='/produtos/comunicacao/goto-webinar'>GoTo Webinar</MenuItem>
            <MenuItem link='/produtos/comunicacao/novas-possibilidades-com-goto'>Novas possibilidades com GoTo</MenuItem>
          </Stack>
        </GridItem>

        <GridItem mb={{ base: '20px', sm: '0px' }}>
          <Text as='h6' letterSpacing='2px' fontSize='20px' color='white' mb='2'>ACESSO REMOTO</Text>
          <Stack spacing={2} color='white' fontSize='14px'>
            <MenuItem link='/produtos/acesso-remoto/central'>Central</MenuItem>
            <MenuItem link='/produtos/acesso-remoto/goto-my-pc'>GoTo My Pc</MenuItem>
            <MenuItem link='/produtos/acesso-remoto/pro'>Pro</MenuItem>
            <MenuItem link='/produtos/acesso-remoto/goto-resolve'>GoTo Resolve</MenuItem>
            <MenuItem link='/produtos/acesso-remoto/rescue'>Rescue</MenuItem>
          </Stack>
        </GridItem>
      </Grid>

      <Divider mt='-19px' orientation='horizontal' />

      <Flex color='white' fontSize='10px' mx={{ sm: '5%' }} textAlign='center' p='1px' flexDirection='column'>
        <Text>Desenvolvido por Isaques Estúdios | Todos os Direitos Reservados a Sim Company®</Text>
        <Text>Política de Privacidade e Termos de uso</Text>
        <Text>Tecnologia Utilizada: NextJs</Text>
      </Flex>

    </Box>
  )
}
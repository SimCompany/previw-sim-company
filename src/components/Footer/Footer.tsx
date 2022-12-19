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
      {/* <Link> */}
      <Box position='fixed' right='20px' bottom='20px'>
        <Image src={LogoWhatsApp} alt='whatsapp' width='70px' height='70px' />
      </Box>
      {/* </Link> */}
      <Grid
        bgColor='Blue.800'
        gridTemplateColumns={{ base: '1fr', sm: ' 1fr 1fr', lg: '1fr 1fr 1fr' }}
        gridColumnGap='10'
        p={{ base: '50px 5%', sm: '5% 10%', lg: '5% 15%' }}
        mt='0px'>
        <GridItem mb={{ base: '20px', sm: '0px' }}>
          <Text fontWeight='bold' color='white'>Contato</Text>
          <Stack spacing={1}>
            <Text mt='2' fontWeight='light' color='white'>contato@simcompany.com.br</Text>
            <Text fontWeight='light' color='white'>(11) 5039-9046</Text>
          </Stack>
          <Text fontWeight='bold' color='white' mt='4'>Endereço</Text>
          <Text fontWeight='light' color='white' mt='2'>R. Aureliano Guimarães, 172 – Sala 1015 / 1016  - Vila Andrade, São Paulo - SP,  CEP: 05727-160</Text>

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
          <Text fontWeight='bold' color='white' mb='2'>Comunicação</Text>
          <Stack spacing={2} color='white'>
            <MenuItem link='/produtos/comunicacao/comunicacao-em-nuvem'>GoTo Connect</MenuItem>
            <MenuItem link='/produtos/comunicacao/hardware-para-conferencias'>GoTo Room</MenuItem>
            <MenuItem link='/produtos/comunicacao/call-center-em-nuvem'>GoTo Contact Center</MenuItem>
            <MenuItem link='/produtos/comunicacao/plataforma-de-videoconferencia'>GoTo Meeting</MenuItem>
            <MenuItem link='/produtos/comunicacao/plataforma-para-eventos-virtuais'>GoTo Webinar</MenuItem>
            <MenuItem link='/produtos/comunicacao/novas-possibilidades-com-goto'>Novas possibilidades com GoTo</MenuItem>
          </Stack>
        </GridItem>

        <GridItem mb={{ base: '20px', sm: '0px' }}>
          <Text fontWeight='bold' color='white' mb='2'>Acesso Remoto</Text>
          <Stack spacing={2} color='white'>
            <MenuItem link='/produtos/acesso-remoto/monitoramento-e-gerenciamento-remoto'>Central</MenuItem>
            <MenuItem link='/produtos/acesso-remoto/goto-my-pc'>GoTo My Pc</MenuItem>
            <MenuItem link='/produtos/acesso-remoto/pro'>Pro</MenuItem>
            <MenuItem link='/produtos/acesso-remoto/software-suporte-remoto-de-ti'>GoTo Resolve</MenuItem>
            <MenuItem link='/produtos/acesso-remoto/ti-remoto'>Rescue</MenuItem>
          </Stack>
        </GridItem>
      </Grid>

      <Divider mt='-19px' orientation='horizontal' />

      <Flex color='white' fontSize='12px' mx={{ sm: '5%' }} textAlign='center' p='1px' flexDirection='column'>
        <Text>Desenvolvido por Isaques Estúdios | Todos os Direitos Reservados a Sim Company®</Text>
        <Text>Política de Privacidade e Termos de uso</Text>
        <Text>Tecnologia Utilizada: NextJs</Text>
      </Flex>

    </Box>
  )
}
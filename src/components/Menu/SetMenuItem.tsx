import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Divider, Fade, Flex, HStack, Icon, Link, Stack, StackProps, VStack } from "@chakra-ui/react";
import MenuItem from "./MenuItem";

import { IoMdArrowDropright } from 'react-icons/io'

interface SetMenuItemProps extends StackProps {
  mb?: string
}

export default function SetMenuItem({ mb, ...rest }: SetMenuItemProps) {


  return (
    <Stack w='100%' {...rest}>
      <MenuItem link='/' >
        Início
      </MenuItem>
      <MenuItem link='/go-to' >
        Nova GoTo
      </MenuItem>
      <Box position='relative'>
        <Accordion allowToggle>
          <AccordionItem border='none'>
            <AccordionButton p='0px'>
              <Box textAlign='left'>
                Comunicação
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Stack direction='column' textAlign='start' justifyContent='space-around' h='340px'>
                <Link fontSize='16px' href='/produtos/comunicacao/call-center-em-nuvem'>
                  Comunicação em nuvem
                </Link>
                <Link fontSize='16px' href='/produtos/comunicacao/hardware-para-conferencias'>
                  Hardware para conferências
                </Link>
                <Link fontSize='16px' href='/produtos/pabx'>
                  Call Center em nuvem
                </Link>
                <Link fontSize='16px' href='/produtos/pabx'>
                  Plataforma de videoconferência
                </Link>
                <Link fontSize='16px' href='/produtos/pabx'>
                  Plataforma para eventos virtuais
                </Link>
                <Link fontSize='16px' href='/produtos/pabx'>
                  Novas possibilidades com GoTo
                </Link>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
          
          <AccordionItem border='none' mt='5'>
            <AccordionButton p='0px'>
              <Box textAlign='left'>
                Acesso Remoto
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb='0'>
              <Stack direction='column' textAlign='start' justifyContent='space-around' h='140px'>
                <Link fontSize='16px' href='/produtos/central-de-atendimento'>
                  Monitoramentos e gerenciamentos remotos
                </Link>
                <Link fontSize='16px' href='/produtos/hardware-para-conferencias'>
                  Suporte remoto de TI
                </Link>
                <Link fontSize='16px' href='/produtos/pabx'>
                  TI remoto
                </Link>
              </Stack>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border='none' mt='5'>
            <AccordionButton p='0px' >
              <Box textAlign='left' >
                Gerenciamento de senhas
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel  pb='0'>
              <Stack direction='column' textAlign='start' justifyContent='space-around'  h='100px'>
                <Link fontSize='16px' href='/produtos/central-de-atendimento'>
                  Gerenciamento bissnes
                </Link>
                <Link fontSize='16px' href='/produtos/hardware-para-conferencias'>
                  Gerenciamento para empresas
                </Link>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box >
      <MenuItem link='/contato'>
        Contato
      </MenuItem>

    </Stack >
  )
}
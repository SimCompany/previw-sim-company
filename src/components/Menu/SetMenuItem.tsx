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
              <Stack direction='column' textAlign='start' justifyContent='space-around' h='320px'>
                <Link fontSize='16px' href='/produtos/comunicacao/comunicacao-em-nuvem'>
                  GoTo Connect
                </Link>
                <Link fontSize='16px' href='/produtos/comunicacao/hardware-para-conferencias'>
                  GoTo Room
                </Link>
                <Link fontSize='16px' href='/produtos/pabx/produtos/comunicacao/call-center-em-nuvem'>
                  GoTo Contact Center
                </Link>
                <Link fontSize='16px' href='/produtos/comunicacao/plataforma-de-videoconferencia'>
                  GoTo Meeting
                </Link>
                <Link fontSize='16px' href='/produtos/comunicacao/plataforma-para-eventos-virtuais'>
                  GoTo Webinar
                </Link>
                <Link fontSize='16px' href='/produtos/comunicacao/novas-possibilidades-com-goto'>
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
              <Stack direction='column' textAlign='start' justifyContent='space-around' h='240px'>
                <MenuItem link='/produtos/acesso-remoto/monitoramento-e-gerenciamento-remoto'>Central</MenuItem>
                <MenuItem link='/produtos/acesso-remoto/goto-my-pc'>GoTo My Pc</MenuItem>
                <MenuItem link='/produtos/acesso-remoto/pro'>Pro</MenuItem>
                <MenuItem link='/produtos/acesso-remoto/software-suporte-remoto-de-ti'>GoTo Resolve</MenuItem>
                <MenuItem link='/produtos/acesso-remoto/ti-remoto'>Rescue</MenuItem>
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
            <AccordionPanel pb='0'>
              <Stack direction='column' textAlign='start' justifyContent='space-around' h='100px'>
                <MenuItem link='/produtos/senhas/lastpass-busines'>LastPass busines</MenuItem>
                <MenuItem link='/produtos/senhas/gerenciamento-de-senhas'>LastPass pessoal</MenuItem>
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
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Divider, Fade, Flex, HStack, Icon, Link, Stack, StackProps, Text, VStack } from "@chakra-ui/react";
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
              <Text fontSize='18px' textAlign='left'>
                Comunicação
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Stack direction='column' textAlign='start' justifyContent='space-around' h='320px'>
                <Link fontSize='16px' href='/produtos/comunicacao/goto-connect'>
                  GoTo Connect
                </Link>
                <Link fontSize='16px' href='/produtos/comunicacao/goto-room'>
                  GoTo Room
                </Link>
                <Link fontSize='16px' href='/produtos/pabx/produtos/comunicacao/goto-contact-center'>
                  GoTo Contact Center
                </Link>
                <Link fontSize='16px' href='/produtos/comunicacao/goto-meeting'>
                  GoTo Meeting
                </Link>
                <Link fontSize='16px' href='/produtos/comunicacao/goto-webinar'>
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
              <Text fontSize='18px' textAlign='left'>
                Acesso Remoto
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb='0'>
              <Stack direction='column' textAlign='start' justifyContent='space-around' h='240px'>
                <MenuItem link='/produtos/acesso-remoto/central'>Central</MenuItem>
                <MenuItem link='/produtos/acesso-remoto/goto-my-pc'>GoTo My Pc</MenuItem>
                <MenuItem link='/produtos/acesso-remoto/pro'>Pro</MenuItem>
                <MenuItem link='/produtos/acesso-remoto/goto-resolve'>GoTo Resolve</MenuItem>
                <MenuItem link='/produtos/acesso-remoto/rescue'>Rescue</MenuItem>
              </Stack>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border='none' mt='5'>
            <AccordionButton p='0px' >
              <Text fontSize='18px' textAlign='left' >
                Gerenciamento de senhas
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb='0'>
              <Stack direction='column' textAlign='start' justifyContent='space-around' h='100px'>
                <MenuItem link='/produtos/senhas/lastpass-busines'>LastPass busines</MenuItem>
                <MenuItem link='/produtos/senhas/lastpass-pessoal'>LastPass pessoal</MenuItem>
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
import { Box, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, Icon, IconButton, Link, Stack, Text, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../context/SideBarDrawerContext";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import SetMenuItem from "./SetMenuItem";

import { BsArrowRightShort, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { RiFacebookCircleLine } from 'react-icons/ri'
import { SiWhatsapp } from 'react-icons/si'
// import { BsInstagram } from 'react-icons/ai'
// import {  } from 'react-icons/ci'
import { GrInstagram } from 'react-icons/gr'


export default function Menu() {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [] = useState()

  const isDrawer = useBreakpointValue({
    base: true,
    lg: false
  })

  const router = useRouter()


  useEffect(() => {
    onClose()
  }, [router.asPath])

  if (isDrawer) {
    return (
      <>
        <Flex
          justifyContent='space-between'
          h='60px'
          alignSelf='center'
          // maxW={{ '2xl': '1344px' }}
          bgColor='white'
          mx={{ base: '5%', xl: '10%' }}>
          <Logo w='50px' />

          {isDrawer && (
            <IconButton
              icon={<Icon as={RiMenuLine} />}
              fontSize={24}
              variant='unstyled'
              aria-label="Menu"
              onClick={onOpen}
              mt='18px'
            >

            </IconButton>)}
        </Flex>

        <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent bg='Blue.800' p='4'>
              <DrawerCloseButton mt='8' color='white' />


              <DrawerBody mt='6'>
                <Flex
                  display='flex'
                  flexDirection='column'
                  alignItems='center'
                  justifyContent='space-between'
                  h='100%'
                >
                  <SetMenuItem
                    display='flex'
                    alignItems='start'
                    flexDirection='column'
                    color='white'
                    fontSize='18px'
                    direction='column'
                    spacing={4}
                  />

                  <Flex
                    alignItems='center'
                    flexDirection='column'>
                    <Logo
                      w='60px' />
                    <Text
                      mt='4'
                      fontSize='12px'
                      textAlign='center'
                      color='white'
                    >Soluções em telefonia</Text>
                  </Flex>

                </Flex>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>

    )
  }

  return (
    <Flex
      justifyContent='space-between'
      h='80px'
      alignItems='center'
      mx={{ base: '5%', sm: '10%' }}>

      <Flex>
        <Flex
          alignSelf='center'
          borderRightWidth='2px'
          paddingRight='8px'
          marginRight='18px'
          borderRightColor='Blue.800'>
          <Logo w='60px' />
        </Flex>



        <HStack spacing='4'>
          <Link href='https://www.linkedin.com/company/sim-company/'>
            <Icon fontSize='30px' as={AiOutlineLinkedin} />
          </Link>
          <Link href='https://www.instagram.com/sim.company/'>
            <Icon fontSize='24px' as={GrInstagram} />
          </Link>
{/* 
          <Icon fontSize='29px' as={RiFacebookCircleLine} />
          <Icon fontSize='24px' as={SiWhatsapp} /> */}
        </HStack>

      </Flex>


      <IconButton
        icon={<Icon as={RiMenuLine} />}
        fontSize={38}
        variant='unstyled'
        aria-label="Menu"
        onClick={onOpen}
      >

      </IconButton>

      <Drawer onClose={onClose} isOpen={isOpen} placement='top'>
        <DrawerContent>
          <DrawerCloseButton mr={{ base: '5%', xl: '10%' }} mt='20px' fontSize={30} color='Blue.800' />



          <DrawerBody>
            <Flex
              alignItems='center'
              justifyContent='start'
              px='10%'
              w='100%'
              top='0'>
              <Stack justifyContent='space-between' w='100%' flexDirection='row' py='10%'>
                <Box mt='10px'>
                  <Flex alignItems='center'>
                    <Text fontWeight='bold' fontSize='20px'>
                      Seções
                    </Text>
                    <Icon as={BsArrowRightShort} fontSize='24px' />
                  </Flex>
                  <Divider my='10px' />
                  <Stack spacing='10px'>
                    <MenuItem link='/'>Início</MenuItem>
                    <MenuItem link='/go-to'>Nova GoTo</MenuItem>
                    <MenuItem link='/contato'>Contato</MenuItem>
                    <MenuItem link='https://camp.simcompany.com.br/'>PABX</MenuItem>
                  </Stack>
                </Box>

                <Box>
                  <Flex alignItems='center'>
                    <Text fontWeight='bold' fontSize='20px'>
                      Comunicação
                    </Text>
                    <Icon as={BsArrowRightShort} fontSize='24px' />
                  </Flex>
                  <Divider my='10px' />
                  <Stack spacing='10px'>
                    <MenuItem link='/produtos/comunicacao/goto-connect'>GoTo Connect</MenuItem>
                    <MenuItem link='/produtos/comunicacao/goto-room'>GoTo Room</MenuItem>
                    <MenuItem link='/produtos/comunicacao/goto-contact-center'>GoTo Contact Center</MenuItem>
                    <MenuItem link='/produtos/comunicacao/goto-meeting'>GoTo Meeting</MenuItem>
                    <MenuItem link='/produtos/comunicacao/goto-webinar'>GoTo Webinar</MenuItem>
                    <MenuItem link='/produtos/comunicacao/novas-possibilidades-com-goto'>Novas possibilidades com GoTo</MenuItem>
                  </Stack>
                </Box>

                <Box>
                  <Flex alignItems='center'>
                    <Text fontWeight='bold' color='Blue.800' fontSize='20px'>
                      Acesso Remoto
                    </Text>
                    <Icon as={BsArrowRightShort} fontSize='24px' />
                  </Flex>
                  <Divider my='10px' />
                  <Stack spacing='10px'>
                    <MenuItem link='/produtos/acesso-remoto/central'>Central</MenuItem>
                    <MenuItem link='/produtos/acesso-remoto/goto-my-pc'>GoTo My Pc</MenuItem>
                    <MenuItem link='/produtos/acesso-remoto/pro'>Pro</MenuItem>
                    <MenuItem link='/produtos/acesso-remoto/goto-resolve'>GoTo Resolve</MenuItem>
                    <MenuItem link='/produtos/acesso-remoto/rescue'>Rescue</MenuItem>
                  </Stack>
                </Box>

                <Box>
                  <Flex alignItems='center'>
                    <Text fontWeight='bold' fontSize='20px'>
                      Gerenciamento de senhas
                    </Text>
                    <Icon as={BsArrowRightShort} fontSize='24px' />
                  </Flex>
                  <Divider my='10px' />
                  <Stack spacing='10px'>
                    <MenuItem link='/produtos/senhas/lastpass-busines'>LastPass busines</MenuItem>
                    <MenuItem link='/produtos/senhas/lastpass-pessoal'>LastPass pessoal</MenuItem>
                  </Stack>
                </Box>

                <Box>
                  <Flex alignItems='center'>
                    <Text fontWeight='bold' fontSize='20px'>
                      Blog
                    </Text>
                    <Icon as={BsArrowRightShort} fontSize='24px' />
                  </Flex>
                  <Divider my='10px' />
                  <Stack spacing='10px'>
                    <MenuItem link='https://blog.simcompany.com.br/category/duvidas-frequente/'>dúvidas frequentes</MenuItem>
                    <MenuItem link='https://blog.simcompany.com.br/category/novidade/'>Novidades</MenuItem>
                    <MenuItem link='https://blog.simcompany.com.br/category/suporte-ao-cliente/'>Suporte</MenuItem>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          </DrawerBody>


        </DrawerContent>
      </Drawer >

    </Flex >
  )
}
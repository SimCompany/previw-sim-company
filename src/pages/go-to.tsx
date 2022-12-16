import Head from "next/head";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";

import Image from 'next/image'

import H1 from "../components/Texts/H1";
import H3 from "../components/Texts/H3";
import ButtonChakra from "../components/Button/Button";
import H5 from "../components/Texts/H5";

import Logo from '../img/go-to/webclip.png'
import LogoYellow from '../img/go-to/new-goto-hero-p-1080.jpeg'
import Work from '../img/go-to/work-remote.jpg'
import Fundo from '../img/go-to/corner-light.svg'
import cafe from '../img/go-to/cafe-contemplation-p-800.jpeg'
import Yellow from '../img/go-to/corner-bottom.svg'
import Link from "next/link";

export default function GoTo() {

  return (
    <>
      <Head>
        <title>Conheça a nova GoTo | TI sem complicação</title>
      </Head>
      <Box as='main'>
        <Flex
          bgColor='#FFE801'
          flexDirection={{ base: 'column-reverse', md: 'row' }}
        >
          <Box
            display='flex'
            justifyContent='center'
            alignItems={{ base: 'center', md: 'start' }}
            textAlign={{ base: 'center', md: 'start' }}
            flexDirection='column'
            flex='1'
            py={{ base: '20px', md: '0px' }}
            pl={{ sm: '5%', lg: '10%', }}
          >
            <Box w={{ base: '100px', lg: '200px' }}>
              <Image src={Logo} />
            </Box>
            <H1 mt='-10' fontSize={{ base: '1xl', lg: '2xl', xl: '3xl' }} fontWeight='bold'>Conheça a nova GoTo</H1>
            <Text fontSize={{ base: '1xl', lg: '2xl', xl: '3xl' }}>TI sem complicação, em qualquer<br /> lugar</Text>
          </Box>
          <Box flex='1.3'>
            <Image src={LogoYellow} layout='responsive' alt='produtos-go-to' />
          </Box>
        </Flex>

        <Grid
          w='100%'
          maxW={{ base: '90%', lg: '80%', xl: '80%', '2xl': '70%' }}
          mx={{ base: '5%', lg: '10%', xl: '10%', '2xl': '15%' }}
          mt={{ base: '100px', lg: '200px' }}
          gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
          textAlign={{ base: 'center', md: 'start' }}
          gridColumnGap='5%'
          gridRowGap='5%'>

          <Box position='relative'>
            <Box>
              <Image src={Work} />
            </Box>
            <Box
              left={{ base: '-40%', lg: '-10%', xl: '-10%', '2xl': '-15%' }}
              top='-40vh'
              position='absolute'
              zIndex='-100'>
              <Image src={Fundo} width='900' />
            </Box>
          </Box>

          <Box
            display='flex'
            alignContent='center'
            justifyContent='center'
            flexDirection='column'
          >
            <H5>
              Você está se adaptando às necessidades do trabalho flexível. A LogMeIn também. Dê as boas-vindas à GoTo!
            </H5>
            <Text>
              Ferramentas de suporte, acesso e colaboração remota práticas de gerenciar e de usar. A GoTo continua oferecendo os produtos que você adora — o Rescue, Central, e, claro, a família de produtos GoTo.
            </Text>
          </Box>
        </Grid>

        <Grid
          bgColor='#D9E6EC'
          gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr 1fr' }}
          gridRowGap={{ base: '20px' }}
          gridColumnGap='20px'
          my='100px'
          p='8'
          maxW={{ sm: '90%', lg: '80%', xl: '80%', '2xl': '70%' }}
          mx={{ sm: '5%', lg: '10%', xl: '10%', '2xl': '15%' }}>
          <Box alignSelf='center'>
            <H5>A família de ferramentas de TI da GoTo está ganhando dois novos produtos:</H5>
          </Box>
          <Box bgColor='#FFE801' p='8'>
            <H3 my='2'>GoTo Resolve</H3>
            <Text>Acesso, suporte e geração de tickets — tudo remoto a partir de uma única solução.</Text>
            <Link href='/produtos/acesso-remoto/software-suporte-remoto-de-ti'>
              <ButtonChakra mt='4' bgColor='#D9E6EC' p='8' fontWeight='semibold'>
                Saiba mais sobre o<br /> GoTo Resolve
              </ButtonChakra>
            </Link>
          </Box>
          <Box bgColor='#FFE801' p='8'>
            <H3>GoTo Contact</H3>
            <Text>Solução de contact center para sua empresa assumir o controle da fila de chamadas instantaneamente.</Text>
            <Link href='/produtos/comunicacao/call-center-em-nuvem'>
              <ButtonChakra mt='4' bgColor='#D9E6EC' p='8' fontWeight='semibold'>
                Saiba mais sobre o<br /> GoTo Contact
              </ButtonChakra>
            </Link>
          </Box>
        </Grid>

        <Grid
          gridColumnGap='40px'
          my='100px'
          position='relative'
          gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
          textAlign={{ base: 'center', md: 'start' }}
          gridRowGap='5%'
          px={{ base: '5%', lg: '10%', xl: '10%', '2xl': '15%' }}
        >
          <Box alignSelf='center'>
            <H5>A tecnologia que faz o seu trabalho render.</H5>
            <Text py='4'>A GoTo desenvolve ferramentas de conectividade, gerenciamento de TI e suporte para que você possa sempre fazer o melhor, onde quer que você esteja. As nossas soluções são pensadas para a TI e feitas para que todo mundo tenha mais eficiência. Para nós, é importante que você aproveite bem o tempo no trabalho para que seus momentos de lazer sejam ainda melhores.</Text>
            <H5>Fale conosco para saber mais sobre sua nova GoTo!</H5>
          </Box>
          <Box >
            <Box>
              <Image src={cafe} />
            </Box>
          </Box>

          <Box position='absolute' bottom='-44vh' right='0px' zIndex='-100'>
            <Image src={Yellow} width='600px' height='600px' />
          </Box>
        </Grid>
      </Box >
    </>
  )
}
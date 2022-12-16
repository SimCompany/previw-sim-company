import { AspectRatio, Box, Button, Flex, Grid, HStack, Stack, Text, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import Image from 'next/image'

import H2 from "../../../components/Texts/H2";

import Modelo from './../../../img/pabx-vendas/pabx-nuvem.jpg'
import H3 from "../../../components/Texts/H3";

import Information from "../../../components/Information/Topics";
import H1 from "../../../components/Texts/H1";

import Suport from './../../../img/pabx-em-nuvem/24_7.png'
import ZeroTrust from './../../../img/pabx-em-nuvem/ZERO-TRUST.png'
import Time from './../../../img/pabx-em-nuvem/9999.png'
import GoHero from './../../../img/pabx-em-nuvem/go-hero.png'
import H5 from "../../../components/Texts/H5";
import ButtonChakra from "../../../components/Button/Button";
import Head from "next/head";
import { ButtonForm } from "../../../components/ButtonForm";




export default function Home() {
  const { isOpen, onToggle } = useDisclosure()

  const isLargerThan30Em = useBreakpointValue({
    base: true,
    lg: false
  })


  return (
    <>
      <Head>
        <title>Produtos - Pabx em nuvem | Sim company</title>
      </Head>
      <main style={{ maxWidth: '1920px', margin: '0 auto' }}>

        <Grid
          h='90vh'
          bgImage="url('https://i.imgur.com/DosmXtg.jpg')"
          bgPosition='center'
          bgRepeat='no-repeat'
          bgSize='cover'
          gridTemplateColumns={{ base: '1fr', md: '60% 40%' }}
        >
          <Box
            backdropFilter="blur(5px)"
            display='flex'
            justifyContent='center'
            alignItems='start'
            flexDirection='column'
            px={{ base: '5%', md: '15%' }}
          >
            <H1 fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }} fontWeight='bold' color='white' lineHeight='1.3'>
              Descubra o poder que<br />
              sua empresa pode ter<br />
              com a GoTo
            </H1>
            <ButtonChakra link='#contact' px='60px' py={{ base: '6', md: '8' }} mt='6'>
              Saiba mais
            </ButtonChakra>
          </Box>

        </Grid>


        <Grid
          my={{ base: '100px', lg: '200px' }}
          gridTemplateColumns={{ sm: '1fr', md: '1fr', lg: '1fr 1fr', xl: '1fr 1fr' }}
          maxW={{ base: '90%', sm: '90%', md: '85%', lg: '80%', xl: '80%' }}
          mx={{ base: '5%', sm: '5%', md: '7.5%', lg: '10%', xl: '10%' }}
          gridColumnGap='5%'>
          <Box>
            {/* <FormElement /> */}
            <AspectRatio
              flex='1'
              alignSelf='center'
              w='100%'
              maxW={{ base: 'none', xl: '560' }}
              maxH={{ sm: '300', md: '415' }}
              ratio={1}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/AeYqEx5NmCE" title="YouTube video player"
                frameBorder="0"

                allowFullScreen />
            </AspectRatio>

          </Box>
          <Box alignSelf='center'>
            <H3>O GoTo Room funciona em qualquer lugar, do home office às salas de reuniões e da diretoria da empresa</H3>
            <Information
              title='Kits feitos para salas de qualquer tamanho'
              description='Em nossos kits, você vai encontrar soluções robustas de câmera e áudio para melhorar a qualidade de som e eliminar o eco nas suas reuniões.'
            />
            <Information
              title='Compatível com a tela dupla'
              description='Use várias telas para espelhar o conteúdo ou dividir entre as câmeras da sessão e a tela compartilhada.'
            />
          </Box>
        </Grid>


        <Stack
          // maxW={{ base: '90%', sm: '90%', md: '85%', lg: '80%', xl: '80%' }}
          px={{ base: '5%', sm: '5%', md: '7.5%', lg: '10%', xl: '10%' }}
          py='50px'
          bgColor='#ffe900'
          mb='150px'
          justifyContent='space-around'
          textAlign='center'
          spacing={12}
          direction={{ base: 'column', md: 'row' }}
        >

          <Box>
            <Image src={Suport} />
            <H5>Suporte ao cliente <br /> premiado</H5>
          </Box>
          <Box>
            <Image src={ZeroTrust} />
            <H5>Segurança <br />líder no setor</H5>
          </Box>
          <Box>
            <Image src={Time} />
            <H5>Tempo de atividade <br />imbatível</H5>
          </Box>
        </Stack>

        <Flex
          mx={{ base: '5%', sm: '5%', md: '7.5%', lg: '10%', xl: '10%' }}
          maxW={{ base: '90%', sm: '90%', md: '85%', lg: '80%', xl: '80%' }}
          my='50px'
          flexDirection={{ base: 'column-reverse', md: 'row' }}
        >

          <Box
            flex='1'
            alignSelf='center'
            mt={{ base: '40px', md: '0px' }}>
            <H3>Uma solução. Diversas maneiras de permanecer conectado.</H3>
            <Text>Simples, seguro e ideal para o trabalho flexível, nosso sistema de telefonia em nuvem conta com reuniões e mensagens integradas.</Text>
            <HStack spacing={4}>
              <ButtonChakra link='#contact' mt='4' w={{ base: '100%', md: 'auto' }}>
                Acessar agora
              </ButtonChakra>
            </HStack >
          </Box>
          <Box flex='1.5'>
            <Image src={GoHero} />
          </Box>
        </Flex>

        <Box my='50px'>
          <Grid
            gridTemplateColumns={{ base: '1fr', lg: '1fr 40%' }}
            gridColumnGap='5%'
            bgColor='Green.300'
            py={{ base: '7.5%', md: '5%' }}>
            <Box
              ml={{ base: '5%', md: '7%', lg: '20%', '2xl': '20%' }}
              mr={{ base: '5%', md: '7%', lg: '0%', '2xl': '0%' }}
            >
              <H2 color='white' py={{ base: '3%', md: '2.5%' }}>
                Grave todas as ligações da sua empresa
              </H2>
              <Text color='white'>
                Mais segurança e qualidade de atendimento.<br />
                Saiba o que foi falado ao seu cliente e monitore o
                desenvolvimento de sua equipe. A gravação da ligação
                é um dos recursos presentes em todos os planos e você
                ganha sem ter que pagar nada a mais por isso!
              </Text>
            </Box>
          </Grid>


          <Grid
            gridTemplateColumns={{ base: '1fr', lg: '1fr 40%' }}
            gridColumnGap='5%' mt={{ base: '0%', md: '-8%', lg: '-10%' }}>
            <Box
              ml={{ base: '5%', md: '7%', lg: '20%', '2xl': '20%' }}
              mr={{ base: '5%', md: '7%', lg: '0%', '2xl': '0%' }}
              mt={{ base: '8%', md: '10%', lg: '15%' }}
              alignSelf='center'>
              <H2>
                Acesso Remoto
              </H2>
              <Text>
                Comece a cortar custos desnecessários em sua empresa,
                atualize a maneira que sua empresa se comunica,
                Gerenciamento de ramais com apenas 1 número, gravação
                em nuvem e suporte para videoconferência integrada aos
                melhores apps de chamada.
              </Text>
            </Box>
            <Box mt={{ base: '40px', lg: '0' }} mx={{ base: '5%', md: '7%', lg: '0%' }}>
              <Image src={Modelo} />
            </Box>
          </Grid>

          <Flex id='contact' px='10%' bgColor='#f0ef37' mb='-50px' mt='125px' py='75px' flexDirection='column' alignItems='center' textAlign='center'>
            <Text fontSize='3xl'>
              Gostaria de saber quanto custaria essa solução?<br />
              Realize uma cotação sem compromisso
            </Text>
            <ButtonForm maxW='40%' bgColor='Blue.800' color='white' mt='10'>
              Realizar cotação
            </ButtonForm>
          </Flex>
        </Box>
      </main >
    </>
  )
}



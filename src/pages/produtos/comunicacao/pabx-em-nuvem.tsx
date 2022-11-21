import { Box, Button, Flex, Grid, HStack, LinkBox, Text, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import Image from 'next/image'

import H2 from "./../../../components/Texts/H2";
import ButtonChakra from "./../../../components/Button/Button";

import Modelo from './../../../img/pabx-vendas/pabx-nuvem.jpg'
import H3 from "./../../../components/Texts/H3";

import Information from "./../../../components/Information/Topics";
import H1 from "./../../../components/Texts/H1";

import Suport from './../../../img/pabx-em-nuvem/24_7.png'
import ZeroTrust from './../../../img/pabx-em-nuvem/ZERO-TRUST.png'
import Time from './../../../img/pabx-em-nuvem/9999.png'
import GoHero from './../../../img/pabx-em-nuvem/go-hero.png'
import H5 from "./../../../components/Texts/H5";
import H4 from "../../../components/Texts/H4";




export default function Home() {
  const { isOpen, onToggle } = useDisclosure()

  const isLargerThan30Em = useBreakpointValue({
    base: true,
    lg: false
  })


  return (
    <main style={{ maxWidth: '1920px', margin: '0 auto' }}>

      <Grid
        h='90vh'
        bgImage="url('https://i.imgur.com/DosmXtg.jpg')"
        bgPosition='center'
        bgRepeat='no-repeat'
        bgSize='cover'
        gridTemplateColumns='60% 40%'

      >
        <Box
          backdropFilter="blur(5px)"
          // clipPath={'polygon(0 0, 100% 0%, 91% 100%, 0% 100%)'}
          display='flex'
          justifyContent='center'
          alignItems='start'
          flexDirection='column'
          px='15%'
        >
          <H1 fontSize='5xl' fontWeight='bold' color='white'>
            Descubra o poder que<br />
            sua empresa pode ter<br />
            com a GoTo
          </H1>
          <Button px='60px'>
            Saiba mais
          </Button>
        </Box>

      </Grid>


      <Grid
        my={{ base: '200px' }}
        gridTemplateColumns={{ sm: '1fr', md: '1fr', lg: '1fr 1fr', xl: '1fr 1fr' }}
        maxW={{ base: '90%', sm: '90%', md: '85%', lg: '80%', xl: '80%' }}
        mx={{ base: '5%', sm: '5%', md: '7.5%', lg: '10%', xl: '10%' }}
        gridColumnGap='5%'>
        <Box>
          {/* <FormElement /> */}
          <Box>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/AeYqEx5NmCE" title="YouTube video player"
              frameBorder="0"

              allowFullScreen />
          </Box>

        </Box>
        <Box alignSelf='center'>
          <H3>O GoTo Room funciona em qualquer lugar, do home office às salas de reuniões e da diretoria da empresa</H3>
          <Information
            title='Kits feitos para salas de qualquer tamanho'
            description='Em nossos kits, você vai encontrar soluções robustas de câmera e áudio para melhorar a qualidade de som e eliminar o eco nas suas reuniões.'
          />
          <Information
            title='Compativel com a tela dupla'
            description='Use várias telas para espelhar o conteúdo ou dividir entre as câmeras da sessão e a tela compartilhada.'
          />
          {/*  <Information
            title='Sincronize salas com o centro de Administração GoTo'
            description='O GoTo Room é adicionado automaticamente ao seu centro de Administração GoTo para agilizar o gerenciamento de todas as suas salas.'
          /> */}
        </Box>
      </Grid>


      <HStack
        // maxW={{ base: '90%', sm: '90%', md: '85%', lg: '80%', xl: '80%' }}
        px={{ base: '5%', sm: '5%', md: '7.5%', lg: '10%', xl: '10%' }}
        py='50px'
        bgColor='#ffe900'
        mb='150px'
        justifyContent='space-around'
        textAlign='center'
      >

        <Box>
          <Image src={Suport} />
          <H5>Suporte ao cliente <br /> premiado</H5>
        </Box>
        <Box>
          <Image src={ZeroTrust} />
          <H5>Segurança <br />lider no setor</H5>
        </Box>
        <Box>
          <Image src={Time} />
          <H5>Tempo de atividade <br />imbatível</H5>
        </Box>
      </HStack>

      <Flex
        mx={{ base: '5%', sm: '5%', md: '7.5%', lg: '10%', xl: '10%' }}
        maxW={{ base: '90%', sm: '90%', md: '85%', lg: '80%', xl: '80%' }}
        my='50px'>

        <Box
          flex='1'
          alignSelf='center'>
          <H3>Uma solução. Diversas maneiras de permanecer conectado.</H3>
          <Text>Simples, seguro e ideal para o trabalho flexível, nosso sistema de telefonia em nuvem conta com reuniões e mensagens integradas.</Text>
          <HStack spacing={4}>
            <Button>COMPRAR AGORA</Button>
            <Button>SOLICITAR ORÇAMENTO</Button>
          </HStack >
        </Box>
        <Box flex='1.5'>
          <Image src={GoHero} />
        </Box>
      </Flex>

      <Box>
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
              atualize a maneira que sua empresa se comunica!
              Gerenciamento de ramais com apenas 1 número, gravação
              em nuvem e suporte para videoconferência integrada aos
              melhores apps de chamada.
            </Text>
          </Box>
          <Box mt={{ base: '40px', lg: '0' }} mx={{ base: '5%', md: '7%', lg: '0%' }}>
            <Image src={Modelo} />
          </Box>
        </Grid>
      </Box>

      <Box
        mx={{ base: '5%', sm: '5%', md: '7.5%', lg: '10%', xl: '10%' }}
        maxW={{ base: '90%', sm: '90%', md: '85%', lg: '80%', xl: '80%' }}
        textAlign='start'>
        <Text fontSize='4xl'>Sobre Nós..</Text>
        <Text>A Sim Company nasceu para oferecer a melhor experiência em atendimento e para trazer mais
          praticidade para seu dia a dia.<br />
          Somos uma empresa engajada em unir pessoas através da tecnologia, em um mundo cada vez mais
          polarizado. Prezamos as necessidades individuais de cada empresa, seja ela pequena ou uma
          grande corporação.<br />
          Com uma equipe altamente qualificada, preparada para analisar suas necessidades e desenvolver
          projetos que estejam de acordo com a sua realidade, intermediamos soluções e trazemos
          resultados.<br />
          Nosso foco é o seu sucesso!</Text>
      </Box>





      {/* <HStack
        maxW={{ base: '90%', sm: '90%', md: '85%', lg: '80%', xl: '80%' }}
        mx={{ base: '5%', sm: '5%', md: '7.5%', lg: '10%', xl: '10%' }}
        mb='150px'
        justifyContent='space-around'
        textAlign='center'
      >

        <Box>
          <Image src={Suport} />
          <H5>Suporte ao cliente <br /> premiado</H5>
          <Text>Colocar o sistema em funcionamento é tão fácil quanto pedir uma pizza. Configure rapidamente todo o seu encaminhamento de chamadas em um editor visual.</Text>
        </Box>
        <Box>
          <Image src={ZeroTrust} />
          <H5>Suporte ao cliente <br /> premiado</H5>
          <Text>O GoTo Connect funciona onde você estiver. Altere com facilidade entre seu telefone de mesa, aplicativo para desktop ou nosso aplicativo móvel para manter-se conectado.</Text>
        </Box>
        <Box>
          <Image src={Time} />
          <H5>Suporte ao cliente <br /> premiado</H5>
          <Text>Conte com videoconferência HD em todas as licenças. além disso, consolide a lista de ferramentas de comunicação que você usa com um aplicativo simples.</Text>
        </Box>
      </HStack> */}
    </main >
  )
}



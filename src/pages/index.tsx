import { Box, Divider, Flex, Grid, GridItem, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import ButtonChakra from "../components/Button/Button";
import Track from "../components/ProdutosPage/track";
import Slide from "../components/slide/Slide";
import H3 from "../components/Texts/H3";
import H5 from "../components/Texts/H5";

import mg1 from './../img/index/mg1.png'
import mg2 from './../img/index/mg2.png'
import rodape from './../img/index/sim-company-rodape.png'
import Call1 from './../img/index/chamada01.jpg'
import Call2 from './../img/index/chamada02.jpg'

import Suport from './../img/index/24_7.png'
import ZeroTrust from './../img/index/ZERO-TRUST.png'
import Time from './../img/index/9999.png'


export default function Index() {

  return (
    <Box as='main' maxW='1920px' mt='auto'>
      <Box mb='0px'>
        <Slide />
      </Box>

      <Flex
        my='100px'
        mx={{ base: '5%', sm: '5%', md: '7.5%', lg: '10%', xl: '10%' }}
        maxW={{ base: '90%', sm: '90%', md: '85%', lg: '80%', xl: '80%' }}>
        <Box >
          <Image src={Call1} />
        </Box>
        <Stack alignSelf='center' ml='40px' spacing='20px'>
          <Box>
            <H3>Simplifique as comunicações da sua empresa</H3>
            <Text>Procura estabelecer uma conexão com sua equipe e clientes de maneira segura e prática? Veja as principais soluções oferecidas em nosso site.</Text>
          </Box>
          <Box>
            <H5>PABX em Nuvem</H5>
            <Text>O PABX em nuvem é a solução para diversas empresas se comunicarem com seus clientes.</Text>
          </Box>
          <Box>
            <H5>Nossos hardware</H5>
            <Text>Nosso hardware de fácil configuração transforma qualquer espaço em uma sala de conferências totalmente conectada e funcional.</Text>
          </Box>
          <Box>
            <H5>Videoconferência</H5>
            <Text>Nossa plataforma de videoconferência oferece interatividade de ponta, análises criteriosas e integrações eficientes.
            </Text>
          </Box>
        </Stack>
      </Flex>

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
        my='100px'
        mx={{ base: '5%', sm: '5%', md: '7.5%', lg: '10%', xl: '10%' }}
        maxW={{ base: '90%', sm: '90%', md: '85%', lg: '80%', xl: '80%' }}>
        <Box flex='1'>
          <Image src={Call2} />
        </Box>
        <Stack flex='1' alignSelf='center' ml='40px' spacing='20px'>
          <Box>
            <H3>TI remota que muda tudo</H3>
            <Text>Com recursos essenciais de suporte de TI, como acesso remoto, geração de tickets conversacionais e muitos outros, a GoTo mantém todo mundo conectado, onde quer que o trabalho esteja acontecendo.</Text>
          </Box>
          <Box>
            <H5>Gerenciamento remoto</H5>
            <Text>suporte de TI completo, simples e intuitivo, reforçado com segurança de confiança.</Text>
          </Box>
          <Box>
            <H5>Ti remoto</H5>
            <Text>facilidade de uso e tranquilidade como nenhuma outra ferramenta.</Text>
          </Box>
          <Box>
            <H5>Suporte remoto</H5>
            <Text>Segurança avançada. Resoluções ágeis e diretas. Integrações simples.</Text>
          </Box>
        </Stack>
      </Flex>

      <Flex
        mt='100px'
        py='50px'
        px={{ base: '5%', sm: '5%', md: '7.5%', lg: '10%', xl: '10%' }}
        bgColor='#ffe900'
      >
        <Box flex='1' alignSelf='center'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/gTEzqhYLwCI"></iframe>
        </Box>
        <Stack flex='1' alignSelf='center' ml='40px' spacing='20px'>
          <Box>
            <H5>Sistema de telefonia VoIP</H5>
            <Text>A GoTo ajuda na conexão de quem quer adicionar recursos de VoIP ao sistema de telefonia atual ou de quem já tem tudo pronto para fazer a migração completa.</Text>
          </Box>
          <Box>
            <H5>Suporte remoto</H5>
            <Text>Resolva quase qualquer problema de TI — de qualquer lugar — com o software de suporte remoto seguro e flexível da GoTo.</Text>
          </Box>
          <Box>
            <H5>Conexão</H5>
            <Text>Conecte colaboradores de escritórios diferentes promovendo videoconferências envolventes, eficazes e seguras para toda a equipe.</Text>
          </Box>
        </Stack>
      </Flex>

      <Flex
        flexDirection='column'
        mb='-10px'
      >
        <Box
          color='Blue.800'
          // bgColor='Blue.800'
          textAlign='center'
          py={{ base: '130px', xl: '220px' }}
          px={{ base: '5%', sm: '10%' }}
          mb={{ base: '-10px' }}
          flex='1'
        >
          <H5 color='Blue.800' mb='-2'>Sobre</H5>
          <Text
            as='h3'
            fontSize={{ base: '2xl', md: '2xl', lg: '3xl' }}
            letterSpacing={0}
            fontWeight='extrabold'
            color='Blue.800'
          >Sim Company</Text>

          <Text>Sim Company é mais que uma revenda. É uma integradora de soluções para quem precisa de
            uma infraestrutura ágil e acessível, aplicações e serviços de TI, tais como Virtualização,
            Implantação de Sistemas Operacionais, Storage, Backup, Banco de Dados e muito mais.</Text>
        </Box>
        <Box
          w='100%'
          mt={{ base: '-100px', xl: '-8vw', '2xl': '-152px' }}>
          <Image src={rodape} />
        </Box>
      </Flex>

    </Box>
  )
}
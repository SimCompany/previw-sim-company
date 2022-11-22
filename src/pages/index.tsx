import { AspectRatio, Box, Button, Divider, Flex, Grid, GridItem, HStack, Icon, LinkOverlay, Stack, Text } from "@chakra-ui/react";
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
import { BsArrowRightShort } from "react-icons/bs";


export default function Index() {

  return (
    <Box as='main' maxW='1920px' mt='auto'>
      <Box mb='0px'>
        <Slide />
      </Box>

      <Flex
        my={{ base: '100px', lg: '125px' }}
        mx={{ base: '5%', sm: '5%', md: '7.5%', lg: '10%', xl: '10%' }}
        maxW={{ base: '90%', sm: '90%', md: '85%', lg: '80%', xl: '80%' }}
        flexDirection={{ base: 'column', lg: 'row' }}>
        <Box flex='1'>
          <Image src={Call1} />
        </Box>
        <Stack flex='1' alignSelf='center' ml={{ base: '0px', lg: '40px' }} mt={{ base: '20px', lg: '0px' }} spacing='20px'>
          <Box>
            <H3>Simplifique as comunicações da sua empresa</H3>
            <Text>Procura estabelecer uma conexão com sua equipe e clientes de maneira segura e prática? Veja as principais soluções oferecidas em nosso site.</Text>
          </Box>
          <Box>
            <H5>PABX em Nuvem</H5>
            <Text>O PABX em nuvem é a solução para diversas empresas se comunicarem com seus clientes.</Text>
            <Link href='/produtos/comunicacao/call-center-em-nuvem'>
              <Flex alignItems='end' cursor='pointer' w='110px'>
                <Text color='green.800' mt='2' fontSize='18px' _hover={{ textDecoration: 'underline' }}>Acessar</Text>
                <Icon color='green.800' as={BsArrowRightShort} fontSize='24px' ml='1' mb='0.5' />
              </Flex>
            </Link>
          </Box>
          <Box>
            <H5>Nossos hardware</H5>
            <Text>Nosso hardware de fácil configuração transforma qualquer espaço em uma sala de conferências totalmente conectada e funcional.</Text>
            <Link href='/produtos/comunicacao/hardware-para-conferencias'>
              <Flex alignItems='end' cursor='pointer' w='110px'>
                <Text color='green.800' mt='2' fontSize='18px' _hover={{ textDecoration: 'underline' }}>Acessar</Text>
                <Icon color='green.800' as={BsArrowRightShort} fontSize='24px' ml='1' mb='0.5' />
              </Flex>
            </Link>
          </Box>
          <Box>
            <H5>Videoconferência</H5>
            <Text>Nossa plataforma de videoconferência oferece interatividade de ponta, análises criteriosas e integrações eficientes.
            </Text>
            <Link href='/produtos/comunicacao/plataforma-de-videoconferencia'>
              <Flex alignItems='end' cursor='pointer' w='110px'>
                <Text color='green.800' mt='2' fontSize='18px' _hover={{ textDecoration: 'underline' }}>Acessar</Text>
                <Icon color='green.800' as={BsArrowRightShort} fontSize='24px' ml='1' mb='0.5' />
              </Flex>
            </Link>
          </Box>
        </Stack>
      </Flex>

      <Stack
        px={{ base: '5%', sm: '5%', md: '7.5%', lg: '10%', xl: '10%' }}
        py={{base:'100px', md:'50px'}}
        bgColor='#ffe900'
        justifyContent='space-around'
        textAlign='center'
        direction={{ base: 'column', md: 'row' }}

        spacing={{base:'20', md:'4'}}
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
      </Stack>

      <Flex
        my='125px'
        mx={{ base: '5%', sm: '5%', md: '7.5%', lg: '10%', xl: '10%' }}
        maxW={{ base: '90%', sm: '90%', md: '85%', lg: '80%', xl: '80%' }}
        flexDirection={{ base: 'column', lg: 'row' }}>
        <Box flex='1'>
          <Image src={Call2} />
        </Box>
        <Stack flex='1' alignSelf='center' ml={{ base: '0px', lg: '40px' }} mt={{ base: '20px', lg: '0px' }} spacing='20px'>
          <Box>
            <H3>TI remota que muda tudo</H3>
            <Text>Com recursos essenciais de suporte de TI, como acesso remoto, geração de tickets conversacionais e muitos outros, a GoTo mantém todo mundo conectado, onde quer que o trabalho esteja acontecendo.</Text>
          </Box>
          <Box>
            <H5>Gerenciamento remoto</H5>
            <Text>suporte de TI completo, simples e intuitivo, reforçado com segurança de confiança.</Text>
            <Link href='/produtos/acesso-remoto/monitoramento-e-gerenciamento-remoto'>
              <Flex alignItems='end' cursor='pointer' w='110px'>
                <Text color='green.800' mt='2' fontSize='18px' _hover={{ textDecoration: 'underline' }}>Acessar</Text>
                <Icon color='green.800' as={BsArrowRightShort} fontSize='24px' ml='1' mb='0.5' />
              </Flex>
            </Link>
          </Box>
          <Box>
            <H5>Ti remoto</H5>
            <Text>facilidade de uso e tranquilidade como nenhuma outra ferramenta.</Text>
            <Link href='/produtos/acesso-remoto/ti-remoto'>
              <Flex alignItems='end' cursor='pointer' w='110px'>
                <Text color='green.800' mt='2' fontSize='18px' _hover={{ textDecoration: 'underline' }}>Acessar</Text>
                <Icon color='green.800' as={BsArrowRightShort} fontSize='24px' ml='1' mb='0.5' />
              </Flex>
            </Link>
          </Box>
          <Box>
            <H5>Suporte remoto</H5>
            <Text>Segurança avançada. Resoluções ágeis e diretas. Integrações simples.</Text>
            <Link href='/produtos/acesso-remoto/software-suporte-remoto-de-ti'>
              <Flex alignItems='end' cursor='pointer' w='110px'>
                <Text color='green.800' mt='2' fontSize='18px' _hover={{ textDecoration: 'underline' }}>Acessar</Text>
                <Icon color='green.800' as={BsArrowRightShort} fontSize='24px' ml='1' mb='0.5' />
              </Flex>
            </Link>
          </Box>
        </Stack>
      </Flex>

      <Flex
        mt={{ base: '100px', lg: '125px' }}
        py='75px'
        px={{ base: '5%', sm: '5%', md: '7.5%', lg: '10%', xl: '10%' }}
        bgColor='#ffe900'
        flexDirection={{ base: 'column', xl: 'row' }}
      >
        <AspectRatio
          flex='1'
          alignSelf='center'
          w='100%'
          maxW={{ base: 'none', xl: '560' }}
          maxH={{ sm: '300', md: '415' }}
          ratio={1}>
          <iframe
            title='naruto'
            src='https://www.youtube.com/embed/gTEzqhYLwCI'
            allowFullScreen
          />
        </AspectRatio>
        <Stack mt={{ base: '40px', xl: '0px' }} direction={{ base: 'column', md: 'row', xl: 'column' }} flex='1' alignSelf='center' ml={{ base: '0px', xl: '40px' }} spacing='20px'>
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
          >Sobre nós</Text>

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
        <Box
          w='100%'
          mt={{ base: '-100px', xl: '-8vw', '2xl': '-152px' }}>
          <Image src={rodape} />
        </Box>
      </Flex>

    </Box>
  )
}
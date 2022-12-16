import { AspectRatio, Box, Flex, Grid, GridItem, Icon, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import ButtonChakra from "../components/Button/Button";
import Topics from "../components/Information/Topics";
import DoubleGrid from "../components/ProdutosPage/DoubleGrid";
import Track from "../components/ProdutosPage/track";
import H5 from "../components/Texts/H5";


import YellowTrack from './../img/index/fundo-barra.jpg'
import H3 from "../components/Texts/H3";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Logo from './../img/index/sim-company-logo.jpg'
import Connect from './../img/index/conectamos.jpg'
import network from './../img/index/melhores-network.jpg'
import { ArrowButton } from "../components/ArrowButton";
import { ButtonForm } from "../components/ButtonForm";
import Carousel from "react-multi-carousel";

import Partner from './../img/index/goto-parth-network.jpg'
import GoToNetWork from './../img/index/goto-network-celular.jpg'

import gotoMyPc from './../img/index/gotomypc-sim-company.jpg'
import GoToMyPcCelular from './../img/index/gotomypc-sim-company.jpg'
import "react-multi-carousel/lib/styles.css";


export default function Index() {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  })

  const responsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 1
    }
  };

  return (
    <Box as='main' maxW='1920px' mt='auto'>

      <Box>
        {isLargerThan800 ?
          <Carousel infinite autoPlay  transitionDuration={9000} responsive={responsive}>
            <Box>
              <Image src={Partner} alt='partner GoTo Sim Company' />
            </Box>
            <Box>
              <Image src={gotoMyPc} alt='partner GoTo Sim Company' />
            </Box>
          </Carousel>
          :
          <Carousel infinite responsive={responsive}>
            <Box>
              <Image src={GoToNetWork} alt='partner GoTo Sim Company' />
            </Box>
            <Box>
              <Image src={GoToMyPcCelular} alt='partner GoTo Sim Company' />
            </Box>
          </Carousel>
        }
      </Box>

      <DoubleGrid
        my={{ base: '100px', md: '125px', xl: '150px' }}
        flexDirection={{ base: 'column', lg: 'row-reverse' }}
        paragraphPosition={{ base: 'start', md: 'end' }}
        urlImage={network}
      >
        <Topics
          title='As melhores soluções
            em network você
            encontra aqui!'
          description="Otimize a conexão entre sua equipe e seus clientes com ferramentas de comunicação e colaboração. A Sim Company reúne ferramentas e serviços que iram ajudar na estruturação e comunicação da sua empresa."
        />
      </DoubleGrid>


      <DoubleGrid
        my={{ base: '-25px', md: '125px', xl: '150px' }}
        flexDirection={{ base: 'column', lg: 'row' }}
        paragraphPosition={{ base: 'start', md: 'start' }}
        urlImage={Connect}
      >
        <Topics
          title='As melhores soluções
            em network você
            encontra aqui!'
          description="Otimize a conexão entre sua equipe e seus clientes com ferramentas de comunicação e colaboração. A Sim Company reúne ferramentas e serviços que iram ajudar na estruturação e comunicação da sua empresa."
        />
        <ButtonForm>
          FAÇA UMA AVALIAÇÃO AGORA
        </ButtonForm>
      </DoubleGrid>


      <Track
        my={{ base: '50px', md: '200px' }}
        bgImage='https://i.imgur.com/pWrPKy8.jpg'
        title='Sim Company e GoTo
        juntas levando a você novas possibilidades'
      />


      <Grid
        my={{ base: '75px', md: '100px' }}
        mx={{ base: '5%', md: '10%' }}
        gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
        gridColumnGap='5%'
      >
        <GridItem mr='4'>
          <H3>Comunicação e Colaboração</H3>
          <Text mb='6'>Sua empresa precisa mais do que um simples serviço telefônico.</Text>

          <Box my='4'>
            <H5>GoTo Connect</H5>
            <Text>Ligações, reuniões e bate-papo unificados.</Text>
            <ArrowButton link={'/produtos/comunicacao/comunicacao-em-nuvem'} />
          </Box>
          <Box my='4'>
            <H5>GoTo Contact Center</H5>
            <Text>Central de atendimento em nuvem.</Text>
            <ArrowButton link={'/produtos/comunicacao/call-center-em-nuvem'} />
          </Box>
          <Box my='4'>
            <H5>GoTo Meeting</H5>
            <Text>Plataforma de videoconferências.</Text>
            <ArrowButton link={'/produtos/comunicacao/plataforma-de-videoconferencia'} />
          </Box>
          <Box my='4'>
            <H5>GoTo Webinar</H5>
            <Text>plataforma de eventos virtuais.</Text>
            <ArrowButton link={'/produtos/comunicacao/plataforma-para-eventos-virtuais'} />
          </Box>
          <Box my='4'>
            <H5>GoTo Room</H5>
            <Text>Hardware para salas de conferência.</Text>
            <ArrowButton link={'/produtos/comunicacao/hardware-para-conferencias'} />
          </Box>
        </GridItem>

        <GridItem>
          <H3>Acessos e Suporte Remotos</H3>
          <Text mb='6'>Não se deixei limitar, veja novas oportunidades a partir do acesso remoto.</Text>

          <Box my='4'>
            <H5>GoTo Resolve</H5>
            <Text>Suporte de TI completo, simples e intuitivo, que traz facilidade de uso
              e tranquilidade como nenhuma outra ferramenta.</Text>
            <ArrowButton link={'/produtos/acesso-remoto/software-suporte-remoto-de-ti'} />
          </Box>
          <Box my='4'>
            <H5>Logmein Pro</H5>
            <Text>A ferramenta de acesso remoto mais confiável. Acesso em qualquer
              lugar e a qualquer hora a seu trabalho.</Text>
            <ArrowButton link={'/produtos/acesso-remoto/pro'} />
          </Box>
          <Box my='4'>
            <H5>Central</H5>
            <Text>Implemente e automatize remotamente as tarefas de rotina de TI.</Text>
            <ArrowButton link={'/produtos/acesso-remoto/monitoramento-e-gerenciamento-remoto'} />
          </Box>
          <Box my='4'>
            <H5>GoToMyPc</H5>
            <Text>Conecte-se a arquivos, dados e aplicativos do escritório em trânsito
              com o premiado software de área de trabalho remota.</Text>
            <ArrowButton link={'/produtos/acesso-remoto/goto-my-pc'} />
          </Box>
          <Box my='4'>
            <H5>Rescue</H5>
            <Text>Conheça a melhor solução de suporte de TI remoto corporativa do
              mercado, agora, parte da família GoTo.</Text>
            <ArrowButton link={'/produtos/acesso-remoto/ti-remoto'} />
          </Box>
        </GridItem>
      </Grid>


      <Grid
        bgColor='Green.500'
        gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
        gridTemplateRows={{ base: '40% 1fr', sm: '50% 1fr', md: '1fr' }}
        gridRowGap={{ base: '30px', sm: '40px', md: '0px' }}
        gridColumnGap='5%'
        py={{ base: '50px', md: '100px' }}
        px={{ base: '5%', md: '10%' }}
      >
        <AspectRatio maxW='100%' h='350px' ratio={1}>
          <iframe
            title='naruto'
            src='https://www.youtube.com/embed/HwNnYho2bCQ'
            allowFullScreen
          />
        </AspectRatio>
        <Box alignSelf='center'>
          <H3>Otimizando área de TI</H3>
          <Text mb='2'>Gerir um sistema de T.I para sua empresa pode parecer um pouco complexo, cuidar da segurança, acessos, configurações e garantir um sistema que esteja sempre online para que tudo continue funcionar. Pensando nisso a GoTo oferece uma gama de soluções para simplificar todo o sistema de T.I da sua empresa, facilitando acessos, instalações e até mesmo a manutenção dos seus servidores.</Text>

          <Text>A Sim Company vem para agregar ainda mais esse processo, conte com a nossa equipe para analisar seu pedido e apontar as ferramentas certa para o seu negócio.</Text>
        </Box>
      </Grid>


      <Grid
        gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
        gridTemplateRows={{ base: '300px 1fr', md: '1fr' }}
        py={{ base: '50px', md: '100px' }}
        px={{ base: '5%', md: '10%' }}
      >
        <Box display='flex' justifyContent='center' alignItems='center'>
          <Box>
            <Image src={Logo} alt='logo-simcompany' />
          </Box>
        </Box>
        <Flex justifyContent='center' flexDirection='column'>
          <H3>Sim Company</H3>
          <Stack spacing={2}>
            <Text>A Sim Company nasceu para oferecer a melhor experiência em atendimento e para trazer mais praticidade para seu dia a dia.</Text>
            <Text>Somos uma empresa engajada em unir pessoas através da tecnologia, em um mundo cada vez mais polarizado. Prezamos as necessidades individuais de cada empresa, seja ela pequena ou uma grande corporação.</Text>
            <Text>Com uma equipe altamente qualificada, preparada para analisar suas necessidades e desenvolver projetos que estejam de acordo com a sua realidade, intermediamos soluções e trazemos resultados.</Text>
            <Text>Nosso foco é o seu sucesso.</Text>
          </Stack>
        </Flex>
      </Grid>

    </Box>
  )
}
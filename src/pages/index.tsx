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
import Comment from "../components/statements/comment";
import H2 from "../components/Texts/H2";


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

  const commentSlide = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 1
    }
  }


  return (
    <Box as='main' maxW='1920px' mt='auto'>

      <Box>
        {isLargerThan800 ?
          <Carousel draggable={false} infinite autoPlay transitionDuration={9000} responsive={responsive}>
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
          title='As melhores solu????es
            em network voc??
            encontra aqui!'
          description="Otimize a conex??o entre sua equipe e seus clientes com ferramentas de comunica????o e colabora????o. A Sim Company re??ne ferramentas e servi??os que iram ajudar na estrutura????o e comunica????o da sua empresa."
        />
      </DoubleGrid>


      <DoubleGrid
        my={{ base: '-25px', md: '125px', xl: '150px' }}
        flexDirection={{ base: 'column', lg: 'row' }}
        paragraphPosition={{ base: 'start', md: 'start' }}
        urlImage={Connect}
      >
        <Topics
          title='As melhores solu????es
            em network voc??
            encontra aqui!'
          description="Otimize a conex??o entre sua equipe e seus clientes com ferramentas de comunica????o e colabora????o. A Sim Company re??ne ferramentas e servi??os que iram ajudar na estrutura????o e comunica????o da sua empresa."
        />
        <ButtonForm>
          FA??A UMA AVALIA????O AGORA
        </ButtonForm>
      </DoubleGrid>


      <Track
        my={{ base: '50px', md: '200px' }}
        bgImage='https://i.imgur.com/pWrPKy8.jpg'
        title='Sim Company e GoTo
        juntas levando a voc?? novas possibilidades'
      />


      <Grid
        my={{ base: '75px', md: '100px' }}
        mx={{ base: '5%', md: '10%' }}
        gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
        gridColumnGap='5%'
      >
        <GridItem mr='4'>
          <H3>Comunica????o e Colabora????o</H3>
          <Text mb='6'>Sua empresa precisa mais do que um simples servi??o telef??nico.</Text>

          <Box my='4'>
            <H5>GoTo Connect</H5>
            <Text>Liga????es, reuni??es e bate-papo unificados.</Text>
            <ArrowButton link={'/produtos/comunicacao/comunicacao-em-nuvem'} />
          </Box>
          <Box my='4'>
            <H5>GoTo Contact Center</H5>
            <Text>Central de atendimento em nuvem.</Text>
            <ArrowButton link={'/produtos/comunicacao/call-center-em-nuvem'} />
          </Box>
          <Box my='4'>
            <H5>GoTo Meeting</H5>
            <Text>Plataforma de videoconfer??ncias.</Text>
            <ArrowButton link={'/produtos/comunicacao/plataforma-de-videoconferencia'} />
          </Box>
          <Box my='4'>
            <H5>GoTo Webinar</H5>
            <Text>plataforma de eventos virtuais.</Text>
            <ArrowButton link={'/produtos/comunicacao/plataforma-para-eventos-virtuais'} />
          </Box>
          <Box my='4'>
            <H5>GoTo Room</H5>
            <Text>Hardware para salas de confer??ncia.</Text>
            <ArrowButton link={'/produtos/comunicacao/hardware-para-conferencias'} />
          </Box>
        </GridItem>

        <GridItem>
          <H3>Acessos e Suporte Remotos</H3>
          <Text mb='6'>N??o se deixei limitar, veja novas oportunidades a partir do acesso remoto.</Text>

          <Box my='4'>
            <H5>GoTo Resolve</H5>
            <Text>Suporte de TI completo, simples e intuitivo, que traz facilidade de uso
              e tranquilidade como nenhuma outra ferramenta.</Text>
            <ArrowButton link={'/produtos/acesso-remoto/software-suporte-remoto-de-ti'} />
          </Box>
          <Box my='4'>
            <H5>Logmein Pro</H5>
            <Text>A ferramenta de acesso remoto mais confi??vel. Acesso em qualquer
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
            <Text>Conecte-se a arquivos, dados e aplicativos do escrit??rio em tr??nsito
              com o premiado software de ??rea de trabalho remota.</Text>
            <ArrowButton link={'/produtos/acesso-remoto/goto-my-pc'} />
          </Box>
          <Box my='4'>
            <H5>Rescue</H5>
            <Text>Conhe??a a melhor solu????o de suporte de TI remoto corporativa do
              mercado, agora, parte da fam??lia GoTo.</Text>
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
          <H3>Otimizando ??rea de TI</H3>
          <Text mb='2'>Gerir um sistema de T.I para sua empresa pode parecer um pouco complexo, cuidar da seguran??a, acessos, configura????es e garantir um sistema que esteja sempre online para que tudo continue funcionar. Pensando nisso a GoTo oferece uma gama de solu????es para simplificar todo o sistema de T.I da sua empresa, facilitando acessos, instala????es e at?? mesmo a manuten????o dos seus servidores.</Text>

          <Text>A Sim Company vem para agregar ainda mais esse processo, conte com a nossa equipe para analisar seu pedido e apontar as ferramentas certa para o seu neg??cio.</Text>
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
            <Text>A Sim Company nasceu para oferecer a melhor experi??ncia em atendimento e para trazer mais praticidade para seu dia a dia.</Text>
            <Text>Somos uma empresa engajada em unir pessoas atrav??s da tecnologia, em um mundo cada vez mais polarizado. Prezamos as necessidades individuais de cada empresa, seja ela pequena ou uma grande corpora????o.</Text>
            <Text>Com uma equipe altamente qualificada, preparada para analisar suas necessidades e desenvolver projetos que estejam de acordo com a sua realidade, intermediamos solu????es e trazemos resultados.</Text>
            <Text>Nosso foco ?? o seu sucesso.</Text>
          </Stack>
        </Flex>
      </Grid>

      <H3 mx='5%' py='50px' textAlign='center'>Veja o que as pessoas est??o falando</H3>

      <Carousel infinite autoPlay removeArrowOnDeviceType={["all"]} transitionDuration={3000} responsive={commentSlide}>
        <Comment
          heigth={[{ base: '600px', sm: '500px', lg: "450px" }]}
          quotesMT={[{ base: '500px', sm: '300px', lg: "250px" }]}
          author='Quix Comex'>
          <Text mb='4'>
            Para n??s da Quick Comex a parceria de temos com Goto tem
            sido uma maravilha, visto que s??o muito prestativos em ??geis quanto
            aos retornos e suportes.
          </Text>
          <Text>
            N??s optamos por voc??s desde o in??cio da
            nossa empresa, por indica????o de uma empresa parceira nossa e n??o
            temos at?? o presente momento, nada que desabone essa parceria.
          </Text>
        </Comment>
        <Comment
          heigth={[{ base: '900px', sm: '650px', lg: "450px" }]}
          quotesMT={[{ base: '800px', sm: '550px', lg: "350px" }]}
          author='Sogamax - Distribuidora'>
          <Text mb='4'>
            Contratamos mais de 60 linhas voip para modernizar nosso sistema
            que era anal??gico.
          </Text>
          <Text mb='4'>
            Foi algo incr??vel, em pouco tempo estava tudo implementado e
            funcionando. Tem uma curva de aprendizado bem baixa.
            Plataforma gerenci??vel.
          </Text>
          <Text mb='4'>
            Economizamos e melhoramos nossa qualidade de atendimento junto
            aos clientes. O suporte ?? igualmente incr??vel, sempre sendo muito
            educados e sol??citos. Gosto tamb??m dos projetos de implanta????o,
            sendo uma etapa importante de serem conclu??dos.
          </Text>
          <Text>
            Hoje dou nota m??xima de satisfa????o em toda a plataforma, do
            atendimento at?? a entrega.
          </Text>
        </Comment>
        <Comment
          heigth={[{ base: '600px', sm: '500px', lg: "450px" }]}
          quotesMT={[{ base: '500px', sm: '300px', lg: "250px" }]}
          author='Mitsu - Im??veis'>
          <Text mb='4'>
            Os produtos da GoTo tem surpreendido no quesito, facilidade e economia.
            At?? o momento tem sido uma experi??ncia maravilhosa, tudo muito pr??tico
            e de f??cil manuseio.
          </Text>
          <Text>
            O suporte tem sido sensacional, em especial a uma atendente chama
            Sabrina, nota 10. Agrade??o todo o suporte que tem sido prestado desde a
            contrata????o at?? a instala????o.
          </Text>
        </Comment>

      </Carousel>

    </Box >
  )
}
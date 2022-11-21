import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Head from "next/head";
import ButtonChakra from "./../../../components/Button/Button";
import Topics from "./../../../components/Information/Topics";
import DoubleGrid from "./../../../components/ProdutosPage/DoubleGrid";
import Track from "./../../../components/ProdutosPage/track";
import H1 from "./../../../components/Texts/H1";

import Data from './../../img/atendimento/rum02.jpg'
import Center from './../../img/atendimento/rum03.jpg'

import dashboard from './../../img/atendimento/dashboard.jpg'

import ControlForAll from '.././../../img/suporte-ti-remota/parte0.jpg'
import parte1 from './../../../img/suporte-ti-remota/parte1.png'
import parte2 from './../../../img/suporte-ti-remota/part2.png'
import parte3 from './../../../img/suporte-ti-remota/part3.png'
import H3 from "./../../../components/Texts/H3";


export default function AutomatizeTarefas() {

  return (
    <>
      <Head>
        <title>Produtos - Automatize Suas Tarefas | Sim Company</title>
      </Head>

      <main style={{ maxWidth: '1920px', margin: '0 auto' }}>
        <Grid
          height='80vh'
          alignItems='center'
          px='10%'
          w='100%'
          bgImage="url('https://i.imgur.com/qJgIy4i.jpg')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          gridTemplateColumns='1fr 1fr'
          gridTemplateRows='1fr'
          gridColumnGap='10%'>
          <GridItem>
            <H1 lineHeight='40px' fontSize='3xl' color='white' fontWeight='extrabold'>
              Software empresarial<br />
              de suporte remoto simples<br />
              e prático.
            </H1>
            <Text color='white'>
              Segurança avançada. Resoluções ágeis e diretas. Integrações simples.
              Conheça a melhor solução de suporte de TI remoto corporativa do mercado,
              agora, parte da família GoTo.
            </Text>
            <ButtonChakra mt='6' px='8' py='6'>SOLICITAR ORÇAMENTO</ButtonChakra>
          </GridItem>
          <GridItem>
          </GridItem>
        </Grid>

        <Track bgColor='Green.300'
          title='Soluções seguras, ágeis e diretas'
          description="Ofereça suporte multiplataforma, segurança avançada, administração simplificada e muito mais em qualquer
          dispositivo com um software de gestão de TI corporativo superpremiado."
        />

        <DoubleGrid
          flexDirection={{ base: 'column', lg: 'row-reverse' }}
          urlImage={ControlForAll}
          paragraphPosition={{ base: 'center', md: 'end' }}
          my={{ base: '0px', md: '50px', xl: '85px' }}
        >
          <Topics
            title="Acesso a qualquer dispositivo
            com um clique"
            description='Conecte-se a qualquer dispositivo móvel ou computador em segundos. Com recursos como suporte universal para dispositivos Android e iOS, as equipes de TI podem ajudar funcionários e clientes em qualquer lugar do mundo. Encontre rapidamente informações do sistema, controle remoto e configurações de aplicativos. Integre-se com o aplicativo em qualquer dispositivo, dentro ou fora da sua rede, se desejar.'
          />
        </DoubleGrid>


        <DoubleGrid
          my={{ base: '0px', md: '50px', xl: '85px' }}
          flexDirection={{ base: 'column', lg: 'row' }}
          paragraphPosition={{ base: 'center', md: 'start' }}
          urlImage={parte1}
        >
          <Topics
            title='Mais tempo ativo'
            description='Ajude os agentes e funcionários a serem mais produtivos. Com recursos como insights do sistema, scripts e acesso autônomo, os técnicos de serviço podem identificar e resolver problemas sem incomodar os funcionários, mesmo quando o equipamento está ocioso.'
          />
        </DoubleGrid>


        <DoubleGrid
          flexDirection={{ base: 'column', lg: 'row-reverse' }}
          urlImage={parte2}
          my={{ base: '0px', md: '50px', xl: '85px' }}
        >
          <Topics
            paragraphPosition={{ base: 'center', md: 'end' }}
            textAlign={{ base: 'center', md: 'end' }}
            title="Personalize seu atendimento"
            description='Assuma o controle da experiência do cliente em seu suporte remoto. Com uma interface personalizada para empresas, você pode modificar todos os detalhes do suporte ao cliente, como cartões telefônicos, ferramentas de chat, SDKs e até mesmo a experiência de suporte no aplicativo.'
          />
        </DoubleGrid>

        <DoubleGrid
          my={{ base: '0px', md: '50px', xl: '85px' }}
          flexDirection={{ base: 'column', lg: 'row' }}
          paragraphPosition={{ base: 'center', md: 'start' }}
          urlImage={parte3}
        >
          <Topics
            title='Mais tempo ativo'
            description='Ajude os agentes e funcionários a serem mais produtivos. Com recursos como insights do sistema, scripts e acesso autônomo, os técnicos de serviço podem identificar e resolver problemas sem incomodar os funcionários, mesmo quando o equipamento está ocioso.'
          />
        </DoubleGrid>


        <Flex
          flexDirection='column'
          textAlign='center'
          alignItems='center'
          my='100px'>
          <H3
            fontSize='3xl'
          >
            Repense a administração de TI
          </H3>
          <Text>
          Tenha tudo que você precisa para avaliar e gerenciar sua central de atendimento com segurança em um só lugar.
          </Text>
          <ButtonChakra mt='6' px='8' py='6'>Fazer meu pedido</ButtonChakra>
        </Flex>

      </main>
    </>
  )
}
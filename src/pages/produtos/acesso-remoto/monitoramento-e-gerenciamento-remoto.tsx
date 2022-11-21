import { Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Head from "next/head";
import ButtonChakra from "./../../../components/Button/Button";
import Topics from "./../../../components/Information/Topics";
import DoubleGrid from "./../../../components/ProdutosPage/DoubleGrid";
import Track from "./../../../components/ProdutosPage/track";
import H1 from "./../../../components/Texts/H1";
import H3 from "./../../../components/Texts/H3";

import Data from './../../../img/atendimento/rum02.jpg'
import Center from './../../../img/atendimento/rum03.jpg'

import dashboard from './../../../img/atendimento/dashboard.jpg'



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
          bgImage="url('https://i.imgur.com/WYZD9Se.jpg')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          gridTemplateColumns='1fr 1fr'
          gridTemplateRows='1fr'
          gridColumnGap='10%'>
          <GridItem>
            <H1 lineHeight='40px' fontSize='3xl' color='white' fontWeight='extrabold'>
              Implemente e automatize<br />
              remotamente as tarefas<br />
              de rotina de TI
            </H1>
            <Text color='white'>
              Proteja sua empresa com a gestão de terminais e segurança para empresas.
            </Text>
            <ButtonChakra mt='6' px='8' py='6'>SOLICITAR DEMONSTRAÇÃO</ButtonChakra>
          </GridItem>
          <GridItem>
          </GridItem>
        </Grid>

        <Track bgColor='Green.300'
          title='Automatize tarefas de rotina e estimule
          o desenvolvimento da sua empresa'
        />

        <DoubleGrid
          flexDirection={{ base: 'column', lg: 'row-reverse' }}
          urlImage={dashboard}
          paragraphPosition={{ base: 'center', md: 'end' }}
        >
          <Topics
            title="Equipes internas de TI"
            description='Faça mais em menos tempo com acesso remoto confiável e responsivo no iOS e Android e atualizações de software que não atrapalham os usuários finais e relatórios de inventário para manter sua equipe de TI organizada.'
          />
        </DoubleGrid>


        <DoubleGrid
          my={{ base: '0px', md: '50px', xl: '85px' }}
          flexDirection={{ base: 'column', lg: 'row' }}
          paragraphPosition={{ base: 'center', md: 'start' }}
          urlImage={Data}
        >
          <Topics
            title='Fornecedores de
            Serviço Gerenciado'
            description='Prepare seus negócios e clientes com o controle remoto mais confiável, atualizações automáticas de software e agrupamento de computadores e usuários.'
          />
        </DoubleGrid>


        <DoubleGrid
          flexDirection={{ base: 'column', lg: 'row-reverse' }}
          urlImage={Center}
          mb={{ base: '50px', md: '85px' }}
        >
          <Topics
            mb='2'
            paragraphPosition={{ base: 'center', md: 'end' }}
            textAlign={{ base: 'center', md: 'end' }}
            title="Gerencie todos os seus
            endpoints"
            description='Gerencie todos os seus endpoints de qualquer lugar com um painel de visualização única onde você pode monitorar o status de qualquer dispositivo, implantar software e gerenciar alertas de conexão.'
          />
        </DoubleGrid>

        <Flex px='10%' bgColor='#f0ef37' mt='125px' py='75px' flexDirection='column' alignItems='center' textAlign='center'>
            <Text fontSize='3xl'>
              Gostaria de saber quanto custaria essa solução?<br />
              Realize uma cotação sem compromisso
            </Text>
            <Button mt='4' color='Blue.800'>
              Realizar cotação
            </Button>
          </Flex>

        <Text
          fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
          letterSpacing={0}
          fontWeight='bold'
          textAlign='center'
          my={{ base: '50px', lg: '100px' }}
          color='Blue.800'
          >Confira mais vantagens</Text>

        <Grid
          px='10%'
          w='100%'
          mb='80px'
          gridTemplateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
          gridColumnGap="5%"
          gridRowGap="40px"
        >
          <GridItem>
            <H3>Controle remoto</H3>
            <Text>Suporte rápido e fácil a qualquer PC ou Mac, de qualquer lugar.</Text>
          </GridItem>
          <GridItem>
            <H3>Gerenciamento de usuários</H3>
            <Text>Organize seus usuários em grupos, controle as permissões, ative a autenticação de dois fatores e amplie o acesso aos computadores.</Text>
          </GridItem>
          <GridItem>
            <H3>Agrupamento de computadores</H3>
            <Text>Organize os computadores de acordo com local, função, permissões de acesso ou quaisquer critérios especificados por você.</Text>
          </GridItem>
          <GridItem>
            <H3>Gerenciamento de antivírus</H3>
            <Text>Proteja seus computadores com Central Premier com o antimalware líder de mercado.</Text>
          </GridItem>
          <GridItem>
            <H3>Implantação remota</H3>
            <Text>Implante os hosts e configure os pacotes de instalação em todas as máquinas do seu ambiente de TI.</Text>
          </GridItem>
          <GridItem>
            <H3>Monitoramento da integridade</H3>
            <Text>Uma visão completa da integridade de cada host, para detectar problemas críticos e atualizações importantes.</Text>
          </GridItem>
        </Grid>
      </main>
    </>
  )
}
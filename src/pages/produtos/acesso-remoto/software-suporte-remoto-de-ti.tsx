import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Head from "next/head";
import ButtonChakra from "./../../../components/Button/Button";
import Topics from "./../../../components/Information/Topics";
import DoubleGrid from "./../../../components/ProdutosPage/DoubleGrid";
import PresentationProduction from "./../../../components/ProdutosPage/PresentationProduction";
import Track from "./../../../components/ProdutosPage/track";
import H1 from "./../../../components/Texts/H1";
import H3 from "./../../../components/Texts/H3";

import ProSupport from './../../../img/software-suporte-remoto-de-ti/suporte-sim-company.jpg'
import SecurityComputer from './../../../img/software-suporte-remoto-de-ti/seguranca-computador.jpg'
import RemoteAccess from './../../../img/software-suporte-remoto-de-ti/acesso-remoto.jpg'

import Acc1 from './../../../img/software-suporte-remoto-de-ti/acc1.png'
import Acc2 from './../../../img/software-suporte-remoto-de-ti/acc2.png'
import Acc3 from './../../../img/software-suporte-remoto-de-ti/acc3.png'
import Acc4 from './../../../img/software-suporte-remoto-de-ti/acc4.png'
import { ButtonForm } from "../../../components/ButtonForm";


export default function SoftwareSuporteRemotoTI() {

  return (
    <>
      <Head>
        <title>  | Sim Company</title>
      </Head>

      <main style={{ maxWidth: '1920px', margin: '0 auto' }}>
        <Grid height='80vh'
          alignItems='center'
          px='10%'
          w='100%'
          backgroundImage="url('https://i.imgur.com/aOFuHvy.jpg')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          gridTemplateColumns='1fr 1fr'
          gridTemplateRows='1fr'
          gridColumnGap='10%'>
          <GridItem>
            <H1 lineHeight='40px' mb='20px' fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} color='White' fontWeight='extrabold' >
              Software de suporte<br />
              remoto de TI que muda tudo
            </H1>
            <Text color='White'>O GoTo Resolve ??: suporte de TI completo, simples e intuitivo, refor??ado com seguran??a de confian??a, que traz facilidade de uso e tranquilidade
              como nenhuma outra ferramenta</Text>
            <ButtonChakra link='#contact' mt='6' px={{ base: '6', sm: '10' }} py='8'>FALAR COM DEPARTAMENTO</ButtonChakra>
          </GridItem>
          <GridItem>

          </GridItem>
        </Grid>


        <Track bgColor='Green.300'
          title='Plataforma de eventos virtuais completa'
          description='Com modos personalizados, recursos interativos, an??lises detalhadas, integra????es profundas e pre??os flex??veis,
          nossa plataforma de webinar intuitiva tem tudo o que voc?? precisa para hospedar eventos virtuais do tamanho que voc?? deseja.'
        />



        <Grid my={{ base: '50px', md: '85px' }} gridTemplateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} gridTemplateRows='1fr' gridColumnGap='5%' width='75%' mx='12.5%'>
          <PresentationProduction
            urlImage={ProSupport}
            title="Suporte Pro"
            description="Responda, aja e resolva problemas. Tudo em um s?? lugar. Agora, resolver t??quetes de suporte t??cnico ficou t??o f??cil quanto bater papo."
          />
          <PresentationProduction
            my={{ base: '14', md: '0' }}
            urlImage={SecurityComputer}
            title="Aumente a produtividade"
            description="Recursos de otimiza????o de tempo, como o acesso n??o supervisionado e o gerenciamento de v??rias sess??es permitem que agentes e colaboradores fa??am ainda mais."
          />
          <PresentationProduction
            urlImage={RemoteAccess}
            title="Simplifique a seguran??a de TI"
            description="Com seguran??a de n??vel empresarial e facilidade de uso para os consumidores, os sistemas se mant??m seguros enquanto os neg??cios seguem operando."
          />
        </Grid>

        <Flex id='contact' mx='5%' flexDirection='column' alignItems='center'>
          <H3 textAlign={{ base: 'center' }} mb='20px'>
            O GoTo Resolve cria mais possibilidades<br />
            para equipes internas e remotas
          </H3>
          <ButtonForm maxW={{base:'90%', md:'40%'}}>
            Fazer or??amento
          </ButtonForm>
        </Flex>

        <DoubleGrid
          my={{ base: '50px', md: '85px' }}
          flexDirection={{ base: 'column', lg: 'row-reverse' }}
          urlImage={Acc1}
          textAlign={{ base: 'start', lg: "end" }}
        >
          <Topics
            mt='6'
            title='Acesso remoto e suporte de TI'
            description='Resolva problemas com agilidade come??ando com um fluxo de acesso r??pido e simples. Um ??nico painel com todas as ferramentas de que o agente precisa para resolver problemas, como:'
            topics={[
              'Diagn??stico de sistema durante a sess??o',
              'Reinicializa????o/reconex??o',
              'Modo de administra????o',
              'Transfer??ncia de arquivos',
              'Gerenciamento de v??rias sess??es',
              'e muito mais...'
            ]}
          />
        </DoubleGrid>


        <DoubleGrid
          my={{ base: '50px', md: '85px' }}
          flexDirection={{ base: 'column', lg: 'row' }}
          urlImage={Acc2}
        >
          <Topics
            title='Solu????o de problemas multiplataforma'
            description='N??o importa onde ou como sua equipe est?? trabalhando, resolu????es mais f??ceis a aguardam.

            Os agentes podem usar:'
            topics={[
              'Chromebooks, Linux e tablets',
              'Navegadores ou o aplicativo',
              'PCs, Macs, dispositivos m??veis iOS ou Android, Chromebooks e tablets',
              'Dispositivos desconectados, como impressoras e roteadores Wi-Fi dom??sticos, por meio do compartilhamento de c??mera sem necessidade de download',
            ]}
          />
        </DoubleGrid>


        <DoubleGrid
          my={{ base: '50px', md: '85px' }}
          flexDirection={{ base: 'column', lg: 'row-reverse' }}
          urlImage={Acc3}
          textAlign={{ base: 'start', lg: "end" }}
        >
          <Topics
            title='Gera????o de t??quetes conversacionais'
            description='Personalize a abordagem de gera????o de t??quetes e facilite o acesso de todos ao suporte:'
            topics={[
              'Envie, gerencie, comente e obtenha atualiza????es de suporte remoto em tempo real com plataformas de mensagens empresariais como o MS Teams e o Slack.',
              'Continue trabalhando com a gera????o de t??quetes por e-mail tradicional e nosso console de suporte remoto baseado na Web, caso sua equipe prefira.'
            ]}
          />
        </DoubleGrid>


        <DoubleGrid
          my={{ base: '50px', md: '85px' }}
          flexDirection={{ base: 'column', lg: 'row' }}
          urlImage={Acc4}
        >
          <Topics
            title='Seguran??a avan??ada'
            description='Proteja sua empresa com protocolos l??deres do setor aprovados pelo governo que oferecem uma seguran??a imbat??vel, incluindo:'
            topics={[
              'Suporte baseado em permiss??es',
              'Advanced Encryption Standard (AES) de 256 bits de ponta a ponta',
              'Transport Layer Security (TLS)',
              'Controle de acesso com base em identidade conforme o modelo de confian??a zero',
              'Autentica????o multifator (MFA)',
              'Login ??nico (SSO)',
            ]}
          />
        </DoubleGrid>

      </main>
    </>
  )
}
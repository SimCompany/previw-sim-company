import { Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Head from "next/head";
import H5 from "../../../components/Texts/H5";
import ButtonChakra from "./../../../components/Button/Button";
import Topics from "./../../../components/Information/Topics";
import DoubleGrid from "./../../../components/ProdutosPage/DoubleGrid";
import Track from "./../../../components/ProdutosPage/track";
import H1 from "./../../../components/Texts/H1";
import H3 from "./../../../components/Texts/H3";


import GoToMyPc from './../../../img/goto-my-pc/gotomypc-01.jpg'
import s1 from './../../../img/goto-my-pc/s1.jpg'
import RemoteDevice from './../../../img/goto-my-pc/dispositivo-remoto-online.jpg'
import { ButtonForm } from "../../../components/ButtonForm";



export default function gotoMyPc() {

  return (
    <>
      <Head>
        <title>Produtos - Last Pass Busines | Sim Company</title>
      </Head>

      <main style={{ maxWidth: '1920px', margin: '0 auto' }}>
        <Grid
          height='80vh'
          alignItems='center'
          px='10%'
          w='100%'
          bgImage="url('https://i.imgur.com/H8H4i59.jpg')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          gridTemplateColumns='1fr 1fr'
          gridTemplateRows='1fr'
          gridColumnGap='10%'>
          <GridItem>
            <H1 lineHeight={{ base: '48px', lg: '58px' }} fontSize={{ base: '40px', lg: '50px' }} color='white' fontWeight='extrabold'>
              Acesse seu Mac ou
              PC de qualquer lugar,
              em qualquer dispositivo
            </H1>

            <ButtonChakra link='#contact' mt='6' px='8' py='6'>SOLICITAR AVALIAÇÃO</ButtonChakra>
          </GridItem>
          <GridItem>
          </GridItem>
        </Grid>

        <Track
          mb='150px'
          bgColor='Green.300'
          title='Acesso remoto ao computador
          mais simples, mais seguro e mais econômico do que nunca'
        />


        <Grid
          px='10%'
          w='100%'
          mb='80px'
          gridTemplateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
          gridColumnGap="5%"
          gridRowGap="40px"
          textAlign='center'
        >
          <GridItem>
            <H5>
              Acesso remoto a dispositivos
            </H5>
            <Text>
              Vá além do laptop. Obtenha uma visão instantânea de sua área de trabalho de qualquer PC, Mac, iPad, iPhone, Kindle Fire ou dispositivo Android.
            </Text>
          </GridItem>
          <GridItem>
            <H5>
              Produtividade aumentada
            </H5>
            <Text>
              Mantenha as tarefas concluídas e os clientes satisfeitos com as ferramentas de produtividade premiadas – desde a transferência de arquivos de arrastar e soltar até o acesso de convidados e impressão remota e muito mais.
            </Text>
          </GridItem>
          <GridItem>
            <H5>
              Segurança melhorada
            </H5>
            <Text>
              Juntamente com o software antivírus da Bitdefender, o GoToMyPC usa criptografia AES de 256 bits de nível bancário, autenticação multifator, senhas duplas e muito mais para garantir que cada sessão remota seja segura.
            </Text>
          </GridItem>
        </Grid>


        <Flex px='10%' my={{ base: '50px', sm: '100px' }} py='75px' flexDirection='column' alignItems='center' textAlign='center'>
          <Text as='h5' fontSize={{ base: '40px', lg: '50px' }}>
            O padrão da indústria para acesso remoto<br />
            a computadores por mais de 20 anos.
          </Text>
          <ButtonForm
            maxW={{ base: '90%', md: '40%' }}
            mt='10'>
            Realizar avaliação
          </ButtonForm>
        </Flex>


        <DoubleGrid
          flexDirection={{ base: 'column', lg: 'row-reverse' }}
          urlImage={GoToMyPc}
          paragraphPosition={{ base: 'center', md: 'end' }}
        >
          <Topics
            title="O que diferencia o
            GoToMyPC de outras soluções
            de área de trabalho remota:
            "
            topics={['Depois que o GoToMyPC estiver instalado em sua área de trabalho, você poderá iniciar uma conexão remota de PC a partir de qualquer dispositivo por meio do portal online. Basta pressionar Conectar e seus arquivos, aplicativos e rede aparecerão como se você estivesse sentado em frente ao seu computador. É muito simples.', 'O LastPass Business facilita a vida dos usuários e das equipes de TI ao capacitar suas equipes. Economize tempo simplificando o gerO GoToMyPC simplesmente funciona – esteja você trabalhando em outro escritório, hotel ou até mesmo em um computador público. Com um design de protocolo compatível com endereços IP dinâmicos e estáticos, rede e conversão de endereço de porta (NAT/PAT) e firewalls, o GoToMyPC se integra a qualquer infraestrutura de rede e segurança existente.']}
          />
        </DoubleGrid>


        <DoubleGrid
          my={{ base: '0px', md: '50px', xl: '85px' }}
          flexDirection={{ base: 'column', lg: 'row' }}
          paragraphPosition={{ base: 'center', md: 'start' }}
          urlImage={s1}
        >
          <Topics
            title='Recursos que facilitam
            seu dia-a-dia'
            topics={['Obtenha acesso rápido ao computador remoto, sempre. O GoToMyPC compacta altamente os dados para minimizar o tempo de atraso, para que você se sinta como se estivesse sentado em frente à área de trabalho do host. E com recursos como visualizador de compartilhamento de tela, transferência de arquivos do tipo arrastar e soltar, impressão remota, convite de convidados e monitoramento de conectividade ativa, você pode ficar verdadeiramente flexível.', 'A configuração é automática, nenhum treinamento é necessário e o suporte ao cliente gratuito está disponível 24 horas por dia, 7 dias por semana.']}
          />
        </DoubleGrid>


        <DoubleGrid
          flexDirection={{ base: 'column', lg: 'row-reverse' }}
          urlImage={RemoteDevice}
          mb={{ base: '50px', md: '85px' }}
        >
          <Topics
            mb='2'
            paragraphPosition={{ base: 'center', md: 'end' }}
            textAlign={{ base: 'center', md: 'end' }}
            title="Acesso remoto sem estresse
            ao PC a partir do seu dispositivo
            iPad, iPhone, Android ou Kindle."
            description='Mantenha-se produtivo onde quer que vá usando seu dispositivo móvel preferido. Com os aplicativos móveis GoToMyPC, você pode trabalhar em qualquer iPad, iPhone, Android e outro dispositivo móvel e conectar-se em redes 3G, 4G e Wi-Fi. Você pode até incorporar controle de mouse, zoom de tela e acesso total ao teclado.'
          />
        </DoubleGrid>
      </main>
    </>
  )
}
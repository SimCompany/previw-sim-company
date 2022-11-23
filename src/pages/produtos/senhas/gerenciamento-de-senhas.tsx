import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Head from "next/head";
import ButtonChakra from "../../../components/Button/Button";
import Topics from "../../../components/Information/Topics";
import DoubleGrid from "../../../components/ProdutosPage/DoubleGrid";
import Track from "../../../components/ProdutosPage/track";
import H1 from "../../../components/Texts/H1";
import H3 from "../../../components/Texts/H3";
import H5 from "../../../components/Texts/H5";

import Acess from './../../../img/gerenciament-de-senhas/s2.jpg'


export default function GerenciamentoDeSenhas() {

  return (
    <>
      <Head>
        <title>Gerenciamento de senhas | Sim Company</title>
      </Head>

      <main style={{ maxWidth: '1920px', margin: '0 auto' }}>
        <Grid
          height='80vh'
          alignItems='center'
          px='10%'
          w='100%'
          bgImage="url('https://i.imgur.com/K0AuW6H.jpg')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          gridTemplateColumns='1fr 1fr'
          gridTemplateRows='1fr'
          gridColumnGap='10%'>
          <GridItem>
            <H1 lineHeight='40px' fontSize='3xl' color='white' fontWeight='extrabold'>
              Gerenciamento de<br />
              Senhas em Qualquer Lugar

            </H1>
            <Text color='white'>
              Agora, a vida é online: o trabalho, a diversão, o contato com a família e os amigos...
              O LastPass coloca sua vida digital na palma das suas mãos, de um jeito simples e seguro.
            </Text>
            <ButtonChakra mt='6' px='8' py='6'>Fazer meu pedido</ButtonChakra>
          </GridItem>
          <GridItem>
          </GridItem>
        </Grid>

        <Track bgColor='Green.300'
          title='Piloto automático para todas as suas senhas'
          description="O LastPass elimina obstáculos para que você tenha mais tempo para fazer as coisas de que mais gosta."
        />

        <DoubleGrid
          my={{ base: '0px', md: '50px', xl: '85px' }}
          flexDirection={{ base: 'column', lg: 'row' }}
          paragraphPosition={{ base: 'center', md: 'start' }}
          urlImage={Acess}
        >
          <Topics
            title='Tranquilidade onde quer
            que você esteja'
            description='Salve a senha uma vez e ela ficará disponível imediatamente em todos os seus dispositivos. Com o Premium, o LastPass está sempre com você, em todos os seus dispositivos.'
          />
        </DoubleGrid>


        <Grid
          px='10%'
          w='100%'
          mb='80px'
          gridTemplateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
          gridColumnGap="5%"
          gridRowGap="40px"
        >
          <GridItem>
            <H5>É só fazer o login e pronto</H5>
            <Text>Depois de salvar uma senha no LastPass, você sempre a terá à disposição quando precisar, tornando o login rápido e fácil.</Text>
          </GridItem>
          <GridItem>
            <H5>Login sem senha</H5>
            <Text>Use o LastPass Authenticator para acessar seu cofre — não precisa usar a senha mestre.</Text>
          </GridItem>
          <GridItem>
            <H5>Segurança avançada</H5>
            <Text>O gerador de senhas integrado cria senhas longas e aleatórias para proteger suas contas dos hackers.</Text>
          </GridItem>
          <GridItem>
            <H5>Armazene registros digitais</H5>
            <Text>Números de seguro, títulos, senhas de Wi-Fi... mantenha todas as suas notas seguras e fáceis de achar.</Text>
          </GridItem>
          <GridItem>
            <H5>Compartilhamento com facilidade</H5>
            <Text>Algumas informações não devem ser enviadas por mensagem. Compartilhe senhas e notas com conveniência e segurança com qualquer pessoa.</Text>
          </GridItem>
          <GridItem>
            <H5>Monitoramento da dark web</H5>
            <Text>Pare de se preocupar com vazamentos de dados. Receba alertas se seus dados pessoais estiverem em risco.</Text>
          </GridItem>
        </Grid>


        <Flex
          flexDirection='column'
          textAlign='center'
          alignItems='center'
          my='100px'
          mx='5'
          >
          <H3
            fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
          >
            O LastPass conta com a confiança de<br />
            especialistas do mundo todo
          </H3>
          <Text>
            Você merece o que há de melhor em segurança. Com o LastPass, suas informações<br />
            ficam guardadas, seguras e escondidas (nem nós temos acesso a elas).
          </Text>
          <ButtonChakra mt='6' px='8' py='6'>Fazer meu pedido</ButtonChakra>
        </Flex>
      </main>
    </>
  )
}
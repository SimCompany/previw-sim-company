import { Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Head from "next/head";
import { ButtonForm } from "../../../components/ButtonForm";
import H5 from "../../../components/Texts/H5";
import ButtonChakra from "./../../../components/Button/Button";
import Topics from "./../../../components/Information/Topics";
import DoubleGrid from "./../../../components/ProdutosPage/DoubleGrid";
import Track from "./../../../components/ProdutosPage/track";
import H1 from "./../../../components/Texts/H1";
import H3 from "./../../../components/Texts/H3";


import Data from './../../../img/lastpass-busines/chamadas.jpg'
import dashboard from './../../../img/lastpass-busines/s1.jpg'
import Center from './../../../img/lastpass-busines/s2.jpg'



export default function lastPassBusines() {

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
          bgImage="url('https://i.imgur.com/1fux6iW.jpg')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          gridTemplateColumns='1fr 1fr'
          gridTemplateRows='1fr'
          gridColumnGap='10%'>
          <GridItem>
            <H1 lineHeight='40px' fontSize='3xl' color='white' fontWeight='extrabold'>
              Gerenciamento de senhas descomplicado<br />
              Melhore os hábitos e a segurança<br />
              das senhas sem reduzir a praticidade.
            </H1>
            <ButtonChakra link='#contact' mt='6' px='8' py='6'>SOLICITAR AVALIAÇÃO</ButtonChakra>
          </GridItem>
          <GridItem>
          </GridItem>
        </Grid>

        <Track
          mb='150px'
          bgColor='Green.300'
          title='O cofre de senhas que coloca sua empresa no comando'
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
            <H5>Elimine a reutilização de senhas por funcionários</H5>
            <Text>Garanta que os funcionários mantenham bons hábitos em relação a senhas com o gerador de senhas LastPass integrado.</Text>
          </GridItem>
          <GridItem>
            <H5>Gerencie e compartilhe senhas em um só local</H5>
            <Text>Ofereça a cada usuário um cofre próprio personalizado, mantendo a supervisão com um painel de administração robusto.</Text>
          </GridItem>
          <GridItem>
            <H5>Proteja dados confidenciais</H5>
            <Text>Mantenha as credenciais, anotações e informações de todos seguras adotando o modelo de segurança de conhecimento zero do LastPass.</Text>
          </GridItem>
        </Grid>


        <Flex px='10%' mt={{ base: '50px', sm: '100px' }} py='75px' flexDirection='column' alignItems='center' textAlign='center'>
          <Text fontSize={{ base: '2xl', lg: '3xl' }}>
            Gostaria de saber quanto custaria essa solução?<br />
            Realize uma cotação sem compromisso
          </Text>
          <ButtonForm mt='10' maxW={{base:'90%', md:'40%'}}>
            Solicitar cotação
          </ButtonForm>
        </Flex>


        <DoubleGrid
          flexDirection={{ base: 'column', lg: 'row-reverse' }}
          urlImage={Center}
          paragraphPosition={{ base: 'center', md: 'end' }}
        >
          <Topics
            title="Proteja sua empresa de
            vazamentos com lastpass"
            topics={['Bons hábitos e práticas relacionadas às senhas das empresas são essenciais no combate às violações de dados. No entanto, as práticas tradicionais de gerenciamento de senhas podem ser muito complicadas para funcionários e administradores', 'O LastPass Business facilita a vida dos usuários e das equipes de TI ao capacitar suas equipes. Economize tempo simplificando o gerenciamento de senhas de funcionários e fornecendo aos administradores informações úteis, desde relatórios avançados até mais de 100 políticas de segurança personalizáveis.']}
          />
        </DoubleGrid>


        <DoubleGrid
          my={{ base: '0px', md: '50px', xl: '85px' }}
          flexDirection={{ base: 'column', lg: 'row' }}
          paragraphPosition={{ base: 'center', md: 'start' }}
          urlImage={dashboard}
        >
          <Topics
            title='O futuro é sem senha, e a LastPass
            lidera esse movimento'
            topics={['Supere as barreiras de login. Livre-se do passado permitindo que todos os funcionários façam login sem senha em um cofre com centenas de acessos à web armazenados.', 'Ao fazer login sem uma senha, eles podem descriptografar seu cofre com o LastPass Authenticator sem usar sua senha mestra.', 'Simplifique os logins dos funcionários removendo as complicações que as senhas trazem.', 'Aplique políticas de segurança tão rígidas quanto exigir uma senha mestra para substituí-la.', 'Reduza os riscos associados ao uso de senhas de funcionários.']}
          />
        </DoubleGrid>


        <DoubleGrid
          flexDirection={{ base: 'column', lg: 'row-reverse' }}
          urlImage={Data}
          mb={{ base: '50px', md: '85px' }}
        >
          <Topics
            mb='2'
            paragraphPosition={{ base: 'center', md: 'end' }}
            textAlign={{ base: 'center', md: 'end' }}
            title="Gerencie todos os seus
            endpointFacilite o acesso dos funcionários
            com o logon único (SSO)"
            description='Gerencie todos os seus endpoints de qualquer lugar com um painel de visualização única onde você pode monitorar o status de qualquer dispositivo, implantar software e gerenciar alertas de conexão.'
          />
        </DoubleGrid>

        <Text
          fontSize='3xl'
          letterSpacing={0}
          fontWeight='bold'
          textAlign='center'
          my={{ base: '50px', lg: '100px' }}
          mx={{ base: '5%' }}
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
            <H5>
              Ofereça controle granular de
              usuários aos administradores
            </H5>
            <Text>
              Obtenha informações sobre comportamentos em relação a senhas e relatórios de segurança e de login para aumentar a conformidade.
            </Text>
          </GridItem>
          <GridItem>
            <H5>
              Simplifique a implementação
            </H5>
            <Text>
              Automatize a ativação e a desativação de usuários integrando o LastPass ao diretório de usuários e aos provedores de identidade.
            </Text>
          </GridItem>
          <GridItem>
            <H5>
              Otimize o acesso dos funcionários
            </H5>
            <Text>
              Facilite os acessos e o trabalho dos funcionários dando adeus às senhas.
            </Text>
          </GridItem>
          <GridItem>
            <H5>
              Ssupervisão da TI com um
              console de administração
            </H5>
            <Text>
              O console de administração do LastPass oferece supervisão completa às equipes de TI. Simplifique as responsabilidades das equipes fornecendo a elas um painel de gerenciamento de segurança completo.
            </Text>
          </GridItem>
          <GridItem>
            <H5>
              Gerenciamento de senhas
              empresarial
            </H5>
            <Text>
              Grandes empresas precisam de um gerenciador de senhas integrado à tecnologia que já usam e a toda a organização. E o LastPass Business faz exatamente isso.
            </Text>
          </GridItem>
          <GridItem>
            <H5>
              Contas Families gratuitas
            </H5>
            <Text>
              Dê segurança para os funcionários e sua família para viverem e trabalharem de onde quiserem com contas gratuitas do LastPass Families. Conceder mais cinco licenças do LastPass a amigos e familiares
            </Text>
          </GridItem>
        </Grid>
      </main>
    </>
  )
}
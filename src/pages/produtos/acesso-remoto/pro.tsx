import { Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Head from "next/head";
import { ButtonForm } from "../../../components/ButtonForm";
import ButtonChakra from "./../../../components/Button/Button";
import Topics from "./../../../components/Information/Topics";
import DoubleGrid from "./../../../components/ProdutosPage/DoubleGrid";
import Track from "./../../../components/ProdutosPage/track";
import H1 from "./../../../components/Texts/H1";
import H3 from "./../../../components/Texts/H3";


import Data from './../../../img/central/chamadas-s1.jpg'
import dashboard from './../../../img/central/chamadas-s2.jpg'
import Center from './../../../img/central/chamadas-s3.jpg'



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
          bgImage="url('https://i.imgur.com/EHDYn81.jpg')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          gridTemplateColumns='1fr 1fr'
          gridTemplateRows='1fr'
          gridColumnGap='10%'>
          <GridItem>
            <H1 lineHeight='40px' fontSize='3xl' color='white' fontWeight='extrabold'>
              A liberdade de controlar<br />
              seus acessos de onde<br />
              você estiver
            </H1>
            <Text color='white'>
              A ferramenta de acesso remoto mais confiável
            </Text>
            <ButtonChakra link='#contact' mt='6' px='8' py='6'>SOLICITAR DEMONSTRAÇÃO</ButtonChakra>
          </GridItem>
          <GridItem>
          </GridItem>
        </Grid>

        <Track
          bgColor='Green.300'
          title='Acesso em qualquer lugar e a
          qualquer hora a seu trabalho'
        />


        <Flex px='10%' bgColor='white' mt={{ base: '50px', sm: '75px' }} py='125px' flexDirection='column' alignItems='center' textAlign='center'>
          <Text fontSize={{ base: '2xl', lg: '3xl' }}>
            Encontre o plano certo para você e faça<br />
            uma avaliação gratuita
          </Text>
          <ButtonChakra link='#contact' mt='4' color='Blue.800'>
            Verificar
          </ButtonChakra>
        </Flex>
        <DoubleGrid
          flexDirection={{ base: 'column', lg: 'row-reverse' }}
          urlImage={dashboard}
          paragraphPosition={{ base: 'center', md: 'end' }}
        >
          <Topics
            title="Aproveite as vantagens"
            topics={[
              'Acesse rapidamente seu computador como se você estivesse diante dele.',
              'Estenda o acesso a computadores e arquivos para qualquer pessoa para obter colaboração instantânea.',
              'Acesso de cortesia ao LastPass para armazenar todas as contas em um cofre de senhas seguro.',
              'Armazene facilmente todos os seus arquivos, acesse-os em qualquer lugar e compartilhe-os rapidamente com qualquer pessoa.',
              'Imprima documentos de um computador remoto na impressora local mais próxima.',
              'Veja vários monitores remotos apresentados um a um em suas telas locais.'
            ]}
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
        >Escolha o plano Pro que funciona melhor para você.</Text>

        <Grid
          id='contact'
          px='10%'
          w='100%'
          mb='80px'
          gridTemplateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
          gridColumnGap="5%"
          gridRowGap="40px"
        >
          <GridItem>
            <H3>INDIVÍDUOS</H3>
            <Text>Valor mensal</Text>
            <H3>R$50.00</H3>
            <Text fontWeight='bold'>Acesse até 2 computadores</Text>
            <Text as='i'>COBRANÇA ANUAL</Text>
            <Text>Acesso remoto<br />
              Usuários ilimitados<br />
              Impressão remota<br />
              1 TB de armazenamento de arquivos<br />
              Exibição para vários monitores<br />
              1 licença GRATUITA do
              LastPass Premium<br />
              <Text as='b'>MAIS</Text>
            </Text>
            <ButtonForm mt='4' plane='indivíduos'>
              Solicitar
            </ButtonForm>
          </GridItem>
          <GridItem>
            <H3>
              USUÁRIOS<br />
              AVANÇADOS
            </H3>
            <Text>Valor mensal</Text>
            <H3>R$124.00</H3>
            <Text fontWeight='bold'>Acesse até 5 computadores</Text>
            <Text as='i'>COBRANÇA ANUAL</Text>
            <Text>Acesso remoto<br />
              Usuários ilimitados<br />
              Impressão remota<br />
              1 TB de armazenamento de arquivos<br />
              Exibição para vários monitores<br />
              3 licença GRATUITA do
              LastPass Premium<br />
              <Text as='b'>MAIS</Text>
            </Text>
            <ButtonForm mt='4' plane='usuários avançados'>
              Solicitar
            </ButtonForm>
          </GridItem>
          <GridItem>
            <H3>
              PEQUENAS<br />
              EMPRESAS
            </H3>
            <Text>Valor mensal</Text>
            <H3>R$211.00</H3>
            <Text fontWeight='bold'>Acesse até 10 computadores</Text>
            <Text as='i'>COBRANÇA ANUAL</Text>
            <Text>Acesso remoto<br />
              Usuários ilimitados<br />
              Impressão remota<br />
              1 TB de armazenamento de arquivos<br />
              Exibição para vários monitores<br />
              5 licença GRATUITA do
              LastPass Premium<br />
              <Text as='b'>MAIS</Text>
            </Text>
            <ButtonForm mt='4' plane='pequenas empresas'>
              Solicitar
            </ButtonForm>
          </GridItem>
        </Grid>
      </main>
    </>
  )
}
import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Head from "next/head";
import ButtonChakra from "../../../components/Button/Button";
import { ButtonForm } from "../../../components/ButtonForm";
import Topics from "../../../components/Information/Topics";
import DoubleGrid from "../../../components/ProdutosPage/DoubleGrid";
import Track from "../../../components/ProdutosPage/track";
import H1 from "../../../components/Texts/H1";
import H3 from "../../../components/Texts/H3";
import H4 from "../../../components/Texts/H4";
import H5 from "../../../components/Texts/H5";

import Acess from "./../../../img/gerenciament-de-senhas/s2.jpg";


export default function GerenciamentoDeSenhas() {
  return (
    <>
      <Head>
        <title>
          Gerenciamento de Senhas Pessoal | Tenha segurança para as suas senhas
        </title>
        <meta
          name="description"
          content="Gerenciamento completo de todas as suas senhas, tenha mais segurança e monitoramento dos acessos"
        />
      </Head>

      <main style={{ maxWidth: "1920px", margin: "0 auto" }}>
        <Grid
          height="80vh"
          alignItems="center"
          px="10%"
          w="100%"
          bgImage="url('https://i.imgur.com/K0AuW6H.jpg')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          gridTemplateColumns="1fr 1fr"
          gridTemplateRows="1fr"
          gridColumnGap="10%"
        >
          <GridItem>
            <H1
              lineHeight={{ base: "48px", lg: "58px" }}
              fontSize={{ base: "40px", lg: "50px" }}
              color="white"
              fontWeight="extrabold"
            >
              Gerenciamento de senhas em qualquer lugar.
            </H1>
            <Text color="white" mt="4">
              Hoje em dia, grande parte da nossa vida acontece online: trabalho,
              diversão, contato com a família e amigos. O LastPass permite que
              você tenha o controle da sua vida digital na palma das suas mãos,
              de forma simples e segura.
            </Text>
            <ButtonChakra link="#contact" mt="4" px="8" py="6">
              Fazer meu pedido
            </ButtonChakra>
          </GridItem>
          <GridItem></GridItem>
        </Grid>

        <Track
          bgColor="Green.300"
          title="Piloto automático para todas as suas senhas"
          description="O LastPass elimina obstáculos para que você tenha mais tempo para fazer as coisas de que mais gosta."
        />

        <DoubleGrid
          my={{ base: "0px", md: "50px", xl: "85px" }}
          flexDirection={{ base: "column", lg: "row" }}
          paragraphPosition={{ base: "center", md: "start" }}
          urlImage={Acess}
        >
          <Topics
            title="Tenha tranquilidade onde quer que você esteja."
            description="Salve a senha uma vez e ela estará imediatamente disponível em todos os seus dispositivos. Com o LastPass Premium, você tem acesso contínuo em todos os seus dispositivos.            "
          />
        </DoubleGrid>

        <Grid
          px="10%"
          w="100%"
          mb="80px"
          gridTemplateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
          gridColumnGap="5%"
          gridRowGap="40px"
        >
          <GridItem>
            <H4 color="Blue.800">Basta fazer o login e pronto.</H4>
            <Text>
              Após salvar uma senha no LastPass, você sempre terá acesso a ela
              quando necessário, tornando o processo de login rápido e fácil.
            </Text>
          </GridItem>
          <GridItem>
            <H4 color="Blue.800">
              Realize o login sem a necessidade de uma senha.
            </H4>
            <Text>
              Use o LastPass Authenticator para acessar seu cofre — não precisa
              usar a senha mestre.
            </Text>
          </GridItem>
          <GridItem>
            <H4 color="Blue.800">Segurança avançada</H4>
            <Text>
              O gerador de senhas integrado cria senhas longas e aleatórias para
              proteger suas contas contra hackers.
            </Text>
          </GridItem>
          <GridItem>
            <H4 color="Blue.800">
              Armazene registros digitais de forma segura.
            </H4>
            <Text>
              Mantenha todas as suas notas, como números de seguro, títulos e
              senhas de Wi-Fi, seguras e facilmente acessíveis.
            </Text>
          </GridItem>
          <GridItem>
            <H4 color="Blue.800">
              Compartilhe facilmente informações de forma segura.
            </H4>
            <Text>
              Algumas informações não devem ser enviadas por mensagem.
              Compartilhe senhas e notas com conveniência e segurança com
              qualquer pessoa.
            </Text>
          </GridItem>
          <GridItem>
            <H4 color="Blue.800">Realize monitoramento da dark web.</H4>
            <Text>
              Deixe de se preocupar com vazamentos de dados. Receba alertas caso
              seus dados pessoais estejam em risco.
            </Text>
          </GridItem>
        </Grid>

        <Flex
          flexDirection="column"
          textAlign="center"
          alignItems="center"
          my="100px"
          mx="5"
          id="contact"
        >
          <H3 fontSize={{ base: "40px", md: "45px", lg: "50px" }}>
            O LastPass é confiado por especialistas em todo o mundo.
          </H3>
          <Text>
            Você merece o melhor em termos de segurança. Com o LastPass, suas
            informações são mantidas guardadas, seguras e privadas (nem mesmo
            nós temos acesso a elas).
          </Text>
          <ButtonForm mt="5" maxW={{ base: "90%", md: "40%" }}>
            Solicitar cotação
          </ButtonForm>
        </Flex>
      </main>
    </>
  );
}

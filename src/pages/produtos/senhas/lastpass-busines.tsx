import { Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Head from "next/head";
import { ButtonForm } from "../../../components/ButtonForm";
import H4 from "../../../components/Texts/H4";
import H5 from "../../../components/Texts/H5";
import ButtonChakra from "./../../../components/Button/Button";
import Topics from "./../../../components/Information/Topics";
import DoubleGrid from "./../../../components/ProdutosPage/DoubleGrid";
import Track from "./../../../components/ProdutosPage/track";
import H1 from "./../../../components/Texts/H1";
import H3 from "./../../../components/Texts/H3";

import Data from "./../../../img/lastpass-busines/chamadas.jpg";
import dashboard from "./../../../img/lastpass-busines/s1.jpg";
import Center from "./../../../img/lastpass-busines/s2.jpg";

export default function lastPassBusines() {
  return (
    <>
      <Head>
        <title>
          Gerenciamento de Senhas para Empresas | Tenha em mão todos os acessos
          da sua empresa
        </title>
        <meta
          name="description"
          content="Gerencie os acessos e as senhas que sua empresa precisa, com segurança e praticidade"
        />
        <meta
          name="keywords"
          content="senhas, empresa, segurança, lastpass, funcionarios, TI"
        />
        <link
          rel="canonical"
          href="https://www.simcompany.com.br/produtos/senhas/lastpass-busines"
        />
      </Head>

      <main style={{ maxWidth: "1920px", margin: "0 auto" }}>
        <Grid
          height="80vh"
          alignItems="center"
          px="10%"
          w="100%"
          bgImage="url('https://i.imgur.com/1fux6iW.jpg')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          gridTemplateColumns="1fr 1fr"
          gridTemplateRows="1fr"
          gridColumnGap="10%"
        >
          <GridItem>
            <H1
              lineHeight={{ base: "40px", lg: "50px" }}
              fontSize={{ base: "40px", lg: "50px" }}
              color="white"
              fontWeight="extrabold"
            >
              Contrate o lastpass para sua empresa, aumente a segurança e a
              praticidade da sua equipe
            </H1>
            <ButtonForm mt="6" px="8" py="6">
              SOLICITAR AVALIAÇÃO
            </ButtonForm>
          </GridItem>
          <GridItem></GridItem>
        </Grid>

        <Track
          mb="150px"
          bgColor="Green.300"
          title="O cofre de senhas que coloca sua empresa no comando"
        />

        <Grid
          px="10%"
          w="100%"
          mb="80px"
          gridTemplateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
          gridColumnGap="5%"
          gridRowGap="40px"
          textAlign="center"
        >
          <GridItem>
            <H5>
              Acabe com a má prática de repetir senhas entre os funcionarios
            </H5>
            <Text>
              Promova práticas seguras de senhas entre os funcionários com a
              integração do gerador de senhas LastPass.
            </Text>
          </GridItem>
          <GridItem>
            <H5>Centralize e compartilhe senhas em uma única plataforma.</H5>
            <Text>
              Disponibilize para cada usuário um cofre personalizado exclusivo,
              mantendo a supervisão através de um painel de administração
              completo e seguro.
            </Text>
          </GridItem>
          <GridItem>
            <H5>Assegure a privacidade de informações sensíveis.</H5>
            <Text>
              Mantenha as credenciais, anotações e informações de todos
              protegidas, adotando o modelo de segurança de conhecimento zero do
              LastPass, garantindo total confidencialidade.
            </Text>
          </GridItem>
        </Grid>

        <Flex
          px="10%"
          mt={{ base: "50px", sm: "100px" }}
          py="75px"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
        >
          <Text as="h5" fontSize={{ base: "40", lg: "50px" }}>
            Gostaria de saber quanto custaria essa solução?
            <br />
            Realize uma cotação sem compromisso
          </Text>
          <ButtonForm mt="10" maxW={{ base: "90%", md: "40%" }}>
            Solicitar cotação
          </ButtonForm>
        </Flex>

        <DoubleGrid
          flexDirection={{ base: "column", lg: "row-reverse" }}
          urlImage={Center}
          paragraphPosition={{ base: "center", md: "end" }}
          alt="Segurança para seus acessos"
        >
          <Topics
            title="Garanta a segurança da sua empresa com o LastPass, evitando vazamentos."
            topics={[
              "A adoção de boas práticas e hábitos relacionados às senhas empresariais é fundamental na luta contra violações de dados. No entanto, os métodos convencionais de gerenciamento de senhas podem ser excessivamente complexos tanto para funcionários quanto para administradores.",
              "O LastPass Business simplifica a vida dos usuários e das equipes de TI, capacitando seus colaboradores. Economize tempo simplificando o gerenciamento de senhas dos funcionários e fornecendo aos administradores informações valiosas, como relatórios avançados e mais de 100 políticas de segurança personalizáveis.",
            ]}
          />
        </DoubleGrid>

        <DoubleGrid
          my={{ base: "0px", md: "50px", xl: "85px" }}
          flexDirection={{ base: "column", lg: "row" }}
          paragraphPosition={{ base: "center", md: "start" }}
          urlImage={dashboard}
          alt="tenha segurança sem precisar de senhas"
        >
          <Topics
            title="A LastPass lidera o movimento em direção a um futuro sem senhas"
            topics={[
              "Ultrapasse as limitações de login. Desfaça-se do passado ao permitir que todos os funcionários acessem um cofre com centenas de credenciais web armazenadas, sem a necessidade de senhas.",
              "Ao realizar o login sem a necessidade de uma senha, os usuários podem descriptografar seu cofre utilizando o LastPass Authenticator, dispensando o uso da senha mestra.",
              "Simplifique os logins dos funcionários, eliminando as complexidades que as senhas trazem consigo.",
              "Minimize os riscos associados ao uso de senhas pelos funcionários.",
            ]}
          />
        </DoubleGrid>

        <DoubleGrid
          flexDirection={{ base: "column", lg: "row-reverse" }}
          urlImage={Data}
          mb={{ base: "50px", md: "85px" }}
          alt="segurança sem precisar de senhas"
        >
          <Topics
            mb="2"
            paragraphPosition={{ base: "center", md: "end" }}
            textAlign={{ base: "center", md: "end" }}
            title="Centralize o gerenciamento de todos os seus endpoints e facilite o acesso dos funcionários através do logon único (SSO)"
            description="Controle todos os seus endpoints de forma remota com um painel de visualização único, permitindo monitorar o status de qualquer dispositivo, implantar software e gerenciar alertas de conexão, independentemente de onde você esteja."
          />
        </DoubleGrid>

        <Text
          as="h3"
          fontSize={{ base: "40px", lg: "50px" }}
          letterSpacing={0}
          fontWeight="bold"
          textAlign="center"
          my={{ base: "50px", lg: "100px" }}
          mx={{ base: "5%" }}
          color="Blue.800"
        >
          Confira mais vantagens
        </Text>

        <Grid
          px="10%"
          w="100%"
          mb="80px"
          gridTemplateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
          gridColumnGap="5%"
          gridRowGap="40px"
        >
          <GridItem>
            <H4 color="Blue.800">
              Dê aos administradores controle preciso sobre os usuários
            </H4>
            <Text>
              Obtenha informações sobre comportamentos relacionados a senhas,
              relatórios de segurança e de login para reforçar a conformidade.
            </Text>
          </GridItem>
          <GridItem>
            <H4 color="Blue.800">
              Facilite a implementação de forma simplificada
            </H4>
            <Text>
              Automatize a ativação e desativação de usuários ao integrar o
              LastPass ao diretório de usuários e provedores de identidade,
              simplificando esse processo.
            </Text>
          </GridItem>
          <GridItem>
            <H4 color="Blue.800">
              Aprimore o acesso dos funcionários de forma otimizada.
            </H4>
            <Text>
              Simplifique o acesso e o trabalho dos funcionários ao eliminar a
              necessidade de senhas.
            </Text>
          </GridItem>
          <GridItem>
            <H4 color="Blue.800">
              Realize a supervisão da TI por meio de um console de
              administração.
            </H4>
            <Text>
              O console de administração do LastPass proporciona uma supervisão
              abrangente às equipes de TI. Simplifique as responsabilidades das
              equipes, oferecendo-lhes um painel de gerenciamento de segurança
              completo.
            </Text>
          </GridItem>
          <GridItem>
            <H4 color="Blue.800">Gerenciamento corporativo de senhas.</H4>
            <Text>
              Grandes empresas necessitam de um gerenciador de senhas integrado
              à tecnologia que já utilizam em toda a organização, e o LastPass
              Business atende exatamente a essa demanda.
            </Text>
          </GridItem>
          <GridItem>
            <H4 color="Blue.800">Contas Familiares gratuitas.</H4>
            <Text>
              Proporcione segurança aos funcionários e suas famílias, permitindo
              que vivam e trabalhem de qualquer lugar com contas gratuitas do
              LastPass Families. Conceda até cinco licenças adicionais do
              LastPass a amigos e familiares.
            </Text>
          </GridItem>
        </Grid>
      </main>
    </>
  );
}

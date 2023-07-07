import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Head from "next/head";
import ButtonChakra from "../../../components/Button/Button";
import { ButtonForm } from "../../../components/ButtonForm";
import Topics from "../../../components/Information/Topics";
import DoubleGrid from "../../../components/ProdutosPage/DoubleGrid";
import PresentationProduction from "../../../components/ProdutosPage/PresentationProduction";
import Track from "../../../components/ProdutosPage/track";
import H1 from "../../../components/Texts/H1";
import H3 from "../../../components/Texts/H3";

import Can from "./../../../img/pabx/camera.jpg";
import BranchCall from "./../../../img/pabx/chamadas.jpg";
import Group04 from "./../../../img/pabx/grup04.jpg";
import Group05 from "./../../../img/pabx/grup05.jpg";
import Group06 from "./../../../img/pabx/grup06.jpg";
import Dashboard from "./../../../img/pabx/painel.jpg";

import Phone from "./../../../img/phone.png";
import BGImage from "./../../../img/comunicacao/pabx.jpg";

export default function Pabx() {
  return (
    <>
      <Head>
        <title>
          Sistema de telefonia PABX completo e flexível para empresas, tudo em
          um só lugar
        </title>
        <meta
          name="description"
          content="Software de telefonia virtual, desvio de chamadas, planos de discagem personalizáveis que aumentam a satisfação dos clientes"
        />
      </Head>

      <main style={{ maxWidth: "1920px", margin: "0 auto" }}>
        <Grid
          style={{ backgroundImage: `url(${BGImage.src})` }}
          height="80vh"
          alignItems="center"
          px="10%"
          w="100%"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          gridTemplateColumns="1fr 1fr"
          gridTemplateRows="1fr"
          gridColumnGap="10%"
        >
          <GridItem>
            <H1
              lineHeight={{ base: "40px", lg: "50px" }}
              mb="20px"
              fontSize={{ base: "40px", lg: "50px" }}
              color="White"
              fontWeight="extrabold"
            >
              Tenha todos os meios de comunicação que sua empresa precise, os
              melhores softwares para pequenas e grandes empresas
            </H1>
            <Text color="white">
              A Sim Company junto com a GoTo fornece os melhores softwares para
              sua empresa, sistema de avaliação, atendente virtual, desvio de
              chamadas e muitos outros, entre em contato conosco.
            </Text>
            <ButtonChakra link="#contact" mt="6" px="10" py="8">
              FALE COM UM CONSULTOR{" "}
            </ButtonChakra>
          </GridItem>
          <GridItem></GridItem>
        </Grid>

        <Track
          bgColor="Green.300"
          title="Telefonia, reuniões e mensagens tudo em um só lugar"
        />

        <Grid
          my={{ base: "50px", md: "85px" }}
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
          gridTemplateRows="1fr"
          gridColumnGap="5%"
          width="75%"
          mx="12.5%"
        >
          <PresentationProduction
            urlImage={Group04}
            title="Fácil instalação e configuração"
            description="Sistema de facil e rápida instalação, logo após a contratação do nosso software, você poderá utilizá-lo em pouco tempo."
          />
          <PresentationProduction
            my={{ base: "14", md: "0" }}
            urlImage={Group05}
            title="Fale de onde estiver em qualquer dispositivo"
            description="Altere entre o desktop, mobile ou tablet, tenha disponibilidade e acesso remoto sobe os contatos, gerando mais disponibilidade."
          />
          <PresentationProduction
            urlImage={Group06}
            title="Reuniões de alta qualidade"
            description="Vídeoconferencia de alta qualidade, reuniões que provam o valor da sua empresa, tenha diversos recursos disponíveis."
          />
        </Grid>

        <Flex flexDirection="column" alignItems="center" textAlign="center">
          <H3 mb="20px">Solicite um orçamento para sua empresa</H3>
          <ButtonChakra link="#contact" px="60px" py="24px">
            Fazer um orçamento
          </ButtonChakra>
        </Flex>

        <DoubleGrid
          mt={{ base: "50px", md: "75px" }}
          flexDirection={{ base: "column", lg: "row" }}
          urlImage={Phone}
        >
          <Topics
            title="Um sistema de telefonia virtual que trabalha em sintonia com você"
            description="Adicione vários números gratuito ou faça a portabilidade do seu número. Obtenha extensões ilimitadas e crie pastas de telefone principais estruturadas em árvore para toda a empresa. Você pode até integrar com seus aplicativos favoritos, como Salesforce e Slack."
          />
        </DoubleGrid>

        <DoubleGrid
          my={{ base: "0px", md: "0px" }}
          flexDirection={{ base: "column", lg: "row-reverse" }}
          textAlign="end"
          urlImage={BranchCall}
        >
          <Topics
            title="Desvio de chamadas e planos
            de discagem personalizáveis"
            description="Crie seu próprio encaminhamento de chamadas e conte com PABX completo com editor de plano de discagem de arrastar e soltar. Com nosso sistema de telefonia virtual, é fácil fazer alterações onde quer que você esteja."
          />
        </DoubleGrid>

        <Track
          title="Sua solução all-in-one para
          salas de reunião"
        ></Track>

        <DoubleGrid
          my={{ base: "0px", md: "0px" }}
          flexDirection={{ base: "column", lg: "row" }}
          urlImage={Dashboard}
        >
          <Topics
            title="Sistema de telefonia virtual
            que atende todas às suas
            necessidades"
            description="Adicione números gratuitos ou transfira seus números atuais. Implemente um diretório de árvore telefônica em toda a empresa. Crie um atendedor virtual para encaminhamento de chamadas. O fluxo de chamadas certo move o negócio na direção certa."
          />
        </DoubleGrid>

        <DoubleGrid
          my={{ base: "0px", md: "0px" }}
          flexDirection={{ base: "column", lg: "row-reverse" }}
          urlImage={Can}
          textAlign="end"
        >
          <Topics
            title="Tenha avaliação dos seus clientes"
            description="Aumente a satisfação dos clientes e ajude a alavancar a produtividade dos representantes otimizando o fluxo de trabalho da central de atendimento com interações mais rápidas e fluidas."
          />
        </DoubleGrid>

        <Track
          bgColor="#f0ef37"
          title="Soluções de trabalho flexíveis e compatíveis com
          qualquer aplicativo, em qualquer lugar"
          description="
          Participe de reuniões, chamadas pelo telefone, computador ou smartphone usando o aplicativo ou diretamente pelo navegador da Web.
          "
        />

        <Grid
          id="contact"
          my={{ base: "50px", md: "85px" }}
          mx="10%"
          w="80%"
          gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gridTemplateRows="1fr"
          gridColumnGap="10%"
        >
          <GridItem
            justifyContent={{ base: "space-around" }}
            display="flex"
            flexDirection="column"
            h="400px"
            textAlign={{ base: "center", lg: "start" }}
          >
            <H3 mt="20px">Mensal Flexível</H3>
            <Text>
              Novo: O preço mensal flexível do GoTo Room permite que os clientes
              financiem uma solução de sala de vídeo por uma taxa mensal baixa
              que cabe em qualquer orçamento. Escolha seu kit e seu modelo de
              financiamento preferido de 1, 2 ou 3 anos, e comece hoje mesmo.
            </Text>

            <Text>
              *Inclui uma licença do GoTo Room, equipamento para a sala e uma
              garantia de hardware de longo prazo.
            </Text>
            <ButtonForm plane="mensal flexível">Solicitar orçamento</ButtonForm>
          </GridItem>

          <GridItem
            justifyContent={{ base: "space-around" }}
            display="flex"
            flexDirection="column"
            h="400px"
            textAlign={{ base: "center", lg: "start" }}
          >
            <H3>Compra padrão</H3>
            <Text>
              Adquira uma das nossas mais de 10 ofertas do GoTo Room e tenha
              tudo pronto para suas reuniões em questão de minutos. Os melhores
              preços do setor e as opções de várias salas ajudam nossos clientes
              a economizar muito.
            </Text>

            <Text> Solicite um orçamento personalizado hoje mesmo!</Text>
            <ButtonForm plane="compra padrão">Solicitar orçamento</ButtonForm>
          </GridItem>
        </Grid>
      </main>
    </>
  );
}

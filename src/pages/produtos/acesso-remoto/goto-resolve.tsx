import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Head from "next/head";
import ButtonChakra from "./../../../components/Button/Button";
import Topics from "./../../../components/Information/Topics";
import DoubleGrid from "./../../../components/ProdutosPage/DoubleGrid";
import PresentationProduction from "./../../../components/ProdutosPage/PresentationProduction";
import Track from "./../../../components/ProdutosPage/track";
import H1 from "./../../../components/Texts/H1";
import H3 from "./../../../components/Texts/H3";

import ProSupport from "./../../../img/software-suporte-remoto-de-ti/suporte-sim-company.jpg";
import SecurityComputer from "./../../../img/software-suporte-remoto-de-ti/seguranca-computador.jpg";
import RemoteAccess from "./../../../img/software-suporte-remoto-de-ti/acesso-remoto.jpg";

import Acc1 from "./../../../img/software-suporte-remoto-de-ti/acc1.png";
import Acc2 from "./../../../img/software-suporte-remoto-de-ti/acc2.png";
import Acc3 from "./../../../img/software-suporte-remoto-de-ti/acc3.png";
import Acc4 from "./../../../img/software-suporte-remoto-de-ti/acc4.png";
import { ButtonForm } from "../../../components/ButtonForm";

export default function SoftwareSuporteRemotoTI() {
  return (
    <>
      <Head>
        <title>
          Software para criação de eventos online | Tenha melhor qualidade nas
          transmições da sua empresa
        </title>
        <meta name="description" content="Faça transmições mais completa, tenha GoTO Resolve na sua empresa e melhore sua comunicação" />
      </Head>

      <main style={{ maxWidth: "1920px", margin: "0 auto" }}>
        <Grid
          height="80vh"
          alignItems="center"
          px="10%"
          w="100%"
          backgroundImage="url('https://i.imgur.com/aOFuHvy.jpg')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          gridTemplateColumns="1fr 1fr"
          gridTemplateRows="1fr"
          gridColumnGap="10%"
        >
          <GridItem>
            <H1
              lineHeight={{ base: "48px", md: "52px", lg: "58px" }}
              mb="20px"
              fontSize={{ base: "40px", md: "45px", lg: "50px" }}
              color="White"
              fontWeight="extrabold"
            >
              Software de suporte remoto de TI que muda tudo
            </H1>
            <Text color="White">
              O GoTo Resolve é: suporte de TI completo, simples e intuitivo,
              reforçado com segurança de confiança, que traz facilidade de uso e
              tranquilidade como nenhuma outra ferramenta
            </Text>
            <ButtonChakra
              link="#contact"
              mt="6"
              px={{ base: "6", sm: "10" }}
              py="8"
            >
              FALAR COM DEPARTAMENTO
            </ButtonChakra>
          </GridItem>
          <GridItem></GridItem>
        </Grid>

        <Track
          bgColor="Green.300"
          title="Plataforma de eventos virtuais completa"
          description="Com modos personalizados, recursos interativos, análises detalhadas, integrações profundas e preços flexíveis,
          nossa plataforma de webinar intuitiva tem tudo o que você precisa para hospedar eventos virtuais do tamanho que você deseja."
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
            urlImage={ProSupport}
            title="Suporte Pro"
            description="Responda, aja e resolva problemas. Tudo em um só lugar. Agora, resolver tíquetes de suporte técnico ficou tão fácil quanto bater papo."
          />
          <PresentationProduction
            my={{ base: "14", md: "0" }}
            urlImage={SecurityComputer}
            title="Aumente a produtividade"
            description="Recursos de otimização de tempo, como o acesso não supervisionado e o gerenciamento de várias sessões permitem que agentes e colaboradores façam ainda mais."
          />
          <PresentationProduction
            urlImage={RemoteAccess}
            title="Simplifique a segurança de TI"
            description="Com segurança de nível empresarial e facilidade de uso para os consumidores, os sistemas se mantêm seguros enquanto os negócios seguem operando."
          />
        </Grid>

        <Flex id="contact" mx="5%" flexDirection="column" alignItems="center">
          <H3 textAlign={{ base: "center" }} mb="20px">
            O GoTo Resolve cria mais possibilidades
            <br />
            para equipes internas e remotas
          </H3>
          <ButtonForm maxW={{ base: "90%", md: "40%" }}>
            Fazer orçamento
          </ButtonForm>
        </Flex>

        <DoubleGrid
          my={{ base: "50px", md: "85px" }}
          flexDirection={{ base: "column", lg: "row-reverse" }}
          urlImage={Acc1}
          textAlign={{ base: "start", lg: "end" }}
        >
          <Topics
            mt="6"
            title="Acesso remoto e suporte de TI"
            description="Resolva problemas com agilidade começando com um fluxo de acesso rápido e simples. Um único painel com todas as ferramentas de que o agente precisa para resolver problemas, como:"
            topics={[
              "Diagnóstico de sistema durante a sessão",
              "Reinicialização/reconexão",
              "Modo de administração",
              "Transferência de arquivos",
              "Gerenciamento de várias sessões",
              "e muito mais...",
            ]}
          />
        </DoubleGrid>

        <DoubleGrid
          my={{ base: "50px", md: "85px" }}
          flexDirection={{ base: "column", lg: "row" }}
          urlImage={Acc2}
        >
          <Topics
            title="Solução de problemas multiplataforma"
            description="Não importa onde ou como sua equipe está trabalhando, resoluções mais fáceis a aguardam.

            Os agentes podem usar:"
            topics={[
              "Chromebooks, Linux e tablets",
              "Navegadores ou o aplicativo",
              "PCs, Macs, dispositivos móveis iOS ou Android, Chromebooks e tablets",
              "Dispositivos desconectados, como impressoras e roteadores Wi-Fi domésticos, por meio do compartilhamento de câmera sem necessidade de download",
            ]}
          />
        </DoubleGrid>

        <DoubleGrid
          my={{ base: "50px", md: "85px" }}
          flexDirection={{ base: "column", lg: "row-reverse" }}
          urlImage={Acc3}
          textAlign={{ base: "start", lg: "end" }}
        >
          <Topics
            title="Geração de tíquetes conversacionais"
            description="Personalize a abordagem de geração de tíquetes e facilite o acesso de todos ao suporte:"
            topics={[
              "Envie, gerencie, comente e obtenha atualizações de suporte remoto em tempo real com plataformas de mensagens empresariais como o MS Teams e o Slack.",
              "Continue trabalhando com a geração de tíquetes por e-mail tradicional e nosso console de suporte remoto baseado na Web, caso sua equipe prefira.",
            ]}
          />
        </DoubleGrid>

        <DoubleGrid
          my={{ base: "50px", md: "85px" }}
          flexDirection={{ base: "column", lg: "row" }}
          urlImage={Acc4}
        >
          <Topics
            title="Segurança avançada"
            description="Proteja sua empresa com protocolos líderes do setor aprovados pelo governo que oferecem uma segurança imbatível, incluindo:"
            topics={[
              "Suporte baseado em permissões",
              "Advanced Encryption Standard (AES) de 256 bits de ponta a ponta",
              "Transport Layer Security (TLS)",
              "Controle de acesso com base em identidade conforme o modelo de confiança zero",
              "Autenticação multifator (MFA)",
              "Login único (SSO)",
            ]}
          />
        </DoubleGrid>
      </main>
    </>
  );
}

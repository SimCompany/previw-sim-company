import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Show,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import { ArrowButton } from "../components/ArrowButton";

import Styles from "./../styles/index.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Swiper, SwiperSlide } from "swiper/react";
import "@splidejs/splide/css";

import logos from "./../img/index/l2.jpg";
import SimCompany from "./../img/index/l1.jpg";
import CloudSystem from "./../img/index/z2.jpg";
import RemoteSolution from "./../img/index/z1.jpg";
import Background from "./../img/index/b3.jpg";

import { useBreakpointValue } from "@chakra-ui/react";
import { ButtonForm } from "../components/ButtonForm";
import Head from "next/head";
import FormButtonParceria from "../components/ButtonFormParceria/FormButton";
import { ButtonFormParceria } from "../components/ButtonFormParceria";

export default function Index() {
  const [isLargerThan520] = useMediaQuery("(min-width: 520px)");

  return (
    <>
      <Head>
        <title>Comunicação empresarial - Aparelhos de Vídeo conferência</title>

        <meta
          name="description"
          content="Comunicação para empresas, aparelhos de atendimento e vídeo conferência para reuniões e atendimentos para toda empresa"
        />

        <link type="canonical" href="https://www.simcompany.com.br/" />
      </Head>
      <Box as="main">
        <Flex
          className={Styles.FirstComponent}
          px={{ base: "5%", md: "15%" }}
          alignItems={{ base: "end", md: "center" }}
          pb={{ base: "80px", md: "0" }}
        >
          <Box flex={{ base: "0", md: "0.5" }}></Box>
          <Box
            flex={{ base: "1", md: "0.5" }}
            textAlign={{ base: "center", lg: "start" }}
          >
            <Text
              fontSize={{ base: "40px", md: "50px" }}
              fontWeight="600"
              as="h1"
              color="white"
            >
              <Text as="span" color="Green.300" mr="2">
                SIMPLIFIQUE
              </Text>
              SUA COMUNICAÇÃO EMPRESARIAL COM A
              <Text as="span" color="Green.300" ml="2">
                SIM COMPANY
              </Text>
            </Text>

            <Text my="2" color="white">
              Economize tempo e dinheiro da sua empresa e maximize a qualidade
              das reuniões e atendimentos atualizando seu sistema para nossos
              produtos da GoTo, conheça nossos produtos empresariais.
            </Text>

            <ButtonForm>FALE CONOSCO</ButtonForm>
            <ButtonFormParceria mt="4">SEJA UM PARCEIRO</ButtonFormParceria>
          </Box>
        </Flex>

        <Flex
          mx={{ base: "5%", lg: "15%" }}
          my={{ base: "75px", md: "100px" }}
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Box
            flex={{ base: "1", lg: "0.5" }}
            mr={{ base: "0px", lg: "8" }}
            textAlign={{ base: "center", lg: "start" }}
          >
            <Text as="h2" fontSize="40px" lineHeight="1.3" color="Blue.800">
              As grandes empresas de comunicação estão juntas!
            </Text>
            <Text color="Blue.800">
              Uma escolha fácil para empresas que buscam soluções de suporte de
              TI remoto e comunicação. Sim Company® e o GoTo® unidas levam até
              você produtos e softwares lideres de setor.
            </Text>
          </Box>
          <Box flex={{ base: "1", lg: "0.5" }} alignSelf="center">
            <Image src={logos} alt="logo simcompany e GoTO network" />
          </Box>
        </Flex>

        <Flex
          className={Styles.CloudCall}
          px={{ base: "5%", lg: "15%" }}
          flexDirection={{ base: "column", md: "row" }}
          alignItems={{ base: "start", md: "center" }}
        >
          <Box flex="0.5"></Box>
          <Box
            flex="0.5"
            zIndex="2"
            pt={{ base: "300px", md: "0px" }}
            mb={{ base: "-300px", md: "0px" }}
            textAlign={{ base: "center", lg: "start" }}
          >
            <Text
              as="h3"
              fontSize={{ base: "40px", md: "50px" }}
              lineHeight="1.3"
              color={{ base: "Blue.800", md: "white" }}
            >
              <Text as="span" color="Green.300">
                O SISTEMA DE TELEFONIA EM NUVEM
              </Text>{" "}
              MAIS DESEJADO PARA EMPRESAS E ATENDIMENTOS
            </Text>

            <Text color={{ base: "Blue.800", md: "white" }} my="2">
              O sistema da sua empresa nunca mais será o mesmo, os produtos da
              GoTo junto com a Sim Company fornecem melhor qualidade para
              reuniões e atendimento para seus clientes.
            </Text>

            <ButtonForm>CONFIRA ESTAS VANTÁGENS</ButtonForm>
          </Box>
        </Flex>

        <Flex
          mx="10%"
          mt={{ base: "150px" }}
          mb={{ base: "75px", md: "100px" }}
          alignItems="center"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box flex="0.4">
            <Image src={SimCompany} alt="Comunicação digital" />
          </Box>

          <Box flex="0.6" textAlign={{ base: "center", lg: "start" }}>
            <Text as="h4" fontSize="55px" lineHeight="1.3" color="Blue.800">
              SIM COMPANY
            </Text>

            <Text mt="4">
              A Sim Company foi fundada com o objetivo de fornecer a melhor
              experiência de atendimento e tornar o seu dia a dia mais fácil.
              Nós nos comprometemos em unir pessoas por meio da tecnologia,
              especialmente em um mundo cada vez mais polarizado. Na Sim
              Company, entendemos as necessidades individuais de cada empresa,
              independentemente do tamanho, e trabalhamos para oferecer soluções
              personalizadas que atendam às suas demandas.
            </Text>

            <Text mt="4">
              Contamos com uma equipe altamente qualificada e experiente, que
              analisa minuciosamente as suas necessidades e desenvolve projetos
              que estejam alinhados com a sua realidade. Através da nossa
              intermediação, trazemos resultados que atendem às suas
              expectativas e promovemos o seu sucesso.
            </Text>

            <Text mt="4">
              Na Sim Company, estamos empenhados em oferecer serviços que
              atendam às suas expectativas e excedam as suas necessidades. Entre
              em contato conosco para saber como podemos ajudá-lo.
            </Text>
          </Box>
        </Flex>

        <Flex
          h="200px"
          bgColor="Green.500"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Box maxW={{ base: "90%", md: "40%" }}>
            <Text as="h4" fontSize="40px" lineHeight="1.3" color="Blue.800">
              Nossa solução de comunicação para empresas
            </Text>
            <Text>
              Facilite seus acessos e sua comunicação entre equipe e clientes de
              maneira simples e prática.
            </Text>
          </Box>
        </Flex>

        <Flex
          mx="10%"
          my={{ base: "75px", md: "100px" }}
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Box alignSelf="center" flex="0.6">
            <Image
              src={CloudSystem}
              alt="sistema em nuvem, a solução em comunicação digital"
            />
          </Box>

          <Box
            flex="0.5"
            mt={{ base: "30px", lg: "0px" }}
            ml={{ base: "0px", lg: "30px" }}
          >
            <Text
              as="h5"
              fontSize={{ base: "40px", lg: "50px" }}
              lineHeight="1.3"
              color="Blue.800"
            >
              Comunicação e colaboração empresarial
            </Text>
            <Text>
              Sua empresa precisa mais do que um simples serviço telefónico.
            </Text>

            <Stack>
              <Box mt="4">
                <Text as="h6" fontSize="25px" color="Blue.800">
                  GoTo Connect
                </Text>
                <Text>Ligações, reuniões e bate-papo unificados.</Text>
                <ArrowButton link="/produtos/comunicacao/goto-connect" />
              </Box>
              <Box>
                <Text as="h6" fontSize="25px" color="Blue.800">
                  GoTo Contact center
                </Text>
                <Text>Central de atendimento em nuvem</Text>
                <ArrowButton link="/produtos/comunicacao/goto-contact-center" />
              </Box>
              <Box>
                <Text as="h6" fontSize="25px" color="Blue.800">
                  GoTo Meeting
                </Text>
                <Text>Ligações, reuniões e bate-papo unificados.</Text>
                <ArrowButton link="/produtos/comunicacao/meeting" />
              </Box>
              <Box>
                <Text as="h6" fontSize="25px" color="Blue.800">
                  GoTo Webinar
                </Text>
                <Text>Plataforma de eventos virtuais.</Text>
                <ArrowButton link="/produtos/comunicacao/goto-webinar" />
              </Box>
              <Box>
                <Text as="h6" fontSize="25px" color="Blue.800">
                  GoTo Room
                </Text>
                <Text>Hardware para salas de conferência</Text>
                <ArrowButton link="/produtos/comunicacao/goto-room" />
              </Box>
            </Stack>
          </Box>
        </Flex>

        <Flex
          mx="10%"
          my={{ base: "75px", md: "100px" }}
          flexDirection={{ base: "column-reverse", lg: "row" }}
        >
          <Box mt={{ base: "20px", lg: "0px" }} mr="30px">
            <Text
              as="h5"
              fontSize={{ base: "40px", lg: "50px" }}
              lineHeight="1.3"
              color="Blue.800"
            >
              Acessos e suporte remotos para empresas
            </Text>
            <Text>
              Sua empresa mais segura, veja novas oportunidades a partir do
              acesso remoto.
            </Text>

            <Stack>
              <Box mt="8">
                <Text as="h6" fontSize="25px" color="Blue.800">
                  GoTo Resolve
                </Text>
                <Text>
                  Suporte de TI completo, simples e intuitivo, que traz
                  facilidade de uso e tranquilidade como nenhuma outra
                  ferramenta.
                </Text>
                <ArrowButton link="/produtos/acesso-remoto/goto-resolve" />
              </Box>
              <Box>
                <Text as="h6" fontSize="25px" color="Blue.800">
                  Logmein Pro
                </Text>
                <Text>
                  A ferramenta de acesso remoto mais confiável. Acesso em
                  qualquer lugar e a qualquer hora a seu trabalho.
                </Text>
                <ArrowButton link="/produtos/acesso-remoto/pro" />
              </Box>
              <Box>
                <Text as="h6" fontSize="25px" color="Blue.800">
                  Central
                </Text>
                <Text>
                  Implemente e automatize remotamente as tarefas de rotina de
                  TI.
                </Text>
                <ArrowButton link="/produtos/acesso-remoto/central" />
              </Box>
              <Box>
                <Text as="h6" fontSize="25px" color="Blue.800">
                  GoToMyPc
                </Text>
                <Text>
                  Conecte-se a arquivos, dados e aplicativos do escritório em
                  trânsito com o premiado software da área de trabalho remota.
                </Text>
                <ArrowButton link="/produtos/acesso-remoto/goto-my-pc" />
              </Box>
              <Box>
                <Text as="h6" fontSize="25px" color="Blue.800">
                  Rescue
                </Text>
                <Text>
                  Conheça a melhor solução de suporte de TI remoto corporativa
                  do mercado, agora, parte da família GoTo
                </Text>
                <ArrowButton link="/produtos/acesso-remoto/rescue" />
              </Box>
            </Stack>
          </Box>

          <Box alignSelf="center">
            <Image
              src={RemoteSolution}
              alt="Soluções remotas, realize suas tarefas onde você estiver"
            />
          </Box>
        </Flex>

        <Box position="relative" mb={{ base: "500px", lg: "350px" }}>
          <Box>
            <Image src={Background} alt="background" />
          </Box>
          <Box
            height="580px"
            width={{ base: "90%", lg: "80%" }}
            margin={{ base: "5%", lg: "10%" }}
            position="absolute"
            top="0px"
            bgColor="white"
            shadow="base"
            borderRadius="10"
          >
            <Text
              mt="50px"
              textAlign="center"
              as="h2"
              fontSize={{ base: "35px", md: "50px" }}
              lineHeight="1.3"
              color="Blue.800"
            >
              NOSSOS CLIENTES
            </Text>

            <Splide
              style={{ height: "90%", marginTop: "40px" }}
              options={{
                autoplay: true,
                speed: 500,
                type: "loop",
              }}
            >
              <SplideSlide>
                <Flex
                  mx="15%"
                  h={{ base: "380px", sm: "350px" }}
                  justifyContent="center"
                  flexDirection="column"
                >
                  <Text fontSize={{ base: "14px", md: "16px" }}>
                    Para nós da Quick Comex a parceria de temos com Goto tem
                    sido uma maravilha, visto que são muito prestativos em ágeis
                    quanto aos retornos e suportes.
                  </Text>
                  <Text mt="4" fontSize={{ base: "14px", md: "16px" }}>
                    Nós optamos por vocês desde o início da nossa empresa, por
                    indicação de uma empresa parceira nossa e não temos até o
                    presente momento, nada que desabone essa parceria.
                  </Text>
                  <Text fontWeight="600" fontSize="20px" mt="8">
                    Quick Comex
                  </Text>
                </Flex>
              </SplideSlide>

              {isLargerThan520 && (
                <SplideSlide>
                  <Flex
                    mx="15%"
                    h="450px"
                    justifyContent="center"
                    flexDirection="column"
                  >
                    <Text fontSize={{ base: "14px", md: "16px" }}>
                      Contratamos mais de 60 linhas voip para modernizar nosso
                      sistema que era analógico.
                    </Text>
                    <Text mt="4" fontSize={{ base: "14px", md: "16px" }}>
                      Foi algo incrível, em pouco tempo estava tudo implementado
                      e funcionando. Tem uma curva de aprendizado bem baixa.
                      Plataforma gerenciável.
                    </Text>
                    <Text mt="4" fontSize={{ base: "14px", md: "16px" }}>
                      Economizamos e melhoramos nossa qualidade de atendimento
                      junto aos clientes. O suporte é igualmente incrível,
                      sempre sendo muito educados e solícitos. Gosto também dos
                      projetos de implantação, sendo uma etapa importante de
                      serem concluídos.
                    </Text>
                    <Text mt="4" fontSize={{ base: "14px", md: "16px" }}>
                      Hoje dou nota máxima de satisfação em toda a plataforma,
                      do atendimento até a entrega.
                    </Text>
                    <Text mt="4">Mega satisfeito!</Text>
                    <Text fontWeight="600" fontSize="20px" mt="8">
                      Sogamax - Distribuidora
                    </Text>
                  </Flex>
                </SplideSlide>
              )}

              <SplideSlide>
                <Flex
                  mx="15%"
                  h="450px"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <Text fontSize={{ base: "14px", md: "16px" }}>
                    Os produtos da GoTo tem surpreendido no quesito, facilidade
                    e economia. Até o momento tem sido uma experiência
                    maravilhosa, tudo muito prático e de fácil manuseio.
                  </Text>
                  <Text mt="4" fontSize={{ base: "14px", md: "16px" }}>
                    O suporte tem sido sensacional, em especial a uma atendente
                    chama Sabrina, nota 10. Agradeço todo o suporte que tem sido
                    prestado desde a contratação até a instalação.
                  </Text>
                  <Text fontWeight="600" fontSize="20px" mt="8">
                    Mitsu - Imóveis
                  </Text>
                </Flex>
              </SplideSlide>
            </Splide>
          </Box>
        </Box>
      </Box>
    </>
  );
}

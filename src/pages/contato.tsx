import { Box, Grid, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";

import Background from './../img/global/fundo01.jpg'
import Mobile from './../img/global/fundo-mobile.jpg'
import FormElement from "../components/Form/Form";
import H2 from "../components/Texts/H2";
import { useEffect, useState } from "react";

export default function Contato() {
  const [mobile, setMobile] = useState<Boolean>()

  const mobileResolut = useBreakpointValue({
    base: true,
    lg: false
  })

  useEffect(() => {
    if (window.innerWidth > 768) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }, [mobileResolut])

  return (
    <>
      <Box
        zIndex={-1}
      >
        {
          mobile ? <Image src={Mobile} alt='background azul' /> : <Image src={Background} alt='background blue' />
        }


        <Grid
          maxW='1344px'
          margin={{ base: '5%', md: '10%', lg: '10%', '2xl': '15%' }}
          templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
          position='absolute'
          bottom={{ base: '850px', sm: '550px', md: '500px', lg: '350px', '2xl': '200px' }}
        >
          <Box
            mr={{ base: '0px', lg: '10%' }}
          >
            <H2
              color='white'
              mb='25px'
              display={{ base: 'none', sm: 'inline' }

              }
            >Gostaria de falar com nossa equipe tecnica ?</H2>
            <Text color='white'>(11) 5039-9046</Text>
            <Text color='white'>contato@simcompany.com.br</Text>
            <Text color='white'>R. Aureliano Guimarães, 172 – Sala 1015 / 1016  - Vila Andrade, São Paulo - SP,  CEP: 05727-160, Brasil</Text>

            <Text color='white' mt={{ base: '0px', lg: '40px' }}>Endereço: Rua Direita N°7 - SP CEP 7777-077</Text>

            <Box h={{ base: '200px', sm: '350px' }} mt={{ sm: '15px', md: '25' }}>
              <iframe style={{ width: '100%', height: '100%' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1292.3542763526382!2d-46.737886844822775!3d-23.62835407402872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce514fd94b8c63%3A0x6ce93bc344899af!2sR.%20Aureliano%20Guimar%C3%A3es%20-%20Vila%20Andrade%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005727-160!5e0!3m2!1spt-BR!2sbr!4v1671191556834!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
            </Box>
          </Box>
          <Box

            mt={{ base: '25px', lg: '0px' }}
          >
            <FormElement />
          </Box>
        </Grid>


      </Box>
      <Box

        h={{ base: '950px', sm: '650px', md: '1100px', lg: '420px', '2xl': '200px' }} />
    </>
  )
}
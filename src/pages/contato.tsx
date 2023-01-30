import { AspectRatio, Box, Flex, Text } from "@chakra-ui/react";
import FormButton from "../components/ButtonForm/FormButton";
import H3 from "../components/Texts/H3";

import styles from './../styles/contact.module.css'

export default function contato() {


  return (
    <Box position='relative'>
      <Box className={styles.background} h='400px' w='100%' backgroundPosition='center' backgroundRepeat='no-repeat' backgroundSize='cover' />

      <Flex position='absolute' top={{ base: '50px', md: '150px' }} maxW='80%' mx='10%' flexDirection={{ base: 'column', md: 'row' }}>
        <Box mr={{ base: '0px', md: '4' }} flex='0.5'>
          <H3 color='white'>FALE COM NOSSA EQUIPE</H3>

          <Text color='white'><Text as='b'>Telefone:</Text> (11) 5039-9046</Text>
          <Text color='white'><Text as='b'>Email:</Text> contato@simcompany.com</Text>
          <Text color='white'><Text as='b'>Endereço:</Text>Rua Dr. Campos, n°  78 sala 22 e 23, centro - Cerquilho - SP - CPF: 18.520.103</Text>

          <AspectRatio mt='4'>
            <iframe src="https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1675087097879!5m2!1spt-BR!2sbr!6m8!1m7!1suL1UfsgpeDp22Cl7Hfb-Yw!2m2!1d-23.16322628131027!2d-47.74291588387382!3f173.91486952382962!4f-30.547824941765228!5f0.7820865974627469" />
          </AspectRatio>

        </Box>

        <FormButton flex='0.5' mt={{ base: '20px', md: '0px' }} />
      </Flex>

      <Box h={{ base: '850px', md: '450px' }} >

      </Box>
    </Box>
  )
}
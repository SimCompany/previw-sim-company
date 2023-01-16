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
          <Text color='white'><Text as='b'>Endereço:</Text> Rua Direita Nº7 - SP - CEP: 7777-077</Text>

          <AspectRatio mt='4'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5513354538384!2d-46.63479122774501!3d-23.548634294181532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5854cb049e6b%3A0x9c54d749985cfe0a!2sR.%20Direita%20-%20S%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001002-001!5e0!3m2!1spt-BR!2sbr!4v1673867440567!5m2!1spt-BR!2sbr" />
          </AspectRatio>
        </Box>

        <FormButton flex='0.5' mt={{ base: '20px', md:'0px'}} />
      </Flex>

      <Box h={{base:'850px', md:'450px'}} >

      </Box>
    </Box>
  )
}
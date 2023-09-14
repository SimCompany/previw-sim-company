import { Box, Flex } from "@chakra-ui/react";
import H1 from "../components/Texts/H1";
import ButtonChakra from "../components/Button/Button";



export default function Page() {

  function HandleReturn(){
    window.history.back()
  }

  return (
    <Box>
      <Flex flex='center' justifyContent='center' alignItems='center' flexDirection='column' textAlign='center'  style={{minHeight: "80vh"}}>
        <H1 fontSize="3xl">Mensagem Enviada, Obrigado!</H1>
        <p>Retornaremos o contato o mais breve possível!</p>


        <ButtonChakra
        bgColor="Blue.800"
        color="white"
        _hover={{ filter: "auto", brightness: "90%", transition: "0.5s" }}
        transition="0.5s"
        mt="4"
        py="8"
        maxW="300px"
        onClick={HandleReturn}
      >
        Voltar a página anterior
      </ButtonChakra>
      </Flex>
    </Box>
  )
}
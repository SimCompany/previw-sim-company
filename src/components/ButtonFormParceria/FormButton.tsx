import {
  Box,
  Checkbox,
  Flex,
  FlexProps,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import ButtonChakra from "../Button/Button";
import H2 from "../Texts/H2";
import InputForm from "../Form/InputForm";
import { useRouter } from "next/router";
import axios from "axios";
import H3 from "../Texts/H3";

interface formData extends FlexProps {
  plane?: string;
  router?: string;
  bgColorProp?: any;
  colorProps?: any;
}

export default function FormButtonParceria({
  plane,
  router,
  bgColorProp = "Green.300",
  colorProps = "white",
  ...rest
}: formData) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(0);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [branches, setBranches] = useState(0);
  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");

  const { reload } = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const data = {
      domain: "www.simcompany.com.br",
      emailTo: [
        // "luana@simcompany.com.br",
        "matteus.isaque28@gmail.com",
      ],
      title: "Parceria SIM COMPANY",
      name,
      email,
      number,
      // state,
      city,
      // branches,
      // companyName,
      // message,
    };

    try {
      await axios.post('https://main-form.herokuapp.com/form/sim-company-parceria', data);

      await window.location.assign('obrigado')
    } catch (error) {
      console.log(error)
    }


    // await reload();
  }

  return (
    <Flex
      as="form"
      onSubmit={handleSubmit}
      w="100%"
      borderRadius={5}
      {...rest}
      flexDirection="column"
      bgColor={bgColorProp}
      p={{ base: "4", sm: "8" }}
    >
      <Box>
        <Text
          as="h3"
          mb="4"
          fontSize={{ base: "2xl", lg: "3xl" }}
          letterSpacing={0}
          fontWeight="bold"
          color={colorProps}
        >
          Seja um parceiro da simcompany
        </Text>
      </Box>
      <InputForm
        name="name"
        placeholder="Nome Completo"
        mb="4"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <InputForm
        name="name"
        placeholder="Estado onde atua"
        mb="4"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", sm: "1fr 1fr" }}
        gridColumnGap="4"
        gridRowGap="4"
      >
        <InputForm
          name="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <InputForm
          name="number"
          placeholder="Telefone"
          onChange={(e) => {
            setNumber(Number(e.target.value));
          }}
        />
      </Box>

      <Flex alignItems="start" mt="6">
        <Checkbox my="5" color={colorProps} required />
        <Text
          color={colorProps}
          mt="4"
          ml="2"
          fontSize={{ base: "14px", sm: "16px" }}
        >
          Concordo em permitir que a Sim Company tenha acesso aos meus dados
          para me responder com propostas promocionais referente ao meu pedido.
        </Text>
      </Flex>


      <ButtonChakra
        bgColor="Blue.800"
        color="white"
        _hover={{ filter: "auto", brightness: "90%", transition: "0.5s" }}
        transition="0.5s"
        type="submit"
        mt="6"
        py="8"
      >
        Enviar informações
      </ButtonChakra>
    </Flex>
  );
}

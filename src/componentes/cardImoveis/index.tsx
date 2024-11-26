import { Box, Button, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { Imoveis } from "../../utils/interface";
import { useNavigate } from "react-router-dom";
import { LuBath, LuBedDouble } from "react-icons/lu";
import { PiGarageDuotone } from "react-icons/pi";
import { BiArea } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";

interface CardImoveisProps {
  imovel: Imoveis;
}

export function CardImoveis({ imovel }: CardImoveisProps) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/detalhes/${imovel.id}`);
  }
  const caminhoImageCard =
    import.meta.env.VITE_BASE_URL +
    "storage/" +
    imovel.imagens[0].caminhoImagem;
  return (
    <Box
      onClick={handleClick}
      bg={"white"}
      mb={5}
      borderRadius={"10"}
      w={{
        base: "90%",
        sm: "70%",
        md: "40%",
        lg: "40%",
        xl: "33%",
        "2xl": "20%",
      }}
      key={imovel.id}
      boxShadow={
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      }
      _hover={{
        cursor: "pointer",
        transition: "box-shadow 0.8s, width 0.8s",
      }}
    >
      <Box>
        <Box bg={"rgba(125, 182, 28, 0.8)"} position={'absolute'} p={2} borderBottomRadius={5}>
          <Text color={"white"} fontWeight={'bold'}>{imovel.valor}</Text>
        </Box>
        <Box>
          <Image
            borderTopRadius={"7"}
            src={caminhoImageCard}
            alt={"Imagem do card de Imóveis a venda"}
            objectFit={"cover"}
            width={"100%"}
          />
        </Box>
      </Box>

      <Box p={4}>
        <Flex mb={5} alignItems={"center"}>
          <IoLocationOutline size={22} />
          <Text
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
            fontSize={{ base: "sm", xl: "md" }}
            fontWeight={"400"}
          >
            {imovel.endereco} - {imovel.cidade.nomeDaCidade}
          </Text>
        </Flex>
        <Flex gap={5} mb={5} justifyContent={"center"}>
          {imovel.qtdQuarto && (
            <Flex gap={1}>
              <LuBedDouble size={22} />
              <Text
                mt={-0.5}
                fontSize={{ base: "sm", xl: "lg" }}
                fontWeight={"400"}
              >
                {imovel.qtdQuarto}
              </Text>
            </Flex>
          )}

          {imovel.qtdGaragem && (
            <Flex gap={1}>
              <PiGarageDuotone size={22} />
              <Text
                mt={-0.5}
                fontSize={{ base: "sm", xl: "lg" }}
                fontWeight={"400"}
              >
                {imovel.qtdGaragem}
              </Text>
            </Flex>
          )}
          <Flex gap={1}>
            <BiArea size={22} />
            <Text
              mt={-0.5}
              fontSize={{ base: "sm", xl: "lg" }}
              fontWeight={"400"}
            >
              {imovel.area} m²
            </Text>
          </Flex>
          {imovel.qtdBanheiro && (
            <Flex gap={1}>
              <LuBath size={22} />
              <Text
                mt={-0.5}
                fontSize={{ base: "sm", xl: "lg" }}
                fontWeight={"400"}
              >
                {imovel.qtdBanheiro}
              </Text>
            </Flex>
          )}
        </Flex>
        <Divider />

        <Flex gap={5} mt={5}>
          <Button
            fontSize={{ base: "sm", xl: "md" }}
            p={5}
            w={"100%"}
            bg={"transparent"}
            border={"1px solid #00AE9D"}
            color={"#00AE9D"}
            borderRadius={"50"}
            _hover={{ bg: "#00AE9D", color: "white", transition: "0.8s" }}
          >
            Tenho Interesse
          </Button>
          <Button
            fontSize={{ base: "sm", xl: "lg" }}
            p={5}
            w={"100%"}
            onClick={handleClick}
            bg={"#49479D"}
            color={"white"}
            borderRadius={"50"}
            _hover={{
              bg: "transparent",
              color: "#49479D",
              transition: "0.8s",
              border: "1px solid #49479D",
            }}
          >
            Detalhes
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

import {
  Badge,
  Box,
  Button,
  Flex,
  Text,
  Tooltip,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useFindImoveis } from "../../hooks/imoveis/useFindImoveis";
import { FaMapMarkedAlt } from "react-icons/fa";
import ImageGallery from "./components/galeria";

export function DetalhesComponente() {
  const url = window.location.href;
  const { imovelId } = useParams();
  const { data } = useFindImoveis(Number(imovelId));

  const sliderImageUrl =
    data?.imovel.imagens.map((imagem) => ({
      original:
        import.meta.env.VITE_BASE_URL + "storage/" + imagem.caminhoImagem,
      thumbnail:
        import.meta.env.VITE_BASE_URL + "storage/" + imagem.caminhoImagem,
    })) || [];
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <VStack
      bg={"white"}
      display={"flex"}
      justifyContent={"center"}
      flexDir={"column"}
    >
      <Box w={{ base: "100%", lg: "75%" }}>
        <Flex
          p={3}
          justifyContent={"space-between"}
          flexDir={{ base: "column", lg: "row" }}
        >
          <Text
            textAlign={{ base: "center" }}
            fontSize={{ base: "md", lg: "xl" }}
            fontWeight={"bold"}
            color={"#454545"}
          >
            {data?.imovel.endereco}
          </Text>
          {isMobile === true ? (
            <Text
              textAlign={"center"}
              fontSize={"md"}
              color={"#178620"}
              fontWeight={"bold"}
            >
              {data?.imovel.valor}
            </Text>
          ) : (
            <Badge colorScheme="green" p={2} borderRadius={5}>
              <Text fontSize={"md"} color={"#178620"} fontWeight={"bold"}>
                {data?.imovel.valor}
              </Text>
            </Badge>
          )}
        </Flex>
        <Box m={{ base: "auto", lg: "1%" }} w={{ base: "80%", lg: "80%" }}>
          <Text textAlign={{ base: "center", lg: "left" }}>
            {data?.imovel.descricao}
          </Text>
        </Box>

        {data?.imovel.imagens && (
          <Flex justifyContent={"center"}>
            <ImageGallery images={sliderImageUrl} />
          </Flex>
        )}

        <Box p={5} w={"100%"}>
          <Flex
            justifyContent={"space-between"}
            flexDir={{ base: "column", lg: "row" }}
          >
            <Text
              color={"#454545"}
              fontFamily={"Parkinsans"}
              fontSize={"xl"}
              fontWeight={"bold"}
              textAlign={'center'}
            >
              {data?.imovel.tipo.nomeDoTipo} em{" "}
              {data?.imovel.cidade.nomeDaCidade}
            </Text>

            {data?.imovel.linkMapa && (
              <Tooltip
                label={"Veja no mapa"}
                placement={"right"}
                borderRadius={5}
                hasArrow
                bg={"#49479D"}
              >
                {isMobile === true ? (
                  <Text textAlign={'center'} fontSize={"small"} fontWeight={"500"} color={"#454545"}>
                    {data?.imovel.linkMapa}
                  </Text>
                ) : (
                  <Flex cursor={"pointer"} alignItems={"center"} gap={2}>
                    <FaMapMarkedAlt size={20} color={"#5e5e5e"} />
                    <Text fontSize={"md"} fontWeight={"500"} color={"#454545"}>
                      {data?.imovel.linkMapa}
                    </Text>
                  </Flex>
                )}
              </Tooltip>
            )}
          </Flex>
          <Flex columnGap={3} mt={{ base: "10%", lg: 0 }}>
            {data?.imovel.qtdQuarto && (
              <Text
                textAlign={{ base: "center" }}
                fontSize={{ base: "sm", lg: "md" }}
              >
                {data?.imovel.qtdQuarto} quarto(s)
              </Text>
            )}
            {data?.imovel.qtdBanheiro && (
              <Text
                textAlign={{ base: "center" }}
                fontSize={{ base: "sm", lg: "md" }}
              >
                {data?.imovel.qtdBanheiro} banheiro(s)
              </Text>
            )}
            {data?.imovel.qtdGaragem && (
              <Text
                textAlign={{ base: "center" }}
                fontSize={{ base: "sm", lg: "md" }}
              >
                {data?.imovel.qtdGaragem} vaga(s)
              </Text>
            )}
            <Text
              textAlign={{ base: "center" }}
              fontSize={{ base: "sm", lg: "md" }}
            >
              {data?.imovel.area} m²
            </Text>
          </Flex>
          <Button
            onClick={() => {
              const text = encodeURIComponent(
                `Olá, eu consultei o catálogo de bens disponíveis para a venda e gostaria de saber mais detalhes sobre ${data?.imovel.tipo.nomeDoTipo}, ${data?.imovel.endereco}, disponivel em: ${url}`
              );
              window.open(
                `https://api.whatsapp.com/send?phone=553432492550&text=${text}`,
                "_blank"
              );
            }}
            border={"2px solid #7DB61C"}
            color={"#7DB61C"}
            background={"transparent"}
            mt={"5%"}
            ml={"auto"}
            w={"100%"}
            _hover={{ background: "#7DB61C", color: "white" }}
          >
            Tenho interesse
          </Button>
        </Box>
      </Box>
    </VStack>
  );
}

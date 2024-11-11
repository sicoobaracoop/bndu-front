import { Box, Image, Text } from "@chakra-ui/react";
import Vazio from "../../images/empty.jpg";

export function Empty() {
  return (
    <Box>
      <Image m={"auto"} src={Vazio} alt={"Nenhum item aqui"} boxSize={"lg"} />
      <Text
        textAlign={"center"}
        fontWeight={"bold"}
        fontSize={"2xl"}
        color={"#003641"}
      >
        Nenhum item aqui..
      </Text>
    </Box>
  );
}

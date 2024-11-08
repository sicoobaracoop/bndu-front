import { Box, Td, Text, Tooltip, Tr } from "@chakra-ui/react";
import { FaRegTrashCan } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";
import { Tipo } from "../../utils/interface";
import { useMutationDestroyTipo } from "../../hooks/tipos/useMutationDestroyTipo";
import { formatDate } from "../../utils/formatar";

interface ItemTipoProps {
  tipo: Tipo;
}

export function ItemTipo({ tipo }: ItemTipoProps) {
  const mutationDestroyTipo = useMutationDestroyTipo();

  const destroyTipo = async () => {
    await mutationDestroyTipo.mutateAsync(tipo.id);
  };

  return (
    <Tr
      textTransform={"capitalize"}
      h={65}
      key={tipo.id}
      _hover={{ backgroundColor: "#F4F4F4" }}
    >
      <Td>
        <Box display={"flex"} flexDir={"row"} gap={2}>
          <Text fontWeight={500} m={"auto"}>
            {tipo.nomeDoTipo}
          </Text>
        </Box>
      </Td>
      <Td>
        <Box display={"flex"} flexDir={"row"} gap={2}>
          <Text fontWeight={500} m={"auto"}>
            {formatDate(tipo.created_at)}
          </Text>
        </Box>
      </Td>
      <Td>
        <Box display={"flex"} flexDir={"row"} justifyContent={"center"} gap={2}>
          <Tooltip hasArrow label="Excluir" bg={"#ad1616"}>
            <Box
              _hover={{ color: "#ad1616" }}
              cursor={"pointer"}
              onClick={destroyTipo}
            >
              <FaRegTrashCan size={22} />
            </Box>
          </Tooltip>
          <Tooltip hasArrow label="Editar" bg={"#178620"}>
            <Box _hover={{ color: "#178620" }} cursor={"pointer"}>
              <GoPencil size={23} />
            </Box>
          </Tooltip>
        </Box>
      </Td>
    </Tr>
  );
}

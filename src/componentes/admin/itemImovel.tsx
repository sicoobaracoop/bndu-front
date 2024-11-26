import { Box, Td, Text, Tooltip, Tr, useDisclosure } from "@chakra-ui/react";
import { Imoveis } from "../../utils/interface";
import { FaRegTrashCan } from "react-icons/fa6";
import { DestroyImovel } from "../../hooks/imoveis/useMutationDestroyImovel";
import Swal from "sweetalert2";
import { FaRegEdit } from "react-icons/fa";
import { DrawerEditImovel } from "./drawerlEditImovel";

interface ItemImovelProps {
  imovel: Imoveis;
}

export function ItemImovel({ imovel }: ItemImovelProps) {
  const mutationDestroy = DestroyImovel();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const handleOpenDialogDestroy = () => {
    Swal.fire({
      title: "Realmente deseja excluir esse Imóvel?",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
      backdrop: "rgba(0, 0, 0, 0.7)",
      position: "center",
      showCancelButton: true,
      confirmButtonText: "Sim!",
      cancelButtonText: "Não",
    }).then((result) => {
      if (result.isConfirmed) {
        destroyImovel();
      }
    });
  };

  const openModalEditImovel = () => {
    onOpen();
  };

  const destroyImovel = async () => {
    await mutationDestroy.mutateAsync(imovel.id);
  };
  return (
    <>
      <DrawerEditImovel
        imovel={imovel}
        isOpen={isOpen}
        onClose={onClose}
        key={"drawer-edit-imovel"}
      />
      <Tr
        textTransform={"capitalize"}
        h={65}
        key={imovel.id}
        _hover={{ backgroundColor: "#F4F4F4" }}
      >
        <Td>
          <Box display={"flex"} flexDir={"row"} gap={2}>
            <Text fontWeight={500} m={"auto"}>
              {imovel.cidade.nomeDaCidade}
            </Text>
          </Box>
        </Td>
        <Td>
          <Box display={"flex"} flexDir={"row"} gap={2}>
            <Text fontWeight={500} m={"auto"}>
              {imovel.tipo.nomeDoTipo}
            </Text>
          </Box>
        </Td>
        <Td>
          <Box display={"flex"} flexDir={"row"}>
            <Text fontWeight={500} m={"auto"}>
              {imovel.qtdQuarto}
            </Text>
          </Box>
        </Td>
        <Td>
          <Box display={"flex"} flexDir={"row"}>
            <Text fontWeight={500} m={"auto"}>
              {imovel.qtdBanheiro}
            </Text>
          </Box>
        </Td>
        <Td>
          <Box display={"flex"} flexDir={"row"} gap={2}>
            <Text fontWeight={500} m={"auto"}>
              {imovel.qtdGaragem}
            </Text>
          </Box>
        </Td>
        <Td>
          <Box display={"flex"} flexDir={"row"}>
            <Text fontWeight={500} m={"auto"}>
              {imovel.valor}
            </Text>
          </Box>
        </Td>
        <Td>
          <Box display={"flex"} flexDir={"row"}>
            <Text fontWeight={500} m={"auto"}>
              {imovel.numeroDeMatricula}
            </Text>
          </Box>
        </Td>
        <Td>
          <Box display={"flex"} flexDir={"row"}>
            <Text fontWeight={500} m={"auto"}>
              {imovel.area}
            </Text>
          </Box>
        </Td>
        <Td>
          <Box
            display={"flex"}
            flexDir={"row"}
            justifyContent={"center"}
            gap={2}
          >
            <Tooltip hasArrow label="Excluir" bg={"#ad1616"}>
              <Box
                _hover={{ color: "#ad1616" }}
                cursor={"pointer"}
                onClick={handleOpenDialogDestroy}
              >
                <FaRegTrashCan size={22} />
              </Box>
            </Tooltip>
            <Tooltip hasArrow label="Editar" bg={"#178620"}>
              <Box onClick={openModalEditImovel} cursor={"pointer"}>
                <FaRegEdit size={22} />
              </Box>
            </Tooltip>
          </Box>
        </Td>
      </Tr>
    </>
  );
}

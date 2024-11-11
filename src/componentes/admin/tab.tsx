import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { ImovelLista } from "./imovelLista";
import { CidadeLista } from "./cidadeLista";
import { TipoLista } from "./tipoLista";
import { DrawerCadastrarImovel } from "./drawerCadastrarImovel";
import { TiPlusOutline } from "react-icons/ti";
import { ModalCadastrarTipo } from "./modalCadastrarTipo";
import { ModalCadastrarCidade } from "./modalCadastrarCidade";

export function TabComponente() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenCidade,
    onClose: onCloseCidade,
    onOpen: onOpenCidade,
  } = useDisclosure();
  const {
    isOpen: isOpenTipo,
    onClose: onCloseTipo,
    onOpen: onOpenTipo,
  } = useDisclosure();

  const openModalCadastrarImovel = () => {
    onOpen();
  };

  const openModalCadastrarCidade = () => {
    onOpenCidade();
  };

  const openModalCadastrarTipo = () => {
    onOpenTipo();
  };

  return (
    <>
      <DrawerCadastrarImovel isOpen={isOpen} onClose={onClose} />
      <ModalCadastrarTipo
        isOpen={isOpenTipo}
        onClose={onCloseTipo}
        key={"modal-cadastrar-tipo"}
      />
      <ModalCadastrarCidade
        isOpen={isOpenCidade}
        onClose={onCloseCidade}
        key={"modal-cadastrar-cidade"}
      />
      <Box bg={"white"} w={"95%"} m={"auto"} mt={5}>
        <Tabs size="md" variant="enclosed">
          <TabList color={"#49479D"}>
            <Tab fontWeight={"bold"}>Imóveis</Tab>
            <Tab fontWeight={"bold"}>Cidades</Tab>
            <Tab fontWeight={"bold"}>Categorias</Tab>
          </TabList>
          <TabPanels>
            <TabPanel display={"flex"} flexDir={"column"}>
              <Box ml={"auto"} mb={"1%"}>
                <Button
                  leftIcon={<TiPlusOutline size={20} />}
                  ml={"auto"}
                  onClick={openModalCadastrarImovel}
                  bg={"transparent"}
                  border={"2px solid #49479D"}
                  color={"#49479D"}
                  _hover={{ bg: "#49479D", color: "white" }}
                  borderRadius={100}
                >
                  Novo Imóvel
                </Button>
              </Box>
              <ImovelLista />
            </TabPanel>
            <TabPanel display={"flex"} flexDir={"column"}>
              <Box ml={"auto"} mb={"1%"}>
                <Button
                  leftIcon={<TiPlusOutline size={20} />}
                  ml={"auto"}
                  onClick={openModalCadastrarCidade}
                  bg={"transparent"}
                  border={"2px solid #49479D"}
                  color={"#49479D"}
                  _hover={{ bg: "#49479D", color: "white" }}
                  borderRadius={100}
                >
                  Nova Cidade
                </Button>
              </Box>
              <CidadeLista />
            </TabPanel>
            <TabPanel display={"flex"} flexDir={"column"}>
              <Box ml={"auto"} mb={"1%"}>
                <Button
                  leftIcon={<TiPlusOutline size={20} />}
                  ml={"auto"}
                  onClick={openModalCadastrarTipo}
                  bg={"transparent"}
                  border={"2px solid #49479D"}
                  color={"#49479D"}
                  _hover={{ bg: "#49479D", color: "white" }}
                  borderRadius={100}
                >
                  Nova Categoria
                </Button>
              </Box>
              <TipoLista />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}

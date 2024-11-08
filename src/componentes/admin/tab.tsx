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

export function TabComponente() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const openModalCadastrarImovel = () => {
    onOpen();
  };
  return (
    <>
      <DrawerCadastrarImovel isOpen={isOpen} onClose={onClose} />
      <Box bg={"white"} w={"95%"} m={"auto"} mt={5}>
        <Tabs>
          <TabList>
            <Tab>Imóveis</Tab>
            <Tab>Cidades</Tab>
            <Tab>Categorias</Tab>
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
            <TabPanel>
              <CidadeLista />
            </TabPanel>
            <TabPanel>
              <TipoLista />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}

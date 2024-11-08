import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import { DrawerCadastrarImovel } from "./drawerCadastrarImovel";
import { TabComponente } from "./tab";

export function Admin() {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const openModalCadastrarImovel = () => {
        onOpen();
    }

    return (
        <Box mt={7}>
            <DrawerCadastrarImovel
                isOpen={isOpen}
                onClose={onClose}
            />
            <Box
                bg={'white'}
                p={5}
                w={"95%"}
                borderRadius={'7'}
                m={'auto'}
                boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}
                display={'flex'}
                flexDir={'row'}
            >
                <Text
                    fontWeight={'bold'}
                    fontSize={'2xl'}
                    textAlign={'center'}
                    color={'#49479D'}
                >
                    Área Administrativa
                </Text>
                <Button
                    ml={'auto'}
                    onClick={openModalCadastrarImovel}
                    bg={'#49479D'}
                    color={"white"}
                    borderRadius={'2'}
                    _hover={{
                        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
                        borderRadius: 5,
                        transition: '0.8s'
                    }}
                >
                    Novo Cadastro
                </Button>

            </Box>
            <Box>
                <TabComponente />
            </Box>
        </Box>
    )
}
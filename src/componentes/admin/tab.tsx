import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react'
import { ImovelLista } from './imovelLista'
import { CidadeLista } from './cidadeLista'
import { TipoLista } from './tipoLista'

export function TabComponente() {
    return (
        <Box
            bg={'white'}
            w={'95%'}
            m={'auto'}
            mt={5}
        >
            <Tabs>
                <TabList>
                    <Tab>Imóveis</Tab>
                    <Tab>Cidades</Tab>
                    <Tab>Categorias</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
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
    )
}
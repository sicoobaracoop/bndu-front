import { Box, Text } from "@chakra-ui/react";
import { TabComponente } from "./tab";

export function Admin() {
    return (
        <Box mt={7}>
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
            </Box>
            <Box>
                <TabComponente />
            </Box>
        </Box>
    )
}
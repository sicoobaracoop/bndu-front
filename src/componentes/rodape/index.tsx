import { Box, Text } from "@chakra-ui/react";

export function Rodape() {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    return (
        <Box
            bg={'#003641'}
            mt={'auto'}
            p={5}
            boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'}
        >
            <Text
                textAlign={'center'}
                fontWeight={'500'}
                color={'white'}
                fontSize={'md'}
            >
                © 1999 - {anoAtual} Sicoob Aracoop
            </Text>
        </Box>
    )
}
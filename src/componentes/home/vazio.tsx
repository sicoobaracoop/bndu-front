import { Box, Center, Image, Text } from "@chakra-ui/react";
import img from '../../images/nada-encontrado.jpg'

export function NadaEncontrado() {
    return (
        <Center bg={"white"} >
            <Box boxSize={650}>
                <Image src={img} alt={'Nenhum resutlado encontrado. créditos: Designed by freepik'} />
                <Text textAlign={'center'} fontWeight={'bold'} fontSize={{base: 'md', lg: '2xl'}} color={'#49479d'}>Desculpe, não encontramos nenhum imóvel correspondente.</Text>
            </Box>
        </Center>
    )
}
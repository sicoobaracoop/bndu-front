import { Box, Center, Spinner, Text } from "@chakra-ui/react";

export function SpinnerImoveis() {
    return (
        <Center bg={'white'} h={'40vh'}>
            <Box display={'flex'} flexDir={'column'} alignContent={'center'} mt={'-100px'}>
                <Spinner
                    thickness='4px'
                    speed='0.95s'
                    emptyColor='#49479D'
                    color='#00AE9D'
                    size='xl'
                    ml={'25'}
                />
                <Text mt={5} fontWeight={'bold'} fontSize={'2xl'} color={'#49479D'}>Aguarde...</Text>
            </Box>
        </Center>
    )
}
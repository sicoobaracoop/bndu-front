import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { PiFacebookLogoLight, PiYoutubeLogoThin } from "react-icons/pi";
import logo from '../../images/logo-25anos-aracoop.png';
import { useNavigate } from "react-router-dom";

export function MenuHeader() {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/");
    }

    return (
        <SimpleGrid
            columns={{ base: 2, md: 3 }}
            border={'1px solid #ccc'}
            height={'7vh'}
            bg={"white"}
            boxShadow={'rgba(0, 0, 0, 0.16) 0px 1px 4px'}
        >
            <Flex gap={2} _hover={{ cursor: 'pointer' }} display={{ base: 'none', md: 'flex' }} alignItems={'center'} h={"7vh"} fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
                <Text fontWeight={'bold'} color={'#25D366'}>(34)3249-2550</Text>
                <FaWhatsapp color={'#25D366'} />
            </Flex>

            <Box ml={'auto'} mr={"auto"} boxSize={{ base: 125, md: 120, lg: 170}} h={'auto'} onClick={handleClick} _hover={{ cursor: 'pointer' }}>
                <Image src={logo} alt={'logo sicoob aracoop 25 anos'} />
            </Box>

            <Flex display={'flex'} gap={1} fontSize={{ base: 22, md: 25 , xl: 30}} ml={"auto"} alignItems={'center'} h={"7vh"}>
                <Box
                    _hover={{
                        cursor: 'pointer',
                        transition: '0.5s',
                        color: '#833AB4',
                    }}>
                    <CiInstagram />
                </Box>

                <Box
                    _hover={{
                        cursor: 'pointer',
                        transition: '0.5s',
                        color: '#1877F2'
                    }}>
                    <PiFacebookLogoLight />
                </Box>
                <Box
                    _hover={{ cursor: 'pointer', transition: '0.5s', color: '#FF0000' }}>
                    <PiYoutubeLogoThin />
                </Box>
            </Flex>
        </SimpleGrid>
    )
}

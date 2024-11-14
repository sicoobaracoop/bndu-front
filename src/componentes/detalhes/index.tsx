import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { GrMapLocation } from "react-icons/gr";
import { TbPointFilled } from "react-icons/tb";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useParams } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import { formatBrl } from "../../utils/formatar";
import { LuBath, LuBedDouble } from "react-icons/lu";
import { PiCityBold, PiGarageDuotone } from "react-icons/pi";
import { BiArea } from "react-icons/bi";
import { useFindImoveis } from "../../hooks/imoveis/useFindImoveis";

export function DetalhesComponente() {
    const { imovelId } = useParams();
    const { data } = useFindImoveis(Number(imovelId));

    const sliderImageUrl = data?.imovel.imagens.map(imagem => ({
        original: import.meta.env.VITE_BASE_URL + 'storage/' + imagem.caminhoImagem,
        thumbnail: import.meta.env.VITE_BASE_URL + 'storage/' + imagem.caminhoImagem
    })) || [];

    return (
        <Box mt={10} mb={10}>
            <SimpleGrid
                columns={4}
                w={'90%'}
                m={'auto'}
                bg={'white'}
                p={5}
                borderTopRadius={'10'}
                boxShadow={'rgba(0, 0, 0, 0.16) 0px 1px 4px'}
                display={{ base: 'none', xl: 'grid' }}
            >
                <Flex gap={2} alignItems={'center'}>
                    <GrMapLocation size={25} />
                    <Text fontWeight={'bold'} fontSize={'xl'}>{data?.imovel.endereco}</Text>
                </Flex>
                <Flex gap={2} alignItems={'center'}>
                    <PiCityBold size={25} />
                    <Text fontWeight={'bold'} fontSize={'xl'}>{data?.imovel.cidade.nomeDaCidade}</Text>
                </Flex>
                <Flex alignItems={'center'}>
                    <TbPointFilled size={25} />
                    <Text fontWeight={'bold'} fontSize={'xl'}>{data?.imovel.tipo.nomeDoTipo}</Text>
                </Flex>
                <Box display={'flex'} flex={'row'} ml={'auto'}>
                    <Text fontWeight={'bold'} fontSize={'xl'} color={'#7DB61C'}>{formatBrl(Number(data?.imovel.valor))}</Text>
                </Box>
                <Flex display={'flex'} flex={'row'} gap={3} alignItems={'center'} mt={2}>
                    <LuBedDouble size={25} />
                    <Text fontWeight={'500'} fontSize={'xl'}>{data?.imovel.qtdQuarto} Quarto(s)</Text>
                    <PiGarageDuotone size={25} />
                    <Text fontWeight={'500'} fontSize={'xl'}>{data?.imovel.qtdGaragem} Vaga(s)</Text>
                </Flex>
                <Flex alignItems={'center'} mt={2}>
                    <LuBath size={25} />
                    <Text fontWeight={'500'} fontSize={'xl'}>{data?.imovel.qtdGaragem} Banheiro(s)</Text>
                </Flex>
                <Flex alignItems={'center'} mt={2}>
                    <BiArea size={25} />
                    <Text fontWeight={'500'} fontSize={'xl'}>{data?.imovel.area} m²</Text>
                </Flex>
                <Box ml={'auto'} mt={2}>
                    <Button
                        onClick={() => {
                            const text = encodeURIComponent(`Olá, gostaria de saber mais detalhes sobre o imóvel Nº ${data?.imovel.id}, ${data?.imovel.tipo.nomeDoTipo}, ${data?.imovel.endereco}`)
                            window.open(`https://api.whatsapp.com/send?phone=553432492550&text=${text}`, '_blank')                        
                        }}
                        borderRadius={'4'}
                        bg={'#7DB61C'}
                        color={'white'}
                        _hover={{ borderRadius: '50', bg: 'transparent', border: '1px solid #7DB61C', color: '#7DB61C', transition: '0.8s' }}
                    >
                        <Text fontWeight={'bold'} fontSize={'xl'}>Tenho Interesse</Text>
                    </Button>
                </Box>
            </SimpleGrid>

            <Box
                borderTopRadius={'10'}
                boxShadow={'rgba(0, 0, 0, 0.16) 0px 1px 4px'}
                m={'auto'}
                maxW={'95%'}
                bg={'white'}
                p={5}
                flexDir={'column'}
                gap={3}
                display={{ base: 'grid', xl: 'none' }}
            >
                <Flex gap={2} m={'auto'}>
                    <Text fontWeight={'bold'}>{data?.imovel.endereco} - </Text>
                    <Text fontWeight={'bold'}>{data?.imovel.cidade.nomeDaCidade}</Text>
                </Flex>
                <Flex gap={2} m={'auto'}>
                    <Text fontWeight={'bold'}>{data?.imovel.tipo.nomeDoTipo} - </Text>
                    <Text fontWeight={'bold'}>{data?.imovel.qtdQuarto} quarto(s)</Text>
                </Flex>
                <Flex gap={2} m={'auto'}>
                    <Text fontWeight={'bold'}>{data?.imovel.qtdGaragem} vaga(s)</Text>
                    <Text fontWeight={'bold'}>2 banheiro(s)</Text>
                </Flex>
                <Box>
                    <Text textAlign={'center'} fontWeight={'bold'}>{formatBrl(Number(data?.imovel.valor))}</Text>
                </Box>
            </Box>

            <Box m={'auto'} w={{ base: '95%', xl: '90%' }} bg={'white'} p={7} boxShadow={'rgba(0, 0, 0, 0.16) 0px 1px 4px'}>
                <Text fontWeight={'500'} fontSize={{ base: 'sm', lg: 'xl' }} textAlign={'justify'}>{data?.imovel.descricao}</Text>
                <Box mt={5} display={{ base: 'grid', xl: 'none' }}>
                    <Button
                        m={'auto'}
                        borderRadius={'4'}
                        bg={'#7DB61C'}
                        color={'white'}
                        size={'sm'}
                    >
                        <Text fontWeight={'bold'} fontSize={'xl'}>Tenho Interesse</Text>
                    </Button>
                </Box>
            </Box>
            <Box
                justifyContent={'center'}
                w={{ base: '95%', xl: '90%' }}
                m={'auto'}
                display={'flex'}
                borderBottomRadius={'10'}
                bg={"white"}
                border={'1px solid #e6e6e6'}
            >
                <Box w={{ base: '100%', xl: '75%' }} p={5}>
                    <ImageGallery
                        items={sliderImageUrl}
                    />
                </Box>
            </Box>
        </Box>
    )
}

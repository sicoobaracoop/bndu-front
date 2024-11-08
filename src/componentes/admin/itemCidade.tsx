import { Box, Td, Text, Tooltip, Tr } from "@chakra-ui/react"
import { Cidade } from "../../utils/interface"
import { FaRegTrashCan } from "react-icons/fa6"
import { GoPencil } from "react-icons/go"
import { useMutationDestroyCidade } from "../../hooks/cidades/useMutationDestroyCidade"
import { formatDate } from "../../utils/formatar"

interface ItemCidadeProps {
    cidade: Cidade
}

export function ItemCidade({ cidade }: ItemCidadeProps) {
    const mutationDestroyCidade = useMutationDestroyCidade();

    const destroyCidade = async () => {
        await mutationDestroyCidade.mutateAsync(cidade.id);
    }

    return (
        <Tr textTransform={'capitalize'} h={65} key={cidade.id} _hover={{ backgroundColor: '#F4F4F4' }}>
            <Td>
                <Box display={'flex'} flexDir={'row'} gap={2}>
                    <Text fontWeight={500} m={'auto'}>{cidade.nomeDaCidade}</Text>
                </Box>
            </Td>
            <Td>
                <Box display={'flex'} flexDir={'row'} gap={2}>
                    <Text fontWeight={500} m={'auto'}>{formatDate(cidade.created_at)}</Text>
                </Box>
            </Td>
            <Td>
                <Box display={'flex'} flexDir={'row'} justifyContent={'center'} gap={2}>
                    <Tooltip hasArrow label='Excluir' bg={'#ad1616'}>
                        <Box
                            _hover={{ color: '#ad1616' }}
                            cursor={'pointer'}
                            onClick={destroyCidade}
                        >
                            <FaRegTrashCan size={22} />
                        </Box>
                    </Tooltip>
                    <Tooltip hasArrow label='Editar' bg={'#178620'}>
                        <Box
                            _hover={{ color: '#178620' }}
                            cursor={'pointer'}
                        >
                            <GoPencil size={23} />
                        </Box>
                    </Tooltip>
                </Box>
            </Td>
        </Tr>
    )
}
import { Box, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { useImoveis } from "../../hooks/imoveis/useImoveis";
import { useState } from "react";
import { ItemImovel } from "./itemImovel";
import { Imoveis } from "../../utils/interface";
import { Pagination } from "../pagination";

export function ImovelLista() {
    const [page, setPage] = useState(1);
    const { data } = useImoveis({ page });

    return (
        <Box>
            <TableContainer sx={{ backgroundcColor: 'white', borderRadius: '5px', border: '1px solid #cccccc' }}>
                <Table colorScheme='gray' bg={'white'}>
                    <Thead>
                        <Tr
                            h={55}
                            bg={'white'}
                        >
                            <Th textAlign={'center'}>Cidade:</Th>
                            <Th textAlign={'center'}>Tipo:</Th>
                            <Th textAlign={'center'}>Quartos:</Th>
                            <Th textAlign={'center'}>Garagem:</Th>
                            <Th textAlign={'center'}>Valor:</Th>
                            <Th textAlign={'center'}>Matrícla:</Th>
                            <Th textAlign={'center'}>Área:</Th>
                            <Th textAlign={'center'}>Ação:</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data?.imoveis.map((imovel: Imoveis) => (
                            <ItemImovel
                                key={imovel.id}
                                imovel={imovel}
                            />
                        ))}

                        <Pagination
                            totalCountofRegisters={data?.meta.total}
                            currentPage={data?.meta.current_page}
                            onPageChange={setPage}
                            numberToPage={data?.meta.to}
                            lastPage={data?.meta.last_page}
                            numberOfItens={data?.imoveis.length}
                            registerPerPage={data?.meta.per_page}
                        />
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}
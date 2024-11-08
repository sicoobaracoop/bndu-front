import { Box, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { useState } from "react";
import { Cidade } from "../../utils/interface";
import { useCidade } from "../../hooks/cidades/useCidade";
import { ItemCidade } from "./itemCidade";
import { Pagination } from "../pagination";

export function CidadeLista() {
    const [page, setPage] = useState(1);
    const { data } = useCidade({ page });

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
                            <Th textAlign={'center'}>Criado em:</Th>
                            <Th textAlign={'center'}>Ação:</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data?.cidade.map((cidade: Cidade) => (
                            <ItemCidade
                                key={cidade.id}
                                cidade={cidade}
                            />
                        ))}
                        <Pagination
                            totalCountofRegisters={data?.meta.total}
                            currentPage={data?.meta.current_page}
                            onPageChange={setPage}
                            numberToPage={data?.meta.to}
                            lastPage={data?.meta.last_page}
                            numberOfItens={data?.cidade.length}
                            registerPerPage={data?.meta.per_page}
                        />
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}
import { Box, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { useTipo } from "../../hooks/tipos/useTipo";
import { useState } from "react";
import { ItemTipo } from "./itemTipo";
import { Tipo } from "../../utils/interface";
import { Pagination } from "../pagination";

export function TipoLista() {
    const [page, setPage] = useState(1);
    const { data } = useTipo({ page });

    return (
        <Box>
            <TableContainer sx={{ backgroundcColor: 'white', borderRadius: '5px', border: '1px solid #cccccc' }}>
                <Table colorScheme='gray' bg={'white'}>
                    <Thead>
                        <Tr
                            h={55}
                            bg={'white'}
                        >
                            <Th textAlign={'center'}>Categoria:</Th>
                            <Th textAlign={'center'}>Criado em:</Th>
                            <Th textAlign={'center'}>Ação:</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data?.tipo.map((tipo: Tipo) => (
                            <ItemTipo
                                key={tipo.id}
                                tipo={tipo}
                            />
                        ))}
                        <Pagination
                            totalCountofRegisters={data?.meta.total}
                            currentPage={data?.meta.current_page}
                            onPageChange={setPage}
                            numberToPage={data?.meta.to}
                            lastPage={data?.meta.last_page}
                            numberOfItens={data?.tipo.length}
                            registerPerPage={data?.meta.per_page}
                        />
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}
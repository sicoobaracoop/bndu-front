import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/axios";

interface GetGerenteResponse {
    gerente: [
        {
            id: number,
            nome: string
            contanto: string
        }
    ]
}

async function getGerenteAll(): Promise<GetGerenteResponse> {
    const response = await api.get('/gerente-all').then(response => response.data);

    const gerente = response;

    return {
        gerente
    }
}

export function useGerenteAll() {
    return useQuery({
        queryKey: ['gerente-all'],
        refetchOnWindowFocus: false,
        queryFn: () => getGerenteAll()
    })
}
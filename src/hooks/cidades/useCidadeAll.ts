import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/axios";

interface GetCidadeAllResponse {
    cidade: [
        {
            id: number,
            nomeDaCidade: string
        }
    ]
}

async function getCidadeAll(): Promise<GetCidadeAllResponse> {
    const response = await api.get('/cidade-all').then(response => response.data);

    const cidade = response.map((cidade: GetCidadeAllResponse) => {
        return {
            ...cidade
        }
    });

    return {
        cidade
    }
}

export function useCidadeAll() {
    return useQuery({
        queryKey: ['cidade-all'],
        refetchOnWindowFocus: false,
        queryFn: () => getCidadeAll()
    })
}
import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/axios"

interface GetTipoAllResponse {
    tipo: [
        {
            id: number,
            nomeDoTipo: string
        }
    ]
}

async function getTipoAll(): Promise<GetTipoAllResponse> {
    const response = await api.get('/tipo-all').then(response => response.data);

    const tipo = response.map((tipo: GetTipoAllResponse) => {
        return {
            ...tipo
        }
    });

    return {
        tipo
    }
}

export function useTipoAll() {
    return useQuery({
        queryKey: ['tipos-all'],
        refetchOnWindowFocus: false,
        queryFn: () => getTipoAll()
    })
} 
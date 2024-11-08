import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/axios"
import { MetaPagination, Tipo } from "../../utils/interface"

interface GetTipoResponse {
    tipo: Tipo[],
    meta: MetaPagination
}

interface GetTipoProps {
    page: number
}

async function getTipo({ page }: GetTipoProps): Promise<GetTipoResponse> {
    const response = await api.get('/tipo', {
        params: {
            page
        }
    }).then(response => response.data);

    const tipo: Tipo[] = response.data.map((tipo: Tipo) => {
        return {
            ...tipo
        }
    });

    let meta = {
        current_page: response.current_page,
        last_page: response.last_page,
        per_page: response.per_page,
        to: response.to,
        total: response.total
    }

    return {
        tipo,
        meta
    }
}

export function useTipo({ page }: GetTipoProps) {
    return useQuery({
        queryKey: ['tipo', { page }],
        refetchOnWindowFocus: false,
        queryFn: () => getTipo({ page })
    })
}
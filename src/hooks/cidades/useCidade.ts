import { api } from "../../lib/axios";
import { Cidade, MetaPagination } from "../../utils/interface";
import { useQuery } from "@tanstack/react-query";

interface GetCidadeResponse {
    cidade: Cidade[],
    meta: MetaPagination
}

interface UseCidadeProps {
    page: number
}

async function getCidade({ page }: UseCidadeProps): Promise<GetCidadeResponse> {
    const response = await api.get('/cidade', {
        params: {
            page
        }
    }).then(response => response.data);

    const cidade: Cidade[] = response.data.map((cidade: Cidade) => {
        return {
            ...cidade,
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
        cidade,
        meta
    }
}

export function useCidade({ page }: UseCidadeProps) {
    return useQuery({
        queryKey: ['cidade', { page }],
        refetchOnWindowFocus: false,
        queryFn: () => getCidade({ page })
    })
}
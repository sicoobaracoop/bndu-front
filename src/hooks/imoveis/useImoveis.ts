import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/axios";
import { FilterImoveis, Imoveis, MetaPagination } from "../../utils/interface";

interface GetImoveisResponse {
    imoveis: Imoveis[],
    meta: MetaPagination
}

interface GetImoveisProps {
    page: number,
    filter?: FilterImoveis
}

async function getImoveis({ page, filter }: GetImoveisProps): Promise<GetImoveisResponse> {
    const response = await api.get('/imovel', {
        params: {
            ...filter,
            page,
        }
    }).then(resposne => resposne.data);

    const imoveis: Imoveis[] = response.data.map((imovel: Imoveis) => {
        return {
            ...imovel
        }
    });

    const meta = {
        current_page: response.current_page,
        last_page: response.last_page,
        per_page: response.per_page,
        to: response.to,
        total: response.total
    }

    return {
        meta,
        imoveis
    }
}

export function useImoveis({ page, filter }: GetImoveisProps) {
    return useQuery({
        queryKey: ['imoveis', { page, filter }],
        refetchOnWindowFocus: false,
        queryFn: () => getImoveis({ page, filter })
    })
}
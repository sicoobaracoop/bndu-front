import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/axios";
import { Imoveis } from "../../utils/interface";

interface GetFindImoveisProps {
    imovel: Imoveis;
}

async function getFindImoveis(idImovel: number): Promise<GetFindImoveisProps> {
    const response = await api.get(`/imovel/${idImovel}`).then(response => response.data);

    const imovel = response;

    return {
        imovel
    }
}

export function useFindImoveis(idImovel: number) {
    return useQuery({
        queryKey: ['find-imovel-details', { idImovel }],
        refetchOnWindowFocus: false,
        queryFn: () => getFindImoveis(idImovel)
    })
}
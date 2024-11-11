import { useMutation } from "@tanstack/react-query";
import { api } from "../../lib/axios";
import { useToast } from "@chakra-ui/react";
import { queryClient } from "../../lib/reactQuery";

export function DestroyImovel() {
    const toast = useToast();
    return useMutation({
        mutationFn: async (id: number) => {
            await api.delete(`imovel/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['imoveis'] });
            toast({ title: 'Imóvel excluído com sucesso!', status: 'success', duration: 2500, isClosable: true, position: 'top-right' });
        },
        onError: (error) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const axiosError = error as any;
            const errorTitle = axiosError.response?.data?.detail || 'Ocorreu um erro desconhecido';
            toast({ title: errorTitle, status: 'error', duration: 5000, isClosable: true, position: 'top-left' });
        }
    })
}
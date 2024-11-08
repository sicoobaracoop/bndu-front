import { useMutation } from "@tanstack/react-query";
import { api } from "../../lib/axios";
import { queryClient } from "../../lib/reactQuery";
import { useToast } from "@chakra-ui/react";

export function useMutationDestroyCidade() {
    const toast = useToast();

    return useMutation({
        mutationFn: async (id: number) => {
            await api.delete(`cidade/${id}`)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cidade-all'] });
            queryClient.invalidateQueries({ queryKey: ['cidade'] });
            toast({ title: 'Cidade excluída com sucesso!', status: 'success', duration: 2500, isClosable: true, position: 'top-right' });
        },
        onError: (error) => {
            const axiosError = error as any;
            const errorTitle = axiosError.response?.data?.detail || 'Ocorreu um erro desconhecido';
            toast({ title: errorTitle, status: 'error', duration: 5000, isClosable: true, position: 'top-left' });
        }
    })
}
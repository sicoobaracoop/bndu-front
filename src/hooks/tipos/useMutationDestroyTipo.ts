/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { api } from "../../lib/axios";
import { queryClient } from "../../lib/reactQuery";
import { useToast } from "@chakra-ui/react";

export function useMutationDestroyTipo() {
    const toast = useToast();

    return useMutation({
        mutationFn: async (id: number) => {
            await api.delete(`tipo/${id}`)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tipos-all'] });
            queryClient.invalidateQueries({ queryKey: ['tipo'] });
            toast({ title: 'Tipo excluído com sucesso!', status: 'success', duration: 2500, isClosable: true, position: 'top-right' });
        },
        onError: (error) => {
            const axiosError = error as any;
            const errorTitle = axiosError.response?.data?.mensagem || 'Ocorreu um erro desconhecido';
            toast({ title: errorTitle, status: 'error', duration: 5000, isClosable: true, position: 'top-left' });
        }
    })
}
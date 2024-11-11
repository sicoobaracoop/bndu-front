import { useMutation } from "@tanstack/react-query";
import { newFormDataCreateTipo } from "../../utils/schema";
import { api } from "../../lib/axios";
import { useToast } from "@chakra-ui/react";
import { queryClient } from "../../lib/reactQuery";

export function useMutationCreateTipo() {
    const toast = useToast();

    return useMutation({
        mutationFn: async (data: newFormDataCreateTipo) => {
            await api.post('/tipo', {
                nomeDoTipo: data.nome
            })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tipos-all'] });
            toast({ title: 'Novo tipo criado!', status: 'success', duration: 2500, isClosable: true, position: 'top-right' });
        },
        onError: (error) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const axiosError = error as any;
            const errorTitle = axiosError.response?.data?.detail || 'Ocorreu um erro desconhecido';
            toast({ title: errorTitle, status: 'error', duration: 5000, isClosable: true, position: 'top-left' });
        }
    })
}
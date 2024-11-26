/* eslint-disable @typescript-eslint/no-explicit-any */
import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../lib/axios";
import { newFormDataCreateGerente } from "../../utils/schema";
import { queryClient } from "../../lib/reactQuery";

export function useMutationCreateGerente() {
    const toast = useToast();

    return useMutation({
        mutationFn: async (data: newFormDataCreateGerente) => {
            await api.post('/gerente', {
                nome: data.nome,
                contato: data.contanto
            })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['gerente-all'] });
            queryClient.invalidateQueries({ queryKey: ['cidade'] });
            toast({ title: 'Gerente cadastrada com sucesso!', status: 'success', duration: 2500, isClosable: true, position: 'top-right' });
        },
        onError: (error) => {
            const axiosError = error as any;
            const errorTitle = axiosError.response?.data?.detail || 'Ocorreu um erro desconhecido';
            toast({ title: errorTitle, status: 'error', duration: 5000, isClosable: true, position: 'top-left' });
        }
    })
}
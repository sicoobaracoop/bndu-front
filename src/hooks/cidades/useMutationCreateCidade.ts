import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../lib/axios";
import { newFormDataCreateCidade } from "../../utils/schema";
import { queryClient } from "../../lib/reactQuery";

export function useMutationCreateCidade() {
    const toast = useToast();

    return useMutation({
        mutationFn: async (data: newFormDataCreateCidade) => {
            await api.post('/cidade', {
                nomeDaCidade: data.nomeDaCidade
            })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cidade-all'] });
            queryClient.invalidateQueries({ queryKey: ['cidade'] });
            toast({ title: 'Cidade cadastrada com sucesso!', status: 'success', duration: 2500, isClosable: true, position: 'top-right' });
        },
        onError: (error) => {
            const axiosError = error as any;
            const errorTitle = axiosError.response?.data?.detail || 'Ocorreu um erro desconhecido';
            toast({ title: errorTitle, status: 'error', duration: 5000, isClosable: true, position: 'top-left' });
        }
    })
}
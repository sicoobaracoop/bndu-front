import { useMutation } from "@tanstack/react-query";
import { newFormDataCreateImovel } from "../../utils/schema";
import { api } from "../../lib/axios";
import { queryClient } from "../../lib/reactQuery";
import { useToast } from "@chakra-ui/react";

export function useMutationCreateImovel() {
    const toast = useToast();
    return useMutation({
        mutationFn: async (data: newFormDataCreateImovel) => {
            console.log('data.quantidadeBanheiros: ', data.quantidadeBanheiros)
            const formData = new FormData();
            formData.append('cidadeID', data.cidadeID);
            formData.append('linkMapa', data.linkMapa);
            formData.append('tipoID', data.tipoID);
            formData.append('qtdQuarto', data.quantidadeQuarto);
            formData.append('qtdGaragem', data.quantidadeGaragem);
            formData.append('qtdBanheiro', data.quantidadeBanheiros);
            formData.append('endereco', data.endereco);
            formData.append('valor', data.valor);
            formData.append('numeroDeMatricula', data.numeroDaMatricula);
            formData.append('area', data.area);
            formData.append('descricao', data.descricao);

            if (data.fotos) {
                data.fotos.forEach((image) => {
                    formData.append('fotos[]', image);
                });
            }
            await api.postForm('/imovel', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cidade-all'] });
            queryClient.invalidateQueries({ queryKey: ['imoveis'] });
            toast({ title: 'Imovél cadastrado com sucesso!', status: 'success', duration: 2500, isClosable: true, position: 'top-right' });
        },
        onError: (error) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const axiosError = error as any;
            const errorTitle = axiosError.response?.data?.detail || 'Ocorreu um erro desconhecido';
            toast({ title: errorTitle, status: 'error', duration: 5000, isClosable: true, position: 'top-left' });
        }
    });
}
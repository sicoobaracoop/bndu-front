import { useMutation } from "@tanstack/react-query";
import { newFormDataCreateImovel } from "../../utils/schema";
import { api } from "../../lib/axios";
import { queryClient } from "../../lib/reactQuery";
import { useToast } from "@chakra-ui/react";

export function useMutationEditImovel(id: number) {
  const toast = useToast();
  return useMutation({
    mutationFn: async (data: newFormDataCreateImovel) => {
      await api.put(`/imovel/${id}`, {
        cidadeID: data.cidadeID,
        tipoID: data.tipoID,
        endereco: data.endereco,
        qtdQuarto: data.quantidadeQuarto,
        qtdGaragem: data.quantidadeGaragem,
        qtdBanheiro: data.quantidadeBanheiros,
        linkMapa: data.linkMapa,
        valor: data.valor,
        numeroDeMatricula: data.numeroDaMatricula,
        area: data.area,
        descricao: data.descricao,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["imoveis"] });
      toast({
        title: "Imovél editado com sucesso!",
        status: "success",
        duration: 2500,
        isClosable: true,
        position: "top-right",
      });
    },
    onError: (error) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const axiosError = error as any;
      const errorTitle =
        axiosError.response?.data?.detail || "Ocorreu um erro desconhecido";
      toast({
        title: errorTitle,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
    },
  });
}

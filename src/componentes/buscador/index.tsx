import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import { useTipoAll } from "../../hooks/tipos/useTipoAll";
import { useCidadeAll } from "../../hooks/cidades/useCidadeAll";
import { useFormContext } from "react-hook-form";
import { TbFilterSearch } from "react-icons/tb";
import { useState } from "react";

export function BuscadorDeImoveis() {
  const { data } = useTipoAll();
  const { data: dataCidade } = useCidadeAll();
  const {
    register,
    setValue,
    getValues: getValuesContext,
    formState: { isSubmitting },
  } = useFormContext();
  const handleFilter = () => {
    const values = getValuesContext("filtro");

    setValue("actionFilter", {
      categoriaID: values.categoriaID === "" ? null : values.categoriaID,
      cidadeID: values.cidadeID === "" ? null : values.cidadeID,
      valorMinimo: values.valorMinimo === "" ? null : values.valorMinimo,
      valorMaximo: values.valorMaximo === "" ? null : values.valorMaximo,
    });
  };

  const formatarBrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorInput = e.target.value;
    const numeros = valorInput.replace(/\D/g, "");

    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(numeros) / 100);
  };

  const [valorMinimo, setValorMinimo] = useState<string>("");
  const [valorMaximo, setValorMaximo] = useState<string>("");
  
  return (
    <Flex bg={"white"} justifyContent={"center"}>
      <SimpleGrid columns={{ base: 1, md: 5 }} w={"90%"} gap={5} p={2}>
        <FormControl>
          <FormLabel fontSize={{ base: "sm", md: "md" }} mb={0}>
            Categorias:
          </FormLabel>
          <Select
            {...register("filtro.categoriaID")}
            focusBorderColor={"#49479D"}
            placeholder={"Selecione"}
          >
            {data?.tipo.map((tipo) => (
              <option value={tipo.id} key={tipo.id}>
                {tipo.nomeDoTipo}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel fontSize={{ base: "sm", md: "md" }} mb={0}>
            Valor mínimo:
          </FormLabel>
          <Input
            {...register("filtro.valorMinimo")}
            focusBorderColor={"#49479D"}
            value={valorMinimo}
            placeholder={'Informe um valor mínimo'}
            onChange={(e) => setValorMinimo(formatarBrl(e))}
          />
        </FormControl>
        <FormControl>
          <FormLabel fontSize={{ base: "sm", md: "md" }} mb={0}>
            Valor máximo:
          </FormLabel>
          <Input
            {...register("filtro.valorMaximo")}
            focusBorderColor={"#49479D"}
            value={valorMaximo}
            placeholder={'Informe um valor máximo'}
            onChange={(e) => setValorMaximo(formatarBrl(e))}
          />
        </FormControl>
        <FormControl>
          <FormLabel fontSize={{ base: "sm", md: "md" }} mb={0}>
            Cidade:
          </FormLabel>
          <Select
            {...register("filtro.cidadeID")}
            focusBorderColor={"#49479D"}
            placeholder={"Selecione"}
          >
            {dataCidade?.cidade.map((cidade) => (
              <option value={cidade.id} key={cidade.id}>
                {cidade.nomeDaCidade}
              </option>
            ))}
          </Select>
        </FormControl>
        <Button
          rightIcon={<TbFilterSearch size={22} />}
          onClick={() => handleFilter()}
          isLoading={isSubmitting}
          loadingText={"Buscando..."}
          w={{ base: "100%", md: "70%" }}
          mt={{ md: "7%" }}
          bg={"#49479D"}
          color={"white"}
          borderRadius={5}
          _hover={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
            borderRadius: 5,
            transition: "0.8s",
          }}
        >
          Buscar
        </Button>
      </SimpleGrid>
    </Flex>
  );
}

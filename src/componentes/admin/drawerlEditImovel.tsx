import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Input,
  Link,
  Select,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";
import { ModalCadastrarTipo } from "./modalCadastrarTipo";
import { ModalCadastrarCidade } from "./modalCadastrarCidade";
import { useTipoAll } from "../../hooks/tipos/useTipoAll";
import { useCidadeAll } from "../../hooks/cidades/useCidadeAll";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  newFormDataCreateImovel,
  validationSchemaCreateImovel,
} from "../../utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ModalCadastrarGerente } from "./modalCadastrarGerente";
import { FaRegEdit } from "react-icons/fa";
import { Imoveis } from "../../utils/interface";
import { useMutationEditImovel } from "../../hooks/imoveis/useMutationEdit";

interface ModalEditImovelProps {
  isOpen: boolean;
  onClose: () => void;
  imovel: Imoveis;
}

export function DrawerEditImovel({
  isOpen,
  onClose,
  imovel,
}: ModalEditImovelProps) {
  const [cidade] = useState(imovel.cidade);
  const [categoria] = useState(imovel.tipo);
  const [quartos, setQuartos] = useState(imovel.qtdQuarto);
  const [garagem, setGaragem] = useState(imovel.qtdGaragem);
  const [banheiros, setBanheiros] = useState(imovel.qtdBanheiro);
  const [endereco, setEndereco] = useState(imovel.endereco);
  const [linkMapa, setLinkMapa] = useState(imovel.linkMapa);
  const [valor, setValor] = useState<string>(imovel.valor);
  const [matricula, setMatricula] = useState(imovel.numeroDeMatricula);
  const [area, setArea] = useState(imovel.area);
  const [desc, setDesc] = useState(imovel.descricao);

  const {
    isOpen: isOpenTipo,
    onClose: onCloseTipo,
    onOpen: onOpenTipo,
  } = useDisclosure();
  const {
    isOpen: isOpenCidade,
    onClose: onCloseCidade,
    onOpen: onOpenCidade,
  } = useDisclosure();
  const {
    isOpen: isOpenGerente,
    onClose: onCloseGerente,
  } = useDisclosure();

  const { data } = useTipoAll();
  const { data: dataCidade } = useCidadeAll();

  const mutationEditImovel = useMutationEditImovel(imovel.id);
  const { register, handleSubmit, reset } = useForm<newFormDataCreateImovel>({
    resolver: zodResolver(validationSchemaCreateImovel),
  });

  const openModalCadastrarTipo = () => {
    onOpenTipo();
  };

  const openModalCadastrarCidade = () => {
    onOpenCidade();
  };

  const editImovel = async (data: newFormDataCreateImovel) => {
    await mutationEditImovel.mutateAsync(data);
    onClose();
    reset();
  };

  const formatarBrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorInput = e.target.value;
    const numeros = valorInput.replace(/\D/g, "");

    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(numeros) / 100);
  };

  return (
    <Box>
      <ModalCadastrarTipo
        isOpen={isOpenTipo}
        onClose={onCloseTipo}
        key={"modal-cadastrar-tipo"}
      />
      <ModalCadastrarCidade
        isOpen={isOpenCidade}
        onClose={onCloseCidade}
        key={"modal-cadastrar-cidade"}
      />
      <ModalCadastrarGerente
        isOpen={isOpenGerente}
        onClose={onCloseGerente}
        key={"modal-cadastrar-gerente"}
      />
      <Drawer isOpen={isOpen} onClose={onClose} size={"lg"}>
        <DrawerOverlay bg={"rgba(73, 71,157, 0.6)"} />
        <DrawerContent>
          <DrawerHeader gap={3} display={"flex"} flexDir={"row"}>
            <FaRegEdit size={30} />
            Edição
          </DrawerHeader>
          <Divider />
          <DrawerCloseButton />
          <DrawerBody>
            <FormControl isRequired mb={5}>
              <FormLabel>Cidade</FormLabel>
              <Select
                {...register("cidadeID")}
                mt={-1.5}
                focusBorderColor={"#49479D"}
              >
                <option value={cidade.id} key={cidade.id}>
                  {cidade.nomeDaCidade}
                </option>
                {dataCidade?.cidade.map((cidade) => (
                  <option value={cidade.id} key={cidade.id}>
                    {cidade.nomeDaCidade}
                  </option>
                ))}
              </Select>
              <Link
                onClick={openModalCadastrarCidade}
                fontWeight={"bold"}
                color={"#49479d"}
                isExternal
                display={"flex"}
                flexDir={"row"}
                mt={0.5}
              >
                Quero Cadastrar uma nova cidade <BiLinkExternal size={22} />
              </Link>
            </FormControl>
            <FormControl isRequired mb={5}>
              <FormLabel>Categoria do Imóvel</FormLabel>
              <Select
                {...register("tipoID")}
                mt={-1.5}
                focusBorderColor={"#49479D"}
              >
                <option value={categoria.id} key={categoria.id}>
                  {categoria.nomeDoTipo}
                </option>
                {data?.tipo.map((tipo) => (
                  <option value={tipo.id} key={tipo.id}>
                    {tipo.nomeDoTipo}
                  </option>
                ))}
              </Select>
              <Link
                fontWeight={"bold"}
                color={"#49479d"}
                isExternal
                display={"flex"}
                flexDir={"row"}
                mt={0.5}
                onClick={openModalCadastrarTipo}
              >
                Quero Cadastrar um novo tipo <BiLinkExternal size={22} />
              </Link>
            </FormControl>
            <FormControl mb={5}>
              <FormLabel>Quantidade de Quartos</FormLabel>
              <Input
                value={quartos}
                {...register("quantidadeQuarto")}
                mt={-1.5}
                onChange={(e) => setQuartos(e.target.value)}
                focusBorderColor={"#49479D"}
              />
            </FormControl>
            <FormControl mb={5}>
              <FormLabel>Quantidade de Garagem</FormLabel>
              <Input
                value={garagem}
                {...register("quantidadeGaragem")}
                mt={-1.5}
                onChange={(e) => setGaragem(e.target.value)}
                focusBorderColor={"#49479D"}
              />
            </FormControl>
            <FormControl mb={5}>
              <FormLabel>Quantidade de Banheiros</FormLabel>
              <Input
                value={banheiros}
                {...register("quantidadeBanheiros")}
                mt={-1.5}
                onChange={(e) => setBanheiros(Number(e.target.value))}
                focusBorderColor={"#49479D"}
              />
            </FormControl>
            <FormControl isRequired mb={5}>
              <FormLabel>Endereço</FormLabel>
              <Input
                value={endereco}
                {...register("endereco")}
                mt={-1.5}
                onChange={(e) => setEndereco(e.target.value)}
                focusBorderColor={"#49479D"}
              />
            </FormControl>
            <FormControl mb={5}>
              <FormLabel>Link Mapa</FormLabel>
              <Input
                value={linkMapa}
                {...register("linkMapa")}
                mt={-1.5}
                onChange={(e) => setLinkMapa(e.target.value)}
                focusBorderColor={"#49479D"}
              />
            </FormControl>
            <FormControl isRequired mb={5}>
              <FormLabel>Valor</FormLabel>
              <Input
                value={valor}
                {...register("valor")}
                mt={-1.5}
                focusBorderColor={"#49479D"}
                onChange={(e) => setValor(formatarBrl(e))}
              />
            </FormControl>
            <FormControl isRequired mb={5}>
              <FormLabel>Número de Matrícula</FormLabel>
              <Input
                value={matricula}
                {...register("numeroDaMatricula")}
                mt={-1.5}
                onChange={(e) => setMatricula(e.target.value)}
                focusBorderColor={"#49479D"}
              />
            </FormControl>
            <FormControl isRequired mb={5}>
              <FormLabel>Área</FormLabel>
              <Input
                value={area}
                {...register("area")}
                mt={-1.5}
                onChange={(e) => setArea(e.target.value)}
                focusBorderColor={"#49479D"}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Descrição</FormLabel>
              <Textarea
                {...register("descricao")}
                value={desc}
                mt={-1.5}
                onChange={(e) => setDesc(e.target.value)}
                focusBorderColor={"#49479D"}
              />
            </FormControl>
          </DrawerBody>
          <DrawerFooter>
            <Button
              onClick={handleSubmit(editImovel)}
              isLoading={mutationEditImovel.isPending}
              loadingText={"Aguarde..."}
              w={"100%"}
              bg={"#49479D"}
              color={"white"}
              borderRadius={"2"}
              _hover={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                borderRadius: 5,
                transition: "0.8s",
              }}
            >
              Salvar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

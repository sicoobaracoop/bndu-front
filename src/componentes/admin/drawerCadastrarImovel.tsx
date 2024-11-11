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

import { BsHouseAdd } from "react-icons/bs";
import { ModalCadastrarTipo } from "./modalCadastrarTipo";
import { ModalCadastrarCidade } from "./modalCadastrarCidade";
import { PiImagesSquare } from "react-icons/pi";
import { ModalAnexarImagens } from "./modalAnexarImagens";
import { useTipoAll } from "../../hooks/tipos/useTipoAll";
import { useCidadeAll } from "../../hooks/cidades/useCidadeAll";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  newFormDataCreateImovel,
  validationSchemaCreateImovel,
} from "../../utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutationCreateImovel } from "../../hooks/imoveis/useMutationCreateImovel";

interface ModalCadastrarImovelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DrawerCadastrarImovel({
  isOpen,
  onClose,
}: ModalCadastrarImovelProps) {
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
    isOpen: isOpenAnexarImagem,
    onClose: onCloseAnexarImagem,
    onOpen: onOpenAnexarImagem,
  } = useDisclosure();
  const { data } = useTipoAll();
  const { data: dataCidade } = useCidadeAll();
  const [files, setFiles] = useState<File[]>([]);
  const mutationCadastrarImovel = useMutationCreateImovel();
  const { register, handleSubmit, reset, getValues } =
    useForm<newFormDataCreateImovel>({
      resolver: zodResolver(validationSchemaCreateImovel),
    });

  const handleFileChange = (newFiles: File[]) => {
    setFiles(newFiles);
  };

  const openModalCadastrarTipo = () => {
    onOpenTipo();
  };

  const openModalCadastrarCidade = () => {
    onOpenCidade();
  };

  const openModalAnexarImagem = () => {
    onOpenAnexarImagem();
  };

  const cadastrarImovel = async () => {
    const data = getValues();
    if (files.length > 0) {
      data.fotos = files;
    }

    await mutationCadastrarImovel.mutateAsync(data);
    onClose();
    reset();
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
      <ModalAnexarImagens
        isOpen={isOpenAnexarImagem}
        onClose={onCloseAnexarImagem}
        files={files}
        onFileChange={handleFileChange}
        key={"modal-anexar-imagem"}
      />
      <Drawer isOpen={isOpen} onClose={onClose} size={"md"}>
        <DrawerOverlay bg={"rgba(73, 71,157, 0.6)"} />
        <DrawerContent>
          <DrawerHeader gap={3} display={"flex"} flexDir={"row"}>
            <BsHouseAdd size={30} />
            Cadastre um novo Imóvel
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
                <option value={""} key={"select-empty"}>
                  Selecione uma cidade
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
                <option value={""} key={"select-empty"}>
                  Selecione uma categoria
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
                placeholder={"Se necessário informe a quantidade"}
                {...register("quantidadeQuarto")}
                mt={-1.5}
                focusBorderColor={"#49479D"}
              />
            </FormControl>
            <FormControl mb={5}>
              <FormLabel>Quantidade de Garagem</FormLabel>
              <Input
                placeholder={"Se necessário informe a quantidade"}
                {...register("quantidadeGaragem")}
                mt={-1.5}
                focusBorderColor={"#49479D"}
              />
            </FormControl>
            <FormControl mb={5}>
              <FormLabel>Quantidade de Banheiros</FormLabel>
              <Input
                placeholder={"Se necessário informe a quantidade"}
                {...register("quantidadeBanheiros")}
                mt={-1.5}
                focusBorderColor={"#49479D"}
              />
            </FormControl>
            <FormControl isRequired mb={5}>
              <FormLabel>Endereço</FormLabel>
              <Input
                placeholder={"Informe o endereço"}
                {...register("endereco")}
                mt={-1.5}
                focusBorderColor={"#49479D"}
              />
            </FormControl>
            <FormControl isRequired mb={5}>
              <FormLabel>Valor</FormLabel>
              <Input
                placeholder={"Informe o valor"}
                {...register("valor")}
                mt={-1.5}
                focusBorderColor={"#49479D"}
              />
            </FormControl>
            <FormControl isRequired mb={5}>
              <FormLabel>Número de Matrícula</FormLabel>
              <Input
                placeholder={"Informe a matrícula"}
                {...register("numeroDaMatricula")}
                mt={-1.5}
                focusBorderColor={"#49479D"}
              />
            </FormControl>
            <FormControl isRequired mb={5}>
              <FormLabel>Área</FormLabel>
              <Input
                placeholder={"Informe a área do imovél"}
                {...register("area")}
                mt={-1.5}
                focusBorderColor={"#49479D"}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Descriçaõ</FormLabel>
              <Textarea
                {...register("descricao")}
                placeholder={"Adicione uma breve descrição sobre o imóvel"}
                mt={-1.5}
                focusBorderColor={"#49479D"}
              />
            </FormControl>
            <Button
              onClick={openModalAnexarImagem}
              rightIcon={<PiImagesSquare size={25} />}
              colorScheme="teal"
              variant="outline"
              mt={5}
            >
              Anexar Imagens
            </Button>
          </DrawerBody>
          <DrawerFooter>
            <Button
              onClick={handleSubmit(cadastrarImovel)}
              isLoading={mutationCadastrarImovel.isPending}
              loadingText={'Aguarde...'}
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
              Cadastrar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

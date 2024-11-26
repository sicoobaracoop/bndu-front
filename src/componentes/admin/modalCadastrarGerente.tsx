import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Button,
  ModalFooter,
  FormHelperText,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { IoMdAddCircleOutline } from "react-icons/io";
import {
  newFormDataCreateGerente,
  validationSchemaCreateGerente,
} from "../../utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutationCreateGerente } from "../../hooks/gerente/useMutationCreateGerente";

interface ModalCadastrarGerenteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalCadastrarGerente({
  isOpen,
  onClose,
}: ModalCadastrarGerenteProps) {
  const { register, handleSubmit, reset } = useForm<newFormDataCreateGerente>({
    resolver: zodResolver(validationSchemaCreateGerente),
  });

  const mutationCreateGerente = useMutationCreateGerente();

  const cadastrarGerente = async (data: newFormDataCreateGerente) => {
    mutationCreateGerente.mutateAsync(data);
    onClose();
    reset();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
      <ModalOverlay bg={"rgba(73, 71,157, 0.7)"} />
      <ModalContent>
        <ModalHeader display={"flex"} flexDir={"row"} gap={3}>
          <IoMdAddCircleOutline size={30} />
          Cadastrar um novo gerente
        </ModalHeader>
        <Divider />
        <ModalCloseButton />
        <ModalBody gap={5} display={"flex"}>
          <FormControl isRequired>
            <FormLabel>Nome do gerente</FormLabel>
            <Input
              {...register("nome")}
              placeholder={"Informe o nome"}
              focusBorderColor={"#49479d"}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Contanto</FormLabel>
            <Input
              type={"number"}
              {...register("contanto")}
              placeholder={"Ex: 34988296513"}
              focusBorderColor={"#49479d"}
            />
            <FormHelperText color={"#ad1616"} fontWeight={"bold"}>
              Informe o DDD
            </FormHelperText>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            isLoading={mutationCreateGerente.isPending}
            loadingText={"Aguarde..."}
            onClick={handleSubmit(cadastrarGerente)}
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
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

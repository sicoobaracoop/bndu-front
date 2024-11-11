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
  newFormDataCreateCidade,
  validationSchemaCreateCidade,
} from "../../utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutationCreateCidade } from "../../hooks/cidades/useMutationCreateCidade";

interface ModalCadastrarCidadeProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalCadastrarCidade({
  isOpen,
  onClose,
}: ModalCadastrarCidadeProps) {
  const { register, handleSubmit, reset } = useForm<newFormDataCreateCidade>({
    resolver: zodResolver(validationSchemaCreateCidade),
  });

  const mutationCreateCidade = useMutationCreateCidade();

  const cadastrarCidade = async (data: newFormDataCreateCidade) => {
    mutationCreateCidade.mutateAsync(data);
    onClose();
    reset();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg={"rgba(73, 71,157, 0.7)"} />
      <ModalContent>
        <ModalHeader display={"flex"} flexDir={"row"} gap={3}>
          <IoMdAddCircleOutline size={30} />
          Cadastrar uma nova cidade
        </ModalHeader>
        <Divider />
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired>
            <FormLabel>Nome da cidade</FormLabel>
            <Input
              {...register("nomeDaCidade")}
              placeholder={"Ex: Araguari - MG"}
              focusBorderColor={"#49479d"}
            />
            <FormHelperText color={"#ad1616"} fontWeight={"bold"}>
              Não esqueça de informa o estado
            </FormHelperText>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            isLoading={mutationCreateCidade.isPending}
            loadingText={"Aguarde..."}
            onClick={handleSubmit(cadastrarCidade)}
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

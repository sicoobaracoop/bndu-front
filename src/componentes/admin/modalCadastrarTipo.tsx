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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { IoMdAddCircleOutline } from "react-icons/io";
import {
  newFormDataCreateTipo,
  validationSchemaCreateTipo,
} from "../../utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutationCreateTipo } from "../../hooks/tipos/useMutationCreateTipo";

interface ModalCadastrarImovelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalCadastrarTipo({
  isOpen,
  onClose,
}: ModalCadastrarImovelProps) {
  const { register, handleSubmit, reset } = useForm<newFormDataCreateTipo>({
    resolver: zodResolver(validationSchemaCreateTipo),
  });

  const mutationCreateTipo = useMutationCreateTipo();

  const criarNovoTipo = async (data: newFormDataCreateTipo) => {
    await mutationCreateTipo.mutateAsync(data);
    onClose();
    reset();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg={"rgba(73, 71,157, 0.7)"} />
      <ModalContent>
        <ModalHeader display={"flex"} flexDir={"row"} gap={3}>
          <IoMdAddCircleOutline size={30} />
          Cadastrar uma nova Categoria
        </ModalHeader>
        <Divider />
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired>
            <FormLabel>Nome do tipo</FormLabel>
            <Input
              {...register("nome")}
              placeholder={"Ex: terreno, casa, apartamento, etcs"}
              focusBorderColor={"#49479d"}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={handleSubmit(criarNovoTipo)}
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

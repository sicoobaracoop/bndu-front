import { Box, Button, Center, Divider, FormControl, FormLabel, Input, Text, VStack } from "@chakra-ui/react";
import { newFormDataCreateUser, validationSchemaCreateUser } from "../../utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutationCreateUser } from "../../hooks/users/useMutationCreateUser";

export function Cadastro() {
    const mutationCreateUser = useMutationCreateUser();
    const { register, handleSubmit } = useForm<newFormDataCreateUser>({
        resolver: zodResolver(validationSchemaCreateUser)
    });

    const cadastrarUser = async (data: newFormDataCreateUser) => {
        await mutationCreateUser.mutateAsync(data)
    }

    return (
        <Box display={'flex'} flexDir={'column'} w={'100%'} h={'86.1vh'}>
            <Center mt={"7%"}>
                <VStack
                    spacing={5}
                    bg={'white'}
                    borderRadius={'5'}
                    w={'27%'}
                    p={5}
                    boxShadow={'rgba(0, 0, 0, 0.16) 0px 1px 4px'}
                >
                    <Box>
                        <Text fontWeight={'bold'} fontSize={'2xl'} color={'#00AE9D'}>Cadastro</Text>
                    </Box>
                    <Divider />
                    <FormControl isRequired>
                        <FormLabel>Informe o nome:</FormLabel>
                        <Input {...register('nome')} focusBorderColor={'#00AE9D'} mt={-1.5} borderRadius={'base'} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Informe o e-mail:</FormLabel>
                        <Input {...register('email')} type="e-mail" focusBorderColor={'#00AE9D'} mt={-1.5} borderRadius={'base'} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Informe a senha:</FormLabel>
                        <Input {...register('password')} type={"password"} focusBorderColor={'#00AE9D'} mt={-1.5} borderRadius={'base'} />
                    </FormControl>
                    <FormControl>
                        <Button
                            onClick={handleSubmit(cadastrarUser)}
                            w={'100%'}
                            bg={'#49479D'}
                            color={'white'}
                            _hover={{ bg: 'transparent', color: '#49479D', border: '1px solid #49479D', transition: '0.7s' }}
                        >
                            OK!
                        </Button>
                    </FormControl>
                </VStack>
            </Center>
        </Box>
    )
}
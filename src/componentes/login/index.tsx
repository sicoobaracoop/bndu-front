import { Box, Button, Center, Divider, FormControl, FormLabel, Input, Text, VStack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { newFormDataLoginUser, validationSchemaLoginUser } from "../../utils/schema";
import { useMutationLogin } from "../../hooks/users/useMutationLoginUser";

export function Login() {
    const mutationLoginUser = useMutationLogin()
    const { register, handleSubmit } = useForm<newFormDataLoginUser>({
        resolver: zodResolver(validationSchemaLoginUser)
    });

    const submitLogin = (data: newFormDataLoginUser) => {
        mutationLoginUser.mutateAsync(data);
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
                        <Text fontWeight={'bold'} fontSize={'2xl'} color={'#00AE9D'}>Login</Text>
                    </Box>
                    <Divider />
                    <FormControl isRequired>
                        <FormLabel>Informe o E-mail:</FormLabel>
                        <Input {...register('email')} focusBorderColor={'#00AE9D'} mt={-1.5} borderRadius={'base'} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Informe a senha:</FormLabel>
                        <Input {...register('password')} type={"password"} focusBorderColor={'#00AE9D'} mt={-1.5} borderRadius={'base'} />
                    </FormControl>
                    <FormControl>
                        <Button
                            onClick={handleSubmit(submitLogin)}
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
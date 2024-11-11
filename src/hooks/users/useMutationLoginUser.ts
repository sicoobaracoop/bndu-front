import { useMutation } from "@tanstack/react-query";
import { newFormDataLoginUser } from "../../utils/schema";
import { api } from "../../lib/axios";
import { useToast } from "@chakra-ui/react";
import { isAuthenticated, login } from "../../lib/auth";
import { useNavigate } from "react-router-dom";

export function useMutationLogin() {
    const navigate = useNavigate();
    const toast = useToast();

    return useMutation({
        mutationFn: async (data: newFormDataLoginUser) => {
            const response = await api.post('/login', {
                email: data.email,
                password: data.password
            });

            return response
        },
        onSuccess: (response) => {
            login(response.data.token, response.data.user);

            if (isAuthenticated() === true) {
                navigate('/admin')
            }
        },
        onError: (error) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const axiosError = error as any;
            const errorTitle = axiosError.response?.data?.mensagem;
            toast({ title: errorTitle, status: 'error', duration: 5000, isClosable: true, position: 'top-left' });
        }
    })
}
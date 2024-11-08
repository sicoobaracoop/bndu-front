import { useMutation } from "@tanstack/react-query";
import { newFormDataCreateUser } from "../../utils/schema";
import { api } from "../../lib/axios";

export function useMutationCreateUser() {
    return useMutation({
        mutationFn: async (data: newFormDataCreateUser) => {
            await api.post('/user-create', {
                name: data.nome,
                email: data.email,
                password: data.password
            });

            window.location.href = '/login';
        }
    })
}
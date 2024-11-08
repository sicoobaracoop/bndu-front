import { Box } from "@chakra-ui/react";
import { Home } from "../../componentes/home";
import { FormProvider, useForm } from "react-hook-form";

export function PageHome() {
    const form = useForm();

    return (
        <Box>
            <FormProvider {...form}>
                <Home />
            </FormProvider>
        </Box>
    )
}
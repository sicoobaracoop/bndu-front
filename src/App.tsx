import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/reactQuery";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import './custom.css';
import { theme } from "./styles/theme";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  )
}
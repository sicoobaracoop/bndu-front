/* eslint-disable @typescript-eslint/ban-types */
import { Box, Heading, Image } from "@chakra-ui/react";
import bannerHome from "../../images/banner.png";
import { BuscadorDeImoveis } from "../buscador";
import { CardImoveis } from "../cardImoveis";
import { useEffect, useState } from "react";
import { useImoveis } from "../../hooks/imoveis/useImoveis";
import { Imoveis } from "../../utils/interface";
import { Pagination } from "../pagination";
import { useFormContext } from "react-hook-form";
import { NadaEncontrado } from "./vazio";
import { SpinnerImoveis } from "./spninnerImoveis";

export function Home() {
  const { watch } = useFormContext();
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<{}>({});
  const { data, isLoading } = useImoveis({ page, filter });
  const filtrar = watch("actionFilter");

  useEffect(() => {
    if (filtrar !== undefined) {
      setFilter(filtrar);
    }
  }, [filtrar]);

  return (
    <Box>
      <Box>
        <Image
          src={bannerHome}
          alt={"Banner imobiliária"}
          height={{ base: "20vh", lg: "auto" }}
          width={"100%"}
          objectFit="cover"
        />
      </Box>
      <BuscadorDeImoveis />
      {isLoading ? (
        <SpinnerImoveis />
      ) : data?.imoveis.length === 0 ? (
        <NadaEncontrado />
      ) : (
        <Box bg={"#f7f7f7"}>
          <Box m={"auto"} p={{ base: 4, lg: 10 }} mb={5}>
            <Heading
              textAlign={"center"}
              fontSize={{ base: "xl", md: "2xl" }}
              color={"#00AE9D"}
            >
              Nossos Imóveis!
            </Heading>
          </Box>
          <Box
            maxW={"95%"}
            m={"auto"}
            display={"flex"}
            flexDir={"row"}
            gap={7}
            flexWrap={"wrap"}
            justifyContent={"center"}
          >
            {data?.imoveis.map((imovel: Imoveis) => (
              <CardImoveis imovel={imovel} key={imovel.id} />
            ))}
          </Box>

          <Pagination
            totalCountofRegisters={data?.meta.total}
            currentPage={data?.meta.current_page}
            onPageChange={setPage}
            numberToPage={data?.meta.to}
            lastPage={data?.meta.last_page}
            numberOfItens={data?.imoveis.length}
            registerPerPage={data?.meta.per_page}
          />
        </Box>
      )}
    </Box>
  );
}

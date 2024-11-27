import { Box } from "@chakra-ui/react";
import { MenuHeader } from "../menuHeader";
import { Outlet } from "react-router-dom";
import { Rodape } from "../rodape";

export function Dashboard() {
  return (
    <Box>
      <MenuHeader />
      <Box>
        <Outlet />
        <Rodape />
      </Box>
    </Box>
  );
}

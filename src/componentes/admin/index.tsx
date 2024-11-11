import { Box, Text } from "@chakra-ui/react";
import { TabComponente } from "./tab";
import { FaPowerOff } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { logout } from "../../lib/auth";

export function Admin() {
  const navigate = useNavigate();

  const onLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <Box mt={7}>
      <Box
        bg={"white"}
        p={5}
        w={"95%"}
        borderRadius={"7"}
        m={"auto"}
        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
        display={"flex"}
        flexDir={"row"}
        justifyContent={"space-between"}
      >
        <Text
          fontWeight={"bold"}
          fontSize={"2xl"}
          textAlign={"center"}
          color={"#003641"}
        >
          Área Administrativa
        </Text>
        <Box
          _hover={{ color: "#ad1616", transition: "0.8s" }}
          cursor={"pointer"}
          color={"#003641"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          onClick={onLogout}
        >
          <FaPowerOff fontSize={22} />
          <Text fontSize={"small"}>Sair</Text>
        </Box>
      </Box>
      <Box>
        <TabComponente />
      </Box>
    </Box>
  );
}

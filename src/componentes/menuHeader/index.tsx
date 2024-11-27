import { Box, Flex, Image } from "@chakra-ui/react";
import { CiInstagram } from "react-icons/ci";
import { PiFacebookLogoLight, PiYoutubeLogoThin } from "react-icons/pi";
import logo from "../../images/logo-25anos-aracoop.png";
import { useNavigate } from "react-router-dom";

export function MenuHeader() {
  const navigate = useNavigate();

  const clickInstagram = () => {
    window.open(
      "https://www.instagram.com/sicoobaracoop/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const clickIFace = () => {
    window.open(
      "https://www.facebook.com/sicoobaracoop",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const clickYou = () => {
    window.open(
      "https://www.youtube.com/@SicoobAracoop1",
      "_blank",
      "noopener,noreferrer"
    );
  };

  function handleClick() {
    navigate("/");
  }

  return (
    <Flex
      p={5}
      alignItems={"center"}
      h={{ base: "9vh", md: "10vh" }}
      justifyContent={"space-between"}
      border={"1px solid #ccc"}
      bg={"white"}
      boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
    >
      <Box onClick={handleClick} _hover={{ cursor: "pointer" }}>
        <Image
          w={{ base: "30%", lg: "10%" }}
          src={logo}
          alt={"logo sicoob aracoop 25 anos"}
        />
      </Box>

      <Flex display={"flex"} gap={1} fontSize={{ base: 22, md: 25, xl: 30 }}>
        <Box
          _hover={{
            cursor: "pointer",
            transition: "0.5s",
            color: "#833AB4",
          }}
          onClick={clickInstagram}
        >
          <CiInstagram />
        </Box>

        <Box
          _hover={{
            cursor: "pointer",
            transition: "0.5s",
            color: "#1877F2",
          }}
          onClick={clickIFace}
        >
          <PiFacebookLogoLight />
        </Box>
        <Box
          _hover={{ cursor: "pointer", transition: "0.5s", color: "#FF0000" }}
          onClick={clickYou}
        >
          <PiYoutubeLogoThin />
        </Box>
      </Flex>
    </Flex>
  );
}

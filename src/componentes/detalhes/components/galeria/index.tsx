import React from "react";
import { Box, Image, useBreakpointValue, Flex } from "@chakra-ui/react";

type ImageGalleryProps = {
  images: {
    original: string;
    thumbnail: string;
  }[];
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  if (images.length === 1) {
    return (
      <Flex justifyContent={"center"} p={5} display="flex" w="100%">
        <Image
          borderRadius="md"
          src={images[0].original}
          alt="Imagem única"
          w={"100%"}
          boxSize={700}
        />
      </Flex>
    );
  }

  return (
    <Flex
      p={5}
      gap={5}
      alignItems={"center"}
      flexDir={{ base: "column", lg: "row" }}
    >
      <Box>
        <Image src={images[0].original} alt="Imagem grande" borderRadius="md" />
      </Box>

      <Flex gap={5} w={"100%"} flexWrap={"wrap"}>
        {images.slice(1).map((image, index) => (
          <Image
            key={index}
            src={image.thumbnail}
            alt={`Imagem thumbnail ${index + 1}`}
            borderRadius="md"
            boxSize={isMobile ? 50 : 200}
            objectFit="cover"
            cursor="pointer"
            _hover={{ opacity: 0.8 }}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default ImageGallery;

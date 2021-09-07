import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

const Overhead = () => {
  return (
    <Flex
      bg={"#000"}
      p={1}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
     <Flex color={"gray.400"} bgGradient="linear(to-l, #7928CA,#FF0080)" bgClip="text" className="hiring">We Are Hiring! Learn more.</Flex>
    </Flex>
  );
};

export default Overhead;
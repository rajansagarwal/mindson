import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Icon,
  Stack,
  Text
} from "@chakra-ui/react";

export default function Features() {
  const Feature = (props) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Flex
            alignItems="center"
            justifyContent="center"
            h={12}
            w={12}
            rounded="md"
            bg={"brand.500"}
            color="white"
          >
            <Icon
              boxSize={4}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {props.icon}
            </Icon>
          </Flex>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="medium"
            lineHeight="6"
            color={"gray.900"}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color={useColorModeValue("gray.500", "gray.400")}>
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={10}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box py={10} bg={useColorModeValue("white", "gray.800")} rounded="xl">
        <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
          <Box textAlign={{ lg: "center" }}>
            <chakra.p
              mt={0}
              fontSize={{ base: "2xl", sm: "4xl" }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              color={"gray.900"}
            >
              <Text as={'span'} color={'green.400'} bgGradient="linear(to-l, #7928CA,#FF0080)" bgClip="text" fontSize={{ base: '24px', md: '40px' }}>
              We Value Mental Health
            </Text>
            </chakra.p>
            <chakra.p
              mt={4}
              maxW="4xl"
              fontSize="xl"
              mx={{ base: 'left', lg: "auto" }}
              color={"gray.400"}
            >
              *insert mission statement here*
            </chakra.p>
          </Box>

          <Box mt={10}>
            <Stack
              spacing={{ base: 0, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ md: "repeat(2,3fr)" }}
              gridColumnGap={{ md: 1 }}
              gridRowGap={{ md: 0 }}
            >
              <Feature
                title="Action Title 1"
              >
                Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here <br/><br/>
              </Feature>

              <Feature
                title="Action Title 2"
              >
                Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here <br/><br/>
              </Feature>

              <Feature
                title="Action Title 2"
              >
                Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here <br/><br/>
              </Feature>

              <Feature
                title="Action Title 2"
              >
                Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here <br/><br/>
              </Feature>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}


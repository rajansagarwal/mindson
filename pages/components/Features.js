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
              boxSize={6}
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
      <Box py={12} bg={useColorModeValue("white", "gray.800")} rounded="xl">
        <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
          <Box textAlign={{ lg: "center" }}>
            <chakra.p
              mt={0}
              fontSize={{ base: "3xl", sm: "4xl" }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              color={"gray.900"}
            >
              <Text as={'span'} color={'green.400'} bgGradient="linear(to-l, #7928CA,#FF0080)" bgClip="text">
              We Value Your Mental Health
            </Text>
            </chakra.p>
            <chakra.p
              mt={4}
              maxW="4xl"
              fontSize="xl"
              mx={{ lg: "auto" }}
              color={"gray.400"}
            >
              *insert mission statement here*
            </chakra.p>
          </Box>

          <Box mt={10}>
            <Stack
              spacing={{ base: 1, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ md: "repeat(2,3fr)" }}
              gridColumnGap={{ md: 1 }}
              gridRowGap={{ md: 10 }}
            >
              <Feature
                title="Action Title 1"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                }
              >
                Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here 
              </Feature>

              <Feature
                title="Action Title 2"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                }
              >
                Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here 
              </Feature>

              <Feature
                title="Action Title 2"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                }
              >
                Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here 
              </Feature>

              <Feature
                title="Action Title 2"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                }
              >
                Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here Captivating Text Goes Here 
              </Feature>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

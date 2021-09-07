import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Icon,
  SimpleGrid,
  Stack,
  GridItem,
} from "@chakra-ui/react";

export default function Featurestwo() {
  const Feature = (props) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color={useColorModeValue("brand.500", "brand.300")}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </Icon>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="bold"
            lineHeight="6"
            color={"gray.900"}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color={"gray.500"}>
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={20}
      pl={{ base: '10', sm: '10', lg: '10', xl: '600'}}
      pr={{ base: '10', sm: '10', lg: '10', xl: '600'}}
      pt="10"
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        shadow="xl"
        bg={useColorModeValue("white", "gray.800")}
        px={8}
        py={20}
        mx="auto"
      >
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, lg: 3 }}
          spacingY={{ base: 10, lg: 32 }}
          spacingX={{ base: 10, lg: 24 }}
        >
          <Box alignSelf="start">
            <chakra.h2
              mb={3}
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="extrabold"
              textAlign={{ base: "center", sm: "left" }}
              color={"black"}
              lineHeight="shorter"
              letterSpacing="tight"
            >
              A few things we plan to do this year!
            </chakra.h2>
            <chakra.p
              mb={6}
              fontSize={{ base: "lg", md: "xl" }}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.500")}
            >
              Take a look at our most exciting initiatives that we plan to launch, catered towards impact. 
            </chakra.p>
          </Box>
          <GridItem colSpan={2}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ md: "repeat(2,1fr)" }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
            >
              <Feature title="The Brain Freeze Podcast">
                This podcast is none like the other, tackling mental health in the workplace, psychology, neuroscience and students.{" "}
              </Feature>
              <Feature title="Minds On Hub">
                A centralized set of resources for lessons, external clubs or inquiring readers on the internet.
              </Feature>
              <Feature title="Minds On Publication">
                {" "}
                An internal publication written by our Education Team and Writers. Apply to be a writer today!
              </Feature>
              <Feature title="District Mental Health Conf.">
                {" "}
                Turn your midns on at our Mental Health conference with speakers, events and competitions!{" "}
              </Feature>
              <Feature title="Club Expansion!">
                {" "}
                We hope to open new chapters across the board to share what we do and how we want to do it.
              </Feature>
              <Feature title="Teacher Resources">
                {" "}
                A set of resources built specifically for teachers, who are interested in the wellbeing of their students.{" "}
              </Feature>
            </Stack>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
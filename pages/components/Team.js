import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import Image from 'next/image';

import {
  Box,
  Button,
  chakra,
  Flex,
  SimpleGrid,
  useColorModeValue,
  Grid
} from "@chakra-ui/react";


export default function Team() {
  return (
    <Flex>
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
         <Box w="100%" h="10" bg="blue.500">
             <img src="https://cloud-68gh9ayi2-hack-club-bot.vercel.app/0hero.png" className="heroImg"/>
         </Box>
        </Grid>
      
    </Flex>
  );
}


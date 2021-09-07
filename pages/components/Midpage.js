import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function Midpage() {
    return (
      <Flex
        w={'full'}
        h={'40vh'}
        backgroundImage={
          'url(https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4189&q=80)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Want to start a chapter at your school? We want to work with you.
            </Text>
            <Stack direction={'row'}>
              <Button
                bgGradient="linear(to-l, #7928CA,#FF0080)"
                rounded={'full'}
                color={'white'}
                _hover={{ bgGradient: 'linear(to-l, #7928CA,#FF0080)'}}>
                Show me how
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }
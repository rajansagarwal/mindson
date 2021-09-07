import '../styles/globals.css'
import '../styles/Home.module.css';
import { ChakraProvider, theme } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
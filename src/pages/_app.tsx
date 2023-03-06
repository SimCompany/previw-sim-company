import { theme } from './../styles/theme'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Menu from '../components/Menu/Menu'
import Footer from '../components/Footer/Footer'

import './../styles/global.css'

import TagManager from 'react-gtm-module'
import { useEffect } from 'react'



function MyApp({ Component, pageProps }: AppProps) {
  
    useEffect(() => {
      const tagManagerArgs = {
        gtmId: 'GTM-PQMG35C'
      }
  
      TagManager.initialize(tagManagerArgs)
    })
  return (
    <ChakraProvider theme={theme}>
      <Menu />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp

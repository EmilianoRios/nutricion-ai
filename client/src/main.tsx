import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'swiper/css/bundle'
import App from './App'
import { ThemeChakraui } from './config'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={ThemeChakraui}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)

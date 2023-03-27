import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
export interface OurClientsInterface {}

const OurClients: React.FC<OurClientsInterface> = () => {
  return (
    <>
      <Flex
        w='60%'
        alignContent='center'
        justifyContent='center'
        m='auto'
        pt={8}
      >
        <Heading>Nuestros Clientes Opinan</Heading>
      </Flex>
    </>
  )
}

export default OurClients

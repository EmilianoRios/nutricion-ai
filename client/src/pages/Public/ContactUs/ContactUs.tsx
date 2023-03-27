import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
export interface ContactUsInterface {}

const ContactUs: React.FC<ContactUsInterface> = () => {
  return (
    <>
      <Flex
        w='60%'
        alignContent='center'
        justifyContent='center'
        m='auto'
        pt={8}
      >
        <Heading>Contactanos</Heading>
      </Flex>
    </>
  )
}

export default ContactUs

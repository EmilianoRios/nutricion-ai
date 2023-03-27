import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
export interface AboutUsInterface {}

const AboutUs: React.FC<AboutUsInterface> = () => {
  return (
    <>
      <Flex
        flexDirection='column'
        w={['90%', '90%', '80%', '60%']}
        alignItems='center'
        m='auto'
        mt={8}
        bg='blue'
      >
        <Heading p={4}>Quienes Somos</Heading>
        <Flex
          flexDirection='column'
          gap={20}
          justifyContent='center'
          alignItems='center'
          alignContent='center'
          m='auto'
        >
          <Box bg='orange' p={20}>
            <Heading fontSize={32}>Visión</Heading>
            <Text fontSize={24}>
              Tranformarnos en gestores del cambio, en motivadores hacia una
              sociedad respetuosa del medioambiente y de la salud actual y de
              futuras generaciones.
            </Text>
          </Box>
          <Box bg='orange' p={20}>
            <Heading fontSize={32}>Misión</Heading>
            <Text>
              <Text fontSize={24}>
                Tranformarnos en gestores del cambio, en motivadores hacia una
                sociedad respetuosa del medioambiente y de la salud actual y de
                futuras generaciones.
              </Text>
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default AboutUs

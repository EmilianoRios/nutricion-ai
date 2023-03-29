import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { GlobalColorSettings } from '../../../models/colors'
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
      >
        <Heading p={4}>Quienes Somos</Heading>
        <Divider
          bgGradient={GlobalColorSettings.BGGRADIENTNAVBAR}
          h={2}
          my={4}
          borderRadius={20}
          w={['90%', '90%', '90%', '50%']}
        />
        <Flex
          flexDirection='column'
          gap={10}
          justifyContent='center'
          alignItems='center'
          alignContent='center'
          m='auto'
        >
          <Box
            bg={GlobalColorSettings.CONTAINERABOUTUS}
            borderRadius={20}
            p={20}
          >
            <Heading fontSize={32}>Visión</Heading>
            <Text fontSize={24} textAlign='justify'>
              Tranformarnos en gestores del cambio, en motivadores hacia una
              sociedad respetuosa del medioambiente y de la salud actual y de
              futuras generaciones.
            </Text>
          </Box>
          <Box
            bg={GlobalColorSettings.CONTAINERABOUTUS}
            p={20}
            borderRadius={20}
          >
            <Heading fontSize={32}>Misión</Heading>
            <Text>
              <Text fontSize={24} textAlign='justify'>
                Tranformarnos en gestores del cambio, en motivadores hacia una
                sociedad respetuosa del medioambiente y de la salud actual y de
                futuras generaciones.
              </Text>
            </Text>
          </Box>
        </Flex>
        <Divider
          bgGradient={GlobalColorSettings.BGGRADIENTNAVBAR}
          h={2}
          my={4}
          borderRadius={20}
          w={['90%', '90%', '90%', '50%']}
        />
      </Flex>
    </>
  )
}

export default AboutUs

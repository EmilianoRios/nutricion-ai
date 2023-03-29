import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { GlobalColorSettings } from '../../../models/colors'
export interface AboutUsInterface {}

const AboutUs: React.FC<AboutUsInterface> = () => {
  return (
    <>
      <Flex
        flexDirection='column'
        w={['90%', '90%', '90%', '90%', '60%']}
        alignItems='center'
        m='auto'
        mt={8}
        transition='0.2s'
        h={{ base: '600px', sm: '630px', md: '630px', lg: '800px' }}
      >
        <Heading p={4} fontSize={{ base: '1.5rem', lg: '2rem' }}>
          Quienes Somos
        </Heading>
        <Flex
          flexDirection='column'
          gap={10}
          justifyContent='center'
          alignItems='center'
          alignContent='center'
        >
          <Divider
            bgGradient={GlobalColorSettings.BGGRADIENTNAVBAR}
            h={2}
            my={4}
            borderRadius={20}
            w={['90%', '90%', '90%', '50%']}
          />
          <Box
            bg={GlobalColorSettings.CONTAINERABOUTUS}
            borderRadius={20}
            p={10}
            w={['90%', '90%', '90%', '90%', '60%']}
          >
            <Heading fontSize={{ base: '1.5rem', lg: '2rem' }}>Visión</Heading>
            <Text fontSize={{ base: '1rem', lg: '1.5rem' }} textAlign='justify'>
              Tranformarnos en gestores del cambio, en motivadores hacia una
              sociedad respetuosa del medioambiente y de la salud actual y de
              futuras generaciones.
            </Text>
          </Box>
          <Box
            bg={GlobalColorSettings.CONTAINERABOUTUS}
            p={10}
            w={['90%', '90%', '90%', '90%', '60%']}
            borderRadius={20}
          >
            <Heading fontSize={{ base: '1.5rem', lg: '2rem' }}>Misión</Heading>
            <Text>
              <Text
                fontSize={{ base: '1rem', lg: '1.5rem' }}
                textAlign='justify'
              >
                Tranformarnos en gestores del cambio, en motivadores hacia una
                sociedad respetuosa del medioambiente y de la salud actual y de
                futuras generaciones.
              </Text>
            </Text>
          </Box>
          <Divider
            bgGradient={GlobalColorSettings.BGGRADIENTNAVBAR}
            h={2}
            my={4}
            borderRadius={20}
            w={['90%', '90%', '90%', '50%']}
          />
        </Flex>
      </Flex>
    </>
  )
}

export default AboutUs

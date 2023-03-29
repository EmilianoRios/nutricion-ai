import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { BsFillTelephoneFill, BsInstagram } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'
import { GlobalColorSettings } from '../../models/colors'
export interface FooterInterface {}

const Footer: React.FC<FooterInterface> = () => {
  return (
    <Box
      backgroundColor={GlobalColorSettings.BGFOOTER}
      color={GlobalColorSettings.FONTCOLORFOOTER}
      mt={20}
      py={8}
      px={{ base: 4, md: 8 }}
    >
      <Flex
        justifyContent={['center', 'center', 'space-between', 'space-between']}
        alignItems='center'
        flexWrap='wrap'
      >
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='flex-start'
          mt={{ base: 4, sm: 0 }}
        >
          <Flex mx={2} alignItems='center' gap={2}>
            <Icon as={BsFillTelephoneFill} />
            <Text>+54 (370) 400-0000</Text>
          </Flex>
          <Flex mx={2} alignItems='center' gap={2}>
            <Icon as={HiMail} />
            <Text>nutricionup_contacto@gmail.com</Text>
          </Flex>
          <Flex mx={2} alignItems='center' gap={2}>
            <Icon as={BsInstagram} />
            <Text>nutricionup</Text>
          </Flex>
        </Box>
        <Flex
          flexDirection='column'
          alignItems='center'
          pt={['8', '8', 'unset', 'unset']}
        >
          <Flex>
            <Text fontSize='lg' as='b'>
              © 2023 Todos los derechos reservados.
            </Text>
          </Flex>
          <Flex>
            <Text fontSize='lg' as='b'>
              Avila Lautaro, Rios Emiliano.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Footer

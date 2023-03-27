import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { BsFillTelephoneFill, BsInstagram } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'
export interface FooterInterface {}

const Footer: React.FC<FooterInterface> = () => {
  return (
    <Box
      backgroundColor='orange.600'
      color='white'
      mt={20}
      py={8}
      px={{ base: 4, md: 8 }}
    >
      <Flex justifyContent='space-between' alignItems='center' flexWrap='wrap'>
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='flex-start'
          mt={{ base: 4, sm: 0 }}
        >
          <Flex mx={2} alignItems='center' gap={2}>
            <Icon as={BsFillTelephoneFill} />
            +54 (370) 400-0000
          </Flex>
          <Flex mx={2} alignItems='center' gap={2}>
            <Icon as={HiMail} />
            nutricionup_contacto@gmail.com
          </Flex>
          <Flex mx={2} alignItems='center' gap={2}>
            <Icon as={BsInstagram} />
            nutricionup
          </Flex>
        </Box>
        <Box>
          <Text fontSize='lg'>© 2023 Todos los derechos reservados.</Text>
          <Text fontSize='sm'>Avila Lautaro, Rios Emiliano.</Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default Footer

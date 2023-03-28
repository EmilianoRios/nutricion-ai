import { Box, Divider, Flex, Heading, Image, Link } from '@chakra-ui/react'
import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import { Banner } from '../../../components'
import { PublicRoutes } from '../../../models/routes'
export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <>
      <Banner
        title='NutricionUP'
        content='Una empresa de más de 20 años , dedicada a promover y difundir la
          buena alimentación y la vida saludable.'
        image='/src/assets/static/img/img-2003231015.jpg'
      />
      <Flex
        flexDirection={'column'}
        w={['90%', '60%', '60%', '60%']}
        justifyContent='center'
        alignItems='center'
        m='auto'
      >
        <Heading pb={4}>Nuestros Cursos</Heading>
        <Divider bg='orange' h={2} />
        <Flex gap={8} wrap='wrap' justifyContent='center' alignContent='center'>
          <Link
            as={ReactLink}
            to={PublicRoutes.QUALITYOFLIFE}
            _hover={{ textDecoration: 'none' }}
          >
            <Box
              bg='red'
              border='1px solid black'
              w={300}
              borderRadius={20}
              overflow='hidden'
            >
              <Image h='300' src='/src/assets/static/img/home/calidad_de_vida.jpg'/>

              <Flex
                p={4}
                height={200}
                justifyContent='center'
                alignItems='center'
              >
                <Heading fontSize={24} textAlign='center'>
                  Calidad de vida
                </Heading>
              </Flex>
            </Box>
          </Link>
          <Link
            as={ReactLink}
            to={PublicRoutes.PHYSICALACTIVITYPLAN}
            _hover={{ textDecoration: 'none' }}
          >
            <Box
              bg='red'
              border='1px solid black'
              w={300}
              borderRadius={20}
              overflow='hidden'
            >
              <Image h='300' src='/src/assets/static/img/home/actividad_fisica.jpg'/>
              <Flex
                p={4}
                height={200}
                justifyContent='center'
                alignItems='center'
              >
                <Heading fontSize={24} textAlign='center'>
                  Plan de actividad física
                </Heading>
              </Flex>
            </Box>
          </Link>
          <Link
            as={ReactLink}
            to={PublicRoutes.SUSTAINABLEDEVELOPMENT}
            _hover={{ textDecoration: 'none' }}
          >
            <Box
              bg='red'
              border='1px solid black'
              w={300}
              borderRadius={20}
              overflow='hidden'
            >
              <Image h='300' src='/src/assets/static/img/home/responsabilidad_social_y_ambiental.jpg' />
              <Flex
                p={4}
                height={200}
                justifyContent='center'
                alignItems='center'
              >
                <Heading fontSize={24} textAlign='center'>
                  Programa de Responsabilidad Social y Ambiental
                </Heading>
              </Flex>
            </Box>
          </Link>
        </Flex>
      </Flex>
    </>
  )
}

export default Home

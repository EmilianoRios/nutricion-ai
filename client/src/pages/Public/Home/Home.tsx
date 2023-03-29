import { Box, Divider, Flex, Heading, Image, Link } from '@chakra-ui/react'
import imgActividadFisica from '@i/home/actividad_fisica.jpg'
import imgResponsabilidadSocialYAmbiental from '@i/home/img-2803230940.jpeg'
import imgCalidadDeVida from '@i/home/img-28032309401.jpeg'
import imgBannerHome from '@i/img-2003231015.jpg'
import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import { Banner } from '../../../components'
import { GlobalColorSettings } from '../../../models/colors'
import { PublicRoutes } from '../../../models/routes'
export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <>
      <Banner
        title='NutriciónUP'
        content='Una empresa de más de 20 años , dedicada a promover y difundir la
          buena alimentación y la vida saludable.'
        image={imgBannerHome}
      />
      <Flex
        flexDirection={'column'}
        w={['90%', '90%', '90%', '90%']}
        justifyContent='center'
        alignItems='center'
        m='auto'
      >
        <Heading>Nuestros Cursos</Heading>
        <Divider
          bgGradient={GlobalColorSettings.BGGRADIENTNAVBAR}
          h={2}
          my={4}
          borderRadius={20}
          w={['90%', '90%', '90%', '50%']}
        />
        <Flex
          gap={{ base: 4, lg: 8 }}
          wrap='wrap'
          justifyContent='center'
          alignContent='center'
        >
          <Link
            as={ReactLink}
            to={PublicRoutes.QUALITYOFLIFE}
            _hover={{ textDecoration: 'none' }}
          >
            <Box
              position={'relative'}
              w={{ base: 150, lg: 280 }}
              borderRadius={20}
              overflow='hidden'
            >
              <Image
                src={imgCalidadDeVida}
                h={{ base: 225, lg: 420 }}
                objectFit='cover'
                filter='blur(1px) brightness(0.7)'
                transition='0.2s'
                _hover={{ filter: 'blur(1px) brightness(0.9)' }}
              />
              <Flex
                justifyContent='center'
                alignItems='center'
                top='50%'
                left='50%'
                transform='translate(-50%,-50%)'
                position='absolute'
                display='inline-block'
                textAlign='center'
                color='white'
                pointerEvents='none'
              >
                <Heading
                  fontSize={{ base: '1rem', lg: '1.5rem' }}
                  textAlign='center'
                >
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
              position={'relative'}
              w={{ base: 150, lg: 280 }}
              borderRadius={20}
              overflow='hidden'
            >
              <Image
                src={imgActividadFisica}
                h={{ base: 225, lg: 420 }}
                objectFit='cover'
                filter='blur(2px) brightness(0.7)'
                transition='0.2s'
                _hover={{ filter: 'blur(1px) brightness(0.9)' }}
              />
              <Flex
                justifyContent='center'
                alignItems='center'
                top='50%'
                left='50%'
                transform='translate(-50%,-50%)'
                position='absolute'
                display='inline-block'
                textAlign='center'
                color='white'
                pointerEvents='none'
              >
                <Heading
                  fontSize={{ base: '1rem', lg: '1.5rem' }}
                  textAlign='center'
                >
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
              position={'relative'}
              w={{ base: 150, lg: 280 }}
              borderRadius={20}
              overflow='hidden'
            >
              <Image
                src={imgResponsabilidadSocialYAmbiental}
                h={{ base: 225, lg: 420 }}
                objectFit='cover'
                transition='0.2s'
                filter='blur(1px) brightness(0.7)'
                _hover={{ filter: 'blur(1px) brightness(0.9)' }}
              />
              <Flex
                justifyContent='center'
                alignItems='center'
                top='50%'
                left='50%'
                transform='translate(-50%,-50%)'
                position='absolute'
                display='inline-block'
                textAlign='center'
                color='white'
                pointerEvents='none'
              >
                <Heading
                  fontSize={{ base: '1rem', lg: '1.5rem' }}
                  textAlign='center'
                >
                  Programa de Responsabilidad Social y Ambiental
                </Heading>
              </Flex>
            </Box>
          </Link>
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

export default Home

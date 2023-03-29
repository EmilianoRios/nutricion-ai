import { Box, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react'
import imgDivulgandoElCuidadoDeLaNaturaleza from '@i/courses/programa_responsabilidad_social_y_ambiental/divulgando_el_cuidado_de_la_naturaleza.jpg'
import imgPequeniasAcciones from '@i/courses/programa_responsabilidad_social_y_ambiental/pequenias_acciones.jpg'
import imgQueLesDejamosANuestrosHijos from '@i/courses/programa_responsabilidad_social_y_ambiental/que_les_dejamos_a_nuestros_hijos.jpg'
import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { Carousel } from '../../../../components/Carousel'
import { GlobalColorSettings } from '../../../../models/colors'
export interface SustainableDevelopmentInterface {}

const SustainableDevelopment: React.FC<
  SustainableDevelopmentInterface
> = () => {
  return (
    <>
      <Flex
        flexDirection='column'
        w={['90%', '90%', '90%', '1150px']}
        alignItems='center'
        m='auto'
        mt={8}
      >
        <Heading fontSize={{ base: '1.5rem', lg: '2rem' }}>
          Nuestro Curso
        </Heading>
        <Heading fontSize={{ base: '1.5rem', lg: '2rem' }} textAlign='center'>
          Programa de Responsabilidad Social y Ambiental
        </Heading>
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
          px={12}
          py={4}
        >
          <Text fontSize={{ base: '0.9rem', lg: '1.2rem' }} textAlign='justify'>
            Los cursos de Programa de Responsabilidad Social y Ambiental son una
            excelente opción para aquellos interesados en aprender cómo pueden
            contribuir a un futuro más sostenible y responsable en términos
            sociales y ambientales. Algunos cursos específicos, como "Pequeñas
            acciones", "Divulgando el cuidado de la naturaleza" y "Que les
            dejamos a nuestros hijos", ofrecen diferentes enfoques para abordar
            estos temas.
          </Text>
          <Text
            pt='5'
            fontSize={{ base: '0.9rem', lg: '1.2rem' }}
            textAlign='justify'
          >
            En el curso "Pequeñas acciones", los participantes aprenden a
            realizar cambios positivos en su vida diaria para reducir su impacto
            en el medio ambiente. Los participantes aprenden sobre prácticas
            sostenibles, como el uso de energías renovables, la reducción del
            desperdicio de alimentos y la reducción del uso del plástico.
          </Text>
          <Text
            pt='5'
            fontSize={{ base: '0.9rem', lg: '1.2rem' }}
            textAlign='justify'
          >
            En el curso "Divulgando el cuidado de la naturaleza", los
            participantes aprenden a compartir información y promover el cuidado
            del medio ambiente en su comunidad y en la sociedad en general. Los
            participantes aprenden a desarrollar habilidades de comunicación
            efectiva y a diseñar campañas de concientización para promover
            cambios positivos en la sociedad.
          </Text>
          <Text
            pt='5'
            fontSize={{ base: '0.9rem', lg: '1.2rem' }}
            textAlign='justify'
          >
            En el curso "Que les dejamos a nuestros hijos", los participantes
            reflexionan sobre el legado que quieren dejar a las futuras
            generaciones. Los participantes aprenden sobre los impactos de las
            decisiones y acciones actuales en el medio ambiente y en la sociedad
            y cómo pueden contribuir a un futuro más sostenible y responsable.
          </Text>
          <Text
            pt='5'
            fontSize={{ base: '0.9rem', lg: '1.2rem' }}
            textAlign='justify'
          >
            En general, estos cursos de Programa de Responsabilidad Social y
            Ambiental son una excelente opción para aquellos interesados en
            aprender cómo pueden contribuir a un futuro más sostenible y
            responsable en términos sociales y ambientales. Al inscribirse en
            estos cursos, los participantes adquieren habilidades prácticas para
            realizar cambios positivos en su vida diaria, compartir información
            y promover el cuidado del medio ambiente en su comunidad y en la
            sociedad en general, y reflexionar sobre el legado que quieren dejar
            a las futuras generaciones.
          </Text>
        </Box>
        <Divider
          bgGradient={GlobalColorSettings.BGGRADIENTNAVBAR}
          h={2}
          my={4}
          borderRadius={20}
          w={['90%', '90%', '90%', '50%']}
        />
        <Heading fontSize={{ base: '1.5rem', lg: '2rem' }} textAlign='center'>
          Cursos de programa de responsabilidad social y ambiental
        </Heading>
        <Carousel>
          <SwiperSlide>
            <Flex
              flexDirection='column'
              justifyContent={'center'}
              alignContent={'center'}
              alignItems={'center'}
            >
              <Box
                w={300}
                borderRadius={20}
                bg={GlobalColorSettings.BGCONTAINERCAROUSEL}
                overflow='hidden'
              >
                <Image
                  h='255'
                  w='100%'
                  src={imgPequeniasAcciones}
                  objectFit='cover'
                />
                <Flex
                  h={150}
                  justifyContent='center'
                  alignItems='center'
                  alignContent='center'
                  flexDirection='column'
                >
                  <Heading textAlign='center' fontSize={24} mb={4}>
                    Pequeñas acciones
                  </Heading>
                  <Text
                    bg={GlobalColorSettings.BGPRICESCOURSES}
                    borderRadius={50}
                    px={6}
                    py={2}
                    fontSize='18'
                    as='b'
                  >
                    $0
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              flexDirection='column'
              justifyContent={'center'}
              alignContent={'center'}
              alignItems={'center'}
            >
              <Box
                w={300}
                borderRadius={20}
                bg={GlobalColorSettings.BGCONTAINERCAROUSEL}
                overflow='hidden'
              >
                <Image
                  h='255'
                  src={imgDivulgandoElCuidadoDeLaNaturaleza}
                  objectFit='cover'
                />
                <Flex
                  h={150}
                  justifyContent='center'
                  alignItems='center'
                  alignContent='center'
                  flexDirection='column'
                >
                  <Heading textAlign='center' fontSize={24} mb={4}>
                    Divulgando el cuidado de la naturaleza
                  </Heading>
                  <Text
                    bg={GlobalColorSettings.BGPRICESCOURSES}
                    borderRadius={50}
                    px={6}
                    py={2}
                    fontSize='18'
                    as='b'
                  >
                    $310
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              flexDirection='column'
              justifyContent={'center'}
              alignContent={'center'}
              alignItems={'center'}
            >
              <Box
                w={300}
                borderRadius={20}
                bg={GlobalColorSettings.BGCONTAINERCAROUSEL}
                overflow='hidden'
              >
                <Image
                  h='255'
                  src={imgQueLesDejamosANuestrosHijos}
                  objectFit='cover'
                />
                <Flex
                  h={150}
                  justifyContent='center'
                  alignItems='center'
                  alignContent='center'
                  flexDirection='column'
                >
                  <Heading textAlign='center' fontSize={24} mb={4}>
                    Que les dejamos a nuestros hijos
                  </Heading>
                  <Text
                    bg={GlobalColorSettings.BGPRICESCOURSES}
                    borderRadius={50}
                    px={6}
                    py={2}
                    fontSize='18'
                    as='b'
                  >
                    $500
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </SwiperSlide>
          <Box w='100%' m='auto'>
            <div className='swiper-button-prev' id='ts-prev'></div>
            <div className='swiper-button-next' id='ts-next'></div>
          </Box>
        </Carousel>
      </Flex>
    </>
  )
}

export default SustainableDevelopment

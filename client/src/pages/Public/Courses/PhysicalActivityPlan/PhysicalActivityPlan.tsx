import { Box, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react'
import imgABailar from '@i/courses/plan_de_actividad_fisica/a_bailar.jpg'
import imgLaFuerzaTambienAyuda from '@i/courses/plan_de_actividad_fisica/la_fuerza_también_ayuda.jpg'
import imgOrganizandoMisActividades from '@i/courses/plan_de_actividad_fisica/organizando_mis_actividades.jpg'
import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { Carousel } from '../../../../components/Carousel'
import { GlobalColorSettings } from '../../../../models/colors'
export interface PhysicalActivityPlanInterface {}

const PhysicalActivityPlan: React.FC<PhysicalActivityPlanInterface> = () => {
  return (
    <>
      <Flex
        flexDirection='column'
        w={['90%', '90%', '90%', '1150px']}
        alignItems='center'
        m='auto'
        mt={8}
      >
        <Heading fontSize={40} p={4}>
          Nuestro Curso
        </Heading>
        <Heading fontSize={40} p={4}>
          Plan de Actividad Física
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
          <Text pt='5' fontSize={23} textAlign='justify'>
            Los cursos de Plan de actividad física son una excelente opción para
            mejorar nuestra salud y bienestar a través de la actividad física.
            Algunos cursos específicos, como "A bailar", "La fuerza también
            ayuda" y "Organizando mis actividades" ofrecen diferentes enfoques
            para mejorar nuestra salud y forma física.
          </Text>
          <Text pt='5' fontSize={23} textAlign='justify'>
            En el curso "A bailar", los participantes aprenden a moverse al
            ritmo de la música y a mejorar su coordinación, equilibrio y
            flexibilidad. También pueden aprender diferentes estilos de baile,
            desde bailes de salón hasta danza contemporánea, lo que les permite
            elegir la opción que mejor se adapte a sus preferencias y
            habilidades.
          </Text>
          <Text pt='5' fontSize={23} textAlign='justify'>
            El curso "La fuerza también ayuda" se enfoca en el entrenamiento de
            fuerza y ​​resistencia muscular. Los participantes aprenden
            diferentes ejercicios de resistencia, como levantamiento de pesas o
            entrenamiento de circuito, para mejorar su fuerza muscular y su
            capacidad para realizar actividades cotidianas. También se discuten
            los beneficios para la salud de la fuerza muscular, como la
            prevención de lesiones y la mejora del equilibrio.
          </Text>
          <Text pt='5' fontSize={23} textAlign='justify'>
            El curso "Organizando mis actividades" enseña a los participantes
            cómo planificar y organizar su actividad física diaria para
            maximizar sus beneficios para la salud y minimizar los riesgos de
            lesiones. Los participantes aprenden a establecer objetivos
            realistas y a programar sus entrenamientos para adaptarse a su
            horario y rutina diaria.
          </Text>
          <Text pt='5' fontSize={23} textAlign='justify'>
            En general, estos cursos de Plan de actividad física son una
            excelente opción para mejorar nuestra salud y bienestar a través del
            ejercicio. Al inscribirse en estos cursos, los participantes
            adquieren habilidades prácticas para moverse con confianza y
            seguridad, mejorar su fuerza muscular y resistencia, y planificar su
            actividad física diaria para maximizar sus beneficios para la salud.
          </Text>
        </Box>
        <Divider
          bgGradient={GlobalColorSettings.BGGRADIENTNAVBAR}
          h={2}
          my={4}
          borderRadius={20}
          w={['90%', '90%', '90%', '50%']}
        />
        <Heading>Cursos de actividad física</Heading>
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
                <Image h='255' src={imgABailar} objectFit='cover' />
                <Flex
                  h={150}
                  justifyContent='center'
                  alignItems='center'
                  alignContent='center'
                  flexDirection='column'
                >
                  <Heading textAlign='center' fontSize={24} mb={4}>
                    A bailar
                  </Heading>
                  <Text
                    bg={GlobalColorSettings.BGPRICESCOURSES}
                    borderRadius={50}
                    px={6}
                    py={2}
                    fontSize='18'
                    as='b'
                  >
                    $230
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
                  w='100%'
                  src={imgLaFuerzaTambienAyuda}
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
                    La fuerza también ayuda
                  </Heading>
                  <Text
                    bg={GlobalColorSettings.BGPRICESCOURSES}
                    borderRadius={50}
                    px={6}
                    py={2}
                    fontSize='18'
                    as='b'
                  >
                    $300
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
                  w='100%'
                  src={imgOrganizandoMisActividades}
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
                    Organizando mis actividades
                  </Heading>
                  <Text
                    bg={GlobalColorSettings.BGPRICESCOURSES}
                    borderRadius={50}
                    px={6}
                    py={2}
                    fontSize='18'
                    as='b'
                  >
                    $280
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

export default PhysicalActivityPlan

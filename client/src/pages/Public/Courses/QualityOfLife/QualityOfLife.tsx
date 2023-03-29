import { Box, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { Carousel } from '../../../../components/Carousel'
import { GlobalColorSettings } from '../../../../models/colors'
export interface QualityOfLifeInterface {}

const QualityOfLife: React.FC<QualityOfLifeInterface> = () => {
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
        <Heading fontSize={40}>Calidad de Vida</Heading>
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
            Los cursos de calidad de vida pueden abordar diferentes temas que
            son esenciales para mejorar nuestra salud y bienestar en general.
            Entre ellos se encuentran: "Aprender a elegir los alimentos",
            "Conociendo mis límites" y "El esfuerzo en dirección al objetivo".
          </Text>
          <Text pt='5' fontSize={23} textAlign='justify'>
            En el curso "Aprender a elegir los alimentos", los participantes
            aprenderán a seleccionar los alimentos más saludables para mantener
            una dieta equilibrada y nutricionalmente adecuada. Se discutirán los
            diferentes grupos de alimentos y se proporcionarán pautas para
            elegir opciones saludables dentro de cada grupo. También se
            analizarán diferentes estrategias para evitar el exceso de alimentos
            procesados, azúcares y grasas trans. Además, se discutirán las
            mejores prácticas para comprar y preparar alimentos frescos, y cómo
            ajustar las porciones para alcanzar un peso saludable.
          </Text>
          <Text pt='5' fontSize={23} textAlign='justify'>
            El curso "Conociendo mis límites" se enfoca en ayudar a las personas
            a reconocer y respetar sus límites físicos, mentales y emocionales.
            Se discuten diferentes técnicas para gestionar el estrés, como la
            meditación y la respiración consciente, y se proporcionan
            estrategias para evitar la sobrecarga de trabajo y la fatiga.
            Además, se discuten los síntomas y las señales de advertencia de la
            sobrecarga y se proporcionan técnicas de autocuidado para prevenir
            el agotamiento.
          </Text>
          <Text pt='5' fontSize={23} textAlign='justify'>
            El curso "El esfuerzo en dirección al objetivo" se enfoca en ayudar
            a las personas a establecer metas y objetivos realistas y
            alcanzables. Se discuten diferentes estrategias para mantener la
            motivación y la disciplina, como la planificación y el seguimiento
            de los progresos, así como el establecimiento de objetivos a corto y
            largo plazo. También se discuten los beneficios de la perseverancia
            y la resiliencia en el logro de los objetivos.
          </Text>
          <Text pt='5' fontSize={23} textAlign='justify'>
            En general, el curso de calidad de vida ofrece herramientas valiosas
            y prácticas para mejorar todos los aspectos de tu vida. Si estás
            interesado en maximizar tu bienestar y felicidad, este curso es
            definitivamente una inversión que vale la pena.
          </Text>
        </Box>
        <Divider
          bgGradient={GlobalColorSettings.BGGRADIENTNAVBAR}
          h={2}
          my={4}
          borderRadius={20}
          w={['90%', '90%', '90%', '50%']}
        />
        <Heading>Cursos de calidad de vida</Heading>
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
                  src='/src/assets/static/img/courses/calidad_de_vida/Aprende_a_elegir_los_alimentos.jpg'
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
                    Aprende a elegir los alimentos
                  </Heading>
                  <Text
                    bg={GlobalColorSettings.BGPRICESCOURSES}
                    borderRadius={50}
                    px={6}
                    py={2}
                    fontSize='18'
                    as='b'
                  >
                    $430
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
                  src='/src/assets/static/img/courses/calidad_de_vida/conociendo_mis_limites_mentales.jpg'
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
                    Conociendo mis limites mentales
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
                  src='/src/assets/static/img/courses/calidad_de_vida/el_esfuerzo_en_direccion_al_objetivo.jpg'
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
                    El esfuerzo en dirección al objetivo
                  </Heading>
                  <Text
                    bg={GlobalColorSettings.BGPRICESCOURSES}
                    borderRadius={50}
                    px={6}
                    py={2}
                    fontSize='18'
                    as='b'
                  >
                    $240
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

export default QualityOfLife

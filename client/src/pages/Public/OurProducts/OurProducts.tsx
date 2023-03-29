import { Box, Divider, Flex, Heading, Image } from '@chakra-ui/react'
import imgBannerOurProducts from '@i/img-2603231157.jpeg'
import imgCharlas from '@i/ourProducts/environmental_care/charlas.jpeg'
import imgLibros from '@i/ourProducts/environmental_care/libros.jpeg'
import imgPublicacion from '@i/ourProducts/environmental_care/publicacion.jpg'
import imgAlimentosBajosEnSodio from '@i/ourProducts/foods/alimentos_bajo_en_sodio.jpg'
import imgAlimentosFrescos from '@i/ourProducts/foods/alimentos_frescos.jpg'
import imgAlimentosMicroondas from '@i/ourProducts/foods/alimentos_microondas.jpeg'
import imgAlimentosSecos from '@i/ourProducts/foods/alimentos_secos.jpg'
import imgAlimentosSinGluten from '@i/ourProducts/foods/alimentos_sin_gluten.jpg'
import imgClases from '@i/ourProducts/physical_activity/clases.jpeg'
import imgEquipamiento from '@i/ourProducts/physical_activity/equipamiento.jpeg'
import imgIndumentaria from '@i/ourProducts/physical_activity/indumentaria.jpg'
import React from 'react'
import 'swiper/css/navigation'
import { SwiperSlide } from 'swiper/react'
import { Banner, Carousel } from '../../../components'
import { GlobalColorSettings } from '../../../models/colors'
export interface OurProductsInterface {}

const OurProducts: React.FC<OurProductsInterface> = () => {
  return (
    <>
      <Banner
        title='Nuestros Productos'
        content=''
        image={imgBannerOurProducts}
      />
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        alignContent={'center'}
        w={['90%', '90%', '90%', '1150px']}
        m='auto'
        pb={8}
        flexDirection='column'
      >
        <Heading>Alimentos</Heading>
        <Divider
          bgGradient={GlobalColorSettings.BGGRADIENTNAVBAR}
          h={2}
          my={4}
          borderRadius={20}
          w={['90%', '90%', '90%', '50%']}
        />
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
                <Image h='255' src={imgAlimentosSecos} objectFit='cover' />
                <Flex
                  h={150}
                  justifyContent='center'
                  alignItems='center'
                  alignContent='center'
                >
                  <Heading textAlign='center' fontSize={24}>
                    Alimentos secos
                  </Heading>
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
                  src={imgAlimentosBajosEnSodio}
                  objectFit='cover'
                />
                <Flex
                  h={150}
                  justifyContent='center'
                  alignItems='center'
                  alignContent='center'
                >
                  <Heading textAlign='center' fontSize={24}>
                    Alimentos bajos en sodio
                  </Heading>
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
                <Image h='255' src={imgAlimentosSinGluten} objectFit='cover' />
                <Flex
                  h={150}
                  justifyContent='center'
                  alignItems='center'
                  alignContent='center'
                >
                  <Heading textAlign='center' fontSize={24}>
                    Alimentos sin gluten
                  </Heading>
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
                <Image h='255' src={imgAlimentosMicroondas} objectFit='cover' />
                <Flex
                  h={150}
                  justifyContent='center'
                  alignItems='center'
                  alignContent='center'
                >
                  <Heading textAlign='center' fontSize={24}>
                    Alimentos microondas
                  </Heading>
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
                <Image h='255' src={imgAlimentosFrescos} objectFit='cover' />
                <Flex
                  h={150}
                  justifyContent='center'
                  alignItems='center'
                  alignContent='center'
                >
                  <Heading textAlign='center' fontSize={24}>
                    Alimentos frescos
                  </Heading>
                </Flex>
              </Box>
            </Flex>
          </SwiperSlide>
          <Box w='100%' m='auto'>
            <div className='swiper-button-prev' id='ts-prev'></div>
            <div className='swiper-button-next' id='ts-next'></div>
          </Box>
        </Carousel>
        <Heading>Actividad Física</Heading>
        <Divider
          bgGradient={GlobalColorSettings.BGGRADIENTNAVBAR}
          h={2}
          my={4}
          borderRadius={20}
          w={['90%', '90%', '90%', '50%']}
        />
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
                <Image h='255' w='100%' src={imgClases} objectFit='cover' />
                <Flex
                  h={150}
                  justifyContent='center'
                  alignItems='center'
                  alignContent='center'
                >
                  <Heading textAlign='center' fontSize={24}>
                    Clases
                  </Heading>
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
                <Image h='255' src={imgEquipamiento} objectFit='cover' />
                <Flex
                  h={150}
                  justifyContent='center'
                  alignItems='center'
                  alignContent='center'
                >
                  <Heading textAlign='center' fontSize={24}>
                    Equipamiento
                  </Heading>
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
                  src={imgIndumentaria}
                  objectFit='cover'
                />
                <Flex
                  h={150}
                  justifyContent='center'
                  alignItems='center'
                  alignContent='center'
                >
                  <Heading textAlign='center' fontSize={24}>
                    Indumentaria
                  </Heading>
                </Flex>
              </Box>
            </Flex>
          </SwiperSlide>
          <Box w='100%' m='auto'>
            <div className='swiper-button-prev' id='ts-prev'></div>
            <div className='swiper-button-next' id='ts-next'></div>
          </Box>
        </Carousel>
        <Heading>Cuidado del Medioambiente</Heading>
        <Divider
          bgGradient={GlobalColorSettings.BGGRADIENTNAVBAR}
          h={2}
          my={4}
          borderRadius={20}
          w={['90%', '90%', '90%', '50%']}
        />
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
                <Image h='255' w='100%' src={imgLibros} objectFit='cover' />
                <Flex
                  h={150}
                  justifyContent='center'
                  alignItems='center'
                  alignContent='center'
                >
                  <Heading textAlign='center' fontSize={24}>
                    Libros
                  </Heading>
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
                  src={imgPublicacion}
                  objectFit='cover'
                />
                <Flex
                  h={150}
                  justifyContent='center'
                  alignItems='center'
                  alignContent='center'
                >
                  <Heading textAlign='center' fontSize={24}>
                    Publicaciones
                  </Heading>
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
                <Image h='255' src={imgCharlas} objectFit='cover' />
                <Flex
                  h={150}
                  justifyContent='center'
                  alignItems='center'
                  alignContent='center'
                >
                  <Heading textAlign='center' fontSize={24}>
                    Charlas
                  </Heading>
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

export default OurProducts

import { Box, Divider, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import 'swiper/css/navigation'
import { SwiperSlide } from 'swiper/react'
import { Banner } from '../../../components'
import { Carousel } from '../../../components/Carousel'
import { GlobalColorSettings } from '../../../models/colors'
export interface OurProductsInterface {}

const OurProducts: React.FC<OurProductsInterface> = () => {
  return (
    <>
      <Banner
        title='Nuestros Productos'
        content=''
        image='/src/assets/static/img/img-2603231157.jpeg'
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
                <Image
                  h='255'
                  src='/src/assets/static/img/ourProducts/foods/alimentos_secos.jpg'
                  objectFit='cover'
                />
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
                  src='/src/assets/static/img/ourProducts/foods/alimentos_bajo_en_sodio.jpg'
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
                <Image
                  h='255'
                  src='/src/assets/static/img/ourProducts/foods/alimentos_sin_gluten.jpg'
                  objectFit='cover'
                />
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
                <Image
                  h='255'
                  src='/src/assets/static/img/ourProducts/foods/alimentos_microondas.jpeg'
                  objectFit='cover'
                />
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
                <Image
                  h='255'
                  src='/src/assets/static/img/ourProducts/foods/alimentos_frescos.jpg'
                  objectFit='cover'
                />
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
                <Image
                  h='255'
                  src='/src/assets/static/img/ourProducts/foods/alimentos_secos.jpg'
                  objectFit='cover'
                />
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
                  src='/src/assets/static/img/ourProducts/foods/alimentos_bajo_en_sodio.jpg'
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
                <Image
                  h='255'
                  src='/src/assets/static/img/ourProducts/foods/alimentos_sin_gluten.jpg'
                  objectFit='cover'
                />
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
                <Image
                  h='255'
                  src='/src/assets/static/img/ourProducts/foods/alimentos_microondas.jpeg'
                  objectFit='cover'
                />
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
                <Image
                  h='255'
                  src='/src/assets/static/img/ourProducts/foods/alimentos_frescos.jpg'
                  objectFit='cover'
                />
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
                <Image
                  h='255'
                  src='/src/assets/static/img/ourProducts/foods/alimentos_secos.jpg'
                  objectFit='cover'
                />
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
                  src='/src/assets/static/img/ourProducts/foods/alimentos_bajo_en_sodio.jpg'
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
                <Image
                  h='255'
                  src='/src/assets/static/img/ourProducts/foods/alimentos_sin_gluten.jpg'
                  objectFit='cover'
                />
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
                <Image
                  h='255'
                  src='/src/assets/static/img/ourProducts/foods/alimentos_microondas.jpeg'
                  objectFit='cover'
                />
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
                <Image
                  h='255'
                  src='/src/assets/static/img/ourProducts/foods/alimentos_frescos.jpg'
                  objectFit='cover'
                />
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
      </Flex>
    </>
  )
}

export default OurProducts

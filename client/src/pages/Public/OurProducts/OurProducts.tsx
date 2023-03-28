import { Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { Banner } from '../../../components'
import { Carousel } from '../../../components/Carousel'
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
        w={['90%', '90%', '90%', '1150px']}
        alignContent='center'
        justifyContent='center'
        alignItems='center'
        m='auto'
        pb={8}
        flexDirection='column'
        bg='blue'
      >
        <Heading>Alimentos</Heading>
        <Carousel>
          <SwiperSlide>
            <Flex justifyContent='center' flexDirection='column'>
              <Image h='255' src='/src/assets/static/img/ourProducts/foods/alimentos_secos.jpg' />
              <Heading textAlign='center'>Alimentos secos</Heading>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex justifyContent='center' flexDirection='column'>
              <Image h='255' src='/src/assets/static/img/ourProducts/foods/alimentos_microondas.jpeg' />
              <Heading textAlign='center'>Alimentos microondas</Heading>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex justifyContent='center' flexDirection='column'>
              <Image h='255' src='/src/assets/static/img/ourProducts/foods/alimentos_frescos.jpg' />
              <Heading textAlign='center'>Alimentos frescos</Heading>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex justifyContent='center' flexDirection='column'>
              <Image h='255' src='/src/assets/static/img/ourProducts/foods/alimentos_bajo_en_sodio.jpg' />
              <Heading textAlign='center'>Alimentos bajos en sodio</Heading>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex justifyContent='center' flexDirection='column'>
              <Image h='255' src='/src/assets/static/img/ourProducts/foods/alimentos_sin_gluten.jpg' />
              <Heading textAlign='center'>Alimentos sin gluten</Heading>
            </Flex>
          </SwiperSlide>
        </Carousel>
      </Flex>
    </>
  )
}

export default OurProducts

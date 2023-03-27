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
              <Image src='https://img.freepik.com/vector-gratis/coleccion-frutas-dibujadas-mano_23-2148941359.jpg?w=2000' />
              <Heading>Hola</Heading>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex justifyContent='center' flexDirection='column'>
              <Image src='https://img.freepik.com/vector-gratis/coleccion-frutas-dibujadas-mano_23-2148941359.jpg?w=2000' />
              <Heading>Hola</Heading>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex justifyContent='center' flexDirection='column'>
              <Image src='https://img.freepik.com/vector-gratis/coleccion-frutas-dibujadas-mano_23-2148941359.jpg?w=2000' />
              <Heading>Hola</Heading>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex justifyContent='center' flexDirection='column'>
              <Image src='https://img.freepik.com/vector-gratis/coleccion-frutas-dibujadas-mano_23-2148941359.jpg?w=2000' />
              <Heading>Hola</Heading>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex justifyContent='center' flexDirection='column'>
              <Image src='https://img.freepik.com/vector-gratis/coleccion-frutas-dibujadas-mano_23-2148941359.jpg?w=2000' />
              <Heading>Hola</Heading>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex justifyContent='center' flexDirection='column'>
              <Image src='https://img.freepik.com/vector-gratis/coleccion-frutas-dibujadas-mano_23-2148941359.jpg?w=2000' />
              <Heading>Hola</Heading>
            </Flex>
          </SwiperSlide>
        </Carousel>
      </Flex>
    </>
  )
}

export default OurProducts

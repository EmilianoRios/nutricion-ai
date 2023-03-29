import { Box } from '@chakra-ui/react'
import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper } from 'swiper/react'

import { Autoplay, FreeMode, Navigation } from 'swiper'

export interface CarouselInterface {
  children: React.ReactNode
}

const Carousel: React.FC<CarouselInterface> = ({ children }) => {
  const breakpoints = {
    // para pantallas pequeñas
    600: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // para pantallas pequeñas
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // para pantallas medianas
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // para pantallas medianas
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // para pantallas grandes
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  }

  return (
    <Box w='100%' h='500px' p={8}>
      <Swiper
        freeMode={true}
        modules={[FreeMode, Navigation, Autoplay]}
        breakpoints={breakpoints}
        navigation={{
          nextEl: '#ts-next',
          prevEl: '#ts-prev',
        }}
        autoplay={{
          delay: 1200,
          disableOnInteraction: true,
        }}
      >
        {children}
      </Swiper>
    </Box>
  )
}

export default Carousel

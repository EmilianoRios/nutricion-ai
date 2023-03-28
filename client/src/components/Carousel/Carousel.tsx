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
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // para pantallas medianas
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // para pantallas grandes
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  }

  return (
    <Box w='100%' h='500px' border='1px solid black' p={8}>
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
          disableOnInteraction: false,
        }}
      >
        {children}
      </Swiper>
    </Box>
  )
}

export default Carousel

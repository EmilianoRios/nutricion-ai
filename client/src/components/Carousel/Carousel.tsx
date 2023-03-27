import { Box } from '@chakra-ui/react'
import React from 'react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { Swiper } from 'swiper/react'

import { FreeMode, Pagination } from 'swiper'

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
      slidesPerView: 4,
      spaceBetween: 40,
    },
  }

  return (
    <Box w='100%'>
      <Swiper
        freeMode={true}
        modules={[FreeMode, Pagination]}
        breakpoints={breakpoints}
      >
        {children}
      </Swiper>
    </Box>
  )
}

export default Carousel

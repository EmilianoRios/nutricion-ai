import { Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
export interface BannerInterface {
  title: string
  content: string
  image: string
}

const Banner: React.FC<BannerInterface> = ({ title, content, image }) => {
  return (
    <Flex position='relative' py={8}>
      <Image
        pt={2}
        src={image}
        alt='Nutricion'
        filter='blur(2px) brightness(0.5)'
        w='100%'
        height={['300px', '300px', '300px', '500px']}
        objectFit={'cover'}
      />
      <Flex
        justifyContent='center'
        alignItems='center'
        top='50%'
        left='50%'
        transform='translate(-50%,-50%)'
        position='absolute'
        display='inline-block'
        textAlign='center'
        color='white'
      >
        <Heading
          as='h1'
          fontSize={['2rem', '3rem', '4rem', '5rem']}
          textShadow='1px 1px 20px rgba(0, 0, 0, 1)'
        >
          {title}
        </Heading>
        <Text
          fontSize={['0.9rem', '0.9rem', '1rem', '2rem']}
          textShadow='1px 1px 12px rgba(0, 0, 0, 1)'
        >
          {content}
        </Text>
      </Flex>
    </Flex>
  )
}

export default Banner

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
        filter={'blur(3px)'}
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
        <Heading as='h1' fontSize={['2rem', '3rem', '4rem', '5rem']}>
          {title}
        </Heading>
        <Text fontSize={['0.9rem', '0.9rem', '1rem', '2rem']}>{content}</Text>
      </Flex>
    </Flex>
  )
}

export default Banner

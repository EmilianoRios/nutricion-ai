import React from 'react';
export interface SustainableDevelopmentInterface {}
import { Flex, Heading, Box, Text, Image, Button} from '@chakra-ui/react'
import { SwiperSlide } from 'swiper/react'
import { Carousel } from '../../../../components/Carousel'

const SustainableDevelopment : React.FC<SustainableDevelopmentInterface> = () => {
	return (
		<>
	<Flex
	flexDirection='column'
	w={['90%', '90%', '80%', '60%']}
	alignItems='center'
	m='auto'
	mt={8}
	bg='blue'
	  >
	<Heading fontSize={40}>Nuestro Curso:</Heading>
	<Heading fontSize={40} textAlign='center'>Programa de Responsabilidad Social y Ambiental</Heading>
	<Box bg='orange' pl='8' pr='8' pb='5'>
		<Text pt='5' fontSize={23} textAlign='justify'>
			Los cursos de Programa de Responsabilidad Social y Ambiental son una excelente opción para aquellos interesados en aprender cómo pueden contribuir a un futuro más sostenible y responsable en términos sociales y ambientales. Algunos cursos específicos, como "Pequeñas acciones", "Divulgando el cuidado de la naturaleza" y "Que les dejamos a nuestros hijos", ofrecen diferentes enfoques para abordar estos temas.
		</Text>
		<Text pt='5' fontSize={23} textAlign='justify'>
			En el curso "Pequeñas acciones", los participantes aprenden a realizar cambios positivos en su vida diaria para reducir su impacto en el medio ambiente. Los participantes aprenden sobre prácticas sostenibles, como el uso de energías renovables, la reducción del desperdicio de alimentos y la reducción del uso del plástico.
		</Text>
		<Text pt='5' fontSize={23} textAlign='justify'>
			En el curso "Divulgando el cuidado de la naturaleza", los participantes aprenden a compartir información y promover el cuidado del medio ambiente en su comunidad y en la sociedad en general. Los participantes aprenden a desarrollar habilidades de comunicación efectiva y a diseñar campañas de concientización para promover cambios positivos en la sociedad.
		</Text>
		<Text pt='5' fontSize={23} textAlign='justify'> 
			En el curso "Que les dejamos a nuestros hijos", los participantes reflexionan sobre el legado que quieren dejar a las futuras generaciones. Los participantes aprenden sobre los impactos de las decisiones y acciones actuales en el medio ambiente y en la sociedad y cómo pueden contribuir a un futuro más sostenible y responsable.
		</Text>
		<Text pt='5' fontSize={23} textAlign='justify'>
		En general, estos cursos de Programa de Responsabilidad Social y Ambiental son una excelente opción para aquellos interesados en aprender cómo pueden contribuir a un futuro más sostenible y responsable en términos sociales y ambientales. Al inscribirse en estos cursos, los participantes adquieren habilidades prácticas para realizar cambios positivos en su vida diaria, compartir información y promover el cuidado del medio ambiente en su comunidad y en la sociedad en general, y reflexionar sobre el legado que quieren dejar a las futuras generaciones.
		</Text>
	</Box>
	<Flex
			w={['90%', '90%', '90%', '95%']}
			alignContent='center'
			justifyContent='center'
			alignItems='center'
			m='auto'
			pb={8}
			flexDirection='column'
			bg='blue'>
		<Heading textAlign='center'>Cursos de programa de responsabilidad social y ambiental</Heading>
		<Carousel>
		<SwiperSlide>
			<Flex justifyContent='center' flexDirection='column'>
			<Image src='https://img.freepik.com/vector-gratis/coleccion-frutas-dibujadas-mano_23-2148941359.jpg?w=2000' pt='5'/>
			<Box bg='green' minHeight='270px'>
				<Heading textAlign='center' fontSize={32} pt='3'>Pequeñas acciones</Heading>
			</Box>
			<Button fontSize={24} mx="auto">$0</Button>
			</Flex>
		</SwiperSlide>
		<SwiperSlide>
			<Flex justifyContent='center' flexDirection='column'>
			<Image src='https://img.freepik.com/vector-gratis/coleccion-frutas-dibujadas-mano_23-2148941359.jpg?w=2000' pt='5'/>
			<Box bg='green' minHeight='270px'>
				<Heading textAlign='center' fontSize={32} pt='3'>Divulgando el cuidado de la naturaleza</Heading>
			</Box>
			<Button fontSize={24} mx="auto">$310</Button>
			</Flex>
		</SwiperSlide>
		<SwiperSlide>
			<Flex justifyContent='center' flexDirection='column'>
			<Image src='https://img.freepik.com/vector-gratis/coleccion-frutas-dibujadas-mano_23-2148941359.jpg?w=2000' pt='5'/>
			<Box bg='green' minHeight='270px'>
				<Heading textAlign='center' fontSize={32} pt='3'>Que les dejamos a nuestros hijos</Heading>
			</Box>
			<Button fontSize={24} mx="auto">$500</Button>
			</Flex>
		</SwiperSlide>
		<SwiperSlide>
			<Flex justifyContent='center' flexDirection='column'>
			<Image src='https://img.freepik.com/vector-gratis/coleccion-frutas-dibujadas-mano_23-2148941359.jpg?w=2000' pt='5'/>
			<Box bg='green' minHeight='270px'>
				<Heading textAlign='center' fontSize={32} pt='3'>Pequeñas acciones</Heading>
			</Box>
			<Button fontSize={24} mx="auto">$0</Button>
			</Flex>
		</SwiperSlide>
		<SwiperSlide>
			<Flex justifyContent='center' flexDirection='column'>
			<Image src='https://img.freepik.com/vector-gratis/coleccion-frutas-dibujadas-mano_23-2148941359.jpg?w=2000' pt='5'/>
			<Box bg='green' minHeight='270px'>
				<Heading textAlign='center' fontSize={32} pt='3'>Divulgando el cuidado de la naturaleza</Heading>
			</Box>
			<Button fontSize={24} mx="auto" position="relative">$310</Button>
			</Flex>
		</SwiperSlide>
		<SwiperSlide>
			<Flex justifyContent='center' flexDirection='column'>
			<Image src='https://img.freepik.com/vector-gratis/coleccion-frutas-dibujadas-mano_23-2148941359.jpg?w=2000' pt='5'/>
			<Box bg='green' minHeight='270px'>
				<Heading textAlign='center' fontSize={32} pt='3'>Que les dejamos a nuestros hijos</Heading>
			</Box>
			<Button fontSize={24} mx="auto" position="relative">$500</Button>
			</Flex>
		</SwiperSlide>
		</Carousel>
	</Flex>
	</Flex>
</>
	)
};

export default SustainableDevelopment;

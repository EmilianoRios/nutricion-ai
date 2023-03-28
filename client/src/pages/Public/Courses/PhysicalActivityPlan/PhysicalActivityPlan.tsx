import React from 'react';
export interface PhysicalActivityPlanInterface {}
import { Flex, Heading, Box, Text, Image, Button} from '@chakra-ui/react'
import { SwiperSlide } from 'swiper/react'
import { Carousel } from '../../../../components/Carousel'

const PhysicalActivityPlan : React.FC<PhysicalActivityPlanInterface> = () => {
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
	<Heading fontSize={40}>Plan de Actividad Física</Heading>
	<Box bg='orange' pl='8' pr='8' pb='5'>
		<Text pt='5' fontSize={23} textAlign='justify'>
			Los cursos de Plan de actividad física son una excelente opción para mejorar nuestra salud y bienestar a través de la actividad física. Algunos cursos específicos, como "A bailar", "La fuerza también ayuda" y "Organizando mis actividades" ofrecen diferentes enfoques para mejorar nuestra salud y forma física.
		</Text>
		<Text pt='5' fontSize={23} textAlign='justify'>
			En el curso "A bailar", los participantes aprenden a moverse al ritmo de la música y a mejorar su coordinación, equilibrio y flexibilidad. También pueden aprender diferentes estilos de baile, desde bailes de salón hasta danza contemporánea, lo que les permite elegir la opción que mejor se adapte a sus preferencias y habilidades.
		</Text>
		<Text pt='5' fontSize={23} textAlign='justify'>
			El curso "La fuerza también ayuda" se enfoca en el entrenamiento de fuerza y ​​resistencia muscular. Los participantes aprenden diferentes ejercicios de resistencia, como levantamiento de pesas o entrenamiento de circuito, para mejorar su fuerza muscular y su capacidad para realizar actividades cotidianas. También se discuten los beneficios para la salud de la fuerza muscular, como la prevención de lesiones y la mejora del equilibrio.
		</Text>
		<Text pt='5' fontSize={23} textAlign='justify'> 
			El curso "Organizando mis actividades" enseña a los participantes cómo planificar y organizar su actividad física diaria para maximizar sus beneficios para la salud y minimizar los riesgos de lesiones. Los participantes aprenden a establecer objetivos realistas y a programar sus entrenamientos para adaptarse a su horario y rutina diaria.
		</Text>
		<Text pt='5' fontSize={23} textAlign='justify'>
			En general, estos cursos de Plan de actividad física son una excelente opción para mejorar nuestra salud y bienestar a través del ejercicio. Al inscribirse en estos cursos, los participantes adquieren habilidades prácticas para moverse con confianza y seguridad, mejorar su fuerza muscular y resistencia, y planificar su actividad física diaria para maximizar sus beneficios para la salud.
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
		<Heading>Cursos de actividad física</Heading>
		<Carousel>
		<SwiperSlide>
			<Flex justifyContent='center' flexDirection='column'>
			<Image src='https://img.freepik.com/vector-gratis/coleccion-frutas-dibujadas-mano_23-2148941359.jpg?w=2000' pt='5'/>
			<Box bg='green' minHeight='270px'>
				<Heading textAlign='center' fontSize={32} pt='3'>A bailar</Heading>
			</Box>
			<Button fontSize={24} mx="auto">$230</Button>
			</Flex>
		</SwiperSlide>
		<SwiperSlide>
			<Flex justifyContent='center' flexDirection='column'>
			<Image src='https://img.freepik.com/vector-gratis/coleccion-frutas-dibujadas-mano_23-2148941359.jpg?w=2000' pt='5'/>
			<Box bg='green' minHeight='270px'>
				<Heading textAlign='center' fontSize={32} pt='3'>La fuerza también ayuda</Heading>
			</Box>
			<Button fontSize={24} mx="auto">$300</Button>
			</Flex>
		</SwiperSlide>
		<SwiperSlide>
			<Flex justifyContent='center' flexDirection='column'>
			<Image src='https://img.freepik.com/vector-gratis/coleccion-frutas-dibujadas-mano_23-2148941359.jpg?w=2000' pt='5'/>
			<Box bg='green' minHeight='270px'>
				<Heading textAlign='center' fontSize={32} pt='3'>Organizando mis actividades</Heading>
			</Box>
			<Button fontSize={24} mx="auto">$280</Button>
			</Flex>
		</SwiperSlide>
		<SwiperSlide>
			<Flex justifyContent='center' flexDirection='column'>
			<Image src='https://img.freepik.com/vector-gratis/coleccion-frutas-dibujadas-mano_23-2148941359.jpg?w=2000' pt='5'/>
			<Box bg='green' minHeight='270px'>
				<Heading textAlign='center' fontSize={32} pt='3'>A bailar</Heading>
			</Box>
			<Button fontSize={24} mx="auto">$230</Button>
			</Flex>
		</SwiperSlide>
		<SwiperSlide>
			<Flex justifyContent='center' flexDirection='column'>
			<Image src='https://img.freepik.com/vector-gratis/coleccion-frutas-dibujadas-mano_23-2148941359.jpg?w=2000' pt='5'/>
			<Box bg='green' minHeight='270px'>
				<Heading textAlign='center' fontSize={32} pt='3'>La fuerza también ayuda</Heading>
			</Box>
			<Button fontSize={24} mx="auto" position="relative">$300</Button>
			</Flex>
		</SwiperSlide>
		<SwiperSlide>
			<Flex justifyContent='center' flexDirection='column'>
			<Image src='https://img.freepik.com/vector-gratis/coleccion-frutas-dibujadas-mano_23-2148941359.jpg?w=2000' pt='5'/>
			<Box bg='green' minHeight='270px'>
				<Heading textAlign='center' fontSize={32} pt='3'>Organizando mis actividades</Heading>
			</Box>
			<Button fontSize={24} mx="auto" position="relative">$280</Button>
			</Flex>
		</SwiperSlide>
		</Carousel>
	</Flex>
	</Flex>
</>
)
};

export default PhysicalActivityPlan;

import React from 'react';
export interface QualityOfLifeInterface {}
import { Flex, Heading, Box, Text, Image, Button} from '@chakra-ui/react'
import { SwiperSlide } from 'swiper/react'
import { Carousel } from '../../../../components/Carousel'

const QualityOfLife : React.FC<QualityOfLifeInterface> = () => {
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
		<Heading fontSize={40}>Calidad de Vida</Heading>
		<Box bg='orange' pl='8' pr='8' pb='5'>
			<Text pt='5' fontSize={23} textAlign='justify'>
				Los cursos de calidad de vida pueden abordar diferentes temas que son esenciales para mejorar nuestra salud y bienestar en general. Entre ellos se encuentran: "Aprender a elegir los alimentos", "Conociendo mis límites" y "El esfuerzo en dirección al objetivo".
			</Text>
			<Text pt='5' fontSize={23} textAlign='justify'>
				En el curso "Aprender a elegir los alimentos", los participantes aprenderán a seleccionar los alimentos más saludables para mantener una dieta equilibrada y nutricionalmente adecuada. Se discutirán los diferentes grupos de alimentos y se proporcionarán pautas para elegir opciones saludables dentro de cada grupo. También se analizarán diferentes estrategias para evitar el exceso de alimentos procesados, azúcares y grasas trans. Además, se discutirán las mejores prácticas para comprar y preparar alimentos frescos, y cómo ajustar las porciones para alcanzar un peso saludable.
			</Text>
			<Text pt='5' fontSize={23} textAlign='justify'>
				El curso "Conociendo mis límites" se enfoca en ayudar a las personas a reconocer y respetar sus límites físicos, mentales y emocionales. Se discuten diferentes técnicas para gestionar el estrés, como la meditación y la respiración consciente, y se proporcionan estrategias para evitar la sobrecarga de trabajo y la fatiga. Además, se discuten los síntomas y las señales de advertencia de la sobrecarga y se proporcionan técnicas de autocuidado para prevenir el agotamiento.
			</Text>
			<Text pt='5' fontSize={23} textAlign='justify'> 
				El curso "El esfuerzo en dirección al objetivo" se enfoca en ayudar a las personas a establecer metas y objetivos realistas y alcanzables. Se discuten diferentes estrategias para mantener la motivación y la disciplina, como la planificación y el seguimiento de los progresos, así como el establecimiento de objetivos a corto y largo plazo. También se discuten los beneficios de la perseverancia y la resiliencia en el logro de los objetivos.
			</Text>
			<Text pt='5' fontSize={23} textAlign='justify'>
				En general, el curso de calidad de vida ofrece herramientas valiosas y prácticas para mejorar todos los aspectos de tu vida. Si estás interesado en maximizar tu bienestar y felicidad, este curso es definitivamente una inversión que vale la pena.
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
			<Heading>Cursos de calidad de vida</Heading>
			
			<Carousel>
			<SwiperSlide>
				<Flex justifyContent='center' flexDirection='column'>
				<Image src='https://img.freepik.com/vector-gratis/coleccion-frutas-dibujadas-mano_23-2148941359.jpg?w=2000' pt='5'/>
				<Box bg='green' minHeight='270px'>
					<Heading textAlign='center' fontSize={32} pt='3' alignContent='center'>Aprende a elegir los alimentos</Heading>
				</Box>
				<Button fontSize={24} mx="auto">$430</Button>
				</Flex>
			</SwiperSlide>
			<SwiperSlide>
				<Flex justifyContent='center' flexDirection='column'>
				<Image src='https://img.freepik.com/vector-gratis/coleccion-frutas-dibujadas-mano_23-2148941359.jpg?w=2000' pt='5'/>
				<Box bg='green' minHeight='270px'>
					<Heading textAlign='center' fontSize={32} pt='3'>Conociendo mis límites mentales</Heading>
				</Box>
				<Button fontSize={24} mx="auto">$300</Button>
				</Flex>
			</SwiperSlide>
			<SwiperSlide>
				<Flex justifyContent='center' flexDirection='column'>
				<Image src='https://img.freepik.com/vector-gratis/coleccion-frutas-dibujadas-mano_23-2148941359.jpg?w=2000' pt='5'/>
				<Box bg='green' minHeight='270px'>
					<Heading textAlign='center' fontSize={32} pt='3'>El esfuerzo en dirección al objetivo</Heading>
				</Box>
				<Button fontSize={24} mx="auto">$240</Button>
				</Flex>
			</SwiperSlide>
			<SwiperSlide>
				<Flex justifyContent='center' flexDirection='column'>
				<Image src='https://img.freepik.com/vector-gratis/coleccion-frutas-dibujadas-mano_23-2148941359.jpg?w=2000' pt='5'/>
				<Box bg='green' minHeight='270px'>
					<Heading textAlign='center' fontSize={32} pt='3'>Aprende a elegir los alimentos</Heading>
				</Box>
				<Button fontSize={24} mx="auto">$430</Button>
				</Flex>
			</SwiperSlide>
			<SwiperSlide>
				<Flex justifyContent='center' flexDirection='column'>
				<Image src='https://img.freepik.com/vector-gratis/coleccion-frutas-dibujadas-mano_23-2148941359.jpg?w=2000' pt='5'/>
				<Box bg='green' minHeight='270px'>
					<Heading textAlign='center' fontSize={32} pt='3'>Conociendo mis límites mentales</Heading>
				</Box>
				<Button fontSize={24} mx="auto" position="relative">$300</Button>
				</Flex>
			</SwiperSlide>
			<SwiperSlide>
				<Flex justifyContent='center' flexDirection='column'>
				<Image src='https://img.freepik.com/vector-gratis/coleccion-frutas-dibujadas-mano_23-2148941359.jpg?w=2000' pt='5'/>
				<Box bg='green' minHeight='270px'>
					<Heading textAlign='center' fontSize={32} pt='3'>El esfuerzo en dirección al objetivo</Heading>
				</Box>
				<Button fontSize={24} mx="auto" position="relative">$240</Button>
				</Flex>
			</SwiperSlide>
			</Carousel>
		</Flex>
		</Flex>
	</>
	)
};

export default QualityOfLife;

import { Box, Flex, Heading, Text, Divider } from '@chakra-ui/react'
import React from 'react'
import { GlobalColorSettings } from '../../../models/colors'
export interface OurClientsInterface {}

const OurClients: React.FC<OurClientsInterface> = () => {
  return (
    <>
      <Flex
        flexDirection='column'
        w={['90%', '90%', '80%', '60%']}
        alignItems='center'
        m='auto'
        mt={8}
      >
        <Heading p={4}>Nuestros Clientes Opinan</Heading>
        <Divider
          bgGradient={GlobalColorSettings.BGGRADIENTNAVBAR}
          h={2}
          my={4}
          borderRadius={20}
          w={['90%', '90%', '90%', '50%']}
        />
        <Flex
          flexDirection='column'
          gap={10}
          justifyContent='center'
          alignItems='center'
          alignContent='center'
          m='auto'
        >
          <Box             
            bg={GlobalColorSettings.CONTAINERABOUTUS}
            borderRadius={20}
            px = {8}
            py= {6}>
            <Heading fontSize={24}>Tendencias Saludables</Heading>
            <Text pt='5' fontSize={18}> Cada vez es más común oír sobre las tendencias saludables, la importancia de comer más verduras, la importancia del ejercicio o lo dañino que es el estrés. Nutricion-AI nos brinda los medios para ahcer ejercicio, cambiar los malos hábitos por otros saludables, hacer pausas mentales, disminuir el consumo de alcohol y cigarrillos, las pizzas o las jugosas hamburguesas.</Text>
            <Text pt='2' textAlign='right'>Laura 28/02/2023</Text>
          </Box>
          <Box             
            bg={GlobalColorSettings.CONTAINERABOUTUS}
            borderRadius={20}
            px = {8}
            py= {6}>
            <Heading fontSize={24}>¿Por qué nos cuesta tanto trabajo hacer cambios en nuestras vidas incluso cuando sabemos que nos traerá tantos beneficios?</Heading>
            <Text pt='5' fontSize={18}> Agradezco a esta página , Nutrición- AI, porque logró crear el vínculo entre la salud y el ejercicio, la alimentación saludable, el manejo adecuado de las emociones y la calidad de nuestras relaciones interpersonales ayudando a las personas que hace tiempo luchamos con nuestros hábitos y entornos complejos.</Text>
            <Text pt='2' textAlign='right'>Rosario 23/01/2023</Text>
          </Box>
          <Box            
            bg={GlobalColorSettings.CONTAINERABOUTUS}
            borderRadius={20}
            px = {8}
            py= {6}>
            <Heading fontSize={24}>Actividad física</Heading>
            <Text pt='5' fontSize={18}>  Al fin una empresa, Nutrición-AI, que trata los problemas nutricionales desde el punto de vista holístico, sin ayunos extremos ni torturas con la gimnasia. Aprendemos poco a poco a cambiar nuestro estilo de vida casi sin darnos cuenta, sintiendo el progreso día a día.</Text>
            <Text pt='2' textAlign='right'>Lautaro 05/01/2023</Text>
          </Box>
        </Flex>
      </Flex>
  </>
  )
}

export default OurClients

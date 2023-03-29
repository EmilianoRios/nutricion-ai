import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Icon,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import { Field, Formik } from 'formik'
import React from 'react'
import { BsSend } from 'react-icons/bs'
import * as Yup from 'yup'
export interface ContactUsInterface {}

const ContactUs: React.FC<ContactUsInterface> = () => {
  const onSubmit = () => {}

  const initialValues = {
    name: '',
    lastName: '',
    email: '',
    phone: '',
    timeZoneOne: '',
    timeZoneTwo: '',
    message: '',
    description: '',
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('NOMBRE OBLIGATORIO'),
    lastName: Yup.string().required('APELLIDO OBLIGATORIO'),
    email: Yup.string()
      .email('EL FORMATO DE EMAIL NO ES VÁLIDO')
      .required('EMAIL OBLIGATORIO'),
    timeZoneOne: Yup.string()
      .matches(
        /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/,
        'EL HORARIO DEBE ESTAR EN EL SIGUIENTE FORMATO HH:mm'
      )
      .required('EL HORARIO ES REQUERIDO'),
    timeZoneTwo: Yup.string()
      .matches(
        /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/,
        'EL HORARIO DEBE ESTAR EN EL SIGUIENTE FORMATO HH:mm'
      )
      .required('EL HORARIO ES REQUERIDO'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'EL NUMERO DEBE CONTENER 10 DIGITOS')
      .required('NUMERO DE TELEFONO REQUERIDO'),
    message: Yup.string().required('MENSAJE OBLIGATORIO'),
    description: Yup.string(),
  })

  return (
    <>
      <Flex
        w={['90%', '90%', '60%', '60%']}
        alignContent='center'
        justifyContent='center'
        m='auto'
        pt={8}
        flexDirection='column'
        alignItems='center'
      >
        <Flex m={4} flexDirection='column' w='100%'>
          {/* Contenido aquí */}
          <Heading as='h2' fontSize={24} py={4}>
            Formulario de Contacto
          </Heading>
          <Formik
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            initialValues={initialValues}
            enableReinitialize
          >
            {(formik) => (
              <VStack as='form'>
                <Flex gap={8} w='100%'>
                  <FormControl
                    isInvalid={Boolean(
                      formik.errors.name && formik.touched.name
                    )}
                    pb={6}
                  >
                    <Field
                      type='string'
                      name='name'
                      placeholder='Tu Nombre'
                      as={Input}
                    />
                    <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={Boolean(
                      formik.errors.lastName && formik.touched.lastName
                    )}
                    pb={6}
                  >
                    <Field
                      type='string'
                      name='lastName'
                      placeholder='Tu Apellido'
                      as={Input}
                    />
                    <FormErrorMessage>
                      {formik.errors.lastName}
                    </FormErrorMessage>
                  </FormControl>
                </Flex>
                <Flex gap={8} w='100%'>
                  <FormControl
                    isInvalid={Boolean(
                      formik.errors.email && formik.touched.email
                    )}
                    pb={6}
                  >
                    <Field
                      type='string'
                      name='email'
                      placeholder='Tu Correo'
                      as={Input}
                    />
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={Boolean(
                      formik.errors.phone && formik.touched.phone
                    )}
                    pb={6}
                  >
                    <Field
                      type='string'
                      name='phone'
                      placeholder='Tu Telefono'
                      as={Input}
                    />
                    <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
                  </FormControl>
                </Flex>
                <Flex gap={8} w='100%'>
                  <FormControl
                    isInvalid={Boolean(
                      formik.errors.timeZoneOne && formik.touched.timeZoneOne
                    )}
                    pb={6}
                  >
                    <Field
                      type='string'
                      name='timeZoneOne'
                      placeholder='Franja Horaria Inicial'
                      as={Input}
                    />
                    <FormErrorMessage>
                      {formik.errors.timeZoneOne}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={Boolean(
                      formik.errors.timeZoneTwo && formik.touched.timeZoneTwo
                    )}
                    pb={6}
                  >
                    <Field
                      type='string'
                      name='timeZoneTwo'
                      placeholder='Fraja Horaria Final'
                      as={Input}
                    />
                    <FormErrorMessage>
                      {formik.errors.timeZoneTwo}
                    </FormErrorMessage>
                  </FormControl>
                </Flex>
                <FormControl
                  isInvalid={Boolean(
                    formik.errors.message && formik.touched.message
                  )}
                  pb={6}
                >
                  <Field
                    type='string'
                    name='message'
                    placeholder='Tu Mensaje'
                    as={Textarea}
                    maxHeight='300px'
                    minHeight='300px'
                  />
                  <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={Boolean(
                    formik.errors.description && formik.touched.description
                  )}
                  pb={6}
                >
                  <Field
                    type='string'
                    name='description'
                    placeholder='Como nos conociste?'
                    as={Textarea}
                    maxHeight='100px'
                    minHeight='100px'
                  />
                  <FormErrorMessage>
                    {formik.errors.description}
                  </FormErrorMessage>
                </FormControl>
                <Button
                  type='submit'
                  isLoading={formik.isSubmitting}
                  bg='orange'
                  _hover={{
                    bg: 'orange.400',
                  }}
                  p={6}
                  borderRadius={18}
                >
                  <Icon as={BsSend} fontSize={18} mr={2} />
                  Enviar Mensaje
                </Button>
              </VStack>
            )}
          </Formik>
        </Flex>
      </Flex>
    </>
  )
}

export default ContactUs

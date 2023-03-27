import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Link,
  Spacer,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link as ReactLink, useLocation } from 'react-router-dom'
import { GlobalColorSettings } from '../../models/colors'
import { PublicRoutes } from '../../models/routes'
export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const [display, changeDisplay] = useState('none')
  const location = useLocation()
  return (
    /* Navbar */
    <Box
      bgGradient={GlobalColorSettings.BGGRADIENTNAVBAR}
      borderRadius='0px 0px 10px 10px'
      color={GlobalColorSettings.FONTCOLORNAVBAR}
    >
      <Flex
        justifyContent='space-between'
        w={['100%', '100%', '100%', '1150px']}
        m='auto'
      >
        <Flex alignItems='center' p={2}>
          <Heading as='h1'>
            <Link to='/' as={ReactLink} _hover={{ textDecoration: 'None' }}>
              🍉NutriciónUP
            </Link>
          </Heading>
        </Flex>
        <Spacer />
        <Flex position='sticky' top='1rem' right='1rem' align='center'>
          {/* Desktop */}
          <Flex display={['none', 'none', 'none', 'flex']} gap={2}>
            <Link
              to={PublicRoutes.ABOUTUS}
              as={ReactLink}
              _hover={{ textDecoration: 'None' }}
            >
              <Button
                variant='ghost'
                bg={
                  location.pathname === '/' + PublicRoutes.ABOUTUS
                    ? GlobalColorSettings.HOVERBUTONCOLORNAVBAR
                    : 'none'
                }
                aria-label='AboutUs'
                my={5}
                w='100%'
                _hover={{ bg: GlobalColorSettings.HOVERBUTONCOLORNAVBAR }}
              >
                Quienes Somos
              </Button>
            </Link>
            <Link
              to={PublicRoutes.OURPRODUCTS}
              as={ReactLink}
              _hover={{ textDecoration: 'None' }}
            >
              <Button
                variant='ghost'
                bg={
                  location.pathname === '/' + PublicRoutes.OURPRODUCTS
                    ? GlobalColorSettings.HOVERBUTONCOLORNAVBAR
                    : 'none'
                }
                aria-label='OurProducts'
                my={5}
                w='100%'
                _hover={{ bg: GlobalColorSettings.HOVERBUTONCOLORNAVBAR }}
              >
                Nuestros Productos
              </Button>
            </Link>
            <Link
              to={PublicRoutes.OURCLIENTS}
              as={ReactLink}
              _hover={{ textDecoration: 'None' }}
            >
              <Button
                variant='ghost'
                bg={
                  location.pathname === '/' + PublicRoutes.OURCLIENTS
                    ? GlobalColorSettings.HOVERBUTONCOLORNAVBAR
                    : 'none'
                }
                aria-label='OurClients'
                my={5}
                w='100%'
                _hover={{ bg: GlobalColorSettings.HOVERBUTONCOLORNAVBAR }}
              >
                Nuestros Clientes
              </Button>
            </Link>
            <Link
              to={PublicRoutes.CONTACTUS}
              as={ReactLink}
              _hover={{ textDecoration: 'None' }}
            >
              <Button
                variant='ghost'
                bg={
                  location.pathname === '/' + PublicRoutes.CONTACTUS
                    ? GlobalColorSettings.HOVERBUTONCOLORNAVBAR
                    : 'none'
                }
                aria-label='ContactUs'
                my={5}
                w='100%'
                _hover={{ bg: GlobalColorSettings.HOVERBUTONCOLORNAVBAR }}
              >
                Contactanos
              </Button>
            </Link>
          </Flex>
          {/* Mobile */}
          <IconButton
            aria-label='Open Menu'
            size='lg'
            mr={2}
            _hover={{ bg: GlobalColorSettings.HOVERHAMBURGERNAVBAR }}
            bg='blackAlpha.200'
            icon={<HamburgerIcon color='#641E16' />}
            onClick={() => changeDisplay('flex')}
            display={['flex', 'flex', 'flex', 'none']}
          />
        </Flex>
      </Flex>

      {/* Mobile Content */}
      <Flex
        w='100vw'
        display={display}
        bgGradient={GlobalColorSettings.BGGRADIENTNAVBAR}
        zIndex={20}
        h='100vh'
        pos='fixed'
        top='0'
        left='0'
        overflowY='auto'
        flexDir='column'
      >
        <Flex justify='flex-end'>
          <IconButton
            mt={2}
            mr={8}
            aria-label='Open Menu'
            size='lg'
            _hover={{ bg: GlobalColorSettings.HOVERHAMBURGERNAVBAR }}
            bg='none'
            icon={<CloseIcon color={GlobalColorSettings.FONTCOLORNAVBAR} />}
            onClick={() => changeDisplay('none')}
          />
        </Flex>
        <Flex
          flexDir='column'
          align='center'
          _hover={{ textDecoration: 'None' }}
        >
          <Link
            to='/'
            as={ReactLink}
            _hover={{ textDecoration: 'None' }}
            w='100%'
            onClick={() => changeDisplay('none')}
          >
            <Button
              variant='ghost'
              aria-label='Home'
              _hover={{ bg: GlobalColorSettings.HOVERBUTONCOLORNAVBAR }}
              my={5}
              w='100%'
              color={GlobalColorSettings.FONTCOLORNAVBAR}
            >
              Inicio
            </Button>
          </Link>
          <Link
            to={PublicRoutes.ABOUTUS}
            as={ReactLink}
            _hover={{ textDecoration: 'None' }}
            w='100%'
            onClick={() => changeDisplay('none')}
          >
            <Button
              variant='ghost'
              aria-label='About'
              _hover={{ bg: GlobalColorSettings.HOVERBUTONCOLORNAVBAR }}
              my={5}
              w='100%'
              color={GlobalColorSettings.FONTCOLORNAVBAR}
            >
              Quienes Somos
            </Button>
          </Link>
          <Link
            to={PublicRoutes.OURPRODUCTS}
            as={ReactLink}
            _hover={{ textDecoration: 'None' }}
            w='100%'
            onClick={() => changeDisplay('none')}
          >
            <Button
              variant='ghost'
              aria-label='Contact'
              _hover={{ bg: GlobalColorSettings.HOVERBUTONCOLORNAVBAR }}
              my={5}
              w='100%'
              color={GlobalColorSettings.FONTCOLORNAVBAR}
            >
              Nuestros Productos
            </Button>
          </Link>
          <Link
            to={PublicRoutes.OURCLIENTS}
            as={ReactLink}
            _hover={{ textDecoration: 'None' }}
            w='100%'
            onClick={() => changeDisplay('none')}
          >
            <Button
              variant='ghost'
              aria-label='Contact'
              _hover={{ bg: GlobalColorSettings.HOVERBUTONCOLORNAVBAR }}
              my={5}
              w='100%'
              color={GlobalColorSettings.FONTCOLORNAVBAR}
            >
              Nuestros Clientes
            </Button>
          </Link>
          <Link
            to={PublicRoutes.CONTACTUS}
            as={ReactLink}
            _hover={{ textDecoration: 'None' }}
            w='100%'
            onClick={() => changeDisplay('none')}
          >
            <Button
              variant='ghost'
              aria-label='Contact'
              _hover={{ bg: GlobalColorSettings.HOVERBUTONCOLORNAVBAR }}
              my={5}
              w='100%'
              color={GlobalColorSettings.FONTCOLORNAVBAR}
            >
              Contactanos
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar

import { Box, Flex, IconButton, Input, InputGroup } from '@chakra-ui/react'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { GlobalColorSettings } from '../../models/colors'
export interface SearchBarInterface {}

const SearchBar: React.FC<SearchBarInterface> = () => {
  return (
    <Flex flexDirection='column' justifyContent='center' alignItems='center'>
      <Box as='form' display='flex' w='100%'>
        <InputGroup>
          <Flex
            position='relative'
            alignItems='center'
            m='auto'
            w={['90%', '90%', '90%', '600px']}
            mt={8}
          >
            <Input type='text' placeholder='Buscar...' />
            <IconButton
              position='absolute'
              right={0}
              aria-label='Buscar'
              type='submit'
              color={GlobalColorSettings.COLORICONSEARCHBAR}
              bg={GlobalColorSettings.BGCOLORICONSEARCHBAR}
              _hover={{
                bg: GlobalColorSettings.BGHOVERCOLORICONSEARCHBAR,
              }}
              icon={<FaSearch />}
            />
          </Flex>
        </InputGroup>
      </Box>
    </Flex>
  )
}

export default SearchBar

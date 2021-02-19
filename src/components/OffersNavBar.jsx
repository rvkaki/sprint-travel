import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import SearchBar from './SearchBar';

const OffersNavBar = props => {
  const [t] = useTranslation('common');
  return (
    <Flex
      my={8}
      mx="auto"
      direction={{ base: 'column', md: 'row' }}
      px={6}
      pb={6}
      pt={4}
      w={{ base: '80%', md: '60%', lg: '50%' }}
      bg="gray.800"
      borderRadius="lg"
    >
      <Box flex={2} mr={{ base: 0, md: 2 }}>
        <SearchBar
          options={props.options}
          onChange={props.onChangeCategory}
          value={props.category}
          placeholder={t('search.placeholder')}
          color="white"
          label={t('search.label')}
        />
      </Box>
      <Box flex={1} ml={{ base: 0, md: 2 }}>
        <SearchBar
          options={props.sorters}
          value={props.sortBy}
          onChange={props.onChangeSort}
          placeholder={t('sort.placeholder')}
          color="white"
          label={t('sort.label')}
        />
      </Box>
    </Flex>
  );
};

export default OffersNavBar;

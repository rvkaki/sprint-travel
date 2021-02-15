import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import SearchBar from './SearchBar';

const OffersNavBar = props => {
  const [t] = useTranslation('common');
  return (
    <Flex m={8} justify="space-between">
      <Box px={8} py={4} h={32} bg="gray.800">
        <SearchBar
          options={props.options}
          onChange={props.onChangeCategory}
          value={props.category}
          placeholder={t('search.placeholder')}
          color="white"
          label={t('search.label')}
        />
      </Box>
      <Box px={8} py={4} h={32} bg="gray.800">
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

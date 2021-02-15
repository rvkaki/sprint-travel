import { Flex } from '@chakra-ui/react';
import SearchBar from './SearchBar';

const OffersNavBar = props => {
  return (
    <Flex w="90%" mx="auto" my={8} h={32} bg="gray.800">
      <SearchBar
        options={props.options}
        onChange={props.onChange}
        value={props.value}
        color="white"
        label="Categoria"
      />
    </Flex>
  );
};

export default OffersNavBar;

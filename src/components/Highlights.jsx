import { Box, Flex, Text } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import HighlightItem from './HighlightItem';

const Highlights = props => {
  const history = useHistory();
  return (
    <Box w="90%" mx="auto" my={16}>
      <Text
        fontSize={{base: "3xl", md: "5xl"}}
        fontWeight="semibold"
        textAlign="center"
        color="gray.900"
        mb={2}
      >
        Destaques
      </Text>
      <Flex dir="row" w="100%" flexWrap="wrap">
        {props.data.map(h => (
          <HighlightItem
            {...h}
            onClick={() => history.push(`/ofertas/${h.id}`)}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Highlights;

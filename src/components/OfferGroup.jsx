import { Box, Flex, Text } from '@chakra-ui/react';
import OfferItem from './OfferItem';

const OfferGroup = props => {
  console.log(props);
  return (
    <Box>
      <Text mx={4} fontSize="xl" fontWeight="semibold">
        {props.title}
      </Text>
      <Flex
        direction="row"
        flexWrap="wrap"
        align="center"
      >
        {props.ofertas.map(offer => (
          <OfferItem
            {...offer}
            onClick={() =>
              props.history.push(`/ofertas/${offer.id}`, { ...offer })
            }
          />
        ))}
      </Flex>
    </Box>
  );
};

export default OfferGroup;

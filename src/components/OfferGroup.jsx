import { Flex, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import OfferItem from './OfferItem';

const OfferGroup = props => {
  const [size, setSize] = useState(props.size === 0 ? props.ofertas.length : 3);
  const [t] = useTranslation('common');
  return (
    <VStack alignItems="flex-start" spacing="1">
      <Text mx={4} fontSize="xl" fontWeight="semibold">
        {props.title}
      </Text>
      <Flex direction="row" flexWrap="wrap" align="center" w="100%">
        {props.ofertas.slice(0, size).map(offer => (
          <OfferItem
            {...offer}
            onClick={() =>
              props.history.push(`/ofertas/${offer.id}`, { ...offer })
            }
          />
        ))}
      </Flex>
      {props.ofertas.length > size && (
        <Text
          alignSelf="flex-end"
          mr={12}
          as="button"
          onClick={() => setSize(prev => prev + 3)}
          textDecoration="underline"
        >
          {t('viewMore')}
        </Text>
      )}
    </VStack>
  );
};

export default OfferGroup;

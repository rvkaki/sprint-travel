import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { regimes } from '../util/constants';

const OrderInfo = props => {
  const [t, i18n] = useTranslation('common');
  return (
    <Box bg="gray.300" w="100%" h="100%" shadow="xl">
      <Box
        as="img"
        src={`${process.env.REACT_APP_SERVER_URL}${props.coverImage.url}`}
        alt={props.coverImage.name}
        objectFit="cover"
      />
      <Stack spacing={4} p={4} color="gray.900">
        <Box>
          <Text fontWeight="semibold" fontSize="lg">
            {t('offer.destination')}
          </Text>
          <Text fontSize="xl">{props.title}</Text>
        </Box>
        <Box>
          <Text fontWeight="semibold" fontSize="lg">
            {t('offer.duration')}
          </Text>
          <Text fontSize="xl">
            {props.duration} {t('offer.days')}
          </Text>
        </Box>
        {props.regime ? (
          <Box>
            <Text fontWeight="semibold" fontSize="lg">
              {t('offer.regime')}
            </Text>
            <Text fontSize="xl">
              {props.regime} - {regimes[props.regime][i18n.language]}
            </Text>
          </Box>
        ) : null}
        <Flex alignSelf="flex-end" align="baseline">
          <Text fontSize="lg">Total:</Text>
          <Text ml={2} fontSize="4xl">{props.price}€</Text>
        </Flex>
      </Stack>
    </Box>
  );
};

export default OrderInfo;

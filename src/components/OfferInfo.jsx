import { Box, Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Line from './Line';

const OfferInfo = props => {
  const [t] = useTranslation('common');
  return (
    <Flex
      ml={{ base: 0, lg: 4 }}
      mt={{ base: 4, lg: 0 }}
      px={{ base: 4, md: 8 }}
      py={{ base: 2, md: 4 }}
      direction="column"
      justify="space-between"
      h={{ base: '100%', lg: '60vh' }}
      w={{ base: '100%', lg: '30%' }}
      bg="gray.200"
      fontSize={{ base: 'md', md: 'lg' }}
    >
      <Box>
        <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="semibold">
          {t('offer.date')}
        </Text>
        <Line />
        <Text>
          {new Date(props.startDate).toLocaleDateString()} -{' '}
          {new Date(props.endDate).toLocaleDateString()}
        </Text>
      </Box>
      <Box>
        <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="semibold">
          {t('offer.price')}
        </Text>
        <Line />
        <Text>
          {t('offer.from')}: {props.price}€
        </Text>
      </Box>
      {props.validUntil ? (
        <Box>
          <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="semibold">
            {t('offer.validUntil')}
          </Text>
          <Line />
          <Text>{new Date(props.validUntil).toLocaleDateString()}</Text>
        </Box>
      ) : null}
      <Box>
        <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="semibold">
          {t('offer.departure')}
        </Text>
        <Line />
        <Text>{props.departure}</Text>
      </Box>
      <Box>
        <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="semibold">
          {t('offer.duration')}
        </Text>
        <Line />
        <Text>
          {props.duration} {t('offer.days')}
        </Text>
      </Box>
    </Flex>
  );
};

export default OfferInfo;

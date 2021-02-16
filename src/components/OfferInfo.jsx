import { Box, Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Line from './Line';

const regimes = {
  MP: {
    en: 'Half Board',
    pt: 'Meia Pensão',
  },
  PC: {
    en: 'Full Board',
    pt: 'Pensão Completa',
  },
  TI: {
    en: 'Everything included',
    pt: 'Tudo Incluído',
  },
  APA: {
    en: 'Accomodation and breakfast',
    pt: 'Alojamento e pequeno-almoço',
  },
};

const OfferInfo = props => {
  const [t, i18n] = useTranslation('common');
  return (
    <Flex
      ml={{ base: 0, lg: 4 }}
      mt={{ base: 4, lg: 0 }}
      px={{ base: 4, md: 8 }}
      py={{ base: 2, md: 4 }}
      direction="column"
      justify="space-between"
      h={{ base: '100%', lg: '65vh' }}
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
      {props.regime ? (
        <Box>
          <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="semibold">
            {t('offer.regime')}
          </Text>
          <Line />
          <Text>
            {props.regime} - {regimes[props.regime][i18n.language]}
          </Text>
        </Box>
      ) : null}
      <Flex
        direction="row"
        justify="space-between"
        alignSelf={props.pdf ? 'auto' : 'flex-end'}
      >
        {props.pdf ? (
          <Box
            as="a"
            href={`${process.env.REACT_APP_SERVER_URL}${props.pdf.url}`}
            target="_blank"
            borderColor="gray.800"
            borderWidth="2px"
            borderRadius="md"
            px={3}
            py={1}
            color="gray.800"
            fontWeight="semibold"
          >
            Ver PDF
          </Box>
        ) : null}
        <Box
          as="button"
          bg="gray.800"
          borderRadius="md"
          px={3}
          py={1}
          color="white"
          fontWeight="semibold"
          onClick={props.checkout}
        >
          Reservar
        </Box>
      </Flex>
    </Flex>
  );
};

export default OfferInfo;

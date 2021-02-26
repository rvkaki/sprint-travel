import { Box, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Countdown from './Countdown';

const OfferItem = props => {
  const [t] = useTranslation('common');
  const [isHovered, setIsHovered] = useState(false);

  const tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 2);

  return (
    <Box
      w="30%"
      minW={{ base: '90%', sm: '80%', md: '60%', lg: '400px' }}
      h={{ base: '180px', md: '250px' }}
      mx={4}
      my={4}
      position="relative"
      overflow="hidden"
      onClick={props.onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      _hover={{
        transform: 'scale(1.05)',
        cursor: 'pointer',
        transition: 'ease-in-out 0.3s',
      }}
    >
      <Box
        as="img"
        src={`${process.env.REACT_APP_SERVER_URL}${props.coverImage.url}`}
        alt={props.coverImage.name}
        objectFit="cover"
        w="100%"
        h="100%"
      />
      <Flex
        position="absolute"
        top={0}
        left={isHovered ? 0 : '-100%'}
        bg="#42424299"
        h="100%"
        w="100%"
        transition="ease-in-out 0.5s"
        color="white"
        direction="column"
        justify="center"
        p={4}
        fontSize="lg"
      >
        <Text>
          {t('offer.duration')}: {props.duration} {t('offer.days')}
        </Text>
        {props.validUntil ? (
          <Text>
            {t('offer.validUntil')}:{' '}
            {new Date(props.validUntil).toLocaleDateString()}
          </Text>
        ) : null}
        <Text>
          {t('offer.departure')}: {props.departure}
        </Text>
      </Flex>
      <Flex
        direction="column"
        justify="space-between"
        h="100%"
        w="100%"
        position="absolute"
        bg="rgba(0,0,0,0.1)"
        transition="ease-in-out 0.5s"
        top={0}
        left={0}
        p={4}
        color="white"
      >
        <Text fontSize="3xl" fontWeight="semibold" color="white">
          {props.title}
        </Text>
        <Text
          fontSize="3xl"
          fontWeight="semibold"
          color="white"
          textAlign="right"
        >
          <Box as="span" fontSize="xl">
            {t('offer.from')}:{' '}
          </Box>
          {props.price}€
        </Text>
      </Flex>
      {tomorrow.getTime() > new Date(props.validUntil).getTime() ? (
        <Box
          position="absolute"
          left={0}
          top={0}
          right={0}
          bg="rgba(0,0,0,0.7)"
          color="white"
        >
          <Countdown deadline={new Date(props.validUntil)} />
        </Box>
      ) : null}
    </Box>
  );
};

export default OfferItem;

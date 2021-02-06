import { Box, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getOffer } from '../util/apiCalls';

const Line = props => {
  return (
    <Box
      w="100%"
      borderTopWidth={props.stroke || 1}
      borderColor={props.color || 'black'}
    />
  );
};

const OfferInfo = props => {
  return (
    <Flex
      ml={{ base: 0, lg: 4 }}
      mt={{ base: 4, lg: 0 }}
      px={{ base: 4, md: 8 }}
      py={{ base: 2, md: 4 }}
      direction="column"
      justify="space-between"
      h={{ base: '100%', lg: '60vh' }}
      w={{ base: '100%', lg: '40%' }}
      bg="gray.200"
      fontSize={{ base: 'md', md: 'lg' }}
    >
      <Box>
        <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="semibold">
          Data
        </Text>
        <Line />
        <Text>
          {new Date(props.startDate).toLocaleDateString()} -{' '}
          {new Date(props.endDate).toLocaleDateString()}
        </Text>
      </Box>
      <Box>
        <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="semibold">
          Preço
        </Text>
        <Line />
        <Text>Desde: {props.price}€</Text>
      </Box>
      <Box>
        <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="semibold">
          Validade
        </Text>
        <Line />
        <Text>Até: {new Date(props.validUntil).toLocaleDateString()}</Text>
      </Box>
      <Box>
        <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="semibold">
          Partida
        </Text>
        <Line />
        <Text>{props.departure}</Text>
      </Box>
      <Box>
        <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="semibold">
          Duração
        </Text>
        <Line />
        <Text>{props.duration} dias</Text>
      </Box>
    </Flex>
  );
};

const Offer = () => {
  const { id } = useParams();
  const { state } = useLocation();

  const [offer, setOffer] = useState();

  useEffect(() => {
    if (state) setOffer(state);
    else getOffer(id).then(data => setOffer(data));
  }, [state, id]);

  if (!offer) return null;

  return (
    <Box>
      <Box minH="100vh">
        <Header />
        <Box px={8} py={4} h="100%">
          <Text
            fontSize={{ base: '2xl', md: '4xl' }}
            fontWeight="bold"
            fontColor="black"
          >
            {offer.title}
          </Text>
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            justify="space-between"
            align="center"
          >
            <Box
              h={{ base: '30vh', md: '40vh', lg: '60vh' }}
              w="100%"
              mr={{ base: 0, lg: 4 }}
              mb={{ base: 4, lg: 0 }}
            >
              <Box
                as="img"
                src={`${process.env.REACT_APP_SERVER_URL}${offer.coverImage.url}`}
                alt={offer.coverImage.name}
                objectFit="cover"
                h="100%"
                w="100%"
              />
            </Box>
            <OfferInfo {...offer} />
          </Flex>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Offer;

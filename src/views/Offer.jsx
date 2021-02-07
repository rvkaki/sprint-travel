import { Box, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MediaContainer from '../components/MediaContainer';
import OfferInfo from '../components/OfferInfo';
import { getOffer } from '../util/apiCalls';

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
            <MediaContainer
              images={offer.images.map(i => {
                return {
                  src: `${process.env.REACT_APP_SERVER_URL}${i.url}`,
                  alt: i.name,
                };
              })}
              videos={offer.videos.map(v => {
                return { src: v.url, alt: v.id };
              })}
            />
            <OfferInfo {...offer} />
          </Flex>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Offer;

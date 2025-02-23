import { Box, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import Countdown from '../components/Countdown';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MediaContainer from '../components/MediaContainer';
import OfferInfo from '../components/OfferInfo';
import { getOffer } from '../util/apiCalls';

const Offer = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const history = useHistory();

  const [offer, setOffer] = useState();

  const tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 2);

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
          {tomorrow.getTime() > new Date(offer.validUntil).getTime() ? (
            <Box w="100%" py={2} bg="gray.800" color="white" fontSize="lg">
              <Countdown deadline={new Date(offer.validUntil)} />
            </Box>
          ) : null}
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
            <OfferInfo
              {...offer}
              shareUrl={window.location.href}
              checkout={() => history.push(`/checkout?offer=${id}`)}
            />
          </Flex>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Offer;

import { Box, Flex } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { getOfferGroups, getOffers } from '../util/apiCalls';

const Home = () => {
  const [offerGroups, setOfferGroups] = useState();
  const [offers, setOffers] = useState();

  useEffect(() => {
    getOfferGroups().then(data => setOfferGroups(data));
    getOffers().then(data => setOffers(data));
  }, []);
  return (
    <Box>
      <Header />
      <Footer />
    </Box>
  );
};

export default Home;

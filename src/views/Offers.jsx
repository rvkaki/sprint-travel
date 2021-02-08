import { Box, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import OfferGroup from '../components/OfferGroup';
import { getOfferGroups } from '../util/apiCalls';

const Offers = () => {
  const [offerGroups, setOfferGroups] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getOfferGroups().then(data => setOfferGroups(data));
  }, []);

  return (
    <Box>
      <Box minH="100vh">
        <Header />
        <Stack spacing={16} my={8} mx={4} h="100%">
          {offerGroups.map(group => (
            <OfferGroup {...group} history={history} />
          ))}
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
};

export default Offers;

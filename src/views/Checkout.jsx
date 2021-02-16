import { Box, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import OrderInfo from '../components/OrderInfo';
import UserForm from '../components/UserForm';
import { getOffer } from '../util/apiCalls';

const Checkout = () => {
  const location = useLocation();
  const id = parseInt(location.search.split('?offer=')[1]);

  const [t] = useTranslation('common');

  const [offer, setOffer] = useState();

  useEffect(() => {
    getOffer(id).then(data => setOffer(data));
  }, [id]);

  const submit = (name, email, contact, departure, date) => {
    console.log(name, email, contact, departure, date.toLocaleDateString());
  };

  return (
    <Box>
      <Box minH="100vh">
        <Header />
        <Flex m={8}>
          <Box flex={2} px={{ base: 4, md: 8 }}>
            <Text fontSize="2xl" fontWeight="semibold" color="black">
              {t('checkout.info.label')}
            </Text>
            {offer ? (
              <UserForm
                submit={submit}
                minBookingDate={new Date(offer.startDate)}
                departureOptions={offer.departure.split(' & ').map((i, idx) => {
                  return { name: i, value: idx };
                })}
              />
            ) : null}
          </Box>
          <Box flex={1} px={{ base: 0, md: 8 }}>
            <Text fontSize="2xl" fontWeight="semibold" color="black">
              {t('checkout.order.label')}
            </Text>
            {offer ? <OrderInfo {...offer} /> : null}
          </Box>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

export default Checkout;

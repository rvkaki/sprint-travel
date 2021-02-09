import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useTranslation } from 'react-i18next';
import LocationMap from '../components/LocationMap';
import { useEffect, useState } from 'react';
import { getLocations } from '../util/apiCalls';
import LocationInfo from '../components/LocationInfo';

const Contacts = () => {
  const [t] = useTranslation('common');
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocations().then(data => setLocations(data));
  }, []);

  return (
    <Box>
      <Box minH="100vh">
        <Header />
        <Flex direction="column" align="center" my={8}>
          <Text
            fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
            color="black"
            fontWeight="semibold"
          >
            {t('locations')}
          </Text>
          <Flex direction={{ base: 'column', lg: 'row' }} w="90%">
            <Stack spacing={4} flex={{ base: 'auto', lg: 2 }}>
              {locations.map((l, idx) => (
                <LocationInfo key={idx} {...l} />
              ))}
            </Stack>
            <LocationMap
              flex={{ base: 'auto', lg: 2 }}
              mt={{ base: 8, lg: 0 }}
              locations={locations}
            />
          </Flex>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

export default Contacts;

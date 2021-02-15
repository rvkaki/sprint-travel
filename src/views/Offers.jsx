import { Box, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import OfferGroup from '../components/OfferGroup';
import OffersNavBar from '../components/OffersNavBar';
import { getOfferGroups, getOffers } from '../util/apiCalls';

const Offers = () => {
  const [t] = useTranslation('common');
  const history = useHistory();

  const [options, setOptions] = useState([]);
  const [offerGroups, setOfferGroups] = useState([]);

  const [offers, setOffers] = useState([]);

  const [sorters, setSorters] = useState([]);

  const [categoryId, setCategoryId] = useState(-1);
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    getOfferGroups().then(data =>
      setOptions([
        { name: t('all'), value: -1 },
        ...data.map(o => {
          return { name: o.title, value: o.id };
        }),
      ])
    );
    setSorters([
      { name: t('sort.category'), value: '' },
      { name: t('sort.price'), value: 'price' },
      { name: t('sort.validity'), value: 'validUntil' },
      { name: t('sort.duration'), value: 'duration' },
    ]);
  }, [t]);

  useEffect(() => {
    getOfferGroups(categoryId).then(data => setOfferGroups(data));
  }, [categoryId]);

  useEffect(() => {
    if (sortBy !== '')
      getOffers(sortBy).then(data => {
        if (categoryId !== -1) {
          setOffers(
            data.filter(
              o => offerGroups[0].ofertas.findIndex(x => x.id === o.id) !== -1
            )
          );
        } else setOffers(data);
      });
    else setOffers([]);
  }, [sortBy, categoryId, offerGroups]);

  return (
    <Box>
      <Box minH="100vh">
        <Header />
        <OffersNavBar
          options={options}
          category={categoryId}
          onChangeCategory={setCategoryId}
          sorters={sorters}
          sortBy={sortBy}
          onChangeSort={setSortBy}
        />
        {offers.length > 0 ? (
          <Box mx={4}>
            <OfferGroup
              title={
                categoryId !== -1
                  ? options.find(o => o.value === categoryId).name
                  : t('all')
              }
              ofertas={offers}
              history={history}
            />
          </Box>
        ) : (
          <Stack spacing={16} my={8} mx={4}>
            {offerGroups.map(group => (
              <OfferGroup {...group} history={history} />
            ))}
          </Stack>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default Offers;

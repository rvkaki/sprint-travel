import { Box, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import OfferGroup from '../components/OfferGroup';
import OffersNavBar from '../components/OffersNavBar';
import { getOfferGroups, getOffers } from '../util/apiCalls';
import _ from 'lodash';

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
    getOffers(sortBy).then(data => {
      if (sortBy !== '')
        if (categoryId !== -1) {
          setOffers(
            data.filter(o => o.categoria && o.categoria.id === categoryId)
          );
        } else setOffers(data);
      else {
        if (categoryId !== -1)
          setOffers(
            data.filter(o => o.categoria && o.categoria.id === categoryId)
          );
        else {
          setOfferGroups(_.groupBy(data, 'categoria.title'));
          setOffers([]);
        }
      }
    });
  }, [sortBy, categoryId]);

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
            {Object.entries(offerGroups).map(([title, offers]) => (
              <OfferGroup
                title={title !== 'undefined' ? title : t('others')}
                ofertas={offers}
                history={history}
              />
            ))}
          </Stack>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default Offers;

import axios from 'axios';

export const getOfferGroups = async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/offer-groups`
    );
    if (res.statusText === 'OK') return res.data;
    return [];
  } catch (error) {
    console.error(error);
  }
};

export const getOffers = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/offers`);
    if (res.statusText === 'OK') return res.data;
    return [];
  } catch (error) {
    console.error(error);
  }
};

export const getOffer = async id => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/offers/${id}`
    );
    if (res.statusText === 'OK') return res.data;
    return [];
  } catch (error) {
    console.error(error);
  }
};

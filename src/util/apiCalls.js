import axios from 'axios';

const serverURL = process.env.REACT_APP_SERVER_URL;

export const getOfferGroups = async () => {
  try {
    const res = await axios.get(`${serverURL}/offer-groups`);
    if (res.statusText === 'OK') return res.data;
    return [];
  } catch (error) {
    console.error(error);
  }
};

export const getOffers = async () => {
  try {
    const res = await axios.get(`${serverURL}/offers`);
    if (res.statusText === 'OK') return res.data;
    return [];
  } catch (error) {
    console.error(error);
  }
};

export const getOffer = async id => {
  try {
    const res = await axios.get(`${serverURL}/offers/${id}`);
    if (res.statusText === 'OK') return res.data;
    return [];
  } catch (error) {
    console.error(error);
  }
};

export const getSlides = async () => {
  try {
    const res = await axios.get(`${serverURL}/carousel`);
    if (res.statusText === 'OK') return res.data.images;
    return [];
  } catch (error) {
    console.error(error);
  }
};

export const getFranchisingBook = async () => {
  try {
    const res = await axios.get(`${serverURL}/franchising-book`);
    if (res.statusText === 'OK') return res.data.file;
  } catch (error) {
    console.log(error);
  }
};

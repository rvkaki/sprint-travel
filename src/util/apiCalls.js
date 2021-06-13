import axios from 'axios';

const serverURL = process.env.REACT_APP_SERVER_URL;

export const getOfferGroups = async () => {
  try {
    const res = await axios.get(`${serverURL}/offer-groups`);
    if (res.statusText === 'OK') return res.data;
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getOffers = async (sortBy = '') => {
  let params = {};
  if (sortBy !== '') params['_sort'] = sortBy;
  try {
    const res = await axios.get(`${serverURL}/offers`, { params: params });
    if (res.statusText === 'OK') return res.data;
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getOffer = async id => {
  try {
    const res = await axios.get(`${serverURL}/offers/${id}`);
    if (res.statusText === 'OK') return res.data;
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getSlides = async () => {
  try {
    const res = await axios.get(`${serverURL}/carousel`);
    if (res.statusText === 'OK') return res.data.images;
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getFranchisingBook = async () => {
  try {
    const res = await axios.get(`${serverURL}/franchising-book`);
    if (res.statusText === 'OK') return res.data.file;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getHighlights = async () => {
  try {
    const res = await axios.get(`${serverURL}/highlights`);
    if (res.statusText === 'OK') return res.data.ofertas;
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getLocations = async () => {
  try {
    const res = await axios.get(`${serverURL}/locations`);
    if (res.statusText === 'OK') return res.data;
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getPrivacyPolicy = async () => {
  try {
    const res = await axios.get(`${serverURL}/privacy`);
    if (res.statusText === 'OK') return res.data.text;
    return '';
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getSaleConditions = async () => {
  try {
    const res = await axios.get(`${serverURL}/sale-conditions`);
    if (res.statusText === 'OK') return res.data.text;
    return '';
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getStores = async () => {
  try {
    const res = await axios.get(`${serverURL}/stores`);
    if (res.statusText === 'OK') return res.data;
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import i18next from 'i18next';

import common_en from './translations/en/common.json';
import common_pt from './translations/pt/common.json';
import { I18nextProvider } from 'react-i18next';
import Root from './routes/Root';
import GlobalModal from './components/GlobalModal';

const theme = extendTheme({
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Montserrat, sans-serif',
  },
  fontWeights: {
    light: '200',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  colors: {
    gray: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
  },
});

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'pt',
  resources: {
    en: {
      common: common_en,
    },
    pt: {
      common: common_pt,
    },
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <I18nextProvider i18n={i18next}>
        <Root />
        <GlobalModal ref={ref => (global['modal'] = ref)} />
      </I18nextProvider>
    </ChakraProvider>
  );
};

export default App;

import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import light from '../styles/themes/light';
import GlobalStyle from '../styles/global';

import 'leaflet/dist/leaflet.css';
// import 'react-leaflet-markercluster/dist/styles.min.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={light}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;

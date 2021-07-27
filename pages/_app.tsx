import '../styles/global.scss'

import { useState } from 'react';

import {ModeContextProvider} from '../contexts/ModeContext'

function MyApp({ Component, pageProps }) {
  return (
    <ModeContextProvider>
      <Component {...pageProps} />
    </ModeContextProvider>
  )
}

export default MyApp

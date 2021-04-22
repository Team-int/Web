import '../styles/global.css'
import React from 'react'
import { AppProps } from 'next/app'
import SEO from '../components/seo'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <SEO />
      <Component {...pageProps} />
    </>
  )
}
export default App

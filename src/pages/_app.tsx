import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/global';
import Header from '../components/Header';
function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <GlobalStyles/>
  <Header/>
  <Component {...pageProps} />
  </>
  )
}

export default App

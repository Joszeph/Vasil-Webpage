import Layout from '../components/Layout'
import ScrollToTop from '../components/Scroll'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
      <ScrollToTop />
    </Layout>
  ) 
}

export default MyApp

import '../styles/globals.css'
import Layout from '../components/Layout'

const EnterWind = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default EnterWind

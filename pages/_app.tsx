import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/navBar'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'antd/dist/antd.css';
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  

  return (
    <>
      <NavBar />   
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

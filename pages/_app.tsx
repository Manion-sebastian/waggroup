import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/navBar'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
// import GameLink from '../components/gameLink'
config.autoAddCss = false


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      {/* <GameLink /> */}

    </>
  )
}

export default MyApp

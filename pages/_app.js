import reducer, { initialState } from "../context/reducer";
import { StateProvider } from "../context/StateProvider";
import { CookiesProvider } from "react-cookie"
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Component {...pageProps} />
      </StateProvider>
    </CookiesProvider>
  )
}

export default MyApp

import { GlobalStyle } from "shared"

function App({ Component, pageProps }) {
    return <>
    <GlobalStyle/>
    <Component {...pageProps} />
    </>
  }
  

  export default App
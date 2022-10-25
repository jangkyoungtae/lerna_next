import { GlobalStyle } from "shared"

function App({ Component, pageProps }) {
    return <>
    <GlobalStyle/>
    <div>test</div>
    <Component {...pageProps} />
    </>
  }
  

  export default App
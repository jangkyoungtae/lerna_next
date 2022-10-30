import { Provider } from "jotai"
import { ThemeProvider } from "styled-components"
import theme from "../styles/theme"

function App({ Component, pageProps }) {
    return (
      <Provider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
  

  export default App
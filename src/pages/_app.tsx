import { Provider as StoreProvider } from "react-redux"

import isPropValid from "@emotion/is-prop-valid"
import type { AppProps } from "next/app"
import { StyleSheetManager, ThemeProvider } from "styled-components"

import "@/utils/globals.css"
import { store } from "@/utils/redux/store"
import theme from "@/utils/theme"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <StoreProvider store={store}>
          <Component {...pageProps} />
        </StoreProvider>
      </StyleSheetManager>
    </ThemeProvider>
  )
}

export default App

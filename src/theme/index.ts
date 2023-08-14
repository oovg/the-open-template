import { extendTheme } from '@chakra-ui/react'
import { config } from './foundations'

const overrides = {
  config,
  colors: {},
  components: {},
  fonts: {
    heading: `'bely-display', serif`,
    body: `'adobe-caslon-pro', serif`,
  },
  shadows: {},
  sizes: {},
  styles: {
    global: () => ({
      '*': {
        boxSizing: 'border-box',
        scrollBehavior: 'smooth',
        scrollMarginTop: '5rem',
        padding: 0,
        margin: 0,
      },
      body: {
        transition: 'background 200ms linear !important',
        color: 'primary',
        backgroundColor: 'bg',
        fontSize: '21px',
        margin: 0,
        padding: '0px',
      },
    }),
  },
  textStyles: {
    h2: {
      fontSize: ["2xl", null, "4xl"],
      fontFamily: `'bely-display', serif`
    },
    h3: {
      fontSize: ["xl", null, "3xl"],
    },
    paragraph: {
      fontSize: "xl",
      marginBottom: 12,
    },
    tag: {
      marginBottom: 12,
    },
  },
  semanticTokens: {
    colors: {
      primary: { _light: '#282828', _dark: '#d1fdb1' },
      bg: { _light: '#d1fdb1', _dark: '#282828' },
    },
  },
}

export default extendTheme(overrides)

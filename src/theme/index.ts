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
        fontSize: '18px',
        margin: 0,
        padding: '0px',
      },
      a: {
        textDecoration: 'underline',
        _hover: { textDecoration: 'none',}
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
      marginBottom: 12,
    },
    tag: {
      marginBottom: 12,
    },
  },
  semanticTokens: {
    colors: {
      primary: { _light: '#282828', _dark: '#fff7ed' },
      bg: { _light: '#fff7ed', _dark: '#282828' },
    },
  },
}

export default extendTheme(overrides)

import { extendTheme } from '@chakra-ui/react'
import { config } from './foundations'

const overrides = {
  config,
  colors: {},
  components: {
    Link: {
      baseStyle: {
        textDecoration: 'none',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
  fonts: {
    heading: `'polymath-display', sansserif`,
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
        textDecoration: 'none',
        _hover: {
          textDecoration: 'underline',
        },
      },
    }),
  },
  textStyles: {
    h1: {
      fontSize: ["3xl", null, "6xl"],
      fontWeight: `"900"`
    },
    h2: {
      fontSize: ["2xl", null, "4xl"],
      fontWeight: `"900"`
    },
    h3: {
      fontSize: ["xl", null, "3xl"],
      fontWeight: `"900"`
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
      primary: { _light: '#282828', _dark: '#f0fdfa' },
      bg: { _light: '#f0fdfa', _dark: '#000' },
    },
  },
}

export default extendTheme(overrides)

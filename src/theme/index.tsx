import { transparentize } from 'polished'
import React, { useMemo } from 'react'
import styled, {
  ThemeProvider as StyledComponentsThemeProvider,
  createGlobalStyle,
  css,
  DefaultTheme,
} from 'styled-components'
import useThemeContext from '@theme/hooks/useThemeContext';
import { Text, TextProps } from 'rebass'
import { Colors } from './styled'

const MEDIA_WIDTHS = {
  upToExtraSmall: 480,
  upToSmall: 540,
  upToMedium: 692,
  upToLarge: 910,
  upToExtraLarge: 1480
}

const mediaWidthTemplates: { [width in keyof typeof MEDIA_WIDTHS]: typeof css } = Object.keys(MEDIA_WIDTHS).reduce(
  (accumulator, size) => {
    ;(accumulator as any)[size] = (a: any, b: any, c: any) => css`
      @media (min-width: ${(MEDIA_WIDTHS as any)[size]}px) {
        ${css(a, b, c)}
      }
    `

    return accumulator
  },
  {}
) as any

const white = '#FFFFFF'
const black = '#050505'

export function colors(darkMode: boolean): Colors {
  return {
    // base
    white,
    black,

    bright: darkMode ? white : black,

    // Text
    text1: darkMode ? '#FFFFFF' : '#000000',
    text2: darkMode ? '#8a8f98' : '#373737',
    text3: darkMode ? '#6C7284' : '#888D9B',
    text4: darkMode ? '#373737' : '#C3C5CB',
    text5: darkMode ? '#121212' : '#EDEEF2',

    // backgrounds / greys
    bg1: darkMode ? '#050505' : '#FFFFFF',
    bg2: darkMode ? '#0f0f0f' : '#F7F8FA',
    bg3: darkMode ? '#0a2540' : '#EDEEF2',
    bg4: darkMode ? '#373737' : '#CED0D9',
    bg5: darkMode ? '#2F3336' : '#888D9B',

    //specialty colors
    modalBG: darkMode ? 'rgba(0,0,0,0.85)' : 'rgba(0,0,0,0.6)',
    advancedBG: darkMode ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.6)',

    //primary colors
    primary1: darkMode ? '#635BFF' :'#8B3CC4',
    primary2: darkMode ? '#4C43FF' :'#9349C9',
    primary3: darkMode ? '#352AFF' :'#9C57CD',
    primary4: darkMode ? '#1D11FF' :'#A465D1',
    primary5: darkMode ? '#0A2540' :'#AC73D5',

    // color text
    primaryText1: darkMode ? '#0dbc79' : '#8B3CC4',

    marketingText1: "#228D57",
    marketingText2: "#3E3E3C",
    marketingBg1: "#feffe4",  
    marketingBg2: "#3E3E3C",
    green2: "#007f38",
    green3: "#D9E9C2",
    green4: "#6A8767",
    blue2: "#007",
    blue3: "#212D63",
    blue4: "#5959e8",

    // secondary colors
    secondary1: darkMode ? '#01D54A' : '#8B3CC4',
    secondary2: darkMode ? '#1700b26' : '#A465D1',
    secondary3: darkMode ? '#1700b26' : '#AC73D5',

    terminalBG: darkMode ? "#040d21" : "#ddd",
    terminalText: darkMode ? "#eee" : "#1a1e24",

    // other
    red1: '#FF6871',
    green1: '#27AE60',
    yellow1: '#FFE270',
    yellow2: '#F3841E',

    // dont wanna forget these blue yet
    blue5: darkMode ? '#153d6f70' : '#EBF4FF',
  }
}

export function theme(darkMode: boolean): DefaultTheme {
  darkMode = true
  return {
    ...colors(darkMode),

    grids: {
      sm: 8,
      md: 12,
      ld: 24,
    },

    shadow1: darkMode ? '#fff' : '#2F80ED',

    // media queries
    mediaWidth: mediaWidthTemplates,

    // css snippets
    flexColumnNoWrap: css`
      display: flex;
      flex-flow: column nowrap;
    `,
    flexRowNoWrap: css`
      display: flex;
      flex-flow: row nowrap;
    `,
  }
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { isDarkTheme } = useThemeContext();

  const themeObject = useMemo(() => theme(false), [isDarkTheme])

  return <StyledComponentsThemeProvider theme={themeObject}>{children}</StyledComponentsThemeProvider>
}

const TextWrapper = styled(Text)<{ color: keyof Colors }>`
  color: ${({ color, theme }) => (theme as any)[color]};
`

export const TYPE = {
  hero(props: TextProps) {
    return <TextWrapper fontWeight={700} color={'text2'} fontFamily={'"Vollkorn", serif'} />
  },
  main(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'text2'} {...props} />
  },
  link(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'primary5'} {...props} />
  },
  black(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'text1'} {...props} />
  },
  white(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'white'} {...props} />
  },
  body(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={16} color={'text1'} {...props} />
  },
  largeHeader(props: TextProps) {
    return <TextWrapper fontWeight={600} fontSize={24} {...props} />
  },
  mediumHeader(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={24} {...props} />
  },
  subHeader(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={14} {...props} />
  },
  small(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={11} {...props} />
  },
  blue(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'primary1'} {...props} />
  },
  yellow(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'yellow1'} {...props} />
  },
  darkGray(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'text3'} {...props} />
  },
  gray(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'bg3'} {...props} />
  },
  italic(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={12} fontStyle="italic" color={'text2'} {...props} />
  },
  error({ error, ...props }: { error: boolean } & TextProps) {
    return <TextWrapper fontWeight={500} color={error ? 'red1' : 'text2'} {...props} />
  },
}

export const FixedGlobalStyle = createGlobalStyle`
html,
body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

html {
  font-size: 16px;
  font-variant: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
`

export const ThemedGlobalStyle = createGlobalStyle`
html {
  color: ${({ theme }) => theme.text1};
  background-color: ${({ theme }) => theme.bg2};
}

body {
  min-height: 100vh;
  background-position: 0 -30vh;
  background-repeat: no-repeat;
}
`

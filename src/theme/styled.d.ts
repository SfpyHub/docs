import { FlattenSimpleInterpolation, ThemedCssFunction } from 'styled-components'

export type Color = string
export interface Colors {
  // base
  white: Color
  black: Color

  bright: Color

  // text
  text1: Color
  text2: Color
  text3: Color
  text4: Color
  text5: Color

  // backgrounds / grey
  bg1: Color
  bg2: Color
  bg3: Color
  bg4: Color
  bg5: Color

  modalBG: Color
  advancedBG: Color

  // blues
  primary1: Color
  primary2: Color
  primary3: Color
  primary4: Color
  primary5: Color

  primaryText1: Color

  marketingText1: Color
  marketingText2: Color

  marketingBg1: Color
  marketingBg2: Color

  green2: Color
  green3: Color
  green4: Color
  blue2: Color
  blue3: Color
  blue4: Color

  // pinks
  secondary1: Color
  secondary2: Color
  secondary3: Color

  terminalBG: Color
  terminalText: Color

  // other
  red1: Color
  green1: Color
  yellow1: Color
  yellow2: Color
  
  blue5: Color
}

export interface Grids {
  sm: number
  md: number
  ld: number
}

declare module 'styled-components' {
  export interface DefaultTheme extends Colors {
    grids: Grids

    // shadows
    shadow1: string

    // media queries
    mediaWidth: {
      upToExtraSmall: ThemedCssFunction<DefaultTheme>
      upToSmall: ThemedCssFunction<DefaultTheme>
      upToMedium: ThemedCssFunction<DefaultTheme>
      upToLarge: ThemedCssFunction<DefaultTheme>
    }

    // css snippets
    flexColumnNoWrap: FlattenSimpleInterpolation
    flexRowNoWrap: FlattenSimpleInterpolation
  }
}

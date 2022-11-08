import { mainTheme } from "../styles/themes/default";

type ThemeType = typeof mainTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
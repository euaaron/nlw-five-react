import ThemesConfig from './default.theme.json';

export interface ITheme {
  name: string;
  cursorColor: string;
  selectionBackground: string;
  background: string;
  foreground: string;
  black: string;
  blue: string;
  cyan: string;
  green: string;
  purple: string;
  red: string;
  white: string;
  yellow: string;
  brightBlack: string;
  brightBlue: string;
  brightCyan: string;
  brightGreen: string;
  brightPurple: string;
  brightRed: string;
  brightWhite: string;
  brightYellow: string;
  darkBlack: string;
}

export default class Theme implements ITheme {
  constructor(
    public name: string = ThemesConfig[0].name,
    public cursorColor: string = ThemesConfig[0].cursorColor,
    public selectionBackground: string = ThemesConfig[0].selectionBackground,
    public background: string = ThemesConfig[0].background,
    public foreground: string = ThemesConfig[0].foreground,
    public black: string = ThemesConfig[0].black,
    public blue: string = ThemesConfig[0].blue,
    public cyan: string = ThemesConfig[0].cyan,
    public green: string = ThemesConfig[0].green,
    public purple: string = ThemesConfig[0].purple,
    public red: string = ThemesConfig[0].red,
    public white: string = ThemesConfig[0].white,
    public yellow: string = ThemesConfig[0].yellow,
    public brightBlack: string = ThemesConfig[0].brightBlack,
    public brightBlue: string = ThemesConfig[0].brightBlue,
    public brightCyan: string = ThemesConfig[0].brightCyan,
    public brightGreen: string = ThemesConfig[0].brightGreen,
    public brightPurple: string = ThemesConfig[0].brightPurple,
    public brightRed: string = ThemesConfig[0].brightRed,
    public brightWhite: string = ThemesConfig[0].brightWhite,
    public brightYellow: string = ThemesConfig[0].brightYellow,
    public darkBlack: string = ThemesConfig[0].darkBlack
  ) { }
}
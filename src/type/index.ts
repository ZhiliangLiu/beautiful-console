const hasSymbol = typeof Symbol === 'function' && Symbol.for

export const BROWSER_BEAUTIFY_TYPE = hasSymbol ? Symbol.for('browser.beautify.type') : 0xfff
export const BROWSER_BEAUTIFY_INSTANCE = hasSymbol ? Symbol.for('browser.beautify.instance') : 0xffe

export interface BeautifyConfig {
  color?: string
  'background-color'?: string
  'font-size'?: string

  [propName: string]: string | undefined
}

export interface BeautifyObject {
  $$TYPE: symbol | number

  [propNmae: number]: string
}

export type Color = [string, string, string, string, string, string, string, string, string, string]

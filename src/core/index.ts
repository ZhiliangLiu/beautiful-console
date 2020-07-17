import { BeautifyConfig, BeautifyObject } from '@/type'
import { backgroundColor, beautify, color, fontSize, getColorBeautify } from './base'
import Instance from './instance'

export default {
  beautify,
  fontSize,
  color,
  backgroundColor,
  createInstance: (str?: string) => new Instance(str),
  ...getColorBeautify()
} as {
  beautify: (str: string, config?: BeautifyConfig | string) => BeautifyObject | string
  fontSize: (str: string, size: string) => BeautifyObject
  color: (str: string, color: string) => BeautifyObject
  backgroundColor: (str: string, color: string) => BeautifyObject
  createInstance: (str?: string) => Instance
  red: (str: string) => BeautifyObject
  gray: (str: string) => BeautifyObject
  blue: (str: string) => BeautifyObject
  indigo: (str: string) => BeautifyObject
  violet: (str: string) => BeautifyObject
  fuchsia: (str: string) => BeautifyObject
  pink: (str: string) => BeautifyObject
  orange: (str: string) => BeautifyObject
  yellow: (str: string) => BeautifyObject
  lime: (str: string) => BeautifyObject
  green: (str: string) => BeautifyObject
  teal: (str: string) => BeautifyObject
  cyan: (str: string) => BeautifyObject
  console: Console
}

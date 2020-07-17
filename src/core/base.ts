import { BeautifyConfig, BeautifyObject, BROWSER_BEAUTIFY_TYPE } from '@/type'
import { blue, cyan, fuchsia, grape, gray, green, indigo, lime, orange, pink, red, teal, violet, yellow } from '@/color'

export const beautify = (str: string, config?: BeautifyConfig | string): BeautifyObject | string => {
  if (config === undefined) {
    return str
  } else if (typeof config === 'string') {
    const ret = [`%c${str}`, config]
    Object.assign(ret, { $$TYPE: BROWSER_BEAUTIFY_TYPE })
    return (ret as unknown) as BeautifyObject
  } else {
    const behind = Object.entries(config)
      .map(([key, value]: [string, unknown]) => `${key}: ${value}`)
      .join('; ')
    const ret = [`%c${str}`, behind]
    Object.assign(ret, { $$TYPE: BROWSER_BEAUTIFY_TYPE })
    return (ret as unknown) as BeautifyObject
  }
}

export const color = (str: string, color: string): BeautifyObject | string => {
  return beautify(str, { color })
}

export const fontSize = (str: string, size: string): BeautifyObject | string => {
  return beautify(str, { 'font-size': size })
}

export const backgroundColor = (str: string, color: string): BeautifyObject | string => {
  return beautify(str, { 'background-color': color })
}

export const colorMap: Map<string, string> = new Map<string, string>([
  ['red', red[5]],
  ['gray', gray[5]],
  ['blue', blue[5]],
  ['indigo', indigo[5]],
  ['violet', violet[5]],
  ['fuchsia', fuchsia[5]],
  ['grape', grape[5]],
  ['pink', pink[5]],
  ['orange', orange[5]],
  ['yellow', yellow[5]],
  ['lime', lime[5]],
  ['green', green[5]],
  ['teal', teal[5]],
  ['cyan', cyan[5]]
])

export const getColorBeautify = (): { [propName: string]: (str: string) => BeautifyObject } => {
  const ret = {}
  colorMap.forEach((value, key) => {
    Object.assign(ret, {
      [key]: (str: string) => beautify(str, { color: value })
    })
  })
  return ret
}

import Instance from '@/core/instance'

const genPara = (
  args: ({ $$TYPE: unknown; [propName: number]: unknown } | Instance | string | unknown)[]
): unknown[] => {
  let before = ''
  const after: unknown[] = []
  const other: unknown[] = []
  args.map((arg) => {
    if (arg instanceof Instance) {
      const bo = arg.output()
      before = `${before}${bo[0]}`
      after.push(bo[1])
    } else if (arg && typeof arg === 'object') {
      before = `${before}${Reflect.get(arg, 0)}`
      after.push(Reflect.get(arg, 1))
    } else if (typeof arg === 'string') {
      before = `${before}%c${arg}`
      after.push('')
    } else {
      other.push(arg)
    }
  })
  return [before, ...after, ...other]
}

const genConsole = (
  method: 'log' | 'warn' | 'debug' | 'error' | 'info'
): ((message?: unknown, ...optionalParams: unknown[]) => void) => {
  const print: (message?: unknown, ...optionalParams: unknown[]) => void = console[method]
  return (message?: unknown, ...optionalParams: unknown[]) => {
    const args = [message, ...optionalParams]
    const para: unknown[] = genPara(args)
    print(...para)
  }
}

const genGroupConsole = (
  method: 'group' | 'groupCollapsed'
): ((groupTitle?: string, ...optionalParams: unknown[]) => void) => {
  const print: (groupTitle?: unknown, ...optionalParams: unknown[]) => void = console[method]
  return (groupTitle?: string, ...optionalParams: unknown[]) => {
    const args = [groupTitle, ...optionalParams]
    const para: unknown[] = genPara(args)
    print(...para)
  }
}

export default {
  ...console,
  log: genConsole('log'),
  info: genConsole('info'),
  debug: genConsole('debug'),
  warn: genConsole('warn'),
  error: genConsole('error'),
  group: genGroupConsole('group'),
  groupCollapsed: genGroupConsole('groupCollapsed')
} as Console

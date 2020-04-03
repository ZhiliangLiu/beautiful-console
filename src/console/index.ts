import {BROWSER_BEAUTIFY_INSTANCE, BROWSER_BEAUTIFY_TYPE} from '../type'
import Instance from '../core/instance'

const genPara = (args: any[]): any[] => {
    let before = ''
    const after: any = []
    const other: any = []
    args.map(arg => {
        if (arg && arg.$$TYPE === BROWSER_BEAUTIFY_TYPE) {
            before = `${before}${arg[0]}`
            after.push(arg[1])
        } else if (arg && arg.$$TYPE === BROWSER_BEAUTIFY_INSTANCE) {
            const [a, b] = ((arg as Instance).output() as unknown as [string, string])
            before = `${before}${a}`
            after.push(b)
        } else if (typeof arg === 'string') {
            before = `${before}%c${arg}`
            after.push('')
        } else {
            other.push(arg)
        }
    })
    return [before, ...after, ...other]
}

const genConsole = (method: 'log' | 'warn' | 'debug' | 'error' | 'info'): (message?: any, ...optionalParams: any[]) => void => {
    const print: (message?: any, ...optionalParams: any[]) => void = console[method]
    return (message?: any, ...optionalParams: any[]) => {
        const args = [message, ...optionalParams]
        const para: any[] = genPara(args)
        print(...para)
    }
}

const genGroupConsole = (method: 'group' | 'groupCollapsed'): (groupTitle?: string, ...optionalParams: any[]) => void => {
    const print: (groupTitle?: string, ...optionalParams: any[]) => void = console[method]
    return (groupTitle?: string, ...optionalParams: any[]) => {
        const args = [groupTitle, ...optionalParams]
        const para: any[] = genPara(args)
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
    groupCollapsed: genGroupConsole('groupCollapsed'),
} as Console

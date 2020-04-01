import {BROWSER_BEAUTIFY_INSTANCE, BeautifyConfig, BeautifyObject} from '../type'
import {beautify, colorMap} from './base'

class Instance {
    public $$TYPE = BROWSER_BEAUTIFY_INSTANCE
    public red!: () => this
    public gray!: () => this
    public blue!: () => this
    public indigo!: () => this
    public violet!: () => this
    public fuchsia!: () => this
    public pink!: () => this
    public orange!: () => this
    public yellow!: () => this
    public lime!: () => this
    public green!: () => this
    public teal!: () => this
    public cyan!: () => this
    protected str?: string
    protected config: BeautifyConfig

    public constructor(str?: string) {
        this.str = str
        this.config = {}
        colorMap.forEach((value, key) => {
            Object.assign(this, {
                [key]: () => {
                    Object.assign(this.config, {color: value})
                    return this
                }
            })
        })
    }

    public color(color: string) {
        Object.assign(this.config, {color})
        return this
    }

    public backgroundColor(color: string) {
        Object.assign(this.config, {'background-color': color})
        return this
    }

    public fontSize(size: string) {
        Object.assign(this.config, {'font-size': size})
        return this
    }

    public para(para: { [propName: string]: string }) {
        Object.assign(this.config, para)
        return this
    }

    public value(value?: string): BeautifyObject {
        if (this.str !== undefined || value !== undefined) {
            return beautify((value || this.str) as string, this.config) as BeautifyObject
        } else {
            throw new Error('没有值')
        }
    }
}

export default Instance

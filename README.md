# beautiful-console ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) ![npm version](https://img.shields.io/npm/v/react.svg?style=flat)

beautiful-console 是一个美化浏览器控制台输出的库

![example1](./resource/image/example1.png)
![example1](./resource/image/example2.png)

## 安装
```shell
# npm
npm install --save beautiful-console

# yarn
yarn add beautiful-console
```

## 使用

```javascript
import bc from 'beautiful-console'

const {beautify, console: {log: print}} = bc
print(beautify.blue('Hello world'))
```
![example1](./resource/image/helloworld.png)

对于原本的 `console.log` `console.warn` `console.error` `console.debug` `console.info` `console.groupCollapsed` `console.group` 都有封装
```javascript
import bc from 'beautiful-console'

const {beautify, console: {error: print}} = bc
print(beautify.blue('Goodbye world'))
```
![example1](./resource/image/goodbyeworld.png)

你还可以实现更复杂的功能
```javascript
import bc from 'beautiful-console'

const {beautify, console: {log: print}, color: {blue, gray}} = bc
const i = beautify.createInstance()

i.para({
    'background-color': blue[5],
    'color': gray[0],
    'padding': '1px 8px',
    'border-radius': '3px'
})
print(i.output('Wow!'))
```
![wow](./resource/image/wow.png)

把它当作一个`div`标签就好了

当然，拼接也是可以的
```javascript
import bc from 'beautiful-console'

const {beautify, console: {log: print}, color: {blue, gray, orange}} = bc

const i1 = beautify.createInstance()
i1.para({
    'background-color': blue[8],
    'padding': '1px 8px',
    'color': gray[0],
    'border-bottom-left-radius': '4px',
    'border-top-left-radius': '4px'
})
const i2 = beautify.createInstance()
i2.para({
    'background-color': orange[5],
    'padding': '1px 8px',
    'color': gray[0],
    'border-bottom-right-radius': '4px',
    'border-top-right-radius': '4px'
})
print(i1.output('Amazing'), i2.output('right?'))
```
![amazing](./resource/image/amazing.png)

## 原理

去在浏览器试试吧
```javascript
console.log('%chello', 'background-color: red')
```

## 缺陷

只能对字符串使用，不支持其他类型，如果混入其他类型则会把其他类型的放到最后
```javascript
import bc from 'beautiful-console'

const {beautify, console: {log: print}} = bc

print(beautify.red('string'), {type: 'order'}, beautify.green('also string'))
```
![f](./resource/image/f.png)



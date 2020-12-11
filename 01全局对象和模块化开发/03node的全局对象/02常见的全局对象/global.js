/**
 * global: {
 *    类似浏览器的window
 *    不同的是：在浏览器中定义一个变量会存储到window中；而在node中定义一个变量不会存储到global中而是存储到独立的模块中
 * }
 */
var name = 'smstdent'
console.log(global.name); //undefined

/**
 * 如浏览器中
 * var name = 'smstdent';
 * console.log(window.name) // smstdent
 */
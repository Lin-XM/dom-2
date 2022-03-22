window.dom = {
    find(selector) {
        return document.querySelectorAll(selector)
     },
    style(node, name, value) {
        if (arguments.length === 3) {
            // 参数是三个的情况
            node.style[name] = value
        }
        else if (arguments.length === 2) {
            // 参数是两个的情况
            if (typeof name === 'string') {
                // 如果第二个参数是字符串类型
                return node.style[name]
            } else if (name instanceof Object) { 
                // 第二个参数是对象，遍历一下
                for (let i in name) { 
                    node.style[i] = name[i]
                }

            }
         }
     },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) { 
            fn.call(null,nodeList[i])
        }
     },
}
const div = dom.find('#test>.red')[0]
console.log(div)
// 获取对应的元素
dom.style(div, 'color', 'red')
// 设置 div.style.color
const divList = dom.find('.red')
console.log(divList)
// 获取多个 div.red 元素
dom.each(divList, (n) => console.log(n))
// 遍历 divList 里的所有元素
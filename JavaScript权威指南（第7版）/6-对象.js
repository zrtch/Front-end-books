let empty = {} // 没有属性的对象 
let point = { x: 0, y: 0 } // 包含两个数值属性
let p2 = { x: point.x, y: point.y } // 值比较复杂

let o = new Object(); // 创建一个空对象，与{}相同
let a = new Array() //创建一个空数组，与[〕相同
let d = new Date() // 创建一个表示当前时间的日期对象
let r = new Map() // 创建一个映射对象，用于存储键 / 值映射

let o1 = Object.create({ x: 1, y: 2 }) // o1 继承属性x 和y
console.log(o1.x + o1.y); // 3
// 如果想创建一个普通的空对象（类似{}或new Ob ject(）返回的对象），传入Object. prototype：
let o3 = Object.create(Object.prototype); // o3 与{}或 new Object() 类似

let o4 = { x: 'dont change this value' }
library.function(Object.create(o4)) //防止意外修改

// 使用数组表示法通过字符串表达式访问对象属性的灵活性
let addr = '';
for (let i = 0; i < 4; i++) {
  addr += customer[`address${i}`] + '\n';
}

// 继承
let obj = {} // obj从Object.prototype 继承对象方法
obj.x = 1 // 现在它有了自有属性x
let p = Object.create(obj) // p从o 和 Object.prototype 继承属性
p.y = 2   // 而且有一个自有属性y
let q = Object.create(p)  // q从p、o和 Object.prototype 继承属性
q.z = 3  // 且有一个自有属性z
let f = q.toString() // tostring 继承自 Object.prototype
console.log(q.x + q.y); // 3；x和y分别继承自o和p

let unitcircle = { r: 1 } // c 继承自的对象
let c = Object.create(unitcircle) // c 继承了属性 r
c.x = 1; c.y = 2 // c定义了两个自有属性
c.r = 2; // c覆盖了它继承的属性
console.log(unitcircle.r); // 1：原型不受影响

let book = {}
console.log(book.subtitle); // undefined：属性不存在
let len = book.subtitle.length
console.log(len); // TypeError： undefined 没有 length 属性

let books = { author: 'dell' }
delete books.author // books 对象现在没有 author 属性了
console.log(books);
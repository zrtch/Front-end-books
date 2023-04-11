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

let books = {
  author: 'dell', "main title": "11",
}
delete books.author // books 对象现在没有 author 属性了
delete books["main title"] //  现在它也没有"main title"属性了
console.log(books);

let obj1 = { x: 1 }
console.log(delete obj1.x);// true: 删除属性x
console.log(delete obj1.x);// true: 什么也不做（tostring 不是自有属性）
console.log(delete obj1.toString); // true: 什么也不做（tostring 不是自有属性）
console.log(delete 1); // true 无意义，但仍然返回 true

function f() { } // 声明一个全局函数
delete globalThis.f // false: 也不能删除这个属性

globalThis.x = 1 // 创建可配置的全局属性（没有 let 或 Var)
console.log(delete x); // true：这个属性可以删除

// 测试属性
let object = { x: 1 }
console.log("x" in object); // true: o有自有属性"x"
console.log("y" in object); // false: o没有属性"y"
console.log("toString" in object); // true: o继承了 toString 属性

let o2 = { x: 1 }
console.log(o2.hasOwnProperty('x')); // true：o有自有属性×
console.log(o2.hasOwnProperty('y')); // false：o没有属性y
console.log(o2.hasOwnProperty('toString')); // false：toString 是继承属性

// propertyIsEnumerable() 方法细化了hasOwnProperty(）测试。
let o5 = { x: 1 }
console.log(o5.propertyIsEnumerable("x")); // true：o有一个可枚举属性x
console.log(o5.propertyIsEnumerable("toString")); // false： tostring 不是自有属性
console.log(Object.prototype.propertyIsEnumerable("toString")); // false: tostring 不可枚举

// 除了使用in操作符，通常简单的属性查询配合！==确保其不是未定义的就可以了：
let o6 = { x: 1 }
console.log(o6.x !== undefined); // true：o有属性x
console.log(o6.y !== undefined); // false: o没有属性y
console.log(o6.toString !== undefined); // true：o继承了tostring属性

let o7 = { x: 1, y: 2, z: 3 }
// console.log(o7.propertyIsEnumerable("toString")); //false：toString 不可枚举（也不是自有属性）
for (let i in o7) {
  console.log(i); // 打印x、y、Z，但没有toString
} 22

let target = { x: 1 }, source = { y: 2, z: 3 }
for (let key of Object.keys(source)) {
  target[key] = source[key]
}
console.log(target); // { x: 1, y: 2, z: 3 }

let target1 = { x: 1 }, source1 = { y: 3, z: 4 }
let assignobj = Object.assign({}, target1, source1)
let mergeobj = { ...target1, ...source1 } // 用扩展操作符...也可以表达这种对象复制和覆盖操作
console.log(assignobj); // { x: 1, y: 3, z: 4 }
console.log(mergeobj); // { x: 1, y: 3, z: 4 }
console.log(Object.assign({ x: 1 }, { x: 2, y: 3 }, { y: 4, z: 5 })); // { x: 2, y: 4, z: 5 }


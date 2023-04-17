// 打印对象口的每个属性的名字和值。返回 undefined
function printprops(o) {
  for (let p in o) {
    console.log(`${p}: ${o[p]}\n `);
  }
}
console.log(printprops(0)); // undefined

// 计算笛卡儿坐标点（x1，y1）和(x2，y2)之间的距离
function distance(x1, y1, x2, y2) {
  let dx = x2 - x1
  let dy = y2 - y1
  return Math.sqrt(dx * dx + dy * dy)
}
console.log(distance(1, 2, 3, 4)); // 2.8284271247461903

// 计算阶乘的递归函数（调用自身的函数） 
// 回忆一下：x！是×与所有小于它的正整数的积。
function factorial(x) {
  if (x <= 1) return 1
  return x * factorial(x - 1)
}
console.log(factorial(3));

// 函数表达式
//这个函数表达式定义一个对参数求平方的函数。注意，我们把它赋值给了一个变量
const square = function (x) { return x * x }
console.log(square(2)); // 4
// 函数表达式可以包含名字，这对递归有用
const f = function fact(x) { if (x <= 1) return 1; else return x * fact(x - 1) }
console.log(f(3)); // 6
// 函数表达式也可以用作其他函数的参数
console.log([1, 2, 3].sort(function (a, b) { return b - a })); // [ 3, 2, 1 ]
// 函数表达式也可以定义完立即调用
let tensquared = (function (x) { return x * x }(10))
console.log(tensquared); // 100

const sum = (x, y) => { return x + y }
console.log(sum(1, 2));

const sum1 = (x, y) => x + y
console.log(sum1(1, 2));

const polynomial = x => x * x + 2 * x + 3;
console.log(polynomial(1));

const f1 = x => { return { value: x } }  // 正：f1(）返回一个对象
const g = x => ({ value: x }) // 正：g（）返回一个对象
const h = x => { value: x } // 误：h(）什么也不返回
// const i = x => { v: x, w: x } // 语法错误

//得到一个过滤掉 null元素的数组
let filtered = [1, null, 2, 3].filter(x => x !== null)
console.log(filtered); // [1,2,3]
//求数值的平方
let squares = [1, 2, 3, 4].map(x => x * x)
console.log(squares); // [ 1, 4, 9, 16 ]

function hypotenuse(a, b) {
  function square(x) { return x * x }
  return Math.sqrt(square(a) + square(b))
}
console.log(hypotenuse(1, 2)); // 2.23606797749979

printprops({ x: 1 })
let total = distance(0, 0, 2, 1) + distance(2, 1, 3, 5);

(f !== null && f !== undefined) ? f(x) : undefined

const strict = (function () { return !this; }())

let calulator = { // 对象字面量
  operand1: 1,
  operand2: 1,
  add() { // 对这个函数使用了方法简写语法
    // 注意这里使用 this 关键字引用了包含对象
    this.result = this.operand1 + this.operand2
  }
}
calulator.add() // 方法调用，计算 1+1
console.log(calulator.result); // 2

o["m"](x, y) // 对o.m(x,y)的另一种写法
a[0].z // 也是一种方法调用（假设 a[0] 是函数）

new square().x(100).y(100).size(50).outline("red").fill("blue").draw()

o = new Object()
O = new Object
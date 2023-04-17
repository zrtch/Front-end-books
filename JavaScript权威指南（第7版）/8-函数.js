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

//把对象 o 的可枚举属性名放到数组a中，返回a
function getPropertyNames(o, a) {
  if (a === undefined) a = []; // 如果是 undefined，创建一个新数组
  for (let property in o) a.push(property);
  return a
}

// 调用 getPropertyNames(）时可以传一个参数，也可以传两个参数
let o = { x: 1 }, p = { y: 2, z: 3 }
let a = getPropertyNames(o)
console.log(a); // a == [ 'x' ]; o的属性保存在新数组中
console.log(getPropertyNames(p, a)); //a == [ 'x', 'y', 'z' ]; 把p的属性也放到a中

//这个函数返回一个表示矩形尺寸的对象。 如果只提供 width，则 height 就是它的两倍。
const rectangle = (width, height = width * 2) => ({ width, height })
console.log(rectangle(2)); // { width: 2, height: 4 }

function max(first = -Infinity, ...rest) {
  let maxValue = first; // 假设第一个参数是最大的
  // 遍历其他参数，寻找更大的数值
  for (let n of rest) {
    if (n > maxValue) {
      maxValue = n
    }
  }
  // 返回最大的数值
  return maxValue
}
console.log(max(1, 0, 1000, 14, 200, 45, 6)); // 1000

function Max(x) {
  let maxValue = -Infinity;
  // 遍历 arguments，查找并记住最大的数值
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > maxValue) maxValue = arguments[i]
  }
  // 返回最大的数值
  return maxValue
}
console.log(Max(2000, 14, 200, 45, 6)); // 2000

let numbers = [1, 2, 33, 3000, 23]
console.log(Math.max(...numbers)); // 3000


function vectorAdd(v1, v2) {
  return [v1[0] + v2[0], v1[1] + v2[1]]
}
console.log(vectorAdd([1, 2], [3, 4])); // [ 4, 6 ]

function vectorAdd1([x1, y1], [x2, y2]) {
  return [x1 + x2, y1 + y2]
}
console.log(vectorAdd1([1, 2], [3, 4])); // [ 4, 6 ]


function vectorMultiply({ x, y, z = 0 }, scalar) {
  return { x: x * scalar, y: y * scalar, z: z * scalar }
}
console.log(vectorMultiply({ x: 1, y: 2 }, 2)); // { x: 2, y: 4, z: 0 }

function vectorMultiply2({ x, y, z = 0, ...props }, scalar) {
  return { x: x * scalar, y: y * scalar, z: z * scalar, ...props }
}
console.log(vectorMultiply2({ x: 1, y: 2, w: -1 }, 2)); // { x: 2, y: 4, z: 0, w: -1 }
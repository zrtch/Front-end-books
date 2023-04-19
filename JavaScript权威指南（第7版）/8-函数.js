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

function square1(x) {
  return x * x
}
let s = square1
console.log(square1(2)); // 4
console.log(s(2));

let o1 = { square: function (x) { return x * x } }; //对象字面量
let y = o1.square(4)
console.log(y); // 16

let num = [x => x * x, 20]
console.log(num[0](num[1])); // 400

// 这里定义了几个简单的函数
function add(x, y) { return x + y }
function subtract(x, y) {
  return x - y
}
function multiply(x, y) {
  return x * y
}
function divide(x, y) {
  return x / y
}

// 这个函数接收前面定义的任意一个函数 
// 作为参数，然后再用两个操作数调用它
function operate(operator, operand1, operand2) {
  return operator(operand1, operand2)
}

// 可以像这样调用这个函数，计算(2+3）+(4*5）的值
let i = operate(add, operate(add, 2, 3), operate(multiply, 4, 5))
console.log(i);

const operators2 = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => x / y,
  pow: Math.pow   // 预定义的函数也没问题
}

//这个函数只接收操作的名字，然后在对象中查询
//这个名字，然后再使用传入的操作数调用它
function operate2(operation, operand1, operand2) {
  if (typeof operators2[operation] === 'function') {
    return operators2[operation](operand1, operand2)
  }
  else throw "unknown operator"
}
console.log(operate2("add", "Hello", operate2("a  d", "-", "world"))); // Hello-world
console.log(operate2("pow", 10, 2)); // 100

// 初始化函数对象的计数器(counter）属性
uniqueInteger.counter = 0;
function uniqueInteger() {
  return uniqueInteger.counter++
}
console.log(uniqueInteger());
console.log(uniqueInteger());

function chunkNamespace() {
  //要复用的代码放在这里
  //在这里定义的任何变量都是函数的局部变量
  //不会污染全局命名空间
  console.log('复用代码');
}
chunkNamespace() //别忘了调用这个函数！

  (function () {
    console.log('定义并调用匿名函数');
  }())

let scope = "global scoped" //全局变量
function checkscope() {
  let scope = 'local scope'; // 局部变量
  function f() { return scope }  // 返回当前作用域中的值
  return f
}
let result = checkscope()()
console.log(result); // local scope

let uniqueInteger1 = (function () {
  let counter = 0;
  return function () { return counter++ }
}())
console.log(uniqueInteger1()); // 0
console.log(uniqueInteger1()); // 1

// 使用了闭包保存私有状态而非依赖常规对象属性：
function counter(n) { // 函数参数n是私有变量
  return {
    // 属性获取方法，返回递增后的私有计数器值
    get count() { return n++ },
    // 属性设置方法，不允许n的值减少
    set count(m) {
      if (m > n) n = m;
      else throw Error('计数只能设置为更大的数')
    }
  }
}
let c = counter(1000)
console.log(c.count); // 1000
console.log(c.count); // 1001
c.count = 2000;
console.log(c.count); // 2000
c.count = 2000; // 错误：计数只能设置为更大的数

// 这个函数返回一个始终返回v的函数
function constfunc(v) { return () => v }
// 创建一个常量函数的数组
let funcs = []
for (var j = 0; j < 10; j++) funcs[j] = constfunc(j)
// 索引5对应的函数返回数值5
console.log(funcs[5]());

function f(y) { return this.x + y } // 这个函数需要绑定
let bindobj = { x: 1 } // 要绑定的对象
let gobj = f.bind(bindobj) // 调用g(x）会在o上调用f（）
console.log(gobj(2)); // 3
let pobj = { x: 10, gobj } // 作为这个对象的方法调用g(）
console.log(pobj.gobj(2)); // 3 gobj仍然绑定到bindobj，而非pobj

let sunmber = (x, y) => x + y // 返回2个参数之和
let succ = sunmber.bind(null, 1) // 把第一个参数绑定为1
console.log(succ(2)); // 3：x绑定到1，2会传给参数y

function f(y, z) { return this.x + y + z }
let g1 = f.bind({ x: 1 }, 2) // 绑定 this 和 y
console.log(g1(3)); // 6: this.x绑定到1，y绑定到2，Z是3

function foo() { }
console.log(foo.toString()); "function foo() { }"

function isFunction(x) {
  return typeof x === 'function' && x.toString().startsWith('function')
}
console.log(isFunction(foo)); // true
console.log(isFunction([1, 2]));

function foo() { }
var bar = foo
console.log(foo.toString() === bar.toString()); // true
console.log(foo.name); // foo

console.log((function () { }).toString()); // "function () { }"

function greet() {
  console.log(this.name + ' says hello');
}
let obj1 = { name: 'john' }
greet.call(obj1) // john says hello
let obj2 = { name: "lebron" }
greet.call(obj2) // lebron says hello

function product(name, price) {
  this.name = name
  this.price = price
}
function food(name, price) {
  product.call(this, name, price)
  this.category = 'food'
}
let bacon = new food("bacon", 5)
console.log(bacon);

function add(x, y) {
  console.log(x + y);
}
add.apply(null, [1, 2])
add.call(null, 1, 2)

function produce1(name, price) {
  this.name = name
  this.price = price
}
function food1(name, price) {
  produce1.apply(this, [name, price])
  this.category = 'food'
}
var apple = new food1('aplle', '5')
console.log(apple); // food1 { name: 'aplle', price: '5', category: 'food' }

function greet() {
  console.log(this.name + ' say bye');
}
let obj3 = { name: 'john' }
let obj4 = { name: 'dell' }
let greetjohn = greet.bind(obj3)
greetjohn() // john say bye
let greetdell = greet.bind(obj4)
greetdell() // dell say bye

function add(x, y) {
  return x + y
}
let add2 = add.bind(null, 5)
console.log(add2(10)); // 15
console.log(add2(15)); // 20

const f = new Function("x", "y", "return x*y;")

let scopes = 'global'
function constructFunction() {
  let scopes = 'local';
  return new Function("return scopes")
}
console.log(constructFunction()()); // "global'"

console.log(0.1 + 0.2); // 0.30000000000000004

console.log(0.1 + 0.2 === 0.3); // false

console.log(Math.abs(0.1 + 0.2 - 0.3) < 0.0001); // true

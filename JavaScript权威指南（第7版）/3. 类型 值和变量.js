// JavaScript类型可以分为两类：原始类型和对象类型。
// 原始类型：字符串，数值，布尔值，undefined, null, Symbol(符号) 
// 对象类型：对象是属性的集合，其中每个属性都有一个名字和一个值（原始值或其他对象）。特殊对象，数组：数组表示一个数字值的有序集合。
// Set对象表示一组值的集合，Map对象表示键与值的映射。
// RegExp类型表示文本模式，可以实现对字符串的复杂匹配，搜索和替换操作。
// Date类型表示日期和时间，支持基本的日期计算。
// Error及其子类型表示JavaScript代码运行期间可能发生的错误。

// 在内存管理方面，JavaScript解释器会执行自动垃圾收集。

// 3.2 数值：类型Number用于表示整数和近似实数。
// js支持几种形式的数值字面量：
// 整数字面量；支持十六进制（基数是16）值。十六进制字面量以0x或0x开头，后跟一个十六进制数字字符串。
0
0b10101 // 21: (1*16 + 0*8 + 1*4 + 0*2 十 1*1)
// 浮点字面量：可以包含小数点，也可以使用指数记数法表示
3.14
6.02e23 // 6.02 ✖️ 10 23次方
let billion = 1_000_000_000 // 以下划线作为千分位分隔符
console.log('🤩  billion:', billion); // 🤩  billion: 1000000000

// 3.2.3 算术，包括加法 +，减法 -，乘法 *，除法 /，取模 %，取幂 **。
console.log(Math.random()); //0.6921989457173197 伪随机数x，其中0≤×<1.0
console.log(Math.pow(2, 53)); // 9007199254740992：2 的 53 次方
console.log(Math.round(0.4)); // 0 舍入到最接近的整数
console.log(Math.ceil(0.6)); // 1 向上舍入到一个整数
console.log(Math.floor(0.6)); // 0 向下舍入到一个整数
console.log(Math.max(2, 3, 5)); // 5 返回最大的参数；min同理
// 算术在遇到上溢出、下溢出或被零除时不会发生错误。
// 超过最大可表示数值时：无穷值Infinity；超过了最大可表示负数的绝对值时：负无穷值-Infinity
console.log(1 / 0);// => Infinity
console.log(Number.MAX_VALUE * 2); // Infinity； 溢出

// 非数值NaN：一个特殊的“非数值”
console.log(0 / 0); // NaN

// ES6定义了下列 Number 属性
console.log(Number.parseInt(3)); // 同全局 parseInt(）函数
console.log(Number.parseFloat(4)); //同全局 parseFloat(）函数
console.log(Number.isNaN(2));//false 判断x是不是 NaN
console.log(Number.isFinite(-2)); //true 判断X是数值还是无穷

// 通过BigInt表示任意精度整数。
console.log(BigInt(Number.MAX_SAFE_INTEGER)); // 9007199254740991n

// 日期和时间
console.log(Date.now()); //当前时间的时间戳（数值）: 1678786247139
let now = new Date()
console.log(now); //当前时间的日期对象:  2023-03-14T09:31:41.036Z
console.log(now.getTime()); //转换为毫秒时间戳:  1678786247139
console.log(now.toISOString()); //转换为标准格式的字符串:  2023-03-14T09:31:41.036Z
// Java、C++和大多数现代编程语言都使用这种格式表示double(双精度) 类型的数值。

// 文本：String 即字符串。是16位值的不可修改的有序序列。
// 我们可以在每行末尾加一个反斜杠（\）从而把字符串字面量写到多行上。
// \'：表示单引号（或撇号）字符，可以用来在字符串中包含撇号。它不再表示字符串结束，而是表示撇号
console.log('You\'re right, it can\'t be a quote'); // You're right, it can't be a quote
console.log("hello" + "world"); // helloworld
// 可以使用标准的全等===和不全等！==操作符比较字符串

// 字符串API
let s = 'hello,world'
// 取得字符串的一部分
console.log(s.substring(1, 4)); // 第2～4个字符：ell 
console.log(s.slice(1, 4)); // ell
console.log(s.slice(-3)); // 最后3个字符：rld
console.log(s.split(",")); // 从定界符处拆开：[ 'hello', 'world' ]
// 搜索字符串
console.log(s.indexOf('l')); // 第一个字母1的位置：2
console.log(s.indexOf('l', 3)); // 位置3后面第一个"1"的位置: 3
console.log(s.indexOf("zz")); // S并不包含子串"zz": -1
console.log(s.lastIndexOf('l')); // 最后一个字母l的位置: 9
// ES6 及之后版本中的布尔值搜索函数
console.log(s.startsWith('he')); //字符串是以这些字符开头的: true 
console.log(s.endsWith('!')); // s不是以它结尾的: false 
console.log(s.includes('or')); // s包含子串"or": true 
// 创建字符串的修改版本
console.log(s.replace('ll', 'pp')); // heppo,world
console.log(s.toLowerCase()); // hello,world
console.log(s.toUpperCase()); // HELLO,WORLD
console.log(s.normalize()); // Unicode NFC 归一化：ES6 新增
// 访问字符串中的个别（16 位值）字符
console.log(s.charAt(0)); // 第一个字符: h
console.log(s.charAt(s.length - 1)); // 最后一个字符: d
console.log(s.charCodeAt(0)); // 指定位置的16 位数值: 104
console.log(s.codePointAt(0)); // ES6，适用于码点大于16 位的情形: 104
// ES2017 新增的字符串填充函数
console.log("x".padStart(3)); //在左侧添加空格，让字符串长度变成3:   x
console.log("x".padEnd(3)); //在右侧添加空格，让字符串长度变成 3:x  
console.log("x".padStart(3, '**')); //在左侧添加星号，让字符串长度变成 3: **x 
console.log("x".padEnd(3, '--')); //在右侧添加破折号，让字符串长度变成 3: x--
// 删除空格函数。trim(）是ES5 就有的，其他是ES2019 增加的
console.log(' test '.trim()); //删除开头和末尾的空格: test
console.log(' test '.trimStart()); //删除开头的空格: test 
console.log(' test '.trimEnd()); //删除右侧空格:  test
// 未分类字符串方法
console.log(s.concat("!")); // hello,world!
console.log("<>".repeat(5)); // 拼接n次。ES6 新增:<><><><><>

// 模版字面量:字符串字面量可以用反引号来定界。位于＄{和对应的}之间的内容都被当作JavaScript表达式来解释。
let name = 'bye'
let value = `good ${name}`
console.log(value); // good bye
// ES6提供了一个内置的标签函数：String.raw(）这个函数返回反引号中未经处理的文本，即不会处理任何反斜杠转义：
console.log(String.raw`\n`.length); //一个反斜杠字符和一个字母n: 2

// 模式匹配
// /[1-9][0-9]*/; //匹配非日数字，后面跟着任意数字
let text = "testing: 1, 2, 3"
let pattern = /\d+/g
console.log(pattern.test(text)); //存在匹配项: true
console.log(text.match(pattern)); //所有匹配项的数组: [ '1', '2', '3' ]

// 布尔值：表示真或假、开或关、是或否。JavaScript的任何值都可以转换为布尔值。
// 下面的这些值都会转换为（因而可以被用作）布尔值false：
undefined, null, 0, -0, NaN, "" // 空字符串
// 同理，所有其他值，包括所有对象（和数组）都转换为（可以被用作）布尔值true。
// 布尔值只有一个toString()方法，可用于将自己转换为字符“true”或“false”
// 布尔值操作符：
// &&：当且仅当两个操作数都为真时，求值结果才是真；任何一个操作数为假，结果都为假。
// ||：任何一个操作数为真，求值结果就是真；只有当两个操作数均为假时，结果才是假。
// !：如果操作数是假则结果为true；如果操作数是真则结果为false。
// if ((x === 0 && y === 0) || !(z === 0)) {
//   // x和y均为0，或者z不是0
// }

// null：通常用于表示某个值不存在。表明可以将null看成一种特殊对象。
console.log(typeof null); // object
// undefined: 表示更深层次的不存在，变量的值未初始化时就是undefined，在查询不存在的对象属性或数组元素时也会得到undefined。是一个预定义的全局变量。
console.log(typeof undefined); // undefined 该特殊类的唯一成员

//undefined表示一种系统级别、意料之外或类似错误的没有值
//可以用null表示程序级别、正常或意料之中的没有值

//Symbol符号是es6新增的一种原始类型，用作非字符串的属性名。要理解符号，需要了解JavaScript的基础类型Object是一个属性的无序集合，其中每个属性都有一个名字和一个值。属性名通常是字符串。
let strname = 'string name'
let symname = Symbol('propname')
console.log(typeof strname); // string
console.log(typeof symname); // symbol
// Symbol永远不会返回相同的值
let a = Symbol('sym_x') //
console.log(a.toString()); // Symbol(sym_x)
// 而在以相同的字符串调用时Symbol.for(）始终返回相同的值
let b = Symbol.for('shared')
let c = Symbol.for('shared')
console.log(b === c); // true
console.log(b.toString()); // "Symbol(shared)"
console.log(Symbol.keyFor(c)); // "shared"

// 全局对象：全局对象的属性是全局性定义的标识符，可以在JavaScript程序的任何地方使用．
// 在Node程序中始终可以通过global来引用全局对象。
// ES2020最终定义了globalThis作为在任何上下文中引用全局对象的标准方式。2020年初，所有现代浏览器和Node都实现了这个特性。

// 不可修改的原始值与可修改的对象引用。
let str = 'hello' // 小写字符串
str.toLowerCase() // 返回"HELLO"，但不会修改str
console.log(str); // hello, 原始字符串并未改变。
// 对象不同于原始值，对象是可修改的，即它们的值可以改变：
let o = { x: 2 }
o.x = 3 // 修改：改变它的一个属性的值
o.y = 4 // 修改：为它添加一个新属性
console.log(o); // { x: 3, y: 4 }
let o1 = { x: 1 }, p1 = { x: 1 }
console.log(o1 === p1); // false 不同的对象永远也不会相等。

//两个对象值当且仅当它们引用同一个底层对象时，才是相等的。
let arr = []
let arr2 = arr // 现在arr2引用了同一个数组
arr[0] = 1; // 修改变量arr引用的数组
arr2[0]
console.log(arr === arr2); // true arr和arr2引用同一个对象，所以它们相等
// 把对象（或数组）赋值给一个变量，其实是在赋值引用，并不会创建对象的新副本。
let arr3 = [1, 2, 3, 4]
let arr4 = Array.from(arr3) // 在 ES6中，可以使用 Array.fron(）复制数组
console.log(arr4); // [1, 2, 3, 4]

//以下代码定义了一个比较两个数组的函数：
function equalArrays(a, b) {
  if (a === b) return true;                 //同一个数组相等
  if (a.length !== b.length) return false;  //大小不同的数组不相等
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false         //有任何差异，两个数组都不相等
  }
  return true                               //否则，两个数组相等
}
console.log(equalArrays([1, 2, 3], [1, 2, 3])); // true

// 类型转换
console.log(null == undefined); // true：这两个值被判定为相等
console.log('0' == 0); // true：字符串在比较前会转换为数值
console.log(1 == true); // true：布尔值在比较前会转换为数值
console.log("0" == false); // true：两个操作数在比较前都转换为0
// 显式转换：除null和undefined之外的所有值都有toString(方法，
console.log(Number("3")); // 3
console.log(String(false)); // "fasle"
console.log(Boolean([])); // true
// 隐式类型转换：一元操作符！会把自己的操作数转换为布尔值，然后再取反
console.log(!!1); // Boolean(1): 注意两次取反

// Number类为这些数值到字符串的转换定义了3种方法。
// toFixed()把数值转换为字符串时可以指定小数点后面的位数.
let n = 3.1415926
console.log(n.toFixed(2)); // 3.14
// toExponential()使用指数记数法将数值转换为字符串，结果是小数点前1位，小数点后为指定位数.
console.log(n.toExponential(1)); // 3.1e+0
// toPrecision()按照指定的有效数字个数将数值转换为字符串
console.log(n.toPrecision(4)); // 3.142
//数值格式化方法：parseIn()只解析整数，而parseFloat()既解析整数也解析浮点数.
console.log(parseInt("33 binld")); // 33
console.log(parseFloat("3.333 binld")); //3.333
//parseInt( 接收可选的第二个参数，用于指定要解析数值的底（基）数，合法的值是2到36
console.log(parseInt("11", 2)); // 3: (1*2 + 1)
console.log(parseInt("ff", 16)); // 255 (15*16 + 15）
console.log(parseInt("zz", 36)); // 1295：（35*36 + 35）

// 偏数值算法先尝试valueOf()，将toString(）作为备用．
// toString()：是返回对象的字符串表示.
console.log([1, 2, 3].toString()); // "1,2,3"
console.log((function (x) { f(x); }).toString()); // "function (x) { f(x); }"
let d = new Date(2020, 0, 1)
console.log(d.toString()); // Wed Jan 01 2020 00:00:00 GMT+0800 (China Standard Time)
// 对象转换函数 valueOf(): 它是把对象转换为代表对象的原始值
let d1 = new Date(2020, 0, 1)
console.log(d1.valueOf()); // 1577808000000

// 变量声明与赋值:对于绑定名字和值，我们通常会说把值赋给变量.术语“变量”意味着可以为其赋予新值，也就是说与变量关联的值在程序运行时可能会变化。如果把一个值永久地赋给一个名字，那么可以称该名字为常量而不是变量。
// 声明变量的同时（如果可能）也为其赋予一个初始值是个好的编程习惯：
// 如果在let语句中不为变量指定初始值，变量也会被声明，但在被赋值之前它的值是undefined。
let i = 0, j = 0, k = 0;
// 要声明常量而非变量，则要使用const而非let。const与let类似，区别在于const必须在声明时初始化常量：
const H0 = 74 // 哈勃常数（km/s /Mpc）

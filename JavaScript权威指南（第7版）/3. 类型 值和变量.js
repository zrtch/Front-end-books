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

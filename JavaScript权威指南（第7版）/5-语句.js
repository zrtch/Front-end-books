// 表达式语句
// 赋值语句是一种主要的表达式语句
let greeting = 'hello', counter = 1
console.log(greeting, ++counter); // hello 2
// 函数调用是另一类主要的表达式语句。
displayspinner() // 一个假象的函数
// 计算这个值之后把它赋给一个变量，以便将来使用：
let cx = Math.cos(2)
console.log('cx ->', cx) // cx -> -0.4161468365471424

//复合语句：语句块将多个语句组合为一个复合语句。复合语句允许我们在JavaScript语法期待一个语句时使用多个语句。
{
  x = Math.PI;
  cx = Math.cos(3);
  console.log("cos(n) = " + cx); // cos(n) = -0.9899924966004454
}
//空语句:它让我们在期待一条语句的地方不包含任何语句。
; // 这就是空语句
// 空语句偶尔会有用，比如创建一个空循环体的循环。
for (let i = 0; i < a.length; a[i++] = 0); // 语法要求有一条语句作为循环体，此时空语句就派上用场

// 条件语句：根据指定表达式的值执行或跳过执行某些语句
// if语句是最基本的控制语句
if (username == null) {
  username = 'john'
}

i = j = 1;
k = 2;
if (i === j) {
  if (j === k) {
    console.log('i equals k');
  }
} else { //花括号的位置起了决定性作用！
  console.log('i do not equal j');
}
//如果你想执行多段代码中的一段,使用eles if
if (n === 0) {
  // 执行第一个代码块
} else if (n === 1) {
  // 执行第二个代码块
} else if (n == 2) {
  // 执行第三个代码块
} else {
  // 如果前面都失败，执行第四个代码块
}

//switch:switch关键字后面跟着一个带括号的表达式和一个包含在花括号中的代码块。break语句将导致解释跳到语句末尾，继续执行后面的语句。
//switch语句首先对跟在switch关键字后面的表达式求值，然后再按照顺序求值case表达式，直至遇到匹配的值。这里的匹配使用===全等操作符，而不是==相等操作符，因此表达式必须在没有类型转换的情况下匹配。
switch (n) {
  case 1:   // 如果n===1，从这里开始执行
    // 执行第一个代码块
    break;  // 到这里停止
  case 2:   // 如果n===2，从这里开始执行
    // 执行第二个代码块
    break;  // 到这里停止
  default: // 如果前面都失败
    // 执行第三个代码块
    break;
}

//这个switch语句会根据值的类型决定怎么把它转换成字符串
function convert(x) {
  switch (typeof x) {
    case 'number':  //把数值转换为16进制整数
      return x.toString(16)
    case 'string':  //返回加了引号的字符串
      return '"' + x + '"'
    default:        //其他类型值按常规方式转换
      return String(x)
  }
}
console.log(convert(4)); 2
console.log(convert('12')); // "12"
console.log(convert(false)); // false

// 循环语句：循环的一个常见用途是迭代数组元素。有5种循环语句：while, do/while, for, for/of, for/in。
// while: 在表达式为真值时重复执行语句.
let count = 0
while (count < 10) {
  console.log(count)
  count++
}
// 在这个例子中，变量count从0开始，每运行一次循环体count就递增一次。当循环执行10次后，表达式的值变成false（即变量 count不再小于10），于是while循环完成，解释器又继续执行程序中的下一条语句。很多循环都有类似count的计数器变量。i、j、k 是最常见的循环计数器变量名，当然如果希望让代码更容易理解， 还应该使用更具有描述性的名字。

// do/while: 使用没有while那么频繁，因为实践中很少有需要至少执行一次循环的情况。
// do/while循环与while循环有两个区别。首先，do 循环要求使用两个关键字：do（标记循环开始）和while（标记循环结束并引入循环条件）。其次，do循环必须始终以分号终止。而 while循环在循环体使用花括号时不需要分号。
function printArray(a) {
  let len = a.length; i = 0;
  if (len === 0) {
    console.log('empty array');
  } else {
    do {
      console.log(a[i]); // 分别打印a b c
    } while (++i < len);
  }
}
console.log(printArray("abc"));

// for循环：在这种循环模式下，初始化、测试和更新是对循环变量的三个关键操作。
// initialize、 test和increment是三个表达式（以分号隔开),分别负责初始化、测试和递增循环变量。把它们都放在循环的第一行让人更容易理解for循环在做什么，避免忘记初始化或递增循环变量。
for (initialize; test; increnent) statenent
for (let i = 0; i < 10; i++) {
  console.log(i); // 打印数值从0到9
}
// 有时候每次迭代要改变的循环变量还不止一个。这种情况是js中的逗号操作符常见的唯一用武之地。因为逗号操作符可以把多个初始化和递增表达式组合成一个表达式，从而满足for循环的语法要求：
let i, j, sum = 0;
for (let i = 0, j = 10; i < 10; i++, j--) {
  sum += i * j
  console.log(sum);
}

// for/of: es6新增,for/of循环专门用于可迭代对象.只要知道数组、字符串、集合和映射都是可迭代的就行了。
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9], num = 0;
for (let ele of data) { // 如何迭代一个数值数组并计算所有数值之和
  num += ele
}
console.log(num); // 45
// 迭代对象的属性，可以使用Object.keys()方法的结果来使用
let o = { x: 1, y: 2, z: 3 }
let keys = ""
for (let k of Object.keys(o)) {
  keys += k
}
console.log(keys); // xyz
// 迭代每个键对应的值
let sum1 = 0;
for (let v of Object.values(o)) {
  sum1 += v
}
console.log(sum1); // 6
// 如果你既想要对象属性的键，也想要属性的值，可以基于 Object. entries()和解构赋值来使用for/of：
let pairs = "";
for (let [k, v] of Object.entries(o)) {
  pairs += k + v
}
console.log(pairs); // x1y2z3

//for/of与Set和Map,循环体对集合中的每个元素都会运行一次。可以使用类似下面的代码打印出一个文本字符串中的唯一单词：
let text = "Na na na na na na na na Batman!"
let wordSet = new Set(text.split(" "))
let unique = [];
for (let word of wordSet) {
  unique.push(word)
}
console.log(unique); // [ 'Na', 'na', 'Batman!' ]

//因为Map对象的迭代器并不迭代Map键或Map值，而是迭代键/值对.
let m = new Map([[1, 'one']])
for (let [key, value] of m) {
  console.log(key); // 1
  console.log(value); // 'one'
}
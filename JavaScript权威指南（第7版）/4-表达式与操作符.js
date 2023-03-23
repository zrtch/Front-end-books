// JavaScript中的主表达式包括常量或字面量值、某些语言关键字和变量引用。求值不存在的变量会导致抛出ReferenceError
1.23 // 数值字面量
"hello" //字符串字面量
true //求值为布尔值 true 
null //求值为 null 值
this //求值为“当前”对象
i // 求值为变量讠的值

// 对象和数组初始化程序
// []//空数组：方括号中没有表达式意味着没有元素 
[1 + 2, 3 + 4] // 两个元素的数组。第一个元素是3，第二个是7
//数组初始化程序中的元素表达式在每次数组初始化程序被求值时也会被求值。
let sparseArray = [1, , , , 5] // 包含5个元素，其中有3个未定义元灵

// 方括号变成了花括号，且每个子表达式前面多了一个属性名和一个冒号
let p = { x: 2, y: 3 } // 有两个属性的对象
let q = {} //没有属性的空对象
q.x = 2; q.y = 3 // 现在q拥有了跟p一样的属性

// 函数定义表达式:函数定义表达式通常由关键字function、位于括号中的逗号分隔的零或多个标识符（参数名）， 以及一个位于花括号中的JavaScript代码块（函数体）构成。
// 这个函数返回传入值的平方
let square = function (x) {
  return x * x
}
console.log(square(3)); // 9

// 属性访问表达式求值为对象属性或数组元素的值
let o = { x: 1, y: { z: 3 } }
let a = [o, 4, [5, 6]]
console.log(o.x); // 1 表达式o的属性x
console.log(o.y.z); // 3 表达式 o.y的属性 z
console.log(o["x"]); // 1 对象o的属性x
console.log(a[1]); // 4 表达式a中索引为1的元素
console.log(a[2]['1']); //6 表达式 a[2]中索引为1的元素
// 无论哪种属性访问表达式，位于.或[前面的表达式都会先求值。如果求值结果为nul1或undefined，则表达式会抛出TypeError。

// 条件式属性访问: null和undefined是唯一两个没有属性的值。在使用普通的属性访问表达式时，如果.或[]左侧的表达式求值为 null或undefined，会报TypeError。可以使用？或?.[]语法防止这种错误发生。
// 这种形式的属性访问表达式有时候也被称为“可选链接”，因为它也适用于下面这样更长的属性访问表达式链条。
let b = { c: null }
console.log(b.c?.d); // undefined
// 当然，如果a. b是对象，且这个对象没有名为c的属性， a. b?.c.d仍然会抛出TypeBrror。此时应该再加一个条件式属性访问
let b1 = { c: {} }
console.log(b1.c?.d?.e); // undefined

let d; // 忘记初始化这个变量了！
let index = 0;
try {
  d[index++] // 抛出TypeError
} catch (e) {
  index //抛出TypeError之前发生了递增
}
console.log(d?.[index++]);  //undefined 因为d是undefined
console.log(index); // 1 因为？[〕短路所以没有发生递增

// 调用表达式
// 函数表达式后面跟着左圆括号、逗号分隔的零或多个参数表达式的列表和右圆括号
f(0) // f是函数表达式，0是参数表达式
Math.max(x, y, z) // Math.max 是函数，x、y、z是参数
a.sort() // a.sort是函数，没有参数
// 如果函数使用了return语句返回一个值，则该值就成为调用表达式的值，否则，调用表达式的值是undefined。

// 条件式调用：可以使用?.()而非()来调用函数。总之，条件式调用语法为我们提供了一种更简洁和安全地访问可能不存在的嵌套属性和方法的方法。
function square(x, log) { // ES2020之前，如果想写一个类似sort()的这种接收可选函数参数的方法通常需要在函数内使用if语句检查该函数参数是杏有定义，然后再调用
  if (log) {
    log(x)
  }
  return x * x
}
// 有了ES2020的条件式调用语法，可以简单地使用?.()来调用这个可选的函数，只有在函数有定义时才会真正调用
function square1(x, log) { // 第二个参数是一个可选的函数
  log?.(x)                 // 如果有定义则调用
  return (x * x)           // 返回第一个参数的平方
}

// ?.() 也适用于方法调用
o.m() //常规属性访问，常规调用：o必须是一个对象且必须有一个m属性，且该属性的值必须是函数。
o?.m() //条件式属性访问，常规调用 ：如果o是null或undefined，则表达式求值为undefined。但如果o是任何其他值，则它必须有一个值为函数的属性m。
o.m?.() //常规属性访问，条件式调用：o必须不是null或undefined。如果它没有属性m或属性m的值是nul1，则整个表达式求值为undefined。

// 对象创建表达式：创建一个新对象并调用一个函数（称为构造函数）来初始化这个新对象
new Point(2, 3)

//操作符：用于算术表达式、比较表达式、逻辑表达式、赋值表达式等。
//条件操作符：也称三元操作符 ？：，用于将三个表达式组合为一个表达式
//操作符结合性规定了相同优先级操作的执行顺序
q = a ? b : c ? d : e ? f : g // 等价于下面
q = a ? b : (c ? d : (e ? f : g)) // 三元条件操作符具有右结合性
console.log(1 + 2); // 3
console.log(1 + "2"); // 12
console.log(2 + null); // 2：null转换为0后计算加法
console.log(1 + {}); // 1[object Object]：对象转换为字符串后再拼接
console.log(1 + undefined); // NaN：undefined 转换为 NaN 后计算加法
console.log(1 + 2 + "blind"); // 3blind

let i = 1, j = ++i;
console.log(i, j); // i和j都是2
let n = 1, m = n++
console.log(n, m); // n是2，m是1

// 关系操作符
// ===操作符被称为严格相等操作符（或者全等操作符），它根据严格相同的定义检查两个操作数是否“完全相同”。==操作符被称为相等操作符，它根据更宽松的（允许类型转换的）相同定义检查两个操作数是否“相等”
// !=和!==操作符测试的关系与==和===恰好相反。!=不相等操作符在两个值用==测试相等时返回false，否则返回true。!==操作符在两个值严格相等时返回false，否则返回true。
// 因此实践中应该坚持使用===而不使用==，使用!==而不使用!=。
// 严格相等：如果两个值类型不同，如果两个值都是nul1或都是undefined，如果两个值都是布尔值true或都是布尔值false
// 相等操作符==与严格相等类似，但没那么严格。如果两个操作数的值类型不同，它会尝试做类型转换，然后再比较。
console.log("1" == true); // true
// 比较操作符:测试操作数的相对顺序（数值或字母表顺序）: < (小于)；> (大于)； <=(小于等于)；>=(大于等于)；
console.log("11" < "3"); // true
console.log("11" < 3);// false
console.log("one" < 3);// false,数值比较，"one"转换为 NaN

// in操作符：in操作符期待左侧操作数是字符串、符号或可以转换为字符串的值，期待右侧操作数是对象。
let point = { x: 1, y: 2 }
console.log("x" in point); // true 对象有名为"x"的属性
console.log("z" in point); // false 对象没有名为"z"的属性
let data = [1, 2, 3]
console.log("0" in data); // true 数组有元素"0"
console.log(3 in data);// false 没有元素3

//instanceof操作符期待左侧操作数是对象，右侧操作数是对象类的标识。这个操作符在左侧对象是右侧类的实例时求值为true，否则求值为false.
let date = new Date()
console.log(date instanceof Date); // true date 是通过 Date()创建的
console.log(data instanceof Object); // true 所有对象都是 Object 的实例
console.log(data instanceof Number); //fasle date不是 Number 对象
let arr = [1, 3, 4]
console.log(arr instanceof Array); // true arr是个数组
console.log(arr instanceof Object); // true 所有数组都是对象

// 要理解instanceof的工作原理，必须理解“原型链”。原型链是JavaScript的继承机制。为了对表达式o instanceof f求值，JavaSeript会求值f.prototype，然后在o的原型链上查找这个值。如果找到了，则o是f（或f的子类）的实例， instanceof返回true。如果f.prototype不是o原型链上的一个值， 则o不是f的实例，instanceof返回false。

// 逻辑表达式
// 逻辑操作符 && 逻辑与、 ||逻辑或 和！逻辑非执行布尔代数操作，经常与关系操作符一起使用。
// 逻辑与 &&：&&对两个值执行布尔与操作：当且仅当第一个操作数为true并且第二个操作数也为true时，才返回true。如果有一个操作数是false，或者两个操作数都是false，它返回false。
let x = 0, y = 0;
console.log(x === 0 && y === 0); // true
// 如果两个操作数都是真值，&&返回一个真值；否则（一个或两个操作数是假值），&&返回假值.
if (x === y) console.log(222); // 只有a===b时才调用
(x === y) && console.log(222); // 效果与上面一样

// 逻辑或||操作符对它的操作数执行布尔或操作。如果有一个操作数是真值，这个操作符就返回真值。如果两个操作数都是假值，它就返回假值。
let maxwidth = 10
let max = maxwidth || 500
console.log(max); // 10
function copy(o, p = {}) {
  console.log('默认参数可以直接写在函数定义中');
}

// !操作符是个一元操作符，出现在操作数前面。这个操作符的目的是反转其操作数的布尔值。
console.log(!0); // true
// 得摩根定律
console.log(!(1 && 1) === (!1 && !1)); // true
console.log(!(1 || 1) === (!1 && !1)); // true

//赋值表达式：使用=操作符为变量或属性赋值
let i1 = 0 //设置变量i1为0
console.log(i = j = k = 0); // 把3个变量都初始化为0

// 通过操作符：+=操作符执行加法和赋值操作。
let total = 1, saletotal = 1
console.log(total += saletotal); // 2

// 求值表达式：通过全局函数eval(）来对源代码字符串求值.如果一个函数调用eval(),则解释器将无法再优化该函数.
console.log(eval(3 + "2")); //32
console.log(eval(3 + 2)); //5

//条件操作符（？：）:条件操作符是JavaScript唯一一个三元操作符（有三个操作数）
let username = ''
greeting = "hello " + (username ? username : 'there')
console.log(greeting); // hello there
//先定义??,求值其先定义的操作数,如果其左操作数不是nul1或undefined，就返回该值。否则，它会返回右操作数的值。与&&或|操作符类似，??是短路的：它只在第一个操作数求值为null或undefined时才会求值第二个操作数
let options = { timeout: 0, title: '111', n: null, verbose: false }
console.log(options.timeout ?? 1000); // 0：在对象中有定义
console.log(options.title ?? 'nihao'); // '111'：在对象中有定义
console.log(options.quiet ?? false); // false：属性没有定义
console.log(options.n ?? 10); // 10：属性值为 null
// 如果表达式中混用了？?和它们中的任何一个，必须使用圆括号说明先执行哪个操作：
(a ?? b) || c // ?？先执行，然后执行||
// a ?? b || c // SyntaxError：必须有圆括号

//typeof操作符：typeof操作符的值是一个字符串，表明操作数的类型。
// ![](https://raw.githubusercontent.com/zrtch/blog-img/master/20230322111932.png)
console.log(typeof undefined); // undefined
console.log(typeof null); // null
console.log(typeof "123"); // string
console.log(typeof 111); // number
console.log(typeof false); // boolea
console.log(typeof BigInt(2)); // bigint 任意BigInt
console.log(typeof Symbol(1)); // symbol 任意符号
console.log(typeof function () { }); // function
console.log(typeof { name: 1 }); // object 任意非函数对象

// 如果 value 是字符串，把它包含在引号中，否则把它转换为字符串
let value = 'str'
console.log((typeof value === "string") ? " " + value + " " : value.toString()); // str

// delete操作符：尝试删除其操作数指定的对象属性或数组元素
let obj = { x: 1, y: 2 }
delete obj.x // 删除它的属性
console.log(typeof obj.x); //属性不存在；返回”undefined”
console.log(delete obj.x); //删除不存在的属性；返回 true
console.log(delete obj); //false 不能删除变量

//await操作符：es7新增，await期待一个Promise对象（表示异步计算》作为其唯一操作数，可以让代码看起来像是在等待异步计算完成

//void操作符：它求值自己的操作数，然后丢弃这个值并返回undefined。
let counter = 0;
const increment = () => void counter++;
console.log(increment()); // undefined
console.log(counter); //1

//逗号操作符，：二元操作符，其操作符可以是任意类型。
//下面第一个逗号是 let 语句语法的一部分;第二个逗号是逗号操作符，它让我们把两个表达式（1++与j--）
for (let i = 0, j = 10; i < j; i++, j--) {
  console.log(i + j);
}
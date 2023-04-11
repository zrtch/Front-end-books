let empty = [] //没有元素的数组
let primes = [1, 3, 4, 5, 6] //有5个数值元素的数组
let misc = [1.1, true, 'a',] //3种不同类型的元素，最后还有一个逗号
// 数组字面量可以包含对象字面量或其他数组字面量：
let b = [[1, { x: 1, y: 2 }], [2, { x: 3, y: 4 }]]
let count = [1, , 3]  //索引0和2有元素，索引1没有元素

// 可以把...a想象成代表数组a的所有元素，这些元素依次出现在了包含它们的数组字面量中
let a1 = [1, 3, 3]
console.log([0, ...a1, 4]); // [ 0, 1, 3, 3, 4 ]

let original = [1, 2, 3]
let copy = [...original]
copy[0] = 0
console.log(copy[0]); // 0: 修改 copy 不会影响 original
console.log(original[0]); // 1

// 可以使用扩展操作符把任意字符串转换为单个字符的数组：
let digits = [..."dndaskda"]
console.log(digits);  // [ 'd', 'n', 'd','a', 's', 'k','d', 'a']

// 集合对象是可迭代的，因此要去除数组中的重复元素，一种便捷方式就是先把数组转换为集合，然后再使用扩展操作符把这个集合转换回数组：
let letters = [..."hello world"]
console.log([...new Set(letters)]); // ['h', 'e', 'l','o', ' ', 'w','r', 'd']

// Array(）构造函数
let arr = new Array()
console.log(arr); // 这样会创建一个没有元素的空数组，等价于数组字面量[]。
let arr1 = new Array(10)
console.log(arr1); // [empty × 10]：传入一个数组参数，指定长度
let arr2 = new Array(5, 4, 2, 3, 'test')
console.log(arr2); // [ 5, 4, 2, 3, 'test' ]：这样调用的话，构造函数参数会成为新数组的元素。

console.log(Array.of()); // []
console.log(Array.of(10)); // [ 10 ]
console.log(Array.of(1, 2, 3)); // [ 1, 2, 3 ]

let origin = [1, 2, 3, true, 'a']
let copy = Array.from(origin)
console.log(copy); // [ 1, 2, 3, true, 'a' ]

let a = ["world"] // 先创建包含一个元素的数组
let value = a[0]  // 读取元素0
a[1] = 3.14 // 写入元素1
let i = 2
a[i] = 3 // 写入元素2
a[i + 1] = 'hello' // 写入元素3
a[a[i]] = a[0] // 读取元素0和2，写入元素3

let o = {} // 创建一个普通对象
o[1] = 'one' // 通过整数索引一个值
console.log(o['1']); // "one"，数值和字符串属性名是同一个

let b1 = [true, false]
console.log(b1[2]); // undefined 这个索引没有元素
console.log(b1[-1]); // undefined 这个名字没有属性

let a2 = new Array(5) //没有元素，但a.Length 是5
a2 = []  // 创建一个空数组，此时 Length = 0
a[1000] = 0 //赋值增加了一个元素，但 Length 变成了 1001
let a3 = [,] // 这个数组没有元素，但 length 是1
let a4 = [undefined] // 这个数组有一个 undefined 元素
console.log(0 in a3); // false a3在索引Q没有元素
console.log(0 in a4); // true a2在索引◎有 undefined 值

console.log([].length); // 0 数组没有元素
console.log([1, 2, 3].length); // 3 最高索引为 2，Length 值为3
let a5 = [1, 2, 3, 4, 5]
a5.length = 3
console.log(a5); // [ 1, 2, 3 ]
a5.length = 0
console.log(a5); // 删除所有元素。a是[〕
a5.length = 5
console.log(a5); // 长度是5，但没有元素，类似 new Array(5)

let arr3 = [] // 创建一个空数组
arr3[0] = 'zero' // 添加一个元素
arr3[1] = 'one'
// 也可以使用push方法在数组末尾添加一个或多个元素
arr3.push('two', 'three') //在末尾添加两个个值
console.log(arr3); // [ 'zero', 'one', 'two', 'three' ]
//也可以使用unshift方法在数组开头插入值
arr3.unshift('hello')
console.log(arr3); // [ 'hello', 'zero', 'one', 'two', 'three' ]

let arr4 = [1, 2, 3]
delete arr4[2] // 现在索引2没有元素了
console.log(2 in arr4); // false：数组索引2没有定义
console.log(arr4.length); // 3：删除元素不影响数组长度

let letterrs = [..."Hello world"]
let string = ''
for (let letter of letterrs) {
  string += letter
}
console.log(string); // "Hello world"；我们重新组装了原始文本

// 如果要对数组使用for/of循环，并且想知道每个数组元素的索引，可以使用数组的entries(）方法和解构赋值：
let everyother = ''
for (let [index, letter] of letterrs.entries()) {
  if (index % 2 === 0) everyother += letter //偶数索引的字母
}
console.log(everyother); // Hlowrd

//数组提供的一种用于自身迭代的函数式方法.需要给forEach(传一个函数，然后forEach(）会用数组的每个元素调用一次这个函数：
let uppercase = ''
letterrs.forEach(letter => {
  uppercase += letter.toUpperCase()
})
console.log(uppercase); // HELLO WORLD

// 老式的for循环也可以遍历数组。把数组长度保存到局部变量中
let forstring = ''
for (let i = 0, len = letterrs.length; i < len; i++) {
  forstring += letterrs[i]
}
console.log(forstring); // Hello world

// 如果想跳过未定义或不存在的元素
let arr5 = [..."Hello world", undefined, '', ,]
let forstr2 = ''
for (let i = 0; i < arr5.length; i++) {
  if (arr5[i] === undefined) continue // 跳过未定义及不存在的元素
  forstr2 += arr5[i]
}
console.log(forstr2); // Hello world
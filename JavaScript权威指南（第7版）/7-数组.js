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

let data = [1, 2, 3, 4], sum = 0;
//计算数组元素之和
data.forEach(value => { sum += value })
console.log(sum); // 10
//递增每个元素的值
data.forEach(function (v, i, a) { a[i] = v + 1 })
console.log(data); // [ 2, 3, 4, 5 ]

let a = [1, 2, 3]
let a6 = a.map(x => x * x) // 这个函数接收×并返回x*x
console.log(a6); // [ 1, 4, 9 ]

let filterarr = [5, 4, 3, 2, 1]
console.log(filterarr.filter(x => x < 3)); // [ 2, 1 ],小于3的值
console.log(filterarr.filter((x, i) => i % 2 === 0)); // [ 5, 3, 1 ], 隔一个选一个

let dense = sparse.filter(() => true)

let arr3 = [null, undefined, true, 1, 2, 3]
arr3 = arr3.filter(x => x !== undefined && x !== null)
console.log(arr3);

let array = [1, 2, 3, 4, 5, 6]
console.log(array.findIndex(x => x === 3)); // 2，值3的索引是2
console.log(array.findIndex(x => x < 0)); // -1，数组中没有负数
console.log(array.find(x => x % 5 === 0)); // 5, 5的倍数
console.log(array.find(x => x % 7 === 0)); // undefined, 数组中没有7的倍数

let array1 = [1, 2, 3, 4, 5]
console.log(array1.every(x => x < 10)); // true：所有值都小 10
console.log(array1.every(x => x & 2 === 0)); // false：并非所有值都是偶数

let array2 = [1, 2, 3, 4, 5]
console.log(array2.some(x => x % 2 === 0)); // true, a 包含偶数
console.log(array2.some(isNaN)); // false，a没有非数值

let array3 = [1, 2, 3, 4, 5]
console.log(array3.reduce((x, y) => x + y, 0)); // 15；所有值之和
console.log(array3.reduce((x, y) => x * y, 1)); // 120；所有值之积
console.log(array3.reduce((x, y) => (x > y) ? x : y)); // 5，最大值
``
let array4 = [2, 3, 4]
console.log(array4.reduceRight((acc, val) => Math.pow(val, acc))); // 2.4178516392292583e+24

console.log([1, [2, 3]].flat()); // [ 1, 2, 3 ]
console.log([1, [2, [3]]].flat()); // [ 1, 2, [ 3 ] ]

let flatarr = [1, [2, [3, [4]]]]
console.log(flatarr.flat(1)); // [ 1, 2, [ 3, [ 4 ] ] ]
console.log(flatarr.flat(2)); // [ 1, 2, 3, [ 4 ] ]
console.log(flatarr.flat(3)); // [ 1, 2, 3, 4 ]
console.log(flatarr.flat(4)); // [ 1, 2, 3, 4 ]

let phrases = ["hello world", "the definitive guide"]
let words = phrases.flatMap(phrase => phrase.split(" "))
console.log(words); // [ 'hello', 'world', 'the', 'definitive', 'guide' ]

let array5 = [1, 2, 3]
console.log(array5.concat(4, 5)); // [ 1, 2, 3, 4, 5 ]
console.log(array5.concat([4, 5], [6, 7])); // [ 1, 2, 3, 4, 5 ,6, 7] 数组被打平了
console.log(array5.concat([4, [5, [6, 7]]])); // [ 1, 2, 3, 4, [ 5, [ 6, 7 ] ] ] 但不会打平嵌套的数组
console.log(array5); // [1, 2, 3] 原始数组没有改变

let stack = []
stack.push(1, 2)
console.log(stack); // [1,2]
stack.pop()
console.log(stack); // [1],返回2
stack.push(3)
console.log(stack); // [1,3]
stack.pop()
console.log(stack);  // [1], 返回3
stack.push([4, 5])
console.log(stack); //[1,[4,5]]
stack.pop()
console.log(stack);  // [1], 返回[4,5]
stack.push(...[4, 5]) // 使用扩展操作符打平它
console.log(stack); // [ 1, 4, 5 ]

let q = []
q.push(1, 2)
console.log(q); // [1,2]
q.shift()
console.log(q); // [2], 返回1
q.push(3)
console.log(q); // [2,3]
q.shift()
console.log(q); // [3], 返回2
q.shift()
console.log(q); // [], 返回3

let a = []
a.unshift(1)
console.log(a); // [1]
a.unshift(2)
console.log(a); // [2,1]
a = []
a.unshift(1, 2)
console.log(a); // [1,2]

let slicearr = [1, 2, 3, 4, 5]
console.log(slicearr.slice(0, 3)); // [1, 2, 3]
console.log(slicearr.slice(3)); // [4,5]
console.log(slicearr.slice(1, -1)); // [ 2, 3, 4 ]
console.log(slicearr.slice(-3, -2));// [ 3 ]

let splicearr = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(splicearr.splice(4)); // [ 5, 6, 7, 8 ], a现在是[1,2,3,4]
console.log(splicearr.splice(1, 2)); // [2,3], a现在是[1,4]
console.log(splicearr.splice(1, 1)); //  [4], a现在是[1]

let arr7 = [1, 2, 3, 4, 5,]
console.log(arr7.splice(0, 3, 'a', 'b', 'c')); // [ 1, 2, 3 ]
console.log(arr7); // [ 'a', 'b', 'c', 4, 5 ]
console.log(arr7.splice(2, 2, [1, 2], 9)); // [ 'c', 4 ]
console.log(arr7);  // ['a','b',[1,2],9,5]

let arr8 = new Array(5)
arr8.fill(0) // 用0填充数组
console.log(arr8); // [ 0, 0, 0, 0, 0 ] 
arr8.fill(9, 1) // 从索引1开始填充9
console.log(arr8); // [ 0, 9, 9, 9, 9 ] 
arr8.fill(8, 2, -1) // 在索引2、3填充8
console.log(arr8); // [ 0, 9, 8, 8, 9 ]

let arr9 = [1, 2, 3, 4, 5]
console.log(arr9.copyWithin(1)); // [ 1, 1, 2, 3, 4 ] 把数组元素复制到索引1及之后
console.log(arr9.copyWithin(2, 3, 5)); // [ 1, 1, 3, 4, 4 ] 把最后两个元素复制到索引2
console.log(arr9.copyWithin(0, -2)); //[ 1, 4, 4, 4, 4 ] 负偏移量也可以

let arr10 = [0, 1, 2, 1, 0]
console.log(arr10.indexOf(1)); //1 arr10[1]是1
console.log(arr10.lastIndexOf(1)); //3 arr10[3]是1
console.log(arr10.indexOf(3)); // -1：没有元素的值是3

let includesarr = [1, true, NaN, 3]
console.log(includesarr.includes(true)); // true
console.log(includesarr.includes(2)); // false
console.log(includesarr.includes(NaN)); // true
console.log(includesarr.indexOf(NaN)); // -1, indexof 无法找到 NaN

let sortarr = ['banana', 'cherry', 'apple']
console.log(sortarr.sort()); // [ 'apple', 'banana', 'cherry' ]

let arrq = [33, 4, 1111, 222]
console.log(arrq.sort()); // [ 1111, 222, 33, 4 ]
arrq.sort(function (a, b) { //传入一个比较函数
  return a - b            // 取决于顺序，返回<0、0或>0
})
console.log(arrq); // [ 4, 33, 222, 1111 ]
console.log(arrq.sort((a, b) => b - a)); // [ 1111, 222, 33, 4 ] 相反的数值顺序

let lowerarr = ['ant', 'Bug', 'cat', 'Dog']
console.log(lowerarr.sort()); // [ 'Bug', 'Dog', 'ant', 'cat' ] 区分大小写的排序
lowerarr.sort(function (s, t) {
  let a = s.toLowerCase()
  let b = t.toLowerCase()
  if (a < b) return -1
  if (a > b) return 1
  return 0
})
console.log(lowerarr); // [ 'ant', 'Bug', 'cat', 'Dog' ] 不区分大小写的排序

let reversearr = [1, 2, 3]
console.log(reversearr.reverse()); // [ 3, 2, 1 ]

let joinarr = [1, 2, 3]
console.log(joinarr.join()); // "1,2,3"
console.log(joinarr.join(" ")); // "1 2 3"
console.log(joinarr.join("")); // "123"
let joinarr1 = new Array(10)
console.log(joinarr1.join("-")); // "---------" 包含9个连字符的字符串

console.log([1, 2, 3].toString()); // "1,2,3"
console.log([1, [2, "c"]].toString()); // "1,2,c"
console.log(["a", 'b', 'c'].toLocaleString()); //"a,b,c"

console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false

let obj = {} //创建一个常规的空对象
// 添加属性让它变成“类数组”对象
let j = 0;
while (j < 4) {
  obj[j] = j * j;
  j++
}
obj.length = j

// 像遍历真正的数组一样遍历这个对象
let total = 0;
for (let k = 0; k < obj.length; k++) {
  total += obj[k]
}
console.log(obj); // { '0': 0, '1': 1, '2': 4, '3': 9, length: 4 }

let s = 'test'
console.log(s.charAt(0)); // t
console.log(s[1]); // e

console.log(Array.prototype.join.call("javascript", " ")); // "j a v a s c r i p t"
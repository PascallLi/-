// 2016/10/02
//
// ============
// 作业 8
//
// 本次作业主要还是是 string
// string 题目用到的知识仍然是
// 0, 用下标引用字符串
// 2, 循环
// 3, 选择 (也就是 if)
// 1, 字符串切片
//
// 注意, 提示在文件最末尾
// ============
//
// 请以之前上课中 string 相关的内容作为参考
// 请自行编写测试
//


// 定义我们的 log 函数
var log = function() {
    console.log.apply(console, arguments)
}


// ======
// 测试
// ======
//
// 定义我们用于测试的函数
// ensure 接受两个参数
// condition 是 bool, 如果为 false, 则输出 message
// 否则, 不做任何处理
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败 {', message)
    }
}

// 定义一个增强的 ensureEqual
var ensureEqual(a, b, message) {
    if (a != b) {
        log(`*** 测试失败, ${a} 不等于 ${b}, ${message}`)
    }
}


// 作业 1
// 实现函数
// 多看提示多讨论
/*
delimiter 是 string
array 是包含 string 的 array

把 array 中的元素用 delimiter 连接成一个字符串并返回
具体请看测试
*/
var join = function(delimiter, array) {
    var list = ''
    // 最后一个不加delimiter，所以先判断，如果是最后一个就只加array[i]
    for (var i = 0; i < (array.length); i++) {
        if (i == array.length - 1) {
            list += array[i]
            break
        }
        list += array[i] + delimiter
    }
    return list
}

var test_join = function() {
    ensure(join('#', ['hello', 'gua']) == 'hello#gua', log(join('#', ['hello', 'gua'])))
    ensure(join(' ', ['hello', 'gua']) == 'hello gua', log(join(' ', ['hello', 'gua']) ))
    ensure(join('\n', ['multi', 'line', 'string']) == 'multi\nline\nstring', log(join('\n', ['multi', 'line', 'string'])))
}

    test_join()
// 作业 2
// 实现函数
/*
s 是 string
delimiter 是 string, 默认为空格 ' '

以 delimiter 为分隔符号, 返回一个 array
例如
split('1 2 3') 返回 ['1', '2', '3']
split('a=b&c=d', '&') 返回 ['a=b', 'c=d']
注意, 测试 array 是否相等得自己写一个函数用循环来跑
*/

var split = function(s, delimiter=' ') {
    // 找到delimiter.确定前后的i, start 和 end
    var list = []
    var space = delimiter.length
    var start = 0
    for (var i = 0; i < s.length; i++) {
        if (s.slice(i, i+space) == delimiter) {
            list.push(s.slice(start, i))
            start = i + space
        }
    }
    list.push(s.slice(start))
    return list
}

function equl(array1, array2) {
    var equalLength = array1.length === array2.length
    var equalElement = array1.every(function(v , i){
        return v === array2[i]
    })
    return equalElement && equalLength
}

var ensure_split = function() {
    ensure(JSON.stringify([1, 2, 3]) === JSON.stringify(['1', '2', '3']), log(split('1 2 3')))
    ensure(equl(split('a=b&c=d', '&'), ['a=b', 'c=d']) , log(split('a=b&c=d', '&')))
}
    ensure_split()

// 作业 3
// 实现函数
/*
s old newString 都是 string
返回一个「将 s 中出现的所有 old 字符串替换为 new 字符串」的字符串
*/
var replaceAll = function(s, old, newString) {
    // 先将s通过剔除old字符变成一个数组，然后通过join函数拼接newString
    var newArray = split(s, old)
    log(newArray)
    return join(newString, newArray)
}
    ensure_replaceAll = function() {
        ensure(replaceAll('123', '2', '4') == '143', log(replaceAll('123', '2', '4')))
    }

    ensure_replaceAll()
// 作业 4
// 实现函数
/*
n 是 int
返回这样规律的字符串, 特殊情况不考虑
n       返回值
1       '1'
2       '121'
3       '12321'
*/
var left = function(n) {
    var  s = ''
    for (var i = 1; i <= n; i++) {
        s += String(i)
    }
    return s
}
var right = function(n) {
    var s = ''
    for (var i = n-1; i > 0; i--) {
        s += String(i)
    }
    return s
}
var str1 = function(n) {
     return left(n) + right(n)
}

    str1(5)
// 作业 5
// 实现函数
/*
n 是 int
返回这样规律的字符串, 特殊情况不考虑
n       返回值
1       'A'
2       'ABA'
3       'ABCBA'
*/
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var left1 = function(n) {
    var s = ''
    for (var i = 0; i < n; i++) {
        s += upper[i]
    }
    return s
}
var right1 = function(n) {
    var s = ''
    for (var i = n-2; i >= 0; i--) {
        s += upper[i]
    }
    return s
}
var str2 = function(n) {
    return left1(n) + right1(n)
}
    str2(4)

// 作业 6
// 实现加法口诀表
/*
返回这样格式的加法口诀表(没写全, 但是要返回完整的)
注意, 这只是我输入的内容
实际上你普通 log 出来是不会有回车的
[
    '1 + 1 = 2',
    '2 + 1 = 3  2 + 2 = 4',
    '3 + 1 = 4  3 + 2 = 5  3 + 3 = 6',
]
*/
var across = function(n) {
    // 拼接
    var s = ''
    for (var i = 1; i <= n; i++) {
        var add1 = n + i
        var Model = `${n} + ${i} = ${add1}`
        if (i == n) {
            // s += String(n) + '+' + String(i) + '=' + String(n + i)
            s += Model
            break
        }
        // s += String(n) + '+' + String(i) + '=' + String(n + i) + ' '
           s += Model + ' '
    }
    return s
}

var addTable = function() {
    var list = []
    for (var i = 0; i < 9; i++){
        list.push(across(i+1))
    }
    return list
}

    addTable()
// 作业 7
// 实现函数
/*
start end 都是 int

返回一个 array, 假设 start 为 1, end 为 5, 返回数据如下
[1, 2, 3, 4]
*/
var range1 = function(start, end) {
    var list = []
    while(start < end) {
        list.push(start)
        start += 1
    }
    return list
}
    range1(1, 5)
    range1(-5, 1)
// 作业 8
// 实现函数
/*
start end step 都是数字
step 是大于 0 的正整数

返回一个 array
假设 start=1, end=5, step=1 返回数据如下
[1, 2, 3, 4]
假设 start=0, end=6, step=2 返回数据如下
[0, 2, 4]
*/
var range2 = function(start, end, step=1) {
    var list = []
    while(start < end) {
        list.push(start)
        start += step
    }
    return list
}
    range2(0, 6, 2)


// 作业 9
// 实现函数
/*
start end step 都是数字

和 range2 一样, 但是要求支持负数 step
使用 while 循环
返回一个 array
假设 start=1, end=5, step=1 返回数据如下
[1, 2, 3, 4]
假设 start=6, end=0, step=-1 返回数据如下
[6, 5, 4, 3, 2, 1]

*/
var range3 = function(start, end, step=1) {
    if (step > 0) {
        range2(start, end, step)
    }
    else {
        var list = []
        while(start > end) {
            list.push(start)
            start += step
        }
        return list
    }
}
    range3(6, 0, -1)

// 作业 10
// 实现函数
/*
js 标准数学库有一个随机数函数
Math.random()
它返回 0 - 1 之间的小数

用它实现本函数, 返回 0 或 1
*/
var random01 = function() {
    // 扩大10倍往下取整, 然后取余
    var r = Math.random()
    r *= 10
    r = Math.floor(r)
    return r%2
}
    random01()

// 作业 11
// 实现函数
/*
返回一个只包含了 0 1 的随机 array, 长度为 n
假设 n 为 5, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
[0, 0, 1, 0, 1]
*/
var randomLine01= function(n) {
    var list = []
    for(var i = 0; i < n; i++) {
        list.push(random01())
    }
    return  list
}
    randomLine01(5)

// 作业 12
/*
返回以下格式的数据
假设 n 为 3, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
注意, 这只是一个 array, 并不是它显示的样子
注意, 这是一个 array 不是 string
[
    [0, 0, 1],
    [1, 0, 1],
    [0, 0, 0],
]
返回, 包含了 n 个『只包含 n 个「随机 0 1」的 array』的 array
*/
var randomSquare01 = function(n) {
    var list = []
    for(var i = 0; i < n; i++) {
        var line = randomLine01(n)
        list.push(line)
        // log(line)
    }
    return list
}
    randomSquare01(3)


// 作业 13
/*
返回一个只包含了 0 9 的随机 array, 长度为 n
假设 n 为 5, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
[0, 0, 9, 0, 9]
*/
var randomLine09 = function(n) {
    var s = randomLine01(n)
    for (var i = 0; i < s.length; i++) {
        if (s[i] == 1) {
            s[i] = 9
        }
    }
    return s
}
    randomLine09(5)

// 作业 14
/*
array 是一个只包含了 0 9 的 array
返回一个标记过的 array
** 注意, 使用一个新数组来存储结果, 不要直接修改老数组
复制数组用 array.slice(0) 实现

标记规则如下
对于下面这样的 array
[0, 0, 9, 0, 9]
标记后是这样
[0, 1, 9, 2, 9]

规则是, 0 会被设置为左右两边 9 的数量
*/
var markedLine = function(array) {
    // 先判断最左和最右的情况,还必须是最左最右都是9,然后第二个和倒数第二个都为0的情况
    // 然后中间判断是否为9以及前后情况是否为0,是的话+1
    var end = array.length
    var array1 = array.slice(0)
    var array2 = array.slice(0)
    if (array[0] == 9 && array[1] == 0) {
        array1 = array.slice(0)
        array1[1] = 1
    }
    if (array[end-1] ==9 && array[end -2] == 0) {
        array2 = array1.slice(0)
        array2[end-2] = 1
    }
    for (var i = 1; i < (end-1); i++) {
        if (array[i] == 9 && array[i-1] == 0) {
            array2[i-1] += 1
        }
        if (array[i] == 9 && array[i+1] == 0 ) {
            array2[i+1] += 1
        }
    }
    return array2
}
    var array = randomLine09(5)
    log('array=', array)
    markedLine(array)

// 作业 15
/*
array 是一个「包含了『只包含了 0 9 的 array』的 array」
返回一个标记过的 array
** 注意, 使用一个新数组来存储结果, 不要直接修改老数组

范例如下, 这是 array
[
    [0, 9, 0, 0],
    [0, 0, 9, 0],
    [9, 0, 9, 0],
    [0, 9, 0, 0],
]

这是标记后的结果
[
    [1, 9, 2, 1],
    [2, 4, 9, 2],
    [9, 4, 9, 2],
    [2, 9, 2, 1],
]

规则是, 0 会被设置为四周 8 个元素中 9 的数量
*/
// 1、填充数组，四周扩充0, 4*4 变成6*6
var extendArray = function(array) {
    var list = []
    var n = array.length
    n += 2
    var s = ''
    for (var i = 0; i < n; i++) {
        s += String(0)
    }
    s = s.split('') // 将字符串'0''0''0''0''0''0'变成数组['000000']
    // 填充原数组前后补0，变成6*4
    for (var i = 0; i < array.length; i++) {
        array[i].push(0)
        array[i].unshift(0)
    }
    list.unshift(s) // 在第一行填充0
    // 中间原样拷贝修改过的array 6*4
    for (var i = 0; i < array.length; i++) {
        var line = []
        for (var j = 0; j < array[i].length; j++) {
            line.push(array[i][j])
        }
        list.push(line)
    }
    list.push(s)
    return list
}
var markedSquare = function(array) {
    var len = array.length
    var square = extendArray(array)
    var newSquare = []
    var latestSquare = []
    // 6*6的数组从4*4左上角的square[i][j]开始循环计算四周9的个数
    for (var i = 1; i < (square.length-1); i++) {
       var line = square[i]
       for (var j = 1; j < (line.length-1); j++) {
           // 必须本身不是9，再去判断四周才有意义
           if (square[i][j] != 9) {
               if (square[i+1][j+1] == 9) {
                   square[i][j] += 1
               }
               if (square[i+1][j] == 9) {
                   square[i][j] += 1
               }
               if (square[i+1][j-1] == 9) {
                   square[i][j] += 1
               }
               if (square[i-1][j] == 9) {
                   square[i][j] += 1
               }
               if (square[i-1][j+1] == 9) {
                   square[i][j] += 1
               }
               if (square[i-1][j-1] == 9) {
                   square[i][j] += 1
               }
               if (square[i][j-1] == 9) {
                   square[i][j] += 1
               }
               if (square[i][j+1] == 9) {
                   square[i][j] += 1
               }
           }
            newSquare.push(square[i][j])
      }
    }
    // newSquare会得到一个[''], 将其中按照array的长度分段
    var start = 0
    for(var i = 0; i < array.length; i++) {
        latestSquare.push(newSquare.slice(start, start+array.length))
        start += array.length
    }
    return latestSquare
}

// 作业 16
/*
返回以下格式的数据
只包含 0 和 9
limit 是 9 的个数
假设 n 为 4, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
注意, 这只是一个 array, 并不是它显示的样子
注意, 这是一个 array 不是 string
[
    [0, 9, 0, 0],
    [0, 0, 9, 0],
    [9, 0, 0, 0],
    [0, 0, 0, 0],
]
返回, 包含了 n 个『只包含 n 个「随机 0 9」的 array』的 array, 9 的个数是 limit
*/
var emptyLine = function(n) {
    var list = []
    for(var i = 0; i < n; i++) {
       list.push(0)
   }
   return list
}
var emptySquare = function(n) {
    var list = []
    for(var i = 0; i < n; i++) {
       list.push(emptyLine(n))
   }
   return list
}
var random = function(n) {
    var r = Math.random()
    r  *= n
    return Math.floor(r)
}
var randomSquare09 = function(n, limit=3) {
    // 生成一个空数组集合, 然后随机选出三个坐标赋值9,这里是坐标随机
    var square = emptySquare(n)
    for (var i = 0; i < limit; i++) {
        var x = random(n)
        var y = random(n)
        square[x][y] = 9
    }
    return square
}
    randomSquare09(4)

// 下面开始都是 DOM API 相关练习
// ====
//
// 作业 17
/*
实现一个登录页, 有 2 个标签分别是用户名输入框和登录按钮
给登录按钮绑定一个 click 事件
检查用户名是否符合如下规则
1，第一位是字母
2，只能包含字母、数字、下划线
3，只能字母或数字结尾
4，最小长度2
5，最大长度10

如果符合规则, log '检查合格'
如果不符合, 在登录按钮后插入一个红色 h1 标签
内容是 '用户名错误'

需要补全的代码自行解决
*/


// 作业 18
/*
给上课写的 todo 程序加一个功能
在编辑的时候输入框失去焦掉后保存 todo
失去焦点的事件名是 blur
*/


// 作业 19
/*
给上课写的 todo 加一个功能
增加一个 编辑 按钮
task 默认是不能编辑的
在你点了编辑按钮后它才能编辑(设置属性)
并且拥有焦点(element.focus() 实现)
编辑完成后(失去焦点后), 让 task 不可编辑

如果不懂, 看提示
*/

// =======
// 提示
// =======
/*
注意要多 log 数据, 模拟执行流程, 发现问题所在

1, join
循环相加


2, split
用循环找到 delimiter
记录两个变量 start 和 end 来 slice 出子字符串


3, replaceAll
split 再 join


4, str1
用 2 个辅助函数
一个生成前半部分
一个生成后半部分
辅助函数用循环


5, str2
同上


6, addTable
用一个辅助函数生成行
用循环 push


7, range1
使用 while 循环


8, range2
循环加判断


9, range3
循环加判断


10, random01
用余数来实现


11, randomLine01
循环加 random01


12, randomSquare01
循环加 randomLine01


13, randomLine09
可以生成 01 之后把 1 替换为 9


14, markedLine
把 9 左右加一
注意判断 9 是否在两边


15, markedSquare
循环调用 markedLine


16, randomSquare09
把 randomSquare01 里的 1 替换成 9


17, 用户名检查
红色是 css 预先写好的


18, 保存 todo
给编辑框绑定一个 blur 事件就好
用事件委托


19, 动态编辑
用之前讲过的 DOM API 设置属性即可
*/

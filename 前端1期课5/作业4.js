// 16/09/22
// 作业 4
//
// 注意, 自行去定义 log 函数(抄)
// 注意, 本次作业会慢慢更新
// 更新 4.11


// 资料 1
// 求数组的和
var sum = function(array) {
    // 先设置一个变量用来存 和
    var s = 0
    // 遍历数组
    for(var i = 0; i < array.length; i++) {
        // 用变量 n 保存元素值
        var n = array[i]
        // 累加到变量 s
        s = s + n
    }
    // 循环结束, 现在 s 里面存的是数组中所有元素的和了
  	return s
}

// 套路, 照抄即可
var ensure = function(condition, message) {
    if (!condition) {
        console.log(message)
    }
    else {
        console.log('测试成功')
    }
}

var testSum = function() {
    var numbers = [1, 2, 3, 4]
    var value = 10
    ensure(value == sum(numbers), 'sum 错误')
    ensure(1 == sum([1]), 'sum  1 错误')
}

// testSum()
// var a = [1, 2, 3, 4]
// log('sum', sum(a))



// 作业 1
// 参数是一个只包含数字的 array
// 求 array 的乘积
// 函数定义是
var product = function(array) {
    var p = 1
    for (var i = 0; i < array.length; i++) {
        var n = array[i]
        p = n * p
    }
    return p
}
var ensure = function(condition, message){
    if (!condition) {
        console.log(message)
    }
}
var testproduct = function(array){
    var value = 4
    ensure(value == product, '计算错误')
}

    // testproduct([1, 2, 3])
// 作业 2
// 返回一个数的绝对值
// 函数定义是
var abs = function(n){
    if (n <= 0) {
        return -n
    }
    else {
        return n
        }
}
var testAbs = function() {
    ensure(-1 == abs(-1), '验证失败')
}

    testAbs()
// 作业 3
// 参数是一个只包含数字的 array
// 求 array 中所有数字的平均数
// 函数定义是
var average = function(array) {
    var n = array.length
    var ave = sum(array) / n
    console.log('ave', ave)
    return ave
}
var aveTest = function(){
    var array = [1, 2, 3]
    var ave = average(array)
    ensure(ave == 2, ave)
}

    aveTest()
// 作业 4
// 参数是一个只包含数字的 array
// 求 array 中最小的数字
// 函数定义是
var min = function(array) {
    var a0 = array[0]
    for (i = 0; i < array.length; i++){
        if (a0 >= array[i]) {
            amin = array[i]
        }
    }
    return amin
}
var testMin = function(){
    var array = [1, 3, 2, 0]
    amin = min(array)
    ensure(amin == 0, amin )
}
    testMin()
// 作业 5
/*
参数是一个数字 n
返回以下序列的结果
1 - 2 + 3 - 4 + 5 ... n
*/
var sum1 = function(n) {
    var sum = 0
    while(n != 0 ) {
        if (n%2 > 0 ) {
            sum += n
        }
        else {
            sum -= n
        }
        n -= 1
    }
    return sum
}
    console.log(sum1(4))

// 作业 6
/*
参数是一个数字 n
返回以下序列的结果
1 + 2 - 3 + 4 - ... n
*/
var sum2 = function(n) {
    return  -sum1(n) + 2
}
    sum2(5)

// 作业 7
/*
实现 fac 函数
接受一个参数 n
返回 n 的阶乘, 1 * 2 * 3 * ... * n
*/
var fac = function(n) {
    var f = 1
    for (var i = 1; i <= n; i++){
        f = i * f
    }
    return f
}
    fac(3)


/*
注意 下面几题中的参数 op 是 operator(操作符) 的缩写

作业 8
实现 apply 函数
参数如下
op 是 string 类型, 值是 '+' '-' '*' '/' 其中之一
a b 分别是 2 个数字
根据 op 对 a b 运算并返回结果(加减乘除)
*/
var apply = function(op, a, b) {
    var list = {
        '+' : a + b,
        '-' : a - b,
        '*' : a * b,
        '/' : a / b,
    }
    return list[op]
}
    apply('+', 1, 3)

/*
作业 9
实现 applyList 函数
op 是 '+' '-' '*' '/' 其中之一
oprands 是一个只包含数字的 array
根据 op 对 oprands 中的元素进行运算并返回结果
例如, 下面的调用返回 -4
var n = applyList('-', [3, 4, 2, 1])
log(n)
// 结果是 4, 用第一个数字减去所有的数字
*/
var applyList = function(op, oprands) {
    var sum = oprands[0]
    for (var i = 1; i < oprands.length; i++){
        if (op == '+') {
            sum += oprands[i]
            console.log('i==', i)
            console.log('sum==', sum)
        }
        if (op == '*') {
            sum *= oprands[i]
        }
        if (op == '-') {
            sum -= oprands[i]
        }
        if (op == '/') {
            sum /= oprands[i]
        }
    }
    return sum
}
    applyList('*', [4, 4, 2, 1])

/*
作业 10
实现 applyCompare 函数
参数如下
expression 是一个 array(数组), 包含了 3 个元素
第一个元素是 op, 值是 '>' '<' '==' 其中之一
剩下两个元素分别是 2 个数字
根据 op 对数字运算并返回结果(结果是 true 或者 false)
*/
var applyCompare = function(expression) {
    var op = expression[0]
    var a = expression[1]
    var b = expression[2]
    list = {
        '>' : a > b,
        '<' : a < b,
        '==' : a == b,
    }
    if ( list[op]) {
        return true
    }
    else {
        return false
    }
}
    applyCompare(['==', 1, 4])

/*
注意
下面这题做不出来没关系

作业 11
实现 applyOps 函数
参数如下
expression 是一个 array
expression 中第一个元素是上面几题的 op, 剩下的元素是和 op 对应的值
根据 expression 运算并返回结果
*/
var applyOps = function(expression) {
    var op = expression[0]
    array = expression.slice(1)
    if (op == '>' || op == '<' || op == '=='){
        return applyCompare(op, array)
    }
    else {
        return applyList(op, array)
    }
}
    applyOps(['+', 1, 2, 3])



// 注意
// 下次作业起, 会用更标准简练的方式来表示参数类型和说明
// 另外, 下次开始会引入测试这个概念

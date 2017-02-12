scsds// 2016/10/07
//
// ============
// 作业 10
//
//
// 注意, 提示在文件最末尾
// ============
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
        log('*** 测试失败:', message)
    }
}


// 作业 1
//
/*
n 是 int
判断 n 是否是素数(质数)
*/
var isPrime = function(n) {
    if (n%2 != 0 && n > 1 ) {
        return true
    }
}

// 作业 2
//
/*
返回 100 内的素数列表
*/
var primeNumbers = function() {
    var list = []
    for (var i = 0; i < 100; i++) {
        if (isPrime(i)) {
            list.push(i)
        }
    }
    return list
}


// 作业 3
//
/*
给定一个英文句子 str（由空格隔开的单词组成的字符串）
返回「将句中所有单词变为有且只有首字母大写的形式」的 string
*/
var Upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lower = 'abcdefghijklmnopqrstuvwxyz'
// UpperFirst函数判断第一个字母在lower中的位置然后变成大写，将后面切分出来的
var UpperFirst = function(start, s1, str, i) {
    for (var j = 0; j < lower.length; j++) {
        if (lower[j] == s1[0]) {
            // log('j=', j, 'start=', start)
            s1 = Upper[j] + str.slice(start+1, i)
            log('s1', s1)
        }
    }
    return s1
}
// 拼接数组, 注意最前面第一个和最后一个数组
var capString = function(str) {
    var s1 = ''
    var s = ''
    var start = 0
    for (var i = 0; i < str.length; i++) {
        log('i=',i)
        if (str.slice(i, i+1) == ' ') {
            s1 = str.slice(start, i)
            s1 = UpperFirst(start, s1, str, i)
            if (start == 0) {
               s += s1
            }
            else {
                s = s + ' ' + s1
                log('s=',s)
            }
            start = i + 1
            log('startend', start)
        }
    }
    s1 = str.slice(start)
    s += ' ' + UpperFirst(start, s1, str, i)
    return  s
}

var  s  = 'keep foolish keep hungry'
capString(s)

// 作业 4
//
/*
给定一个只包含字母的字符串，返回单个字母出现的次数
考察字典的概念和使用
返回值为包含数组的数组，格式如下（对数组中数组的顺序不做要求）

// 可以使用 Object.keys 函数
var obj = {
  foo: 1,
  bar: 2,
}
Object.keys(obj)
["foo", "bar"]

参数 "hello"
返回值 [['h', 1], ['e', 1], ['l', 2], ['o', 1]]
*/
var lower = 'abcdefghijklmnopqrstuvwxyz'
var num = function(str) {
    for (var i = 0; i < lower.length; i++) {
        if (lower[i] == str) {
            return i
        }
    }
}
//[1,2,2,2,3,4,3]统计其中重复数字的个数输出
var processNum = function(list, immobilization) {
    var n = 0
    for (var i = 0; i < list.length; i++) {
        if (list[i] == immobilization) {
            n += 1
        }
    }
    return n
}
// Object {h: 1, e: 1, l: 2, o: 1}变成题设要求的那样
var processList = function(obj) {
    newList = Object.keys(obj)
    var list = []
    var list1 = []
    for (var i = 0; i < newList.length; i++) {
        list.push(newList[i])
        list.push(obj[newList[i]])
        list1.push(list)
        list = []
    }
    return list1
}
var letterCount = function(str) {
    var obj = {}
    var n = 0
    var processNum1 = 0
    var list = []
    var newList = []
    for (var i = 0; i < str.length; i++) {
        n = num(str[i])
        list.push(n)
    }
    for (var i = 0; i < list.length; i++) {
        processNum1 = processNum(list, list[i])
        log(processNum1)
        obj[str[i]] = processNum1
    }
    var list1 = processList(obj)
    return list1
}

    letterCount('hello')
// 作业 5
//
/*
param 是一个 object
例子如下
param 是 {
    'foo': 1,
    'bar': 'far',
}
返回如下 string, 顺序不做要求(foo bar 的顺序)
foo=1&bar=far

注意, 使用 Object.keys 函数
*/
var queryFromObject = function(param) {
    var list = Object.keys(param)
    log(list)
    var str = ''
    for (var i = 0; i < list.length; i++) {
        var index = list[i]
        var value = param[index]
        if (i == list.length-1) {
            str += `${list[i]}=${value}`
        }
        else {
            str += `${list[i]}=${value}&`
        }

    }
    return str
}
    param =  {
        'foo': 1,
        'bar': 'far',
    }
    queryFromObject(param)

// 作业 6
//
/*
queryString 是一个 string
例子如下
queryString 是 foo=1&bar=far
返回如下 object, 顺序不做要求(foo bar 的顺序)
{
    'foo': 1,
    'bar': 'far',
}
*/
var argsFromQuery = function(queryString) {
    var list = queryString.split('&')
    var str = {}
    for (var i = 0; i < list.length; i++) {
        var newList = list[i].split('=')
        var key = newList[0]
        var value = newList[1]
        str[key] = value
        newList = []
    }
    return str
}
    queryString = 'foo=1&bar=far&dudu=baby'
    argsFromQuery(queryString)

// 作业 7
//
/*
利用上课板书, 实现 ajaxGet 函数, 用 GET 方法请求一个 URL
url 是一个 URL
callback 是一个函数, 在接受服务器响应后调用并传递参数给它
*/
var ajaxGet = function(url, callback) {
    var r = new XMLHttpRequest()
    r.open('GET', '/login', true)
    r.setRequestHeader('Content-Type', 'application/json')
    r.onreadystatechange = function() {
        if (true) {

        }
    }
}


// 作业 8
//
var ajax = function(request) {
    /*
    request 是一个 object, 有如下属性
    method, 请求的方法, string
    url, 请求的路径, string
    data, 请求发送的数据, 如果是 GET 方法则没这个值, string
    callback, 响应回调, function
    */
}

var r = {
    method: 'POST',
    url: '/login',
    data: 'username=gua',
    callback: function(response) {
        console.log('响应', response)
    }
}
ajax(r)

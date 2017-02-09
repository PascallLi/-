// 2016/10/05
//
// 作业 9
// ========
//

var log = function() {
    console.log.apply(console, arguments)
}


// ====
// 测试
// 自行实现 ensureEqual, arrayEquals 等函数
// 按照上课所说, 最好把测试放在额外的文件中, 隔离测试和代码
// ====
//

var arrayEquals = function(arr1, arr2) {
    var equalElement = arr1.every(function(v ,i) {
        return v = arr2[i]
    })
    var equalLength = arr1.length === arr2.length
    return equalLength && equalElement
}

var ensureEqual = function(a, b) {
    if (!arrayEquals(a, b)) {
        log(`'测试失败少年', '错误输出='${a}', '正确输出='${b}'`)
    }
    else {
        log('回答正确')
    }
}

// 作业 1
//
/*
a 是一个 array
返回一个 array, 包含了 a 中所有元素, 且不包含重复元素
例如 a 是 [1, 2, 3, 1, 3, 5]
返回 [1, 2, 3, 5]
*/

var unique = function(a) {
    // 先复制数组到b, 判断b中数据是否存在于a,和a中数据是否不存在与新的list
    var list = []
    var b = a
    for (var i = 0; i < a.length; i++) {
        if (a.includes(b[i]) &&　!list.includes(a[i])) {
            list.push(b[i])
        }
    }
    return list
}
    unique([1, 2, 3, 1, 3, 5])
// 注意, 要自行实现 arrayEquals 来判断两个数组是否相等
ensureEqual(unique([1, 2, 3, 1, 3, 5]), [1, 2, 3, 5], 'test 1')
ensureEqual(unique([1, 1, 3, 3, 1, 3]), [1, 3], 'test 2')


// 作业 2
//
/*
a b 都是 array

返回一个 array, 里面的元素是同时出现在 a b 中的元素
这个 array 中不包含重复元素
*/
var intersection = function(a, b) {
    var list = []
    var len = a.length
    for (var i = 0; i < len; i++) {
        if (b.includes(a[i])) {
            list.push(a[i])
        }
    }
    return unique(list)
}

ensureEqual(intersection([1,3,3,2,1,2],[1,3,2,5]), [1,3,2])

// 作业 3
//
/*/
a b 都是 array

返回一个 array, 里面的元素是所有出现在 a b 中的元素
这个 array 中不包含重复元素
/*/
var union = function(a, b) {
    for (var i = 0; i < b.length; i++) {
        a.push(b[i])
    }
    var list = unique(a)
    return list
}

ensureEqual(union([1,3,3,2,1,2,8],[1,3,2,5,6]), [1,3,2,8,5,6])

// 作业 4
//
/*/
a b 都是 array

返回一个 array, 里面的元素是
所有在 a 中有 b 中没有的元素
这个 array 中不包含重复元素
/*/
var difference = function(a, b) {
    var list = []
    for (var i = 0; i < a.length; i++) {
        if (!b.includes(a[i]) && !list.includes(a[i])) {
            list.push(a[i])
        }
    }
    return list
}
    ensureEqual(difference([1,2,3,6,4,3,7,8], [2,3,4]), [1,6,7,8])
    ensureEqual(difference([1,2,3,6,4,3,7,8], [2,3,4,7,8,8,8,6]), [1])

// 作业 5
//
/*/
a b 都是 array

返回一个 array, 里面的元素是
所有在 a b 中的非公共元素
这个 array 中不包含重复元素
/*/
var differenceAll = function(a, b) {
    c = difference(a, b)
    d = difference(b, a)
    return union(c, d)
}
    ensureEqual(differenceAll([1,2,3,6,4,3,7,8], [2,3,4]), [1,6,7,8])
    ensureEqual(differenceAll([1,2,3,6,4,3,7,8], [1,9,10,2,3,4]), [9,10,6,7,8])

// 作业 6
//
/*/
a b 都是 array

检查是否 a 中的每个元素都在 b 中出现
返回 bool
/*/
var isSubset = function(a, b) {
    var l = intersection(a,b)
    return a.length === l.length
}

// 下面的题目都是 DOM 操作题目
// =====
//
// 作业 7
//
/*
element 是一个标签
html 是一段 html 字符串
把 html 作为子元素插入到 element 的末尾
上课一直在用这个函数
*/
var appendHtml = function(element, html) {
    return element.insertAdjacentHTML('beforeend', html)
}


// 作业 8
//
/*
element 是一个标签
eventName 是一个 string, 表示事件的名字
callback 是一个函数
用法如下, 假设 button 是一个标签
bindEvent(button, 'click', function(){
})
*/
var bindEvent = function(element, eventName, callback) {
    return element.addEventListener(eventName, callback)
}


// 作业 9
//
/*
element 是一个标签
eventName 是一个 string, 表示事件的名字
callback 是一个函数
responseClass 是一个字符串

在 element 上绑定一个事件委托
只会响应拥有 responseClass 类的元素
*/
var bindEventDelegate = function(element, eventName, callback, responseClass) {
    element.addEventListener(eventname, function(event){
        var target = event.target
        if (target.classList.contains(responseClass)) {
            callback(event)
        }
    })
}


// 作业 10
//
/*
selector 是一个 string, 选择器, 有如下三种取值
    1, 标签选择器, 如 'div'
    2, class 选择器, 如 '.red'
    3, id 选择器, 如 '#id-input-name'
html 是一段 html 字符串
把 html 作为子元素插入到 selector 选中的所有元素的末尾
*/
var append = function(selector, html) {
    var form = document.querySelectorAll(selector)
    for (var i = 0; i < form.length; i ++){
        var e  = form[i]
        e.insertAdjacentHTML('beforeend', html)
    }

}


// 作业 11
//
/*
selector 是一个 string, 选择器, 有如下三种取值
    1, 标签选择器, 如 'div'
    2, class 选择器, 如 '.red'
    3, id 选择器, 如 '#id-input-name'
eventName 是一个 string, 表示事件的名字
callback 是一个函数
responseClass 是一个字符串, 这个参数可以为空

给 selector 选中的所有元素绑定 eventName 事件
当 responseClass 给出的时候, callback 只会响应拥有 responseClass 类的元素
当 responseClass 没有给的时候, callback 直接响应

*/
var bindAll = function(selector, eventName, callback, responseClass) {
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++){
        var element = elements[i]
        element.addEventListener(eventName, function(event){
            var target = event.target
            if (target.classList.includes(responseClass)) {
                callback(event)
            }
        })
    }
}


// =====
// 提示
// =====
/*/

1, unique
创建一个新数组
遍历 a
对于 a 中的每个元素, 判断是否在新数组中出现
如果没出现就 push


2, intersection
创建一个新数组
遍历 a
对于 a 中的每个元素, 判断是否在 b 中出现
如果出现就 push 到新数组


3, union
有问题单独提问


4, difference
有问题单独提问


5, differenceAll
对 a b 分别 difference 并 push 到新数组


6, isSubset
循环判断


7, appendHtml
上课用的函数的封装


8, bindEvent
上课用函数的简单封装


9, bindEventDelegate
事件委托的简单封装


10, append
选择, 然后循环 appendHtml


11, bindAll
这题做不出来就算了
/*/

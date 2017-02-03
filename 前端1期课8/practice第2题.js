/ 作业 2
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

var log = function() {
    console.log.apply(null, arguments)
}
var split = function(s, delimiter=' ') {
    var list = []
    var space = delimiter.length
    var start = 0
    for (var i = 0; i < s.length; i++) {
        // 没有 s[X,X] 这种用法
        if (s.slice(i, i + space) == delimiter) {
            list.push(s.slice(start, i))
            start = i + space
        }
    }
    list.push(s.slice(start))
    return list
}

function equal(arr1, arr2){
    var equalLength = (arr1.length === arr2.length)
    var equalElement = arr1.every(function(current, i){
        return current === arr2[i]
    })
    return equalLength && equalElement
}

equal(split('1 2 3'), ['1', '2', '3'])

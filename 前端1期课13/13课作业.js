// 2016/10/14
//
// ============
// 作业 13
//
//
// 本次作业如果做不出来, 可以大家一起讨论一下
// ============
//


// 作业 1
//
// 实现一个 GuaAlert 函数, 如下
// 需要append css效果到head中
/*
title 是 string
message 是 string

这个函数生成一个上课所说的弹窗插入页面
弹窗包含 title 作为标题 和 message 作为信息
还包含一个 OK 按钮
点击 OK 按钮关闭弹窗
*/
var alertTemplete = function(title, message) {
    var t = `<div class="modal-alert">
        <div class="modal-title">
            <h1>${title}</h1>
            ${message}
        <button class='ok-button' type="button" name="button">OK</button>
        <button class='cancel-button' type="button" name="button">Cancel</button>
        </div>
    </div>`
    return t
}
var GuaAlert = function(title, message) {
    $('.main').on('click', '.start-alert', function(event){
        console.log('start')
        $('.modal-alert').toggleClass('modal-alert')
        $('body').append(alertTemplete(title, message))
    })
    $('body').on('click', '.ok-button', function(event){
        console.log('OK')
        $('.modal-alert').remove()
    })
}
// 作业 2
//
/*
title 是 string
message 是 string
callback 是一个接受一个 bool 类型参数的函数

这个函数生成一个上课所说的弹窗插入页面
弹窗包含 title 作为标题 和 message 作为信息
还包含一个 OK 按钮 和一个 Cancel 按钮
点击 OK 按钮关闭弹窗, 调用 callback(true)
点击 Cancel 按钮关闭弹窗, 调用 callback(false)
*/
var GuaAlert2 = function(title, message, callback) {
    $('.main').on('click', '.start-alert', function(event) {
        $('.modal-alert').toggleClass('modal-alert')
        $('body').append(alertTemplete(title, message))
    })
    $('body').on('click', '.ok-button', function(event) {
        $('.modal-alert').remove()
        callback(true)
    })
    $('body').on('click', '.cancel-button', function(event) {
        $('.modal-alert').remove()
        callback(false)
    })
}

// 作业 3
//
/*
title 是 string
callback 是一个如下的函数
function(clickOk, input) {
    // clickOk 是一个 bool 表明点击的是 OK 还是 Cancel
    // input 是 string
}

这个函数生成一个上课所说的弹窗插入页面
弹窗包含 title 作为标题
包含一个 input 让用户输入信息
还包含一个 OK 按钮 和一个 Cancel 按钮
点击 OK 按钮关闭弹窗, 调用 callback(true, 输入的内容)
点击 Cancel 按钮关闭弹窗, 调用 callback(false)
*/

var alertTempleteNew = function(title, message) {
    var t = `<div class="modal-alert">
        <div class="modal-title">
            <h1>${title}</h1>
            <input value='${message}'>
        <button class='ok-button' type="button" name="button">OK</button>
        <button class='cancel-button' type="button" name="button">Cancel</button>
        </div>
    </div>`
    return t
}
var callback = function(clickOk, input) {
    if (clickOk) {
        $('body').append(alertTempleteNew('title', input))
    }
}
var GuaPrompt = function(title, callback) {
    $('.main').on('click', '.start-alert', function(event) {
        $('.modal-alert').toggleClass('modal-alert')
        $('body').append(alertTemplete(title))
    })
    $('body').on('click', '.ok-button', function(event) {
        $('.modal-alert').remove()
        callback(true)
    })
    $('body').on('click', '.cancel-button', function(event) {
        $('.modal-alert').remove()
        callback(false)
    })
}


// 作业 4
//
/*
title 是 string
actions 是一个包含 string 的数组
callback 是一个如下的函数
function(index) {
    // index 是下标, 具体如下
    // index 如果是 -1 表明用户点击了 cancel
}

这个函数生成一个弹窗页面
弹窗包含 title 作为标题
actions 里面的 string 作为标题生成按钮
弹窗还包含一个 Cancel 按钮
点击按钮的时候, 调用 callback(index)
*/
// var callback = function(index) {
//     if (index == -1) {
//         return false
//     }
//     else {
//         return index
//     }
// }
// var actions = '1234567890'
// var GuaActions = function(title, actions, callback) {
//
// }

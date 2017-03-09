// 2016/10/19
//
// ============
// 作业 15
//
//
// 本次作业没有提示的地方需要自行搜索
// 别忘了用 github 管理作业的进度
// ============
//



// 作业 1
//
// 实现函数 GuaOptions1, 功能见注释描述
/*
options 是一个包含 string 的数组
本函数对每个 string 生成一个复选框和文本
append 到 body 中
示意图如下

+-+
| | string
+-+

*/
var template = function(str){
    var t = `
    <div class='checkbox'>
        <form>
            <input type='checkbox' class='input-checkbox'>${str}</input>
        </form>
    </div>
    `
    return t
}

var GuaOptions1 = function(options) {
    for (var i = 0; i < options.length; i++) {
        $('body').append(template(options[i]))
    }
}


// 作业 2
//

/*
options 是一个包含 string 的数组
本题和作业 1 一样的功能 只是多了 2 个按钮
全选 和 反选
*/
var GuaOptions2 = function(options) {
    for (var i = 0; i < options.length; i++) {
        $('body').append(template(options[i]))
    }
    $('body').append(`
        <button class='button-all'>全选</button>
        <button class='button-cancel'>反选</button>
        `)
    $('body').on('click', function(event){
        if ($(event.target).hasClass('button-all')) {
            $('.input-checkbox').attr('checked', 'checked')
        }
        else if (($(event.target).hasClass('button-cancel'))) {
            $('.input-checkbox').removeAttr('checked', 'checked')
        }
    })
}


// 作业 3
//
/*
options 是一个包含如下 object 的数组
text 是文本描述
checked 是布尔值, 表示是否打勾
{
    'text': 'string',
    'checked': true,
}
本题和作业 2 一样的功能, 但是参数变了
并且要求在初始化的时候要按照相应的值对相应的复选框打勾
*/

var GuaOptions3 = function(options) {
    for (var i = 0; i < options.length; i++) {
        var str = options[i].text
        $('body').append(template(str))
        if (options[i].checked) {
            $($('.checkbox')[i]).find('.input-checkbox').attr('checked', 'checked')
        }
    }
}


// 作业 4
//
/*
本题和作业 3 一样的功能
但是多了 2 个按钮 save 和 load
save 按钮点击的时候会保存当前的 options 状态到 localStorage(用 JSON)
load 按钮点击的时候会从 localStorage 中读取保存的信息并更新界面
*/
var GuaOptions4 = function(options) {
    
}

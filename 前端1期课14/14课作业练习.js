var buttonTemplate = function(title, index) {
    // title, index 输出List中元素与对应的下标
    var t = `
        <button class='modal-action-button' data-index='${index}'>${title}</button>
    `
    return t
}
// 将actions中的index和title以Button字符串的形式模板字符串进HTML中
var GuaAlert = function(title, actions, callback) {
    // var actionButtons = $.map(actions, buttonTemplate).join('')
    var buttons = []
    for (var i = 0; i < actions.length; i++) {
        var a = actions[i];
        buttons.push(buttonTemplate(a, i));
    }
    var actionButtons = buttons.join('')
    var t  = `
    <div class="modal-container modal-delete">
        <div class="modal-mask"></div>
            <div class="modal-alert vertical-center">
                <div class="modal-title">
                    ${title}
                </div>
                <div class="modal-message">
                    ${actionButtons}
                 </div>
                 <div class="model-control">
                    <button class="modal-button" type="button" name="button" data-type='ok'>OK</button>
                    <button class="modal-button modal-action-button" type="button" name="button" data-index='-1'>Cancel</button>
                </div>
        </div>
    </div>
    `
    $('body').append(t)
    // css
    // modal-mask在modal-container中插入,独立于背景
    // modal-center 在中心处往上偏移50%, 达到绝对的垂直居中
    // 父节点属性model-control 设置font-size 0px 去除button的缝隙
    var css = `
    <style class="modal-delete">
        .modal-container {
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
        }
        .modal-mask {
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            background: black;
            opacity: 0.5;
        }
        .modal-alert {
            margin: 0 auto;
            width: 200px;
            opacity: 1;
            background: lightblue;
        }
        .vertical-center {
            position: relative;
            top: 50%;
            transform: translateY(-50%);
        }
        .modal-title {
            text-align: center;
            font-size:20px;
        }
        .modal-message {
            padding: 10px 5px;
            background:white;
        }
        .modal-input {
            witdh: 100%;
        }
        .modal-button {
            width: 50%;
            height: 100%;
            font-size: 22px;
            border: 1px white solid;
        }
        .model-control {
            font-size: 0;
        }
    </style>
    `
    $('head').append(css)
    // 点击actions里面的事件的时候，console显示相应的事件名字+index
    $('.modal-action-button').on('click', function(){
        console.log('click ok')
        var index = $(event.target).data('index')
        callback(index)
        if (index === -1) {
            callback(false)
            $('.modal-delete').remove()
        }
    })
}

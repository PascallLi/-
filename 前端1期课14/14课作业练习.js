var GuaAlert = function(title, message) {
    var t  = `
    <div class="modal-container modal-delete">
        <div class="modal-mask"></div>
            <div class="modal-alert vertical-center">
                <div class="modal-title">
                    ${title}
                </div>
                <div class="modal-message">
                 ${message}
                 </div>

                <button class="modal-button" type="button" name="button">ok</button>
        </div>
    </div>
    `
    $('body').append(t)
    // css
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
        .modal-button {
            width: 100%;
            height: 100%;
            font-size: 22px;
            border: 0;
        }
    </style>
    `
    $('head').append(css)
    $('.modal-button').on('click', function(){
        console.log('click ok')
        $('.modal-delete').remove()
    })
}

$(function() {
    $("button") .submit( function() {
        // 顯示留言
        var root = 'https://jsonplaceholder.typicode.com'
        $.ajax({
            url: root + '/posts/1',
            methd:'GET',
            type: 'GET',
            error: function() {
                console.log('error');
            },
            success: function(e) {
                for (var i = 0; i < e.length; i++) {
                    $(".result").append(
                        '<div class="full-msg" data-id="' + e[i]._id + '">' +
                        '<div>姓名：<div class="name">' + e[i].username + '</div><div class="update" >更新留言</div><div class="del" >刪除留言</div></div>' +
                        '<div>網站：<div class="url">' + e[i].url + '</div></div>' +
                        '<div>電子郵件：<div class="email">' + e[i].email + '</div></div>' +
                        '<div>標題：<div class="title">' + e[i].title + '</div></div>' +
                        '<div><div class="message">' + e[i].message + '</div></div>' +
                        '</div>'
                    );
                };
            }
        });
        console.log("執行成功");
    });


    $(".result").on('click', '.update', function() {
        var fullMsg = $(this).closest('.full-msg'),
            updateID = fullMsg.data('id'),
            name = fullMsg.find('.name').text(),
            url = fullMsg.find('.url').text(),
            email = fullMsg.find('.email').text(),
            title = fullMsg.find('.title').text(),
            message = fullMsg.find('.message').text();
        var updateTemplate =
            '<div>姓名：<input type="text" class="name" value="' + name + '" required></div>' +
            '<div>網站：<input type="text" class="url" value="' + url + '"></div>' +
            '<div>電子郵件：<input type="text" class="email" value="' + email + '" required></div>' +
            '<div>標題：<input type="text" class="title" value="' + title + '" required></div>' +
            '<div>內文：<textarea class="message" required>' + message + '</textarea></div>' +
            '<div>送出取消</div>';

        fullMsg.html(updateTemplate);

        $(".submit").on('click', function() {
            updateID = fullMsg.data('id');
            name = fullMsg.find('.name').val();
            url = fullMsg.find('.url').val();
            email = fullMsg.find('.email').val();
            title = fullMsg.find('.title').val();
            message = fullMsg.find('.message').val();

            $.ajax({
                url: ajax_url + updateID,
                type: 'PUT',
                data: {
                    "title": title,
                    "username": name,
                    "message": message,
                    "url": url,
                    "email": email,
                },
                success: function(e) {
                    console.log(e)
                }
            })
        });
        $(".cancel").on('click', function() {
            fullMsg.html()
        })
    });


});

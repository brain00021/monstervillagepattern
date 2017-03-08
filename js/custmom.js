$(function() {

    var clicks = 0, //為了連點
        $rolebutton =$('.button'),//角色圖的按鈕
        $bannerbutton2 = $('.button2');//背景圖的按鈕
    //角色圖的更改區塊
    $rolebutton.on("click", function(e) {
        var rolebollon = $('.role img').hasClass('role-img');
            if (rolebollon === true) {
                $('.banner-pic').find('img').remove();
            } else {
                $('.banner-pic').find('img').remove();
                $('.role').append('<img class="role-img" src="lib/image/icon4.png">');
            }

        var buttonImg = $(this).find('img').attr("src");
        $('.role-img').attr('src', buttonImg);
    });
    //背景圖的更改區塊
   $bannerbutton2.on("click", function() {
        var bannerpic = $('.banner-pic img').hasClass('banner-bg');
        if (bannerpic == true) {
            $('.role').find('img').remove();
        } else {
            $('.role').find('img').remove();
            $('.banner-pic').append('<img class="banner-bg" src="lib/image/Ironman.png">');
        }
        var buttonImg2 = $(this).find('img').attr("src");
        $('.banner-bg').attr('src', buttonImg2);
        console.log(buttonImg2);
    });
    // document cannvas 圖片合成結果
    var canvas = document.querySelector("canvas");
    document.querySelector(".pagecopy").addEventListener("click", function() {
        html2canvas(document.querySelector(".bigbanner"), { canvas: canvas }).then(function(canvas) {
            document.querySelector(".return-banner-pture").appendChild(canvas);
            console.log(canvas);
        });
    }, false);
    //移除 合成圖片
    $('.removepage').click(function(canvas) {
        $('.return-banner-pture').find('canvas').remove();
        console.log($('.return-banner-pture').find(canvas));
    });

});

$(function() {
    var $item = $('.carousel .item');
    var $wHeight = $(window).height();
    $item.height($wHeight);
    $item.addClass('full-screen');
    $('.carousel img').each(function() {
        var $src = $(this).attr('src');
        var $color = $(this).attr('data-color');
        $(this).parent().css({
            'background-image': 'url(' + $src + ')',
            'background-color': $color
        });
        $(this).remove();
    });
    $(window).on('resize', function() {
        $wHeight = $(window).height();
        $item.height($wHeight);
    });

    $('.carousel').carousel({
        interval: 6000,
        pause: "false"
    });

    // ilightbox
    // $('.ajax-simple').iLightBox({
    //     attr: 'target',
    //     overlay: {
    //         opacity: .6
    //     },
    //     controls: {
				// 	fullscreen: false
				// },
    //     skin: 'metro-black',
    //     minScale: 1
    // },function(){ console.log('hi');});

    $('.button-ajax').click(function(){
				$.iLightBox([
					{
						URL: './lightbox.html',
						type: 'ajax',
						options: {
							width: 1300,
							height: 850
						}
					}
				],{
					skin: 'metro-black'
				});
				return false;
			});

   //  	$('.ajax-simple').click(function(){
   //  		console.log('有反應');
			// 	$.iLightBox([
			// 		{
			// 			URL: '#demo_inline_element',
			// 			type: 'inline',
			// 			options: {
			// 				width: 720,
			// 				height: 360
			// 			}
			// 		}
			// 	],{
			// 		skin: 'metro-white'
			// 	});
			// 	return false;
			// });



    // nav-botton show item history
    var showOrhide = true;
    $('#nav-icon1').click(function() {
    	console.log("hi");
        $(this).toggleClass('open');

        $(this).toggle(showOrhide);
        if (showOrhide) {
            $('#light-box').fadeIn('fast');
            showOrhide = false;
        } else {
            $('#light-box').fadeOut('fast');
            showOrhide = true;
            $(this).show();
        }

    });
});

/*top*/
$('.header-title li,.header-title dd').each(function(){
	if($(this).children('.hide').hasClass('hide')){
		$(this).mouseenter(function(){
			if(this.nodeName=='DD'){
				$(this).children('a').addClass('hide-now');
			}
			$(this).children('.hide').show('slow');
		});
		$(this).mouseleave(function(){
			if(this.nodeName=='DD'){
				$(this).children('a').removeClass('hide-now');
			}
			$(this).children('.hide').hide('slow');
		});
	}
});
/*img*/
$('.img').mouseenter(function(){
	$('.img-left,.img-right').show();
});
$('.img').mouseleave(function(){
	$('.img-left,.img-right').hide();
})
$('.control-ul > li').mouseenter(function(){
	if($(this).hasClass('a-now')){
		return;
	}
	var oldPos,nowPos;
	oldPos=$('.a-now').index();
	nowPos=$(this).index();
	$('.control-ul > li').eq(nowPos).addClass('a-now');
	$('.control-ul > li').eq(oldPos).removeClass('a-now');
	$('.img-ul > li').eq(nowPos).show();
	$('.img-ul > li').eq(oldPos).hide();

});
$('.img-right').click(function(){
	var nowPos,oldPos,lastPos;
	lastPos=$('.control-ul > li:last').index();
	oldPos=$('.a-now').index();
	nowPos=oldPos==lastPos?0:oldPos+1;
	$('.control-ul > li').eq(nowPos).addClass('a-now');
	$('.control-ul > li').eq(oldPos).removeClass('a-now');
	$('.img-ul > li').eq(nowPos).show();
	$('.img-ul > li').eq(oldPos).hide();
});
$('.img-left').click(function(){
	var nowPos,oldPos,firstPos;
	firstPos=$('.control-ul > li:first').index();
	oldPos=$('.a-now').index();
	nowPos=oldPos==firstPos?$('.control-ul > li').length-1:oldPos-1;
	$('.control-ul > li').eq(nowPos).addClass('a-now');
	$('.control-ul > li').eq(oldPos).removeClass('a-now');
	$('.img-ul > li').eq(nowPos).show();
	$('.img-ul > li').eq(oldPos).hide();
});
/*apply*/
$('.apply-ul>li').each(function(){
	$(this).mouseenter(function(){
		var num=$(this).index()+1;
		var old=num-1;
		$(this).addClass('apply-ul-li'+num+'-now');
		$('.apply-ul-li'+old+'-now').removeClass('apply-ul-li'+old+'-now');
		$(this).animate({width:'334px'},500);
		$('.apply-ul>li').each(function(){
			var ii=$(this).index()+1;
			if(num!=ii)
			{
				$(this).stop();
				$(this).removeClass('apply-ul-li'+ii+'-now');
				$(this).animate({width:'0px'},500);
			}
		});
		
	});
});
/*about*/
$('.about-left').mouseenter(function(){
	$(this).find('p').stop().animate({top:'0px'},500);
	$(this).find('img').stop().animate({width:'580px',margin:'-20px 0 0 -20px '},500);
});
$('.about-left').mouseleave(function(){
	$(this).find('p').stop().animate({top:'241px'},500);
	$(this).find('img').stop().animate({width:'491px',margin:'0px 0 0 0px '},500);
})
$('.about_r_btnli2').click(function(){
	var firstLi=$('.about-ringt-ul li:first');
	$('.about-ringt-ul').append(firstLi);
});
$('.about_r_btnli1').click(function(){
	var lastLi=$('.about-ringt-ul li:last');
	$('.about-ringt-ul').prepend(lastLi);
});
/*friend*/
var liW=138;
$('.firend_btnli1').click(function(){
	$('.firend_link li:first').animate({marginLeft:-liW+'px'},200,function(){
		   $('.firend_link ul').append($(this));
		   $(this).css('margin-left','0px');
	 });
});
$('.firend_btnli2').click(function(){
	$('.firend_link li:last').css('margin-left',-liW+'px');
	$('.firend_link ul').prepend($('.firend_link li:last'));
	$('.firend_link li:first').animate({marginLeft:'0px'},200);
});
/*goTop*/
$(window).scroll(function(){
	var winH=$(window).height();
	var scrollTop=$(window).scrollTop();
	if(winH<=scrollTop){
		$('.to_top').show();
	}
	else{
		$('.to_top').hide();
	}
})
$('.the_top').click(function(){
	$('body,html').animate({scrollTop:'0px'},200);
})
/*list*/
$('.list-main li').click(function(){
	$(this).addClass('list-li-now').siblings('.list-li-now').removeClass('list-li-now');
	var className=$(this).attr("data");
	console.log(className)
	if(className=='*'){
		$('.list-ul').children(className).slideDown();
	}
	else{
		$('.list-ul').children(className).slideDown();
		$('.list-ul').children(className).siblings("li:not("+className+")").slideUp();
	}
})
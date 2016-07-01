// 侧边栏的返回顶部效果
$(function(){
	$(window).scroll(function(){
		if($(this).scrollTop()>200){
			$("#top").fadeIn();
		}else{
			$("#top").fadeOut();
		}
	})
})

// 产品下的点击喜欢心形点亮效果
$(function(){
	$(".group .like").click(function(){	
		if($(this).hasClass("act")){
			$(this).removeClass("act")
		}else{
			$(this).addClass("act");
		}
	})
	
})

// 广告位的图片切换
$(function(){
	$(".img-view ul li").hover(function(){
		$(this).addClass("hover").siblings().removeClass("hover");
		var $ul_li=$(".img-view ul li");
		var index=$ul_li.index(this);
		$("div.img-v>a").eq(index).show().siblings().hide();
	})
})
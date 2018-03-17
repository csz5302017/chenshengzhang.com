		var li1=document.getElementById("top1").getElementsByTagName("li");
		var span=document.getElementById("top1").getElementsByTagName("span")
		var h3=document.getElementById("top1").getElementsByTagName("h3")
		var a=document.getElementsByClassName("a1");
		for (var i = 0; i <span.length; i++) {
			li1[i].index=i;
			li1[i].onmouseover=function(){
				span[this.index].style.top="0";
				this.style.overflow="visible";
				if(this.getElementsByTagName("h3")[0]) {
					this.getElementsByTagName("h3")[0].style.opacity="1";	
				}
			}
			li1[i].onmouseout=function(){
				span[this.index].style.top="56px";
				if(this.getElementsByTagName("h3")[0]) {
					this.getElementsByTagName("h3")[0].style.opacity="0";
				}
				this.style.overflow="hidden";
			}
		}
		for (var j =0 ; j<a.length; j++){
			a[j].onmouseover=function(){
				this.style.backgroundColor="#F9F9F9";
				this.style.color="#45B823";}
			a[j].onmouseout=function(){
				this.style.backgroundColor="white";
				this.style.color="#1A1A1A";}
		}
// 二级菜单结束
// 工具手册
		var lud=document.getElementById("lu").getElementsByTagName("div");
		var lua=document.getElementById("lu").getElementsByTagName("a");
		for (var i =0;i<lua.length; i++){
			lud[i].index=i
			lud[i].onmouseover=function(){
				lua[this.index].style.top="-32px";}
			lud[i].onmouseout=function(){
				lua[this.index].style.top="0px";}
		}
// 最新动态
		var lui=document.getElementById("lu2").getElementsByTagName("li");
		var lui1=document.getElementById("lu2").getElementsByTagName("i");
		var lui2=document.getElementById("lu2").getElementsByTagName("a");
		for (var i =0;i<lui.length; i++){
			lui[i].index=i
			lui[i].onmouseover=function(){
				lui1[this.index].className="active"
				lui2[this.index].style.color="#45B823"}
			lui[i].onmouseout=function(){
				lui1[this.index].className="";
				lui2[this.index].style.color="#1A1A1A";}
		}
// 中间翻转
		var lul=document.getElementById("lu3").getElementsByTagName("li");
		var lul1=document.getElementById("lu3").getElementsByTagName("img");
		var lul2=document.getElementById("lu3").getElementsByTagName("div");
		var lul3=document.getElementById("lu3").getElementsByTagName("span");
		for (var i =0;i<lul.length; i++){
			lul[i].index=i
			lul[i].onmouseover=function(){
				lul1[this.index].className="active"
				lul2[this.index].className="div1"
				lul3[this.index].style.color="#45B823"}
			lul[i].onmouseout=function(){
				lul1[this.index].className="";
				lul2[this.index].className="";
				lul3[this.index].style.color="#1A1A1A";}
		}
//中间图片
		var lull1=document.getElementById("lu4").getElementsByClassName("mit-b");
		var lull2=document.getElementById("lu4").getElementsByClassName("box-bb")

		for (var i =0;i<lull1.length; i++){
			lull1[i].index=i
			lull1[i].onmouseover=function(){
				lull2[this.index].style.top="0px";}
			lull1[i].onmouseout=function(){
				lull2[this.index].style.top="-130px";}
		}
//小图片
		var luq1=document.getElementById("lu4").getElementsByClassName("mit-s");
		var luq2=document.getElementById("lu4").getElementsByClassName("box-sb");
		var luq3=document.getElementById("lu4").getElementsByClassName("box-sf");

		for (var i =0;i<luq1.length; i++){
			luq1[i].index=i
			luq1[i].onmouseover=function(){
				luq3[this.index].style.transform="translateY(30px) rotateX(-90deg)";
				luq2[this.index].style.transform="translateY(0px) rotateX(0deg)";}
			luq1[i].onmouseout=function(){
				luq2[this.index].style.transform="translateY(-30px) rotateX(90deg)";
				luq3[this.index].style.transform="translateY(0px) rotateX(0deg)";
			}
		}

		var luq11=document.getElementById("lu4").getElementsByClassName("mit-m");
		var luq22=document.getElementById("lu4").getElementsByClassName("box-mb");
		var luq33=document.getElementById("lu4").getElementsByClassName("box-mf");
		for (var i =0;i<luq11.length; i++){
			luq11[i].index=i
			luq11[i].onmouseover=function(){
				luq33[this.index].style.transform="translateY(30px) rotateX(-90deg)";
				luq22[this.index].style.transform="translateY(0px) rotateX(0deg)";}
			luq11[i].onmouseout=function(){
				luq22[this.index].style.transform="translateY(-30px) rotateX(90deg)";
				luq33[this.index].style.transform="translateY(0px) rotateX(0deg)";
			}
		}
	//轮播图
	//window.onload 网页加载出来就开始运行
 	window.onload= function(){
 		var list = document.getElementById("list");
 		var prev = document.getElementById("prev");
 		var next = document.getElementById("next");
 		function animate(offset){
 			var newLeft = parseInt(list.style.left)+offset;
 			list.style.left=newLeft+"px";
 	//获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
    //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
 	//对状态做一个判断，返回图片
 			if(newLeft<-4400){
 				list.style.left=0 + "px";
 			}
 			if(newLeft>0){
 				list.style.left=-4400 + "px";
 				}
 			}	
 			//	parseInt 取整转化数字
 		prev.onclick = function(){
 			animate(1100);
 		}
 		next.onclick = function(){
 			animate(-1100);
 		}
 		// 定时器:setInterval()执行多次，setTimeout()只执行一次
 		var timer;
			function play() {
			    timer = setInterval(function () {
			        next.onclick()
			    }, 3000)
			}
			play();
		//终止定时器
 		var wrapper = document.getElementById('wrapper');
            function stop() {
                clearInterval(timer);
            }
            wrapper.onmouseover = stop;
            wrapper.onmouseout = play;
         //定时器结束
         //小圆点的运动
         var buttons = document.getElementById("buttons").getElementsByTagName("span");
         var index=1;
               //getAttribute() 方法返回指定属性名的属性值
         for (var i = 0; i < buttons.length; i++) {
                buttons[i].onclick=function () {
                    var clickIndex = parseInt(this.getAttribute('index'));
                    var offset = 1100 * (index - clickIndex); 
                    animate(offset);//点击小圆点切换图片
                    index = clickIndex;//点击小圆点自身切换
                    buttonsShow();
                };
            }
         function buttonsShow() {
                //将之前的小圆点的样式清除，添加新的样式
                for (var i = 0; i < buttons.length; i++) {
                    if (buttons[i].className == "on") {
                        buttons[i].className = "";
                    }
                }
                //数组从0开始，故index需要-1
                buttons[index - 1].className = "on";
            }
            // 前后运动与小圆点对接
            prev.onclick = function() {
                index -= 1;
                if (index < 1) {
                    index = 5
                }
                buttonsShow();
                animate(1100);
            };
            next.onclick = function() {
                index += 1;
                if (index > 5) {
                    index = 1
                }
                animate(-1100);
                buttonsShow();
            };
            // 前后运动与小圆点对接结束                    	
      
 	}
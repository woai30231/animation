//用jquery实现动画开始
	function JqueryAnimation(){
		this.init.apply(this,arguments);
	};
	JqueryAnimation.prototype = {
		init : function(id){
			var _that = this;
			this.wrap = (typeof id === "string")?document.getElementById(id):id;
			this.list = this.wrap.getElementsByClassName("typeAni3");
			$(this.list).hover(function(){
						$(this).animate({width:300+"px"},1000);
			},function(){
						$(this).animate({width:100+'px'},1000);
			}).stop(true,true);
		}
	};
//用jquery实现动画结束



//用javascript实现动画开始
function JavascriptAnimation(){
	this.init.apply(this,arguments);
};
JavascriptAnimation.prototype = {
	init : function(id){
		var _that = this;
		this.wrap = (typeof id === "string")?document.getElementById(id):id;
		this.list = this.wrap.getElementsByClassName("typeAni4");
		this.durationTime = 1000;
		this._width =  this.list[0].offsetWidth;
		this.primaryWidth = this.list[0].offsetWidth;
		this.lastWidth = 300;
		this.distance = (this.lastWidth - this.primaryWidth); 
		// console.log(this.distance);
		this.changeSpeed = this.distance / this.durationTime;
		for(var i = 0,len = this.list.length;i<len;i++){
			(function(n){
				var tempWidth1 = _that._width,
					tempWidth2 = _that._width;
				_that.list[n].onmousemove = function(){
					var clearIntervalId1;
					clearInterval(clearIntervalId1);
					var tempWidth = _that._width;
					clearIntervalId = setInterval(function(){
						_that.rightMove.call(_that,_that.list[n],tempWidth1);
					},1);
				};
				_that.list[n].onmouseout = function(){
					var clearIntervalId2;
					clearInterval(clearIntervalId2);
					var tempWidth = _that._width;
					clearIntervalId2 = setInterval(function(){
						_that.leftMove.call(_that,_that.list[n],tempWidth2);
					},1);
				};
			})(i);
		};
	},
	rightMove : function(dom,tempWidth){
		var _that = this;
		tempWidth = this._width;
		tempWidth += this.changeSpeed;
		if(tempWidth<=this.lastWidth){
			// console.log("right_1111");
			dom.style.width = tempWidth + 'px';
		}else{
			// console.log("right_2222");
			dom.style.width  = this.lastWidth + 'px';
		};
	},
	leftMove : function(dom,tempWidth){
		var _that = this;
		tempWidth = this._width;
		tempWidth -= this.clangeSpeed;
		if(tempWidth >= this._width){
			console.log("left_11111");
			dom.style.width = tempWidth + 'px';
		}else{
			console.log("left_22222");
			dom.style.width = this._width + 'px';
		};
	}
}
//用javascript实现动画结束
$(function(){
	var typeAni3 = new JqueryAnimation("typeAni3");
	var typeAni4 = new JavascriptAnimation("typeAni4");
});
//这个页面用js实现部分现在看来有问题，可是让人熟悉他的插件化编程方法

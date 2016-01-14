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
		this.lastWidth = 300;
		this.distance = (this.lastWidth - this.primaryWidth); 
		this.changeSpeed = this.distance / this.durationTime;
		for(var i = 0,len = this.list.length;i<len;i++){
			(function(n){
				var clearIntervalId1 = null;
				clearInterval(clearIntervalId1);
				var clearIntervalId2 = null;
				clearInterval(clearIntervalId2);
				_that.list[n].onmouseover = function(){
					clearIntervalId = setInterval(function(){
						_that.rightMove.call(_that,_that.list[n]);
					},1);
				};
				_that.list[n].onmouseout = function(){
					clearIntervalId2 = setInterval(function(){
						_that.leftMove.call(_that,_that.list[n]);
					},1);
				};
			})(i);
		}
	},
	rightMove : function(dom){
		var _that = this;
		var primaryWidth = this._width;
		primaryWidth += this.changeSpeed;
		if(primaryWidth<=this.lastWidth){
			dom.style.width = this.primaryWidth + 'px';
		}else{
			dom.style.width  = this.lastWidth + 'px';
		};
	},
	leftMove : function(dom){
		var _that = this;
		var primaryWidth = this._width;
		primaryWidth -= this.clangeSpeed;
		if(primaryWidth >= this._width){
			dom.style.width = this.primaryWidth + 'px';
		}else{
			dom.style.width = this._width + 'px';
		};
	}
}
//用javascript实现动画结束

$(function(){
	var typeAni3 = new JqueryAnimation("typeAni3");
	var typeAni4 = new JavascriptAnimation("typeAni4");
});

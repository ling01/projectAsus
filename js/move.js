function getStyle(dom,name){
		if(dom.currentStyle){
			return dom.currentStyle[name];
		}else{
			return getComputedStyle(dom,false)[name];
		}
	}

function move(dom,attr,target){
  clearInterval(dom.timer)
  dom.timer=setInterval(function(){
    if(attr=='opacity'){
      var cur=Math.round(parseFloat(getStyle(dom,attr))*100)
    }else{
      var cur=parseInt(getStyle(dom,attr));
    }
    var speed=(target-cur)/8;
    speed=speed>0?Math.ceil(speed):Math.floor(speed);
    if(cur==target){
      clearInterval(dom.timer)
    }else{
      if(attr=='opacity'){
        dom.style.filter='alpha(opacity:'+(cur+speed)+')'
        dom.style.opacity=(cur+speed)/100
      }else{
        dom.style[attr]=cur+speed+'px';
      }
    }
  },30)
}
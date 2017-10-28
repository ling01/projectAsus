$(function(){
//联系客服
 $("#qRcode1").mouseenter(
        function(){
          $("#qRcode2").css("display","block");
        }
        );
    $("#qRcode2").mouseleave(
        function(){
          $("#qRcode2").css("display","none");
        });
//全选与全不选
jQuery.fn.extend({
	 checkAll:function($checkbox){
     let $obj=this;
     this.click(function(){
     	$checkbox.each(function(){
     		this.checked=$obj.attr("checked");
     	});
     });
     $checkbox.click(function(){
     	let isCheckAll=true;
     	for(let i=0;i<$checkbox.length;i++)
     	{
     		if(!$checkbox[i].checked)
     		{
     			isCheckAll=false;
     			break;
     		}
     	}
     	$obj.attr("checked",isCheckAll);
     })
	}	 
	});
//动态产生购物车数据
 var str="";
	$.ajax({
		url: ' php/getShoppingCart.php',
		type: 'get',
		data: {
			vipName:getCookie("mobilePhone")
		},
		success:function (data) {
			console.log(data);
			var d=eval(data);
			
			for(let i=0;i<d.length;i++)
			{
				str+=
				 "<div class='form2Top'>"
			    		+"<ul>"
			    			+"<li><input type='checkbox' class='pitch'/></li>"
			    			+"<li class='picAndwen'>"
			    				+"<div class='pic-p'>"
			    					+"<a href='#'>"
			    						+"<img src='"+d[i].goodsImg+"'/>"
			    					+"</a>"
			    				+"</div>"
			    				+"<div class='pic-w'>"
			    					+"<a href='#'>"+d[i].goodsName+"</a>"
			    				    +"<span>商品颜色：灰色</span>"
			    				+"</div>" 
			    			+"</li>"
			    			+"<li class='cart-price'>"+Number(d[i].goodsPrice)+"</li>"
			    			+"<li class='cart-num'>"
			    				+"<div class='cart-numBox'>"
			    					+"<a href='javascript:' class='plus'>+</a>"
			    					+"<input type='text' value='"+Number(d[i].goodsCount)+"' class='num'/>"
			    					+"<a href='javascript:' class='minus'>-</a>"
			    				+"</div>"
			    			+"</li>"
			    			+"<li class='cart-discart'>0</li>"
			    			+"<li class='cart-point'>7999</li>"
			    			+"<li class='cart-sub'>'"+(Number(d[i].goodsPrice)*d[i].goodsCount)+"'</li>"
			    			+"<li class='cart-action'>"
			    				+"<a href='javascript:;' class='cart-action1' goodsid='"+d[i].goodsId+"'>×</a>"
			    			+"</li>"
			    		+"</ul>"
			    	+"</div>"
			    +"</div>"
				$(".dongtai").append(str);
			}
			plus();
			minus();
		}
	});
//点击按钮数量增加
function plus(){
		$(".plus").click(function(event){
		 var  n1=$(this).next(".num")[0].value;
		      n1++;
		      $(this).next(".num")[0].value=n1;
		 var y1=Number($(this).parent().parent().siblings(".cart-discart").html());
		 var p1=$(this).parent().parent().siblings(".cart-sub");
		 var p2=Number($(this).parent().parent().siblings(".cart-price").html());
		 p1[0].innerHTML=p2*n1-y1;
		});
	}
//点击按钮数量减少
function minus()
{
	$(".minus").click(function(event)
	{
	  if($(this).siblings(".num")[0].value<=1)
	  {
	  	alert("商品的最少数量为1");
	  }
	  else
	  {  
	     var n2= $(this).siblings(".num")[0].value;
	  	 n2--;
	  	 $(this).siblings(".num")[0].value=n2;
	  	 var p3=$(this).parent().parent().siblings(".cart-sub");
	     var p2=Number($(this).parent().parent().siblings(".cart-price").html());
	     p3[0].innerHTML=n2*p2;
	  }
 
    });
 }	
//删除购物车商品
$(".mid").on("click",".cart-action1",function()
{
	var goodsId=$(".cart-action1").attr("goodsid");
	console.log(goodsId);
	$.ajax({
		url:"php/deleteGoods.php",
		type:"get",
		data:{
				vipName:getCookie("mobilePhone"),
			    goodsId:goodsId
		     },
		success:function(data)
		{
			console.log(data);
				if(data=="1")
				{
					alert("删除成功");
					location.href="cartShopping.html"
				}else
				{
					alert("删除失败")
				}
	    }
	
	      });
});
})
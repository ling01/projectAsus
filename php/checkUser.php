<?php
 header("Content-type:text/html;charset=utf-8");
 //1.jie shou kehuduan de shuju 
 $mobilePhone=$_GET['mobilePhone'];
 //2chu li 
    //1).连接数据库服务器
    $con=mysql_connect("localhost","root","root");
    if(!$con)
    {
    	echo "-1";
    }
    else
    {
    	//2).选择数据库
    	mysql_select_db("asus",$con);
    	//3).zhi xing SQLyuju (zeng)
    	$sqlStr="select * from User where mobilePhoneId='".$mobilePhone." ' ";
    	//echo $sqlStr
    	$result=mysql_query($sqlStr,$con);
    	//close shu ju ku
    	mysql_close($con);
    	//if shujuku zhong chaxun  chu jieguo,biao shi yong hu ming yi cun zai
    	if(mysql_num_rows($result)==1)
    	{
    		echo "1";
    	}
    	else{
    		echo "0";
    	}
    }
     
?>
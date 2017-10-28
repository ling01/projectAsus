<?php
header("Content-type:text/html;charset=utf-8");
$mobilePhone=$_POST['mobilePhone'];
$pass = $_POST['pass'];
//1. jian li yu shu ju ku de lian jie 
$con=mysql_connect("localhost","root","root");
    if(!$con)
    {
    	echo "注册失败:服务器连接有问题".mysql.error();;
    }
    else{
    	//2).选择数据库
    	mysql_select_db("ASUS",$con);
    	//3).zhi xing SQLyuju (zeng)
    	$sqlStr="insert into User(mobilePhoneId,userPass) values('".$mobilePhone."','".$pass."')";
    	//echo $sqlStr
    	$result=mysql_query($sqlStr,$con);
    	//close shu ju ku
    	//if shujuku zhong chaxun  chu jieguo,biao shi yong hu ming yi cun zai
    	if($result==1)
    	{
    		echo "1";
    	}
    	else{
    		echo "0";
    	}
   mysql_close($con);
   }
?>
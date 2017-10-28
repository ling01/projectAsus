<?php
header("Content-type:text/html;charset=utf-8");
$mobilePhone=$_POST['mobilePhone'];
$pass=$_POST['pass'];
$con=mysql_connect("localhost","root","root");
if(!$con)
{
	echo "注册失败,服务器连接有问题".mysql.error();
}
else
{
	mysql_select_db("ASUS",$con);
	$sqlStr="select * from User where mobilePhoneId ='".$mobilePhone."' and userPass='".$pass."'";
	$result=mysql_query($sqlStr,$con);
	mysql_close($con);
	if(mysql_num_rows($result)==1){
			echo "1";
		}else{
			echo "0";
		}	
	}
?>
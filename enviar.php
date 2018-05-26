<?php
$email=strip_tags($_POST['Email']);
$password=strip_tags($_POST['Password']);
if(strlen($email)>0 && strlen($password)>0){
	echo 1;
}
else
{
	echo 99;
}
?>
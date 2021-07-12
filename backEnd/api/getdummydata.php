<?php
header('Access-Control-Allow-Origin: *');

class User{
    public $name="";
    public $id="";
    public $email = "";
    public $post="";
}
$data = array();

$user = new User();
$user->name = "David";
$user->id = "9000";
$user->email = "dacovid@gmail.com";
$user->post = "my post lorem ipsum";
array_push($data, $user);

$user = new User();
$user->name = "Aali";
$user->id = "DC23100";
$user->email = "ali@gmail.com";
$user->post = "Anothetr post lorem dot";
array_push($data, $user);

echo json_encode($data);
?>
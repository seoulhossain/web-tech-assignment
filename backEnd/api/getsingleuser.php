<?php
// header('Access-Control-Allow-Origin: *');
// header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE");

require 'db.php';

// $id = $request->getAttribute('singleuserid');
// $id='222';
$id= $_GET["id"];
$sql = "SELECT * FROM user WHERE id = $id";

try{
    // Get DB Object
    $db = new db();
    // Connect
    $db = $db->connect();

    $stmt = $db->query($sql);
    $user = $stmt->fetch(PDO::FETCH_OBJ);
    $db = null;
    echo json_encode($user);
} catch(PDOException $e){
    $data = array(
        "status" => "fail"
    );
    echo json_encode($data);
}
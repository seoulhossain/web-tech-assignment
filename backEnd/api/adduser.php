<?php
// header('Access-Control-Allow-Origin: *');
// header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE");

require 'db.php';


$name = $_POST["name"];
$id = $_POST["postuserid"];
$email = $_POST["email"];
$post = $_POST["post"];

try {
    $sql = "INSERT INTO user (name,id,email,post) VALUES (:name,:id,:email,:post)";
    $db = new db();
    // Connect
    $db = $db->connect();
    $stmt = $db->prepare($sql);
    $stmt->bindValue(':name', $name);
    $stmt->bindValue(':id', $id);
    $stmt->bindValue(':email', $email);
    $stmt->bindValue(':post', $post);

    $stmt->execute();
    $count = $stmt->rowCount();
    $db = null;

    $data = array(
        "status" => "success",
        "rowcount" =>$count
    );
    echo json_encode($data);
} catch (PDOException $e) {
    $data = array(
        "status" => "fail"
    );
    echo json_encode($data);
}

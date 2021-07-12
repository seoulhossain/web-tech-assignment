<?php
// header('Access-Control-Allow-Origin: *');
// header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE");

require 'db.php';
// $id = '2';
$id = $_GET["id"];
// $id = $request->getAttribute('id');
$sql = "DELETE FROM user WHERE id = $id";

try {
    // Get DB Object
    $db = new db();
    // Connect
    $db = $db->connect();

    $stmt = $db->prepare($sql);
    $stmt->execute();
    $count = $stmt->rowCount();

    $db = null;
    $data = array(
        "rowAffected" => $count,
        "status" => "success"
    );
    echo json_encode($data);
} catch (PDOException $e) {
    $data = array(
        "status" => "fail"
    );
    echo json_encode($data);
}

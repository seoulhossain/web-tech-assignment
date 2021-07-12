<?php
// header('Access-Control-Allow-Origin: *');
// header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE");

require 'db.php';


    $name = $request->getParam('name');
    $id = $_GET["id"];
    // $request->getAttribute('id');
    $email = $request->getParam('email');
    $post = $request->getParam('post');

    $sql = "UPDATE customers SET
				name 	= :name,
                email		= :email,
                post 	= :post
			WHERE id = $id";

    try{
        // Get DB Object
        $db = new db();
        // Connect
        $db = $db->connect();

        $stmt = $db->prepare($sql);

        $stmt->bindParam(':name',$name);
        $stmt->bindParam(':email',$email);
        $stmt->bindParam(':post',$post);

        $stmt->execute();
        $count = $stmt->rowCount();

        $data = array(
            "rowAffected" => $count,
            "status" => "success"
        );
        echo json_encode($data);
    
    } catch(PDOException $e){
        $data = array(
            "status" => "fail"
        );
        echo json_encode($data);
        }

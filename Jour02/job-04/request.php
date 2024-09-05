<?php
    function ConnexionDataBase() : ?PDO {
        $_HOST = "localhost:3307";
        $_PWD = "";
        $_USER = "root";
        $_NAMEDB = "laplateforme";

        try {
            $_db = new PDO("mysql:host=$_HOST;dbname=$_NAMEDB;charset=utf8",$_USER,$_PWD);
            $_db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // Pour les caractères spéciaux
            $_db->exec("SET NAMES 'utf8mb4'");
            return $_db;
        } catch(PDOException $e){
            return null;
        }
    }

    function my_insert_student(int $grade_id, string $email, string $fullname, DateTime $birthdate, string $gender) : bool {
        try {
            $db = ConnexionDataBase();
            if($db === null){
                throw new Exception("Erreur de connexion à la base de données.");
            }
            $query = $db -> prepare("INSERT INTO student (grade_id, email, fullname, birthdate, gender) VALUES(?,?,?,?,?)");
            $query -> execute([$grade_id, $email, $fullname, $birthdate->format("Y-m-d"), $gender]);
            return true;    
        } catch(Exception $e){
            return false;
        }
        
        
    }

    if($_SERVER["REQUEST_METHOD"] === "POST"){
        $birthdate = DateTime::createFromFormat('Y-m-d', $_POST['birthday']);
        $res = my_insert_student($_POST['grade'],$_POST['mail'],$_POST['fullname'],$birthdate,$_POST['gender']);
        if($res){
            $send = ["msg" => "requete envoyé ! :)"];
        } else {
            $send = ["msg" => "erreur lors de l'envoie a la BDD :( ..."];
        }
        echo json_encode($send);
    }
?>
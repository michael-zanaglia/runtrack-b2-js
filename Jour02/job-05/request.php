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

    function my_search_student(string $email) : array {
        try {
            $db = ConnexionDataBase();
            if($db === null){
                throw new Exception("Erreur de connexion à la base de données.");
            }
            $query = $db -> prepare("SELECT * FROM student WHERE email = ?");
            $query -> execute([$email]);
            return $query->fetchAll(PDO::FETCH_ASSOC);    
        } catch(Exception $e){
            return [];
        }
        
        
    }

    if($_SERVER["REQUEST_METHOD"] === "GET"){
        $res = my_search_student($_GET['mail']);
        if(count($res) > 0){
            $send = ["msg" => $res];
        } else {
            $send = ["msg" => "erreur lors de la requete a la BDD :( ..."];
        }
        echo json_encode($send);
    }
?>
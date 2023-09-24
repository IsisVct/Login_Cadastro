<?php
    $dbHost = 'Localhost';
    $dbUserName = 'root';
    $dbPassword = '';
    $dbName = 'formulario';
    
    $conexao = new mysqli($dbHost, $dbUserName, $dbPassword, $dbName);

    echo"abacate"
;        if($conexao->conenct_errno){
        echo"erro";
    }
    else{
        echo "Conexão efetuada com sucesso";
    }
?>
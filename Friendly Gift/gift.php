<?php

  $dbHost = 'Localhost';
  $dbUsername = 'root';
  $dbPassword = 'mmv071130';
  $dbName = 'frendly gift';

  $conexao = new mysqli($dbHost,$dbUsername,$dbPassword,$dbName);

  if($conexao->connect_errno);
  {
    echo "Erro";
  }
  else
  {
    echo "Conexão efetuada com sucesso";
  }

?>
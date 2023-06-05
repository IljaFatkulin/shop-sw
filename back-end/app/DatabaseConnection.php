<?php

namespace App;

abstract class DatabaseConnection
{
//    private string $servername = '127.0.0.1';
    private string $servername = 'localhost';
//    private string $username = 'user';
    private string $username = 'root';
//    private string $password = '%$8Wf486v4AWv3';
    private string $password = 'root';
    private string $dbname = 'shop_sw';

    protected function mysqli(): false|\mysqli
    {
        return new \mysqli($this->servername, $this->username, $this->password, $this->dbname);
    }
}
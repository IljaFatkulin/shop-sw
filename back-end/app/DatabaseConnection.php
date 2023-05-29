<?php

namespace App;

abstract class DatabaseConnection
{
    private string $servername = 'localhost';
    private string $username = 'root';
    private string $password = 'root';
    private string $dbname = 'shop_sw';

    protected function connection(): false|\mysqli
    {
        return mysqli_connect($this->servername, $this->username, $this->password, $this->dbname);
    }
}
<?php

namespace App;

abstract class DatabaseConnection
{
    private string $servername = 'localhost';
    private string $username = 'root';
    private string $password = 'root';
    private string $dbname = 'shop_sw';

    protected function mysqli(): false|\mysqli
    {
        return new \mysqli($this->servername, $this->username, $this->password, $this->dbname);
    }
}
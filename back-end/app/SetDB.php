<?php

namespace App;

class SetDB extends DatabaseConnection
{
    // Inserting into database
    public function addProduct($sku, $name, $price, $productType)
    {
        $sql = "INSERT INTO products (sku, name, price, productType)
                VALUES ('$sku', '$name', '$price', '$productType')";

        $this->connection()->query($sql);
    }

    public function addBook($id, $weight)
    {
        $sql = "INSERT INTO books (id, weight)
                VALUES ('$id', '$weight')";
        $this->connection()->query($sql);
    }

    public function addDvd($id, $size)
    {
        $sql = "INSERT INTO dvd (id, size)
                VALUES ('$id', '$size')";
        $this->connection()->query($sql);
    }

    public function addFurniture($id, $height, $width, $length)
    {
        $sql = "INSERT INTO furnitures (id, height, width, length)
                VALUES ('$id', '$height', '$width', '$length')";
        $this->connection()->query($sql);
    }

    // Deleting from database
    public function deleteProduct(array $array)
    {
        foreach($array as $id)
        {
            $sql = "DELETE FROM products WHERE id = '$id'";
            $this->connection()->query($sql);
        }
    }

}
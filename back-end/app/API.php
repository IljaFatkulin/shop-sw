<?php

namespace App;

class API
{
    private string $method;

    public function __construct()
    {
        $this->method = $_SERVER['REQUEST_METHOD'];
    }

    public function start()
    {
        switch ($this->method)
        {
            case "GET":
                $getDB = new \App\GetDB();

                if(isset($_GET['q']) && $_GET['q'] === "sku") {
                    $skuList = $getDB->getSkuList();
                    echo json_encode($skuList);
                } else {
                    $products = $getDB->getAllProducts();
                    echo json_encode($products);
                }
                break;
            case "POST":
                $request_body = file_get_contents('php://input');
                $data = json_decode($request_body, true);

                $setDB = new \App\SetDB();
                $setDB->addProduct($data);
                break;
            case "DELETE":
                $data = $_GET['q'];
                $arr = explode(',', $data);
                $setDB = new SetDB();
                $setDB->deleteProduct($arr);
                break;
        }
    }

}

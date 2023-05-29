<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Credentials: true');
//header('Content-Type: json/application');
// PRIVET IZ GITA 2

require_once('../vendor/autoload.php');

$API = new \App\API();

$API->start();



/*
if($method === 'GET')
{
    $getDB = new \App\GetDB();

    $products = $getDB->getAllProducts();

    $q = $_GET['q'];
    $params = explode('/', $q);

    $type = $params[0];

    if(isset($params[1]))
    {
        $id = $params[1];
    }

    if($type === 'products')
    {
        if(isset($id))
        {
            if(array_key_exists($id, $products)){
                echo json_encode($products[$id]);
            } else {
                http_response_code(404);
                $res = [
                    "status" => false,
                    "message" => "Post not found"
                ];
                echo json_encode($res);
            }
        } else {
            echo json_encode($products);
        }
    }
} else if($method === 'POST')
{
    $data = $_POST;

    $setDB = new \App\SetDB();
    $setDB->addProduct($data['sku'], $data['name'], $data['price'], $data['productType']);

    http_response_code(201);
}



echo json_encode($products);

$productsList = [];

foreach($products as $id => $product)
{
    foreach ($product as $key => $value)
    {
        $productsList[$id][$key] = $value;
    }
}

print_r($productsList);


//error_reporting(0);


require_once('../vendor/autoload.php');

$getDB = new \App\GetDB();
$setDB = new \App\SetDB();

$products = $getDB->getAllProducts();
//foreach($products as $product)
//{
//    foreach ($product as $value)
//    {
//        echo $value . ' ';
//    }
//    echo '|';
//}

echo file_get_contents('test.txt');

if(isset($_POST['data']))
{
    $json = $_POST['data'];
    $obj = json_decode($json);
    $file = fopen('test.txt', 'w');
    $text = $obj->{'firstname'} . ' ' . $obj->{'lastname'};
    fwrite($file, $text);
    fclose($file);
}

$setDB->deleteProduct([5]);

<script>
    if ( window.history.replaceState ) {
        window.history.replaceState( null, null, window.location.href );
    }
</script>
*/

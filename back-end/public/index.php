<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Credentials: true');

require_once('../vendor/autoload.php');

// Program start
$API = new \App\API();
$API->start();

<?php

use Phalcon\Mvc\Micro;
use Phalcon\Http\Response;

$app = new Micro();

// Get addition result of two numbers
$app->get(
    "/api/add/{num1:[0-9]+}/{num2:[0-9]+}",
    function ($num1, $num2) use ($app) {
        // Create a response
        $response = new Response();

        if ($num1 and $num2) {
            $response->setJsonContent(
                [
                    "status"    => "PROCESSED",
                    "data"      => [
                        "result"    => $num1 + $num2
                    ]
                ]
            );
        }

        return $response;
    }
);

// Get subtraction result of two numbers
$app->get(
    "/api/subtract/{num1:[0-9]+}/{num2:[0-9]+}",
    function ($num1, $num2) use ($app) {
        // Create a response
        $response = new Response();

        if ($num1 and $num2) {
            $response->setJsonContent(
                [
                    "status"    => "PROCESSED",
                    "data"      => [
                        "result"    => $num1 - $num2
                    ]
                ]
            );
        }

        return $response;
    }
);

// Get multiplication result of two numbers
$app->get(
    "/api/multiply/{num1:[0-9]+}/{num2:[0-9]+}",
    function ($num1, $num2) use ($app) {
        // Create a response
        $response = new Response();

        if ($num1 and $num2) {
            $response->setJsonContent(
                [
                    "status"    => "PROCESSED",
                    "data"      => [
                        "result"    => $num1 * $num2
                    ]
                ]
            );
        }

        return $response;
    }
);

// Get division result of two numbers
$app->get(
    "/api/divide/{num1:[0-9]+}/{num2:[0-9]+}",
    function ($num1, $num2) use ($app) {
        // Create a response
        $response = new Response();

        if ($num1 and $num2) {
            $response->setJsonContent(
                [
                    "status"    => "PROCESSED",
                    "data"      => [
                        "result"    => $num1 / $num2
                    ]
                ]
            );
        }

        return $response;
    }
);


// Route not found
$app->notFound(
    function () use ($app) {
        $app->response->setStatusCode(404, "Not Found");

        $app->response->sendHeaders();

        echo "This is crazy, but this page was not found!";
    }
);

$app->handle();
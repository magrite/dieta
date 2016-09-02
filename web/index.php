<?php

// web/index.php
require_once __DIR__.'/../vendor/autoload.php';

$app = new Silex\Application();

$app->get('/hello/{name}', function ($name) use ($app) {
    return '<script src="/dist/debug/all.js"></script>Hello '.$app->escape($name).'<script src="//localhost:35729/livereload.js"></script>';
});

$app->run();

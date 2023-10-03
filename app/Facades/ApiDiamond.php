<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

class ApiDiamond extends Facade {
    protected static function getFacadeAccessor() {
        return 'api-diamond';
    }
}

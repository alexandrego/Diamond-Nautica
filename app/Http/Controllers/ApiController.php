<?php

namespace App\Http\Controllers;

use App\Facades\ApiDiamond;

class ApiController extends Controller {
    public function __invoke() {
        return ApiDiamond::get('/products')->json();
        // return Http::get('https://diamondnautica.com.br/wp-json/diamondnautica/v2/products')->json();
    }
}

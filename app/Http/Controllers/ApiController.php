<?php

namespace App\Http\Controllers;

use App\Facades\ApiDiamond;
use Illuminate\Http\Request;

class ApiController extends Controller {
    public function __invoke() {
        return ApiDiamond::get('/products')->json();
        // return Http::get('https://diamondnautica.com.br/wp-json/diamondnautica/v2/products')->json();
    }

    public function search(Request $request) {
        $query = $request->get('q');
        return ApiDiamond::get('/products', ['search' => $query])->json();
    }
}

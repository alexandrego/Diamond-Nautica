<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class RoutesController extends Controller
{
    public function Welcome()
    {
        return view('welcome');
    }

    public function Home(Request $request)
    {
        $url = 'https://diamondnautica.com.br/wp-json/diamondnautica/v2/products';

        $params = array(
            'page' => $request->get('page'),
            'per_page' => $request->get('per_page')
        );
        // dd($url, $params);

        $response = Http::get($url, $params);
        $products = json_decode($response->body(), true);
        // dd($products);

        return view('layouts/home', compact('products'));
    }

    public function Products(Request $request)
    {
        $url = 'https://diamondnautica.com.br/wp-json/diamondnautica/v2/products';

        $params = array(
            'page' => $request->get('page'),
            'per_page' => $request->get('per_page')
        );

        $response = Http::get($url, $params);
        $products = json_decode($response->body(), true);

        // return view('products.index', compact('products'));
        return view('layouts/products', compact('products'));
    }
}

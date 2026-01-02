<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ApiController extends Controller
{
    public function __invoke(Request $request)
    {
        $query = $request->get('q');
        $page = $request->get('page', 1);
        $per_page = $request->get('per_page', 10);

        if (!$query) {
            return response()->json(['products' => [], 'total_pages' => 0]);
        }

        // Call WordPress API
        $url = 'https://diamondnautica.com.br/wp-json/diamondnautica/v2/search?q=' . urlencode($query) . '&page=' . $page . '&per_page=' . $per_page;

        $response = Http::get($url);

        if ($response->failed()) {
            return response()->json(['error' => 'Unable to fetch data from WordPress API'], 500);
        }

        $data = $response->json();
        $totalPages = $response->header('X-WP-TotalPages', 1);

        return response()->json(['products' => $data, 'total_pages' => (int)$totalPages]);
    }
}

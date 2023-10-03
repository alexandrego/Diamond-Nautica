<?php

 namespace App\Helpers;

 use Illuminate\Support\Facades\Http;

 class ApiDiamond {
    private $api;
    public function __construct() {
        $this->api = Http::withHeaders([
            'Authorization' => 'Bearer ',
        ]);
    }

    /**
     * @return \Illuminate\Http\Client\PendingRequest
     */
    public function getApi(): \Illuminate\Http\Client\PendingRequest {
        return $this->api;
    }
 }

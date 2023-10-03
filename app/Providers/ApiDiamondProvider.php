<?php

namespace App\Providers;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\ServiceProvider;

class ApiDiamondProvider extends ServiceProvider {
     /**
     * Register any application services.
     *
     * @return void
     */
    public function register() {
        $this->app->bind('api-diamond', function() {
            return Http::withOptions([
                'verify' => false,
                'base_uri' => 'https://diamondnautica.com.br/wp-json/diamondnautica/v2/'
            ]);
        });
    }
}

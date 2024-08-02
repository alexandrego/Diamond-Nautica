@extends('layouts.main')
@extends('layouts.header')

@section('title', 'Produtos')

{{-- @section('content')
    <h1>Página De Produtos</h1>
    <a href="/">Home</a>

    <h2 id="demo"></h2>
@endsection --}}

@section('content')

    {{-- Mostra o efeito de carregando --}}
    <div id="loading" style="display:none;text-align:center;justify-content:center;font-size:50px;padding:20px 0;background-color:#130a8f5b;
    animation:slide-in 0.5s ease-out;position:fixed;width:100%;height:100vh;z-index:9;">
        <i class="fa-solid fa-spinner fa-spin-pulse" style="color: #fff;"></i>
    </div>

    <div id="pagina-produto" class="pagina-produto">
        {{-- <h1>{{ $product['titulo'] }}</h1> --}}
        <div class="btn-voltar" onclick="handleBackClick()">
            {{-- <a href="#" onclick="history.back(); return false;"> --}}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#120A8F" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg>
                Voltar
            {{-- </a> --}}
        </div>

        <!-- Carrossel de Imagens -->
        <div class="product-carousel">
            @foreach ($product['imagens'] as $imagem)
                <div class="product-images">
                    <img src="{{ $imagem }}" alt="Imagem do Produto">
                </div>
            @endforeach
        </div>

        <div class="product-price">
            R$ {{ number_format($product['preco'], 2, ',', '.') }}
        </div>

        <!-- Exibir a descrição do produto com HTML -->
        <div>{!! $product['descricao'] !!}</div>
    </div>

    <!-- Inicializando o Slick Carousel -->
    <script type="text/javascript">
        $(document).ready(function(){
            $('.product-carousel').slick({
                slidesToShow: 1, // Mostra 1 imagem por vez
                slidesToScroll: 1,
                dots: true, // Mostra os pontos de navegação
                infinite: true,
                speed: 300,
                adaptiveHeight: false,
                prevArrow: '<button type="button" class="slick-prev">Anterior</button>',
                nextArrow: '<button type="button" class="slick-next">Próximo</button>',
                responsive: [
                    {
                        breakpoint: 768, // Ajustes para mobile
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                        }
                    }
                ]
            });
        });
    </script>

@endsection

{{-- <script>
    function myGreeting() {
     document.getElementById("demo").innerHTML = "Funciona!"
    }
    const splashscreen = setTimeout(myGreeting, 2000);

    const splash = setTimeout(function() {
        window.location.href = "/home";
    }, 4000);
</script> --}}

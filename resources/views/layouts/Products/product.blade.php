@extends('layouts.main')
@extends('layouts.header')

@section('title', 'Produtos')

{{-- @section('content')
    <h1>Página De Produtos</h1>
    <a href="/">Home</a>

    <h2 id="demo"></h2>
@endsection --}}

@section('content')
    <h1>{{ $product['titulo'] }}</h1>

<!-- Carrossel de Imagens -->
<div class="product-carousel">
    @foreach ($product['imagens'] as $imagem)
        <div>
            <img src="{{ $imagem }}" alt="Imagem do Produto" style="width: 100%; height: auto;">
        </div>
    @endforeach
</div>

<!-- Exibir a descrição do produto com HTML -->
<div>{!! $product['descricao'] !!}</div>

<!-- Inicializando o Slick Carousel -->
<script type="text/javascript">
    $(document).ready(function(){
        $('.product-carousel').slick({
            slidesToShow: 1, // Mostra 1 imagem por vez
            slidesToScroll: 1,
            dots: true, // Mostra os pontos de navegação
            infinite: true,
            speed: 300,
            adaptiveHeight: true,
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

    <h2>{{ $product['preco'] }}</h2>

    {{-- <p>{{ strip_tags($product['descricao']) }}</p> --}}
    <!-- Exibir a descrição do produto com HTML -->
    <div>{!! $product['descricao'] !!}</div>

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

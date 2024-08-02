@extends('layouts.main')
@extends('layouts.header')

@section('title', 'Diamond Náutica')

@section('content')
    <div id="pagina-home" class="pagina-home">
        {{-- Mostra o efeito de carregando --}}
        <div id="loading" style="display:none;text-align:center;justify-content:center;font-size:50px;padding:20px 0;background-color:#130a8f5b;
        animation:slide-in 0.5s ease-out;position:fixed;width:100%;height:100vh;z-index:9;">
            <i class="fa-solid fa-spinner fa-spin-pulse" style="color: #fff;"></i>
        </div>

        <!-- Carousel de Imagens -->
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="carouselSlide">
                            <a href="https://diamondnautica.com.br/?product_cat=0&s=copo+termico&post_type=product">
                                <div class="elementosCarouselSlide">
                                    <div class="elementoCarouselSlide">
                                        <img src="https://diamondnautica.com.br/wp-content/uploads/2023/09/img-bote-slider.webp" class="imgCarouselSlide" />
                                    </div>
                                    <div class="elementoCarouselSlide">
                                        <p style="color:#FFF;font-size:18px;">Botes Infláveis</p>
                                        <p>F200 - F240</p>
                                        <p style="font-size:10px;">A pronta entrega</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="carouselSlide">
                            <a href="https://diamondnautica.com.br/?product_cat=0&s=geladeira&post_type=product">
                                <div class="elementosCarouselSlide">
                                    <div class="elementoCarouselSlide">
                                        <img src="https://diamondnautica.com.br/wp-content/uploads/2022/07/banner-geladeira-site.webp" style="width:65%;" />
                                    </div>
                                    <div class="elementoCarouselSlide">
                                        <p style="color:#FFF;font-size:14px;">Geladeiras Portateis</p>
                                        <p>Elétrica Quadrivolt</p>
                                        <p style="font-size:10px;">Diversos Tamanhos</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="carouselSlide">
                            <a href="#">
                                <div class="elementosCarouselSlide">
                                    <div>
                                        <img src="https://diamondnautica.com.br/wp-content/uploads/2023/07/paypal-12-x-sem-juros.webp" style="width:100%;" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        <!-- Fim Carousel de Imagens -->

        <!-- Produtos -->
            <div class="produtosHome">
                @foreach($products as $product)
                    <a href="{{ route('product.show', ['id' => $product['product_id']]) }}" onclick="handleProductClick()">
                        <div class="produtoUnico">
                            <div class="imgProduto">
                                <img src="{{ $product['product_img'] }}"
                                onerror="retryLoadImage(this, '/src/assets/img/logo.webp', 3);">
                            </div>
                            <div class="tituloProduto">
                                {{ $product['product_title'] }}
                            </div>
                            <div class="precoProduto">
                                R$ {{ number_format($product['product_price'], 2, ',', '.') }}
                            </div>
                        </div>
                    </a>
                @endforeach
            </div>

            <script>
                function retryLoadImage(imgElement, defaultSrc, attempts) {
                    if (attempts <= 0) {
                        // Se as tentativas acabaram, define a imagem padrão
                        imgElement.src = defaultSrc;
                        return;
                    }

                    // Tenta carregar a imagem novamente
                    const imgSrc = imgElement.src;

                    // Define um novo evento de erro
                    imgElement.onerror = function() {
                        // Reduz o número de tentativas e tenta novamente
                        imgElement.src = imgSrc; // Tente carregar a mesma imagem novamente
                        setTimeout(() => retryLoadImage(imgElement, defaultSrc, attempts - 1), 1500); // Tenta novamente após 1 segundo
                    };

                    // Para garantir que o evento de erro seja acionado, altere a src temporariamente
                    imgElement.src = ''; // Limpa a src para disparar o evento de erro
                    imgElement.src = imgSrc; // Reatribui a src original
                }
            </script>
        <!-- Fim Produtos -->
    </div>
@endsection

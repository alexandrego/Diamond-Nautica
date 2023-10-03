@extends('layouts.main')
@extends('layouts.header')

@section('title', 'Diamond Náutica')

@section('content')
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
        <a href="/products">Products</a>
    <!-- Fim Produtos -->
@endsection

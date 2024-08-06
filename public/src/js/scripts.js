console.log('Diamond Náutica - Arquivo JS funcionando!');

// Loading
$(document).ready(function() {
    let isDragging = false;
    let startY = 0;

    $(window).on('touchstart', function(event) {
        startY = event.originalEvent.touches[0].clientY;
        isDragging = false;
    });

    $(window).on('touchmove', function(event) {
        const currentY = event.originalEvent.touches[0].clientY;
        const scrollTop = $(this).scrollTop();

        if (scrollTop === 0 && currentY > startY + 80) { // Verifica se está no topo e arrastou para baixo
            isDragging = true;
            event.preventDefault(); // Previne o scroll padrão
            $('body').css('transform', 'translateY(' + (currentY - startY) + 'px)'); // Estica a página
        }
    });

    $(window).on('touchend', function() {
        if (isDragging) {
            showLoading();
            $('body').css('transform', 'translateY(0)'); // Reseta a transformação antes de recarregar
            // Simula uma atualização de página
            setTimeout(() => {
                location.reload(); // Recarrega a página
            }, 1000); // 1 segundo de espera
        }
    });

    function showLoading() {
        $('#loading').show();
    }
});

// Indo para a página do produto
function handleProductClick() {
    let el = document.getElementById('pagina-home');

    el.innerHTML = `
        <!-- Skeleton Loader -->
        <div id="skeleton" class="skeleton skeleton-product-home">
            <div class="skeleton-item-back"></div>
            <div class="skeleton-item-img"></div>
            <div class="skeleton-item-price"></div>
            <div class="skeleton-item-descricao"></div>
            <div class="skeleton-item-descricao"></div>
            <div class="skeleton-item-descricao"></div>
            <div class="skeleton-item-descricao"></div>
            <div class="skeleton-item-descricao"></div>
            <div class="skeleton-item-descricao"></div>
            <div class="skeleton-item-descricao"></div>
            <div class="skeleton-item-descricao"></div>
            <div class="skeleton-item-descricao"></div>
        </div>
    `;

    // Simular um atraso antes de voltar (ajuste o tempo conforme necessário)
    setTimeout(function() {
        // Remover o efeito skeleton
        const skeleton = document.getElementById('skeleton');
        if (skeleton) {
            skeleton.style.display = 'none'; // Oculta o skeleton
        }
        // Adiciona o conteúdo real
        document.getElementById('pagina-home').innerHTML = `

        {{-- Mostra o efeito de carregando --}}
            <div id="loading" style="display:none;text-align:center;justify-content:center;font-size:50px;padding:20px 0;background-color:#130a8f5b;
            animation:slide-in 0.5s ease-out;position:fixed;width:100%;height:100vh;z-index:9;">
                <i class="fa-solid fa-spinner fa-spin-pulse" style="color: #fff;"></i>
            </div>
        {{-- Mostra o efeito de carregando --}}

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

        {{-- Mostra pontos catagorias --}}
            <div class="categorias">
                {{-- Base e Verdugo --}}
                <div class="categoria">
                    <div class="categoriaImg">
                        <img src="/src/assets/img/verdugo.svg"/>
                    </div>
                    <div class="categoriaNome">
                        Base e Verdugo
                    </div>
                </div>

                {{-- Outro 1 --}}
                <div class="categoria">
                    <div class="categoriaImg">
                        <img src="/src/assets/img/verdugo.svg"/>
                    </div>
                    <div class="categoriaNome">
                        Outro 1
                    </div>
                </div>

                {{-- Outro 2 --}}
                <div class="categoria">
                    <div class="categoriaImg">
                        <img src="/src/assets/img/verdugo.svg"/>
                    </div>
                    <div class="categoriaNome">
                        Outro 2
                    </div>
                </div>

                {{-- Outro 3 --}}
                <div class="categoria">
                    <div class="categoriaImg">
                        <img src="/src/assets/img/verdugo.svg"/>
                    </div>
                    <div class="categoriaNome">
                        Outro 3
                    </div>
                </div>

                {{-- Outro 4 --}}
                <div class="categoria">
                    <div class="categoriaImg">
                        <img src="/src/assets/img/verdugo.svg"/>
                    </div>
                    <div class="categoriaNome">
                        Outro 4
                    </div>
                </div>

                {{-- Outro 5 --}}
                <div class="categoria">
                    <div class="categoriaImg">
                        <img src="/src/assets/img/verdugo.svg"/>
                    </div>
                    <div class="categoriaNome">
                        Outro 5
                    </div>
                </div>

                {{-- Outro 6 --}}
                <div class="categoria">
                    <div class="categoriaImg">
                        <img src="/src/assets/img/verdugo.svg"/>
                    </div>
                    <div class="categoriaNome">
                        Outro 6
                    </div>
                </div>

                {{-- Outro 7 --}}
                <div class="categoria">
                    <div class="categoriaImg">
                        <img src="/src/assets/img/verdugo.svg"/>
                    </div>
                    <div class="categoriaNome">
                        Outro 7
                    </div>
                </div>

                {{-- Outro 8 --}}
                <div class="categoria">
                    <div class="categoriaImg">
                        <img src="/src/assets/img/verdugo.svg"/>
                    </div>
                    <div class="categoriaNome">
                        Outro 8
                    </div>
                </div>

                {{-- Outro 9 --}}
                <div class="categoria">
                    <div class="categoriaImg">
                        <img src="/src/assets/img/verdugo.svg"/>
                    </div>
                    <div class="categoriaNome">
                        Outro 9
                    </div>
                </div>

                {{-- Outro 10 --}}
                <div class="categoria">
                    <div class="categoriaImg">
                        <img src="/src/assets/img/verdugo.svg"/>
                    </div>
                    <div class="categoriaNome">
                        Outro 10
                    </div>
                </div>
            </div>

            <script>
                const categorias = document.querySelector('.categorias');
                const categoriaElements = document.querySelectorAll('.categoria');

                let isDown = false;
                let startX;
                let scrollLeft;

                categorias.addEventListener('mousedown', (e) => {
                    isDown = true;
                    categorias.classList.add('active');
                    startX = e.pageX - categorias.offsetLeft;
                    scrollLeft = categorias.scrollLeft;
                });

                categorias.addEventListener('mouseleave', () => {
                    isDown = false;
                    categorias.classList.remove('active');
                    removeStretchEffects();
                });

                categorias.addEventListener('mouseup', () => {
                    isDown = false;
                    categorias.classList.remove('active');
                    removeStretchEffects();
                });

                categorias.addEventListener('mousemove', (e) => {
                    if (!isDown) return; // Stop the fn from running
                    e.preventDefault();
                    const x = e.pageX - categorias.offsetLeft;
                    const walk = (x - startX) * 2; // The multiplier controls the scroll speed
                    categorias.scrollLeft = scrollLeft - walk;

                    // Verifica se está próximo do início ou do fim
                    if (categorias.scrollLeft === 0) {
                        categoriaElements[0].classList.add('stretch'); // Efeito de esticar na primeira div
                    } else {
                        categoriaElements[0].classList.remove('stretch');
                    }

                    if (categorias.scrollLeft + categorias.clientWidth >= categorias.scrollWidth) {
                        categoriaElements[categoriaElements.length - 1].classList.add('stretch'); // Efeito de esticar na última div
                    } else {
                        categoriaElements[categoriaElements.length - 1].classList.remove('stretch');
                    }
                });

                function removeStretchEffects() {
                    categoriaElements[0].classList.remove('stretch');
                    categoriaElements[categoriaElements.length - 1].classList.remove('stretch');
                }
            </script>
            {{-- Mostra pontos catagorias --}}

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
        `;
    }, 4500); // 1000 ms = 1 segundo
}

// Voltando da página de produtos
function handleBackClick() {
    let el = document.getElementById('pagina-produto');

    el.innerHTML = `
        <!-- Skeleton Loader -->
        <div id="skeleton" class="skeleton">

            <div class="skeleton-item-slide"></div>

            <div class="skeleton-product">
                <div class="skeleton-item"></div>
                <div class="skeleton-item"></div>
                <div class="skeleton-item"></div>
                <div class="skeleton-item"></div>
            </div>
        </div>
    `;

    // Simular um atraso antes de voltar (ajuste o tempo conforme necessário)
    setTimeout(function() {
        history.back(); // Voltar à página anterior
    }, 1000); // 1000 ms = 1 segundo
}

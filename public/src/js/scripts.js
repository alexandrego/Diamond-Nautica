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

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // Verifica se é uma navegação de volta
    // if (isBack) {
    //     // Atualiza o histórico do navegador
    //     // window.history.replaceState({}, '', url);
    //     location.reload(); // Recarrega a página
    // }

    // Simular um atraso antes de voltar (ajuste o tempo conforme necessário)
    setTimeout(function() {
        // Remover o efeito skeleton
        const skeleton = document.getElementById('skeleton');
        if (skeleton) {
            skeleton.style.display = 'none'; // Oculta o skeleton
        }
        location.reload(); // Recarrega a página
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

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // Simular um atraso antes de voltar (ajuste o tempo conforme necessário)
    setTimeout(function() {
        window.history.back(); // Voltar à página anterior
    }, 1000); // 1000 ms = 1 segundo
}

// Search functionality
function loadSearchResults(query) {
    const searchContainer = document.getElementById('search-results-container');

    // Show skeleton loading
    searchContainer.innerHTML = `
        <div class="search-skeleton">
            ${Array(8).fill().map(() => `
                <div class="search-skeleton-item">
                    <div class="search-skeleton-img"></div>
                    <div class="search-skeleton-title"></div>
                    <div class="search-skeleton-price"></div>
                </div>
            `).join('')}
        </div>
    `;

    // Fetch search results
    fetch(`/api/search?q=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(products => {
            if (products && products.length > 0) {
                searchContainer.innerHTML = `
                    <div class="search-results">
                        ${products.map(product => `
                            <a href="/product/${product.product_id}" class="search-result-item">
                                <img src="${product.product_img}" alt="${product.product_title}" class="search-result-img" onerror="this.src='/src/assets/img/logo.webp'">
                                <h3 class="search-result-title">${product.product_title}</h3>
                                <p class="search-result-price">R$ ${parseFloat(product.product_price).toFixed(2).replace('.', ',')}</p>
                            </a>
                        `).join('')}
                    </div>
                `;
            } else {
                searchContainer.innerHTML = `
                    <div class="no-results">
                        <p>Nenhum produto encontrado para "${query}"</p>
                    </div>
                `;
            }
        })
        .catch(error => {
            console.error('Erro ao buscar produtos:', error);
            searchContainer.innerHTML = `
                <div class="no-results">
                    <p>Erro ao carregar resultados. Tente novamente.</p>
                </div>
            `;
        });
}

// Initialize search on page load if on search page
document.addEventListener('DOMContentLoaded', function() {
    const searchQuery = document.getElementById('search-query');
    if (searchQuery) {
        const query = searchQuery.dataset.query;
        loadSearchResults(query);
    }


});

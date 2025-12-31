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
                    <div class="produtosHome">
                        ${products.map(product => `
                            <a href="/product/${product.product_id}" onclick="handleProductClick()">
                                <div class="produtoUnico">
                                    <div class="imgProduto">
                                        <img src="${product.product_img}" onerror="this.src='/src/assets/img/logo.webp'">
                                    </div>
                                    <div class="tituloProduto">
                                        ${product.product_title}
                                    </div>
                                    <div class="precoProduto">
                                        R$ ${parseFloat(product.product_price).toFixed(2).replace('.', ',')}
                                    </div>
                                </div>
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

    // Real-time search suggestions
    const searchInput = document.querySelector('.search-input');
    const suggestionsDiv = document.getElementById('search-suggestions');
    let debounceTimer;

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            clearTimeout(debounceTimer);
            const query = this.value.trim();
            if (query.length > 1) {
                debounceTimer = setTimeout(() => fetchSuggestions(query), 300);
            } else {
                suggestionsDiv.innerHTML = '';
                suggestionsDiv.style.display = 'none';
            }
        });

        // Hide suggestions on click outside
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !suggestionsDiv.contains(e.target)) {
                suggestionsDiv.style.display = 'none';
            }
        });
    }
});

// Function to fetch search suggestions
function fetchSuggestions(query) {
    fetch(`/api/search?q=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(products => {
            const suggestionsDiv = document.getElementById('search-suggestions');
            if (products && products.length > 0) {
                suggestionsDiv.innerHTML = products.slice(0, 5).map(product => `
                    <div class="suggestion-item" onclick="selectSuggestion('${product.product_title}')">
                        ${product.product_title}
                    </div>
                `).join('');
                suggestionsDiv.style.display = 'block';
            } else {
                suggestionsDiv.innerHTML = '';
                suggestionsDiv.style.display = 'none';
            }
        })
        .catch(error => console.error('Error fetching suggestions:', error));
}

// Function to select a suggestion
function selectSuggestion(title) {
    const searchInput = document.querySelector('.search-input');
    searchInput.value = title;
    document.getElementById('search-suggestions').style.display = 'none';
    // Submit the form or navigate to search page
    document.getElementById('search-form').submit();
}

// Function to load page content dynamically without full reload
function loadPage(url) {
    showLoading();
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data;
            history.pushState(null, '', url);
            // Re-initialize any scripts if needed
            const scripts = document.body.querySelectorAll('script');
            scripts.forEach(script => {
                if (script.src) {
                    const newScript = document.createElement('script');
                    newScript.src = script.src;
                    document.body.appendChild(newScript);
                } else {
                    eval(script.textContent);
                }
            });
        })
        .catch(error => console.error('Error loading page:', error));
}

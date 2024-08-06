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
        // const skeleton = document.getElementById('skeleton');
        // if (skeleton) {
        //     skeleton.style.display = 'none'; // Oculta o skeleton
        // }
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

    // Simular um atraso antes de voltar (ajuste o tempo conforme necessário)
    setTimeout(function() {
        history.back(); // Voltar à página anterior
    }, 1000); // 1000 ms = 1 segundo
}

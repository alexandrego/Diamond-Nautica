<header class="header">
    <div class="header-container">
        <div class="header-left">
            <img src="/src/assets/img/logo.webp" class="logo-header" alt="Logo Diamond Náutica" />
            <div class="search-container">
                <input type="text" class="search-input" placeholder="Pesquise produtos..." />
                <button class="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
        <div class="header-right">
            <button class="icon-btn cart-btn" title="Carrinho">
                <i class="fa-solid fa-cart-shopping"></i>
                <span class="cart-count">0</span>
            </button>
            <button class="icon-btn menu-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#mainMenu" aria-controls="mainMenu">
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>
    </div>
</header>

<div class="login-bar">
    <button class="login-btn">Entrar <i class="fa-solid fa-arrow-right-to-bracket"></i></button>
</div>

<!-- Offcanvas Menu -->
<div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="mainMenu" aria-labelledby="mainMenuLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="mainMenuLabel">Menu</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <nav class="menu-nav">
            <a href="/" class="menu-item">
                <i class="fa-solid fa-house"></i>
                <span>Início</span>
            </a>
            <a href="#" class="menu-item">
                <i class="fa-solid fa-compass"></i>
                <span>Categorias</span>
            </a>
            <a href="#" class="menu-item">
                <i class="fa-solid fa-heart"></i>
                <span>Favoritos</span>
            </a>
            <a href="#" class="menu-item">
                <i class="fa-solid fa-user"></i>
                <span>Minha Conta</span>
            </a>
            <a href="#" class="menu-item">
                <i class="fa-solid fa-info-circle"></i>
                <span>Sobre Nós</span>
            </a>
            <a href="#" class="menu-item">
                <i class="fa-solid fa-envelope"></i>
                <span>Contato</span>
            </a>
        </nav>
    </div>
</div>

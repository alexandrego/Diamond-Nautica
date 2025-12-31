@extends('layouts.main')

@section('title', 'Diamond Náutica')

@section('content')
    <div class="splashScreen">
        <img src="/src/assets/img/logo.webp" alt="Bem Vindo a Diamond Náutica" class="imgSplashLogo">

        <p id="welcomeSplash" class="welcomeSplash"></p>

        <div class="progress-bar-container">
            <div class="progress-bar" id="progressBar"></div>
        </div>
    </div>
@endsection

<script>
    function bemVindo() {
     document.getElementById("welcomeSplash").innerHTML = "Bem Vindo (a)!"
    }
    const splashscreen = setTimeout(bemVindo, 800);

    let progressInterval;
    let fetchDone = false;

    // Start progress bar after welcome message
    setTimeout(function() {
        const progressBar = document.getElementById('progressBar');
        let width = 0;
        progressInterval = setInterval(function() {
            if (width >= 100) {
                clearInterval(progressInterval);
                if (fetchDone) {
                    window.location.href = "/home";
                }
            } else {
                width++;
                progressBar.style.width = width + '%';
            }
        }, 32); // 3200ms / 100 = 32ms per percent
    }, 800);

    // Fetch products to ensure home is ready
    fetch('https://diamondnautica.com.br/wp-json/diamondnautica/v2/products?page=1&per_page=10')
        .then(response => response.json())
        .then(data => {
            fetchDone = true;
            if (document.getElementById('progressBar').style.width === '100%') {
                window.location.href = "/home";
            }
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            fetchDone = true;
            if (document.getElementById('progressBar').style.width === '100%') {
                window.location.href = "/home";
            }
        });
</script>

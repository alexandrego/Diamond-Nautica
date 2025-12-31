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

    // Start progress bar after welcome message
    setTimeout(function() {
        const progressBar = document.getElementById('progressBar');
        let width = 0;
        const interval = setInterval(function() {
            if (width >= 100) {
                clearInterval(interval);
            } else {
                width++;
                progressBar.style.width = width + '%';
            }
        }, 32); // 3200ms / 100 = 32ms per percent
    }, 800);

    const splash = setTimeout(function() {
        window.location.href = "/home";
    }, 4000);
</script>

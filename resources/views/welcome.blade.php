@extends('layouts.main')

@section('title', 'Diamond Náutica')

@section('content')
    <div class="splashScreen">
        <img src="/src/assets/img/logo.webp" alt="Bem Vindo a Diamond Náutica" class="imgSplashLogo">

        <p id="welcomeSplash" class="welcomeSplash"></p>
    </div>
@endsection

<script>
    function bemVindo() {
     document.getElementById("welcomeSplash").innerHTML = "Bem Vindo (a)!"
    }
    const splashscreen = setTimeout(bemVindo, 800);

    const splash = setTimeout(function() {
        window.location.href = "/home";
    }, 4000);
</script>

@extends('layouts.main')
@extends('layouts.header')

@section('title', 'Produtos')

@section('content')
    <h1>Página De Produtos</h1>
    <a href="/">Home</a>

    <h2 id="demo"></h2>
@endsection

<script>
    function myGreeting() {
     document.getElementById("demo").innerHTML = "Funciona!"
    }
    const splashscreen = setTimeout(myGreeting, 2000);

    const splash = setTimeout(function() {
        window.location.href = "/home";
    }, 4000);
</script>

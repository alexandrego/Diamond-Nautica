@extends('layouts.main')

@section('content')
@include('layouts.header')
<div class="search-page">
    <div class="search-header">
        <h1>Resultados da Busca</h1>
        <p>Buscando por: "{{ $query }}"</p>
    </div>
    <div id="search-results-container" class="search-results-container">
        <!-- Search results will be loaded here via JavaScript -->
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        loadSearchResults('{{ $query }}');
    });
</script>
@endsection

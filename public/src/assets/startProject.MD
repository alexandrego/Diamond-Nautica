## Instalar o Laravel
```composer create-project laravel/laravel diamond-app```

## Alterando o projeto
# Na pasta "public" criar a pasta "src"
-> src
--> assets
--> js
--> pages
# Criar o arquivo "styles.css"

# Na pasta "views" criar a pasta "layouts"
-> Dentro da pasta criar o arquivo "main.blade.php"

Instalando o Laravel Serve LiveReload
-> composer require bangnokia/laravel-serve-livereload --dev

Input "Busca" -> Bootstrap
Carousel -> Bootstrap

# Consumindo API Diamond Náutica
Primeiro criamos uma pasta chamada "Helpers" dentro da pasta "app".
Depois criamos o arquivo "ApiDiamond.php" dentro da pasta "Helpers".

Criar uma pasta chamada "Facades" dentro da pasta "app".
Criar o arquivo "ApiDiamond.php" dentro da pasta "Facades".

Criar um arquivo chamado "ApiControllers.php" dentro da pasta "Http->Controllers".

Agora precisamos criar um novo arquivo dentro da pasta "Providers"
Vamos chamar de "ApiDiamondProvider.php"

Registrar a classe dentro do arquivo "app.php" dentro da pasta "app->config".

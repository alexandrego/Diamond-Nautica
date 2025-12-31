# Diamond Náutica - Aplicação Web

## Sobre a Aplicação

Diamond Náutica é uma aplicação web frontend desenvolvida em Laravel 8, projetada para exibir e interagir com produtos náuticos de um e-commerce. A aplicação consome uma API externa do WordPress/WooCommerce (hospedada em diamondnautica.com.br) para buscar e exibir informações de produtos, como listagens, detalhes individuais e categorias.

### Funcionalidades Principais
- **Página de Boas-Vindas**: Tela inicial com carousel de promoções.
- **Listagem de Produtos**: Exibe produtos com paginação, imagens e preços.
- **Detalhes do Produto**: Página individual para cada produto com informações completas.
- **Endpoint API Interno**: Fornece dados de produtos em formato JSON via Facade ApiDiamond.
- **Interface Responsiva**: Utiliza Bootstrap para design adaptável a dispositivos móveis e desktop.
- **Carregamento Dinâmico**: Inclui efeitos de loading e retry para imagens.

### Tecnologias Utilizadas
- **Backend**: Laravel 8 (PHP 7.3+ ou 8.2+)
- **Frontend**: Blade Templates, Bootstrap, JavaScript vanilla
- **API Externa**: WordPress REST API (WooCommerce)
- **Outros**: Guzzle HTTP para requisições, Sanctum para autenticação (não utilizado atualmente)

## Instalação e Configuração

### Pré-requisitos
- PHP 7.3 ou superior
- Composer
- Node.js e NPM (para assets)
- Servidor web (Apache/Nginx) ou usar `php artisan serve`

### Passos de Instalação
1. **Clone o repositório**:
   ```bash
   git clone <url-do-repositorio>
   cd diamond-nautica
   ```

2. **Instale dependências PHP**:
   ```bash
   composer install
   ```

3. **Configure o ambiente**:
   - Copie `.env.example` para `.env`
   - Configure as variáveis de ambiente (banco de dados, etc.)
   - Gere a chave da aplicação:
     ```bash
     php artisan key:generate
     ```

4. **Instale dependências JavaScript**:
   ```bash
   npm install
   npm run dev  # ou npm run prod para produção
   ```

5. **Execute migrações (se aplicável)**:
   ```bash
   php artisan migrate
   ```

6. **Inicie o servidor**:
   ```bash
   php artisan serve
   ```
   A aplicação estará disponível em `http://localhost:8000`

## Estrutura do Projeto
- `app/Http/Controllers/`: Controladores para rotas web e API
- `resources/views/`: Templates Blade para frontend
- `routes/web.php`: Definição de rotas
- `app/Facades/ApiDiamond.php`: Facade para interagir com API externa
- `app/Helpers/ApiDiamond.php`: Helper para configuração de HTTP client

## Melhorias Planejadas
Consulte o arquivo [IMPROVEMENT_PLAN.md](IMPROVEMENT_PLAN.md) para um plano detalhado de melhorias futuras, incluindo performance, segurança, funcionalidades e infraestrutura.

## Contribuição
Para contribuir com melhorias:
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## Licença
Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

## Suporte
Para dúvidas ou suporte, entre em contato com a equipe de desenvolvimento.

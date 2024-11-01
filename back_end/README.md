![Zandir logo](../assets//imgs/zandir!.png)

# 🖥️ Back-end

API Rest da aplicação!

## 💻 Tecnologias:

- Python
- Poetry
- Django
- DjangoRestFramework

## 🚀 Setup da aplicação:

1. `poetry install`: Para instalar todas as dependencias
2. `poetry shell`: Inicializar ambiente virtual
3. Configure as variaveis de ambiente criando um arquivo `.env` nos moldes do `.env.example`
4. `task migrations`: Para executar as migrations
5. `task migrate`: Criar banco
6. `task seed`: Povoar o banco de dados
7. `task run`: Executar ambiente de desenvolvimento

## 📍 API Endpoints:

Here you can list the main routes of your API, and what are their expected request bodies.
​
| route               | description                                          
|----------------------|-----------------------------------------------------
| `GET v1/movies_api`     | Retorna os filmes registrados no banco de dados
| `POST v1/movies_api/search/<movie>`     | Procura o filme no banco e caso não encontre procura na API Externa
| `POST v1/movies_api/search/<movie>/<year>`     | Procura o filme no banco e caso não encontre procura na API Externa mas com filtro de ano junto
![Zandir logo](./assets/imgs/zandir!.png)

# Teste técnico: Zandir

Olá! Me chamo [Giovanny dos Santos Cordeiro](https://giovannydev.com.br/) e essa é a realização
do meu teste tecnico da empresa Zandir!

## Preview da aplicação!

<video width="320" height="240" controls>
  <source src="assets/preview.mp4" type="video/mp4">
</video>

### Responsividade:
| ![Large](/assets/imgs/LG.png) | ![Medium](/assets/imgs/MD.png) | ![Small](/assets/imgs/SM.png) |
|--------------------------------|--------------------------------|--------------------------------|

### Tabela de conteúdos:
- [Requisitos](#requisitos)
- [Setup do Projeto](#setup-do-projeto)
- [Principios técnicos realizados](#principios-técnicos-realizados)
- [Possiveis melhorias](#possiveis-melhorias)

## Requisitos

- NodeJS: Runtime JavaScript
- NPM: Gerenciador de depências
- Poetry: Gerenciador de depências e criador de ambientes virtuais
- Python: Linguagem de programação

## Setup do Projeto

### Setup Frontend
1. `npm install`: Instalar todas as depêndencias necessárias
2. `npm run dev`: Iniciar ambiente de desenvolvimento

### Setup Back-end
1. `poetry install`: Instalar todas as depêndencias necessárias
2. `poetry shell`: Iniciar ambiente virtual

Dentro do ambiente virtual execute:

1. `task migrations`: Executar todas as migrações do banco
2. `task migrate`: Efetuar modificações o banco
3. `task seed`: Popular o banco de dados
4. Faça a configuração do seu arquivo `.env` de acordo com o modelo `.env.example`
5. `task run`: Executar o ambiênte de desenvolvimento

## Principios técnicos e aplicações realizadas:

Visando o melhor desenvolvimento do projeto em tempo ábil decidi 
aplicar alguns principios técnicos que julgo muito impotânte
no desenvolvimento de um projeto, alguns deles foram:

- **Commits semânticos**: Commits semânticos tem como objetivo melhorar a padronização
de commits no histórico do projeto, facilitar a leitura do histórico de alterações 
em momentos oportunos e garantir uma uniformidade maior para uma equipe de desenvolvimento
- **Git Flow**: Modelo ou estratégia amplamente utilizado no desenvolvimento de software
entre equipes, promovendo um trabalho mais claro, eficiênte e objetivo utilizando branchs.
- **Mobile-first**: Desenvolvimento focado em dispositivos moveis facilitando e presando significativamente pela 
responsibidade e adequação na maioria dos dispositivos.
- **Testes**: Elaboração de testes com finalidade de garantir a qualidade da aplicação e 
evitar surgirmentos de Bugs futuros, além de promover uma documentação viva e pragmática
a respeito do funcionamento do software.

Além desses principios implemetei no projeto:
- **Atalhos** para pesquisa: Promove maior facilidade no uso da aplicação, melhorando significativamente o UX 
e acessibilidade para alguns usuários
- **Integração com API externa**: Implementação com a API externa que facilita a pesquisa de filmes
- **Feedback de carregamento**: Loading com finalidade de melhorar a experiência do usuário.
- **Tratamento de exceções**: Tratamento de erros e exceções com finalidade de manter um fluxo objetivo no código.

## Possiveis melhorias!

- **Aplicar tecnica de memorização na chamada da API externa**: Como o utilização de API
de terceiros é uma pratica bem comum utilizar memorização para evitar fazer multiplas
requisições não somente ajuda na performace quando no custo da API, inclusive, produzi
um [artigo técnico](https://dev.to/giovannycordeiro/memorizacao-em-ruby-5789) sobre esse assunto a um tempo atrás!
- **Aplicar containers Docker para o projeto**: Aplicar containers dockers
tem uma serie de vantagens, especialmente a portabilidade da aplicação, custo reduzido
para setup e possibilidade de alocação em diversas formas de deploy.
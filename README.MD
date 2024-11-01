![Zandir logo](./assets/imgs/zandir!.png)

# 📌 Teste técnico: Zandir

Olá! Me chamo [Giovanny dos Santos Cordeiro](https://giovannydev.com.br/) e essa é a realização
do meu teste tecnico para empresa Zandir!

## 💯 Preview da aplicação!

<video width="320" height="240" controls>
  <source src="assets/preview.mp4" type="video/mp4">
</video>

### ✔️ Responsividade:
| ![Large](/assets/imgs/LG.png) | ![Medium](/assets/imgs/MD.png) | ![Small](/assets/imgs/SM.png) |
|--------------------------------|--------------------------------|--------------------------------|

### Tabela de conteúdos:
- [Requisitos](#requisitos)
- [Setup do Projeto](#setup-do-projeto)
- [Principios técnicos realizados](#principios-técnicos-realizados)
- [Possiveis melhorias](#possiveis-melhorias)

## 🎯 Requisitos

- NodeJS: Runtime JavaScript
- NPM: Gerenciador de depências
- Poetry: Gerenciador de depências e criador de ambientes virtuais
- Python: Linguagem de programação

## 🚀 Setup do Projeto

### Setup Frontend
1. `npm install`: Instalar todas as depêndencias necessárias
2. `npm run dev`: Iniciar ambiente de desenvolvimento

- `npm run test`: Iniciar testes dos componentes no ambiente desenvolvimento

### Setup Back-end
1. `poetry install`: Instalar todas as depêndencias necessárias
2. `poetry shell`: Iniciar ambiente virtual

Dentro do ambiente virtual execute:

1. `task migrations`: Executar todas as migrações do banco
2. `task migrate`: Efetuar modificações o banco
3. `task seed`: Popular o banco de dados
4. Faça a configuração do seu arquivo `.env` de acordo com o modelo `.env.example`
5. `task run`: Executar o ambiênte de desenvolvimento

## 🌟 Princípios  técnicos e aplicações realizadas:

Para garantir o desenvolvimento eficiente do projeto no prazo determinado, 
decidi aplicar alguns princípios técnicos que considero essenciais. Entre eles estão:

- **Commits semânticos**: Commits semânticos têm como objetivo padronizar o histórico 
de commits do projeto, facilitar a leitura das mudanças em momentos estratégicos e 
garantir maior consistência para a equipe.
- **Git Flow**: Modelo ou estratégia amplamente utilizado no desenvolvimento de software
entre equipes, promovendo um trabalho mais claro, eficiênte e objetivo entre os membros
do time utilizando branchs e pull requests.
- **Mobile-first**: Desenvolvimento focado em dispositivos móveis, priorizando a 
responsividade e garantindo uma boa adaptação em diversos dispositivos.
- **Testes**: A elaboração de testes tem como objetivo garantir a qualidade da aplicação 
e prevenir o surgimento de futuros bugs, além de proporcionar uma documentação viva e 
prática sobre o funcionamento do software.

Além desses princípios implemetei no projeto também:

- **Atalho** para pesquisa: Com ojbeito vde promover maior facilidade no uso da aplicação, 
melhorando significativamente o UX e acessibilidade para alguns usuários.
- **Integração com API externa**: Implementação de uma API externa que simplifica a pesquisa de filmes.
- **Feedback de carregamento**: Componente Loading com finalidade de melhorar a experiência do usuário.
- **Tratamento de exceções**: Tratamento de erros e exceções com finalidade de manter um fluxo lógico
mais consistente no código.

## 💡 Possiveis melhorias!

- **Aplicar tecnica de memorização na chamada da API externa**: Como o utilização de API
de terceiros, é uma pratica bem comum utilizar a técnica de memorização para evitar fazer multiplas
requisições, isso não somente ajuda na performace, quando no custo de consumo da API externa. Inclusive, produzi
um [artigo técnico](https://dev.to/giovannycordeiro/memorizacao-em-ruby-5789) sobre essa tecnica a um tempo atrás!
- **Aplicar containers Docker para o projeto**: Aplicar containers dockers em um projeto
agrega uma serie de vantagens, especialmente a portabilidade da aplicação, custo reduzido
para setup e possibilidade de alocação em diversas formas de deploy sem muitos custos extras.
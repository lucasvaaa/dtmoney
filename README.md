# Anotações sobre o projeto Styled-Components utilizando React


## Comandos Yarn
- Yarn start (inicializar o projeto)
- Yarn -D @types/'nome-lib' (se caso for necessário desenrolar os tipos de cada um)
- Yarn remove -D @types/'nome-lib' (remover a biblioteca) - foi necessário devido a instalação ineficiente do css-modules


## Projeto
- Após a criação do projeto, apenas adicionamos o styled components para estilizar os componentes

- Foi Criado também os estilos globais pelo Styled-components - createGlobalStyle

- Foi adicionado a estilização completa do header e os respectivos comentários sobre linhas específicas

- Finalização do Summary/Dashboard e estilização

# APIs no Projeto

## Criando Front-end sem back
- Tecnicamente, iremos consumir uma API para dinamismo nos dados da nossa aplicação
    - Uma das aplicações mencionadas é: *JSON SERVER* - ao criar arquivo Json, é armazenado como rota
    - Outra ferramenta mencionada é : *Mirage.js*
    - *msw* -  mas não tem tantas features quanto Mirage.js

## Configurando MirageJS

- Começamos usando o hook useEffect(()=> {},[]); em TransactionsTable e adicionamos um fetch('') - Fetch é uma função que faz requisições Http e requisições 
- O mirageJS te ajuda a preparar o front para o backend

## Configuração do Axios

- bib para interceptações de respostas para API - Axios
    - Com foco para interceptar todas as respostas e poder alterar e deixar mais dinâmico nossa API
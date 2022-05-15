# API de online marketplace!

### Projeto de uma aplicação frontend em React.js que contempla criação de usuários, funções, listagem, criação de produtos e lógica para compras.

---

## Visão Geral

##### Este desafio técnico tinha como propósito a criação de um projeto Fullstack de uma loja de pontos utilizando React no frontend e Node.js, Express.js e Typescript no backend.

##### Bibliotecas:

- [React](https://expressjs.com/) v^4.17.3 - Framework
- [TypeScript](https://www.npmjs.com/package/typescript) v^4.6.4 - Superset para Javascript
- [Axios](https://www.npmjs.com/package/axios) v^0.27.2 - Biblioteca para fazer requisições HTTP
- [React-router-dom](https://www.npmjs.com/package/react-router-dom) v6.3.0 - Biblioteca para aplicar o conceito de SPA no React
- [React-icons](https://www.npmjs.com/package/react-icons) v4.3.1 - Biblioteca que contém diversos ícones para usar na aplicação
- [Sass](https://www.npmjs.com/package/sass) v^1.51.0 - Linguagem de extensão do CSS que expande a forma com que se usa CSS

## **Sumário**

- [Pré Requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Utilização online](#utilização-online)
- [Sobre o autor](#sobre-o-autor)

---

## **Pré requisitos**

Para rodar esse projeto é necessário ter instalado em sua máquina o runtime Node.js e o gerenciador de pacotes NPM.

---

## **Instalação**

### Utilização local

1. Você pode baixar o projeto em sua máquina utilizando o comando:

   **`git@github.com:matheustkaczyk/voll-challenge-frontend.git`**

2. Entre na pasta do projeto digitando o comando **`cd voll-challenge-frontend`**

3. Instale as dependências do projeto digitando **`npm install`** em seu terminal

4. Para rodar a aplicação digite ***`npm run dev`* em seu terminal

5. Foi disponibilizado uma api online onde poderá ser feito requisições de forma a não instalar nada no computador, segue o link:
   1. **`https://vollcoinstoreback.herokuapp.com/`**
   1. [ATENÇÃO] - Vale destacar que a **primeira requisição** do Heroku pode demorar e as vezes até falhar. Se não funcionar de primeira, por gentileza **tente cancelar e refazer** a requisição.

6. Se houver a necessidade de mudar a API, na pasta **`/src/utils`** há um arquivo chamado httpRequest, ele é responsável por configurar o axios para fazer as requisições HTTP, para configurá-lo à sua API basta mudar a chave baseURL dentro da função:
    ```
    baseURL: 'https://vollcoinstoreback.herokuapp.com',
    ```
 ## **Utilização online**
 
 Este site está hospedado na plataforma Netlify, já consumindo uma api, para testa-lo sem instalar nada em seu computador acesse esse link:
 **`https://vollcoinstore.netlify.app/`**
 Se a aplicação der algum tipo de erro, aguarde um pouco e tente novamente, ambos Netlify e Heroku deixam a aplicação em "desativada" quando fica há algum tempo sem requisições.

---

## **Sobre o autor**

Obrigado por ter lido até aqui!

Eu me chamo Matheus, e sou desenvolvedor web fullstack. Comecei meus estudos no ano de 2020 e estou me apaixonando cada dia que passa, através dos estudos, por tecnologia e desenvolvimento. Esse projeto e esse README foram desenvolvidos como um desafio técnico. Eu empenhei muito carinho na construção de cada linha.

[Você pode olhar mais dos meus repositórios aqui](https://github.com/matheustkaczyk)

[Ou se conectar comigo no linkedin!](https://www.linkedin.com/in/matheustkaczykribeiro/)

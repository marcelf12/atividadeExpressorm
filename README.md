# Atividade: CRUD Express com Prisma ORM

Este projeto é um sistema de gerenciamento de usuários e perfis desenvolvido como atividade acadêmica para a disciplina de Engenharia de Software. O foco principal é a implementação de um relacionamento **1:1** e a persistência de dados utilizando o **Prisma 6**.

---

## Enunciado & Regras de Negócio

O sistema foi construído seguindo rigorosamente os seguintes requisitos:

* **Modelagem de Dados**:
    * **Usuário**: `id`, `nome`, `email`, `senha` e `id_perfil`.
    * **Perfil**: `id` e `perfil_nome`.
* **Relacionamento 1:1**: Cada usuário está vinculado a exatamente um perfil.
* **Criação Simultânea**: Ao cadastrar um usuário, o sistema permite criar o perfil vinculado na mesma operação.
* **Validação de Dados**: Não é permitido o cadastro de e-mails duplicados.
* **Listagem Relacional**: A consulta de usuários retorna os dados completos do perfil associado através do ORM.

---

## Tecnologias Utilizadas

* **Runtime**: [Node.js](https://nodejs.org/)
* **Framework**: [Express.js](https://expressjs.com/)
* **ORM**: [Prisma 6](https://www.prisma.io/)
* **Banco de Dados**: [SQLite](https://www.sqlite.org/) (Arquivo local `dev.db`)
* **Testes**: [Postman](https://www.postman.com/)

---

## Como Instalar e Rodar

Siga os passos abaixo para executar o projeto localmente:

1. **Clone o repositório**:
   ```bash
   git clone [https://github.com/marcelf12/atividadeExpressorm.git](https://github.com/marcelf12/atividadeExpressorm.git)
      
2. **Instale as dependências**:
    ```bash
    npm install

3. **Configure o banco de dados**:
Rode o comando abaixo para criar as tabelas no SQLite e gerar o Prisma Client:
    ```bash
    npx prisma db push

4. **Inicie o servidor**:
    ```bash
    node index.js
    
**O servidor estará rodando em: http://localhost:3000**

## Documentação da API (Endpoints)
1. **POST /usuarios**
2. **GET /usuarios**
3. **PUT /usuarios/:id**
4. **DELETE /usuarios/:id**

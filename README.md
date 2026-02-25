# CRUD Usuário com Prisma
Projeto feito para a atividade de ORM em APIs Backend.
Foi utilizado Node.js com Express e Prisma ORM para criar um CRUD de Usuário com Perfil.
## Tecnologias
- Node.js
- Express
- Prisma ORM

## Estrutura
Usuário:
- id
- nome
- email

Perfil:
- id
- nome
Relacionamento de 1:1 entre Usuário e Perfil
## Funcionalidades
a) Criar usuário junto com perfil  
b) Listar usuários com perfil  
c) Atualizar usuário e perfil  
d) Deletar usuário e perfil  
Não permite email duplicado.
## Como rodar
1) instalar dependências                                
2) gerar prisma
3) rodar as migrations                     
4) iniciar a API

# node index.js: 

A API roda em:
http://localhost:3000
## Endpoints
- POST /usuarios
- GET /usuarios
- PUT /usuarios/:id
- DELETE /usuarios/:id

testes feitos no Postman

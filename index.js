const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// POST - criar usuário com perfil
app.post("/usuarios", async (req, res) => {
  const { nome, email, perfilNome } = req.body;

  try {
    const usuario = await prisma.usuario.create({
      data: {
        nome,
        email,
        perfil: {
          create: {
            nome: perfilNome
          }
        }
      },
      include: {
        perfil: true
      }
    });

    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

// GET - listar usuários com perfil
app.get("/usuarios", async (req, res) => {
  const usuarios = await prisma.usuario.findMany({
    include: {
      perfil: true
    }
  });

  res.json(usuarios);
});

// PUT - atualizar usuário
app.put("/usuarios/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { nome, email, perfilNome } = req.body;

  try {
    const usuario = await prisma.usuario.update({
      where: { id },
      data: {
        nome,
        email,
        perfil: {
          update: {
            nome: perfilNome
          }
        }
      },
      include: {
        perfil: true
      }
    });

    res.json(usuario);
  } catch (error) {
    res.status(404).json({ erro: "Usuário não encontrado" });
  }
});

// P/ deletarmos usuarios
app.delete("/usuarios/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    const usuario = await prisma.usuario.findUnique({
      where: { id }
    });

    if (!usuario) {
      return res.status(404).json({ erro: "Usuário não encontrado" });
    }

    await prisma.perfil.delete({
      where: { usuarioId: id }
    });

    await prisma.usuario.delete({
      where: { id }
    });

    res.json({ mensagem: "Usuário deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
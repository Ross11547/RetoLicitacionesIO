import express from "express";
import { PrismaClient } from "@prisma/client";
const app = express();
const prisma = new PrismaClient();

app.post("/login", async (req, res) => {
    const { usuario, password } = req.body;
    const login = await prisma.usuario.findFirst({
      where: {
        usuario: usuario,
        password: password,
      },
    });
    if (!login) {
      res.json({
        message: "Usuario no autorizado",
        error: "Usuario no autorizado",
      });
      return;
    }
    login.password = undefined;
    res.json({
      message: "Inicio de sesion correcto",
      data: login,
    });
  });

export default app;

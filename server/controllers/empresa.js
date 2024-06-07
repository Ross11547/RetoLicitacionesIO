import express from "express";
import { PrismaClient } from "@prisma/client";
const app = express();
const prisma = new PrismaClient();
import { v4 } from "uuid";

app.get("/usuarioEm", async (req, res) => {
  try {
    const usuario = await prisma.usuario.findMany({
      include: {
        empresa: true,
      },
    });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener empresa",
      error: error.message,
    });
  }
});
app.get("/empresa", async (req, res) => {
  try {
    const usuario = await prisma.empresa.findMany({});
    res.json(usuario);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener empresa",
      error: error.message,
    });
  }
});
app.post("/empresas", async (req, res) => {
  try {
    const empresas = await prisma.empresa.create({
      data: req.body,
    });
    res.json({
      data: empresas,
      message: "Empresa creada correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al agregar empresa",
      error: error.message,
    });
  }
});
app.post("/empresaUsu", async (req, res) => {
  const { empresa, usuario } = req.body;

  // Generar usuario y contraseña aleatorios
  const generatedUsername = v4().split("-")[0]; // Parte del UUID como nombre de usuario
  const generatedPassword = v4().split("-")[0]; // Generar contraseña aleatoria

  try {
    const nuevaEmpresa = await prisma.empresa.create({
      data: empresa,
    });

    const nuevoUsuario = await prisma.usuario.create({
      data: {
        usuario: generatedUsername,
        password: generatedPassword,
        rol: usuario.rol,
        idEmpresa: nuevaEmpresa.id, // Conectar usando el id autogenerado de la empresa
      },
    });

    res.json({
      empresa: nuevaEmpresa,
      usuario: nuevoUsuario,
      generatedUsername, // Devolver el nombre de usuario generado
      generatedPassword, // Devolver la contraseña generada
      message: "Empresa y usuario creados correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al agregar empresa y usuario",
      error: error.message,
    });
  }
});
  app.put("/empresa/:id", async (req, res) => {
    try {
      const empresa = await prisma.empresa.update({
        where: {
          id: Number(req.params.id),
        },
        data: req.body,
      });
      res.json({
        data: empresa,
        message: "empresa actualizado correctamente",
      });
    } catch (error) {
      res.status(500).json({
        message: "Error al actualizar empresa",
        error: error.message,
      });
    }
  });
  app.delete("/empresa/:id", async (req, res) => {
  try {
    const empresaId = Number(req.params.id);
    await prisma.usuario.deleteMany({
      where: {
        idEmpresa: empresaId,
      },
    });
    const empresa = await prisma.empresa.delete({
      where: {
        id: empresaId,
      },
    });

    res.json({
      data: empresa,
      message: "Empresa eliminada correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar empresa",
      error: error.message,
    });
  }
});
app.get("/empresa/:id", async (req, res) => {
  try {
    const empresa = await prisma.empresa.findFirst({
      where: {
        ci: Number(req.params.id),
      },
    });
    res.json({
      data: empresa,
      message: "empresa obtenido correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener empresa",
      error: error.message,
    });
  }
});

export default app;

import express from "express";
import { PrismaClient } from "@prisma/client";
const app = express();
const prisma = new PrismaClient();

app.get("/formulario", async (req, res) => {
  try {
    const formulario = await prisma.formulario.findMany({});
    res.json({
      data: formulario,
      message: "formularios obtenidos correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener formulario",
      error: error.message,
    });
  }
});

app.post("/formulario", async (req, res) => {
  try {
    const formulario = await prisma.formulario.create({
      data: req.body,
    });
    res.json({
      data: formulario,
      message: "formulario creado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al agregar formulario",
      error: error.message,
    });
  }
});
app.put("/formulario/:id", async (req, res) => {
  try {
    const formulario = await prisma.formulario.update({
      where: {
        ci: Number(req.params.id),
      },
      data: req.body,
    });
    res.json({
      data: formulario,
      message: "formulario actualizado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar formulario",
      error: error.message,
    });
  }
});
app.delete("/formulario/:id", async (req, res) => {
  try {
    const formulario = await prisma.formulario.delete({
      where: {
        ci: Number(req.params.id),
      },
    });
    res.json({
      data: formulario,
      message: "formulario eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar formulario",
      error: error.message,
    });
  }
});
app.get("/formulario/:id", async (req, res) => {
  try {
    const formulario = await prisma.formulario.findUnique({
      where: {
        ci: Number(req.params.id),
      },
    });
    res.json({
      data: formulario,
      message: "formulario obtenido correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener formulario",
      error: error.message,
    });
  }
});

export default app;

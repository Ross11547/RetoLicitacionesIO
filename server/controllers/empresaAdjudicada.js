import express from "express";
import { PrismaClient } from "@prisma/client";
const app = express();
const prisma = new PrismaClient();

app.get("/empresaAdjudicada", async (req, res) => {
  try {
    const empresaAdjudicada = await prisma.empresaAdjudicada.findMany({
      include: {
        proyecto:true,
      },
    });
    res.json({
      data: empresaAdjudicada,
      message: "empresaAdjudicadas obtenidos correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener empresaAdjudicada",
      error: error.message,
    });
  }
});

app.post("/empresaAdjudicada", async (req, res) => {
  try {
    const empresaAdjudicada = await prisma.empresaAdjudicada.create({
      data: req.body,
    });
    res.json({
      data: empresaAdjudicada,
      message: "empresaAdjudicada creado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al agregar empresaAdjudicada",
      error: error.message,
    });
  }
});
app.put("/empresaAdjudicada/:id", async (req, res) => {
  try {
    const empresaAdjudicada = await prisma.empresaAdjudicada.update({
      where: {
        ci: Number(req.params.id),
      },
      data: req.body,
    });
    res.json({
      data: empresaAdjudicada,
      message: "empresaAdjudicada actualizado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar empresaAdjudicada",
      error: error.message,
    });
  }
});
app.delete("/empresaAdjudicada/:id", async (req, res) => {
  try {
    const empresaAdjudicada = await prisma.empresaAdjudicada.delete({
      where: {
        ci: Number(req.params.id),
      },
    });
    res.json({
      data: empresaAdjudicada,
      message: "empresaAdjudicada eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar empresaAdjudicada",
      error: error.message,
    });
  }
});
app.get("/empresaAdjudicada/:id", async (req, res) => {
  try {
    const empresaAdjudicada = await prisma.empresaAdjudicada.findUnique({
      where: {
        ci: Number(req.params.id),
      },
    });
    res.json({
      data: empresaAdjudicada,
      message: "empresaAdjudicada obtenido correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener empresaAdjudicada",
      error: error.message,
    });
  }
});

export default app;

import express from "express";
import { PrismaClient } from "@prisma/client";
const app = express();
const prisma = new PrismaClient();

app.get("/convocatoria", async (req, res) => {
  try {
    const convocatoria = await prisma.convocatoria.findMany({});
    res.json(convocatoria);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener convocatoria",
      error: error.message,
    });
  }
});
app.post("/convocatorias", async (req, res) => {
  try {
    const convocatoria = await prisma.convocatoria.createMany({
      data: req.body,
    });
    res.json({
      data: convocatoria,
      message: "convocatoria creada correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al agregar convocatoria",
      error: error.message,
    });
  }
});
app.post("/convocatoria", async (req, res) => {
  try {
    const convocatoria = await prisma.convocatoria.create({
      data: req.body,
    });
    res.json({
      data: convocatoria,
      message: "Convocatoria creada correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al agregar convocatoria",
      error: error.message,
    });
  }
});
app.put("/convocatoria/:id", async (req, res) => {
  try {
    const convocatoria = await prisma.convocatoria.update({
      where: {
        ci: Number(req.params.id),
      },
      data: req.body,
    });
    res.json({
      data: convocatoria,
      message: "convocatoria actualizado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar convocatoria",
      error: error.message,
    });
  }
});
app.delete("/convocatoria/:id", async (req, res) => {
  try {
    const convocatoria = await prisma.convocatoria.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.json({
      data: convocatoria,
      message: "convocatoria eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar convocatoria",
      error: error.message,
    });
  }
});
app.get("/convocatoria/:id", async (req, res) => {
  try {
    const convocatoria = await prisma.convocatoria.findUnique({
      where: {
        ci: Number(req.params.id),
      },
    });
    res.json({
      data: convocatoria,
      message: "convocatoria obtenido correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener convocatoria",
      error: error.message,
    });
  }
});

export default app;

import express from "express";
import { PrismaClient } from "@prisma/client";
const app = express();
const prisma = new PrismaClient();

app.get("/reporte", async (req, res) => {
  try {
    const reporte = await prisma.reporte.findMany({});
    res.json({
      data: reporte,
      message: "reportes obtenidos correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener reporte",
      error: error.message,
    });
  }
});

app.post("/reporte", async (req, res) => {
  try {
    const reporte = await prisma.reporte.create({
      data: req.body,
    });
    res.json({
      data: reporte,
      message: "reporte creado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al agregar reporte",
      error: error.message,
    });
  }
});
app.put("/reporte/:id", async (req, res) => {
  try {
    const reporte = await prisma.reporte.update({
      where: {
        ci: Number(req.params.id),
      },
      data: req.body,
    });
    res.json({
      data: reporte,
      message: "reporte actualizado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar reporte",
      error: error.message,
    });
  }
});
app.delete("/reporte/:id", async (req, res) => {
  try {
    const reporte = await prisma.reporte.delete({
      where: {
        ci: Number(req.params.id),
      },
    });
    res.json({
      data: reporte,
      message: "reporte eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar reporte",
      error: error.message,
    });
  }
});
app.get("/reporte/:id", async (req, res) => {
  try {
    const reporte = await prisma.reporte.findUnique({
      where: {
        ci: Number(req.params.id),
      },
    });
    res.json({
      data: reporte,
      message: "reporte obtenido correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener reporte",
      error: error.message,
    });
  }
});

export default app;

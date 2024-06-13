import express from "express";
import { PrismaClient } from "@prisma/client";
const app = express();
const prisma = new PrismaClient();

app.get("/proyecto", async (req, res) => {
  try {
    const proyecto = await prisma.proyecto.findMany({
      include:{
        Convocatoria:true,
      }
    });
    res.json({
      data: proyecto,
      message: "proyectos obtenidos correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener proyecto",
      error: error.message,
    });
  }
});
app.get("/proyectoEmpresa", async (req, res) => {
  try {
    const proyecto = await prisma.proyecto.findMany({
      include:{
        EmpresaAdjudicada:true,
        Usuario:{
          include:{
            empresa:true
          }
        }
      }
    });
    res.json({
      data: proyecto,
      message: "proyectos obtenidos correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener proyecto",
      error: error.message,
    });
  }
});
app.post("/proyecto", async (req, res) => {
  try {
    const proyecto = await prisma.proyecto.createMany({
      data: req.body,
    });
    res.json({
      data: proyecto,
      message: "proyecto creado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al agregar proyecto",
      error: error.message,
    });
  }
});
app.put("/proyecto/:id", async (req, res) => {
  try {
    const proyecto = await prisma.proyecto.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body,
    });
    res.json({
      data: proyecto,
      message: "proyecto actualizado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar proyecto",
      error: error.message,
    });
  }
});
app.delete("/proyecto/:id", async (req, res) => {
  try {
    const proyecto = await prisma.proyecto.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.json({
      data: proyecto,
      message: "proyecto eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar proyecto",
      error: error.message,
    });
  }
});
app.get("/proyecto/:id", async (req, res) => {
  try {
    const proyecto = await prisma.proyecto.findUnique({
      where: {
        ci: Number(req.params.id),
      },
    });
    res.json({
      data: proyecto,
      message: "proyecto obtenido correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener proyecto",
      error: error.message,
    });
  }
});

export default app;

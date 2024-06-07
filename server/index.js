import express from "express";
import cors from "cors";
import convocatoria from "./controllers/convocatoria.js";
import empresa from "./controllers/empresa.js";
import empresaAdjudicada from "./controllers/empresaAdjudicada.js";
import formulario from "./controllers/formulario.js";
import proyecto from "./controllers/proyecto.js";
import reporte from "./controllers/reporte.js";
import usuario from "./controllers/usuario.js";
import login from "./controllers/login.js";

const app = express();
const port = 5000;
import bodyParser from "body-parser";
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());
app.use(cors());
app.use(convocatoria);
app.use(empresa);
app.use(empresaAdjudicada);
app.use(formulario);
app.use(proyecto);
app.use(reporte);
app.use(usuario);
app.use(login);
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

import Inicio from "./pages/inicio";
import Login from "./pages/login";
import Register from "./pages/register";
import Nav from "./pages/nav";
import Uno from "./pages/convoSubirObras/uno";
import Dos from "./pages/proponenteObras/dos";
import Tres from "./pages/proponenteObras/tres";
import Cuatro from "./pages/proponenteObras/cuatro";
import Cinco from "./pages/proponenteObras/cinco";
import Seis from "./pages/proponenteObras/seis";
import Siete from "./pages/proponenteObras/siete";
import Ocho from "./pages/evaluadorObras/ocho";
import Nueve from "./pages/evaluadorObras/nueve";
import Diez from "./pages/evaluadorObras/diez";
import Once from "./pages/evaluadorObras/once";
import Doce from "./pages/evaluadorObras/doce";
import MenuConvo from "./pages/menuconvo";
import ConvoObras from "./pages/convoObra";
import Empresa from "./pages/admin/empresa";
import Convocatoria from "./pages/admin/convocatoria";
import EmpresasAdj from "./pages/admin/empresasAdj";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navar from "./pages/admin/navar";
import Formularios from "./pages/admin/formularios";
import Licitantes from "./pages/admin/licitantes";
import { SectionTwo } from "./style/estilosAdm";
import Acercanosotros from "./pages/acercanosotros";
import Resultado from "./pages/resultados";
import Proyecto from "./pages/proyecto";
import Trece from "./pages/evaluadorObras/trece";
import Catorce from "./pages/evaluadorObras/catorce";
import InicioSesion from "./pages/inicioSesion";
import { ToastContainer } from "react-toastify";
import { ModalContextProvider } from "./context/modalContext";
import Modal from "./modal";
function App() {
  return (
    <BrowserRouter>
      <ModalContextProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/" element={<SectionTwo />} />
            <Route path="/acercaNosotros" element={<Acercanosotros />} />
            <Route path="/convocatoriasMenu" element={<MenuConvo />} />
            <Route path="/postular" element={<Proyecto />} />
            <Route path="/siguiente" element={<Dos />} />

            <Route path="/siguiente3" element={<Tres />} />
            <Route path="/siguiente4" element={<Cuatro />} />
            <Route path="/siguiente5" element={<Cinco />} />
            <Route path="/siguiente6" element={<Seis />} />
            <Route path="/siguiente7" element={<Siete />} />

            <Route path="/result" element={<Resultado />} />
            <Route path="/inicioSesion" element={<InicioSesion />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/obras" element={<ConvoObras />} />
            <Route path="/uno" element={<Dos />} />
            <Route path="/obrasInicio" element={<MenuConvo />} />
            <Route path="/serviciosInicio" element={<MenuConvo />} />
            <Route path="/bienesInicio" element={<MenuConvo />} />
            <Route path="/leerMas" element={<Acercanosotros />} />
          </Route>
          <Route path="/dashboard" element={<Navar />}>
            <Route path="/dashboard/empresas" element={<Empresa />} />
            <Route path="/dashboard/formularios" element={<Formularios />} />
            <Route path="/dashboard/convocatorias" element={<Convocatoria />} />
            <Route path="/dashboard/llenarConvo" element={<Uno />} />
            <Route path="/dashboard/empresasAdj" element={<EmpresasAdj />} />
            <Route path="/dashboard/proyectos" element={<Licitantes />} />
            <Route path="/dashboard/AdmUno" element={<Uno />} />
            <Route path="/dashboard/AdmDos" element={<Dos />} />
            <Route path="/dashboard/AdmTres" element={<Tres />} />
            <Route path="/dashboard/AdmCuatro" element={<Cuatro />} />
            <Route path="/dashboard/AdmCinco" element={<Cinco />} />
            <Route path="/dashboard/AdmSeis" element={<Seis />} />
            <Route path="/dashboard/AdmSiete" element={<Siete />} />
            <Route path="/dashboard/AdmOcho" element={<Ocho />} />
            <Route path="/dashboard/AdmNueve" element={<Nueve />} />
            <Route path="/dashboard/AdmDiez" element={<Diez />} />
            <Route path="/dashboard/AdmOnce" element={<Once />} />
            <Route path="/dashboard/AdmDoce" element={<Doce />} />
            <Route path="/dashboard/AdmTrece" element={<Trece />} />
            <Route path="/dashboard/AdmCatorce" element={<Catorce />} />
          </Route>
        </Routes>
        <Modal />
      </ModalContextProvider>
    </BrowserRouter>
  );
}

export default App;

import React, { useState } from "react";
import { Tr, Table, Th } from "../../style/formulariosStyleUno";
import {
  Container,
  FormAdm2,
  Link,
  TableContainer,
  Titulo2,
} from "../../style/estilosAdm";
import { useGetDelete } from "../../hooks/useGetDelete";
import { ENDPOINTS } from "../../routes/enpoints";
import Modal from "react-modal";
import styled from "styled-components";
import { convertirFecha } from "../../utils/dateformat";
import { toast } from "react-toastify";

Modal.setAppElement("#root"); // Set the root element for accessibility

const EmpresasAdj = () => {
  const { handlePost, handleDelete, res, getData } =
    useGetDelete("proyectoEmpresa");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [puntaje, setPuntaje] = useState();
  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
  };

  const handlePuntajeChange = (e) => {
    setPuntaje(e.target.value);
  };

  const handlePuntajeSubmit = async (e, id) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/empresaAdjudicada`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idProyecto: id,
          fechaPublicacion: selectedProject.fechaPublicacion,
          puntaje: parseInt(puntaje),
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      getData();
      closeModal();
      toast.success("Se creo el puntaje");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleEstadoSubmit = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/proyecto/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          estado: puntaje >= 100 ? "Aceptado" : "Rechazado",
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      getData();
      closeModal();
      toast.success(puntaje >= 100 ? "Proyecto aceptado" : "Proyecto rechazado");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <Container>
      <FormAdm2>
        <Titulo2>
          <h1>Empresas Adjudicadas</h1>
          <div>
            <button type="button">Excel</button>
            <button type="button">PDF</button>
          </div>
        </Titulo2>
        <TableContainer>
          <Table>
            <thead>
              <Tr>
                <th>Nombre</th>
                <th>Teléfono</th>
                <th>NIT</th>
                <th>Direccion</th>
                <th>Descripción</th>
                <th>Puntaje</th>
                <th>Estado</th>
                <th>Accion</th>
              </Tr>
            </thead>
            <tbody>
              {res?.data?.map((v, i) => (
                <tr key={i}>
                  <th>{v.nombre}</th>
                  <th>{v.telefono}</th>
                  <th>{v.Usuario.empresa.nit}</th>
                  <th>{v.Usuario.empresa.direccion}</th>
                  <th>{v.Usuario.empresa.descripcion}</th>
                  <th>
                    {v.EmpresaAdjudicada.length > 0
                      ? v.EmpresaAdjudicada[0].puntaje
                      : "No hay puntaje"}
                  </th>
                  <th>{v.estado}</th>
                  <th>
                    <button type="button" onClick={() => openModal(v)}>
                      Ver
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      </FormAdm2>

      {selectedProject && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Detalles del Proyecto"
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
            },
          }}
        >
          <ModalContent>
            <h2>Detalles del Proyecto</h2>
            <p>
              <strong>Nombre:</strong> {selectedProject.nombre}
            </p>
            <p>
              <strong>Teléfono:</strong> {selectedProject.telefono}
            </p>
            <p>
              <strong>NIT:</strong> {selectedProject.Usuario.empresa.nit}
            </p>
            <p>
              <strong>Dirección:</strong>{" "}
              {selectedProject.Usuario.empresa.direccion}
            </p>
            <p>
              <strong>Descripción:</strong>{" "}
              {selectedProject.Usuario.empresa.descripcion}
            </p>
            <p>
              <strong>CUCE:</strong> {selectedProject.cuce}
            </p>
            <p>
              <strong>Entidad:</strong> {selectedProject.entidad}
            </p>
            <p>
              <strong>Modalidad:</strong> {selectedProject.modalidad}
            </p>
            <p>
              <strong>Fecha Publicación:</strong>{" "}
              {convertirFecha(selectedProject.fechaPublicacion)}
            </p>
            <p>
              <strong>Fecha Presentación:</strong>{" "}
              {convertirFecha(selectedProject.fechaPresentacion)}
            </p>
            <p>
              <strong>Contacto:</strong> {selectedProject.contacto}
            </p>
            {selectedProject.EmpresaAdjudicada.length > 0 &&
            selectedProject.EmpresaAdjudicada[0].puntaje ? (
              <>
                <p>
                  <strong>Puntaje:</strong>{" "}
                  {selectedProject.EmpresaAdjudicada[0].puntaje}
                </p>
              </>
            ) : (
              <>
                <form
                  onSubmit={(e) => {
                    handlePuntajeSubmit(e, selectedProject.id);
                    handleEstadoSubmit(selectedProject.id);
                  }}
                >
                  <label>
                    Puntaje:
                    <input
                      type="number"
                      value={puntaje}
                      onChange={handlePuntajeChange}
                      required
                    />
                  </label>
                  <button type="submit">Guardar Puntaje</button>
                </form>
              </>
            )}
            <button type="button" className="close-button" onClick={closeModal}>
              Cerrar
            </button>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default EmpresasAdj;

const ModalContent = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  width: 500px;
  max-width: 100%;

  h2 {
    margin-top: 0;
  }

  p {
    margin: 10px 0;
  }

  form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 10px;
      font-weight: bold;
    }

    input {
      padding: 10px;
      margin-bottom: 20px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }

    button {
      padding: 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
  .close-button {
    margin-top: 20px;
    padding: 10px;
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #c82333;
    }
  }
`;

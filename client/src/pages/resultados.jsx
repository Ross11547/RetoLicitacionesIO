import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Colors } from "../style/colores";
import { ButtonD, Form1, Table, Titulo2 } from "../style/formulariosStyleUno";
import Foot from "./admin/foot";
import { ENDPOINTS } from "../routes/enpoints";
import { useGetDelete } from "../hooks/useGetDelete";
import { convertirFecha } from "../utils/dateformat";
import mixtoAceptado from "../data/mixtoAceptado.json";
import Modal from "react-modal";

Modal.setAppElement("#root");

const moveBackground = keyframes`
0% { background-position: 0 0; }
100% { background-position: 100% 100%; }
`;

const MovingBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1400px;
  background: url("https://72cf75f9f7.clvaw-cdnwnd.com/bda6742a4e78d889360304a280fac4d6/200000009-1a0741b01b/Fondo%201.jpg?ph=72cf75f9f7")
    repeat;
  background-size: cover;
  animation: ${moveBackground} 80s linear infinite;
  z-index: -2;
`;

const Card = styled.div`
  width: 1160px;
  height: 1020px;
  border-radius: 30px;
  margin-left: 100px;
  box-shadow: rgba(0, 0, 0, 0.499) 0px 2px 4px 0px;
  backdrop-filter: blur(20px);
`;

const CardBody = styled.div`
  width: 100%;
  height: 1070px;
  margin-top: 30px;
`;
const Scroll = styled.div`
  width: 100%;
  height: 848px;
  overflow-y: scroll;
`;
const CardBody1 = styled.div`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.499) 0px 2px 4px 0px;
  border-radius: 5px;
`;

const ImgOjo = styled.img`
  width: 40px;
  height: 40px;
`;

const Card1 = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Colors.primary100};
  h1 {
    color: ${Colors.primary500};
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 15px;
`;
const ContainerForm = styled.div`
  width: 1519px;
  height: 100%;
  padding: 80px;
`;

const ComboBox = styled.select`
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border: none;
  background: ${Colors.primary100};
  color: ${Colors.primary500};
`;
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

const Resultado = () => {
  const { res } = useGetDelete(ENDPOINTS.EMPRESAADJUDICADA.GET);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedModality, setSelectedModality] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  console.log(res)

  const openModal = (e,project) => {
    e.preventDefault();
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleModalityChange = (e) => {
    setSelectedModality(e.target.value);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const filterResults = () => {
    return mixtoAceptado?.filter((v) => {
      const projectMonth = new Date(v.fechaPublicacion).getMonth() + 1; // Get month from date (0-based index)
      const projectYear = new Date(v.fechaPublicacion).getFullYear(); // Get year from date
      const projectModality = v.proyecto.modalidad;
      const projectType = v.proyecto.tipoContratacion;

      const matchesMonth = selectedMonth ? projectMonth === parseInt(selectedMonth) : true;
      const matchesYear = selectedYear ? projectYear === parseInt(selectedYear) : true;
      const matchesModality = selectedModality ? projectModality === selectedModality : true;
      const matchesType = selectedType ? projectType === selectedType : true;
      return matchesMonth && matchesYear && matchesModality && matchesType;
    });
  };

  return (
    <>
      <MovingBackground />
      <Container className="container py-5">
        <ContainerForm>
          <CardBody1>
            <Card1>
              <h1 className="text-center">RESULTADOS</h1>
            </Card1>
          </CardBody1>
          <Card>
            <CardBody>
              <Form1>
                <div>
                  <ComboBox value={selectedMonth} onChange={handleMonthChange}>
                    <option value="">Seleccione Mes</option>
                    <option value="1">Enero</option>
                    <option value="2">Febrero</option>
                    <option value="3">Marzo</option>
                    <option value="4">Abril</option>
                    <option value="5">Mayo</option>
                    <option value="6">Junio</option>
                    <option value="7">Julio</option>
                    <option value="8">Agosto</option>
                    <option value="9">Septiembre</option>
                    <option value="10">Octubre</option>
                    <option value="11">Noviembre</option>
                    <option value="12">Diciembre</option>
                  </ComboBox>
                  <ComboBox value={selectedYear} onChange={handleYearChange}>
                    <option value="">Seleccione Año</option>
                    <option value="2024-_-_">2024</option>
                    <option value="2023-_-_">2023</option>
                  </ComboBox>
                  <ComboBox value={selectedModality} onChange={handleModalityChange}>
                    <option value="">Seleccione Modalidad</option>
                    <option value="ANPE">ANPE</option>
                    <option value="ANPP">ANPP</option>
                  </ComboBox>
                  <ComboBox value={selectedType} onChange={handleTypeChange}>
                    <option value="">Seleccione Tipo Contratación</option>
                    <option value="Obras">Obras</option>
                    <option value="Bienes">Bienes</option>
                    <option value="Servicios Generales">Servicios Generales</option>
                    <option value="Servicios de Consultoria">Servicios de Consultoría</option>
                  </ComboBox>
                </div>
                <Table>
                  <Scroll>
                    <thead>
                      <tr>
                        <th>N°</th>
                        <th>NOMBRE PROYECTO</th>
                        <th>CUCE</th>
                        <th>DEPARTAMENTO</th>
                        <th>TIPO CONTRATACION</th>
                        <th>MODALIDAD</th>
                        <th>FECHA PUBLICACION</th>
                        <th><ImgOjo src="https://c0.klipartz.com/pngpicture/453/989/gratis-png-icono-de-accion-de-lista-de-verificacion-de-iconos-de-computadora-salud-dental-y-hoja-de-registro.png" alt="" /></th>
                      </tr>
                    </thead>
                    <tbody>
                      {filterResults()?.map((v, i) => (
                        <tr key={i}>
                          <th>{i + 1}</th>
                          <th>{v.proyecto.nombre}</th>
                          <th>{v.proyecto.cuce}</th>
                          <th>{v.proyecto.departamento}</th>
                          <th>{v.proyecto.tipoContratacion}</th>
                          <th>{v.proyecto.modalidad}</th>
                          <th>{convertirFecha(v.fechaPublicacion)}</th>
                          <th><ButtonD onClick={(e) => openModal(e,v)}>DETALLES</ButtonD></th>
                        </tr>
                      ))}
                    </tbody>
                  </Scroll>
                </Table>
              </Form1>
            </CardBody>
          </Card>
        </ContainerForm>
        <Foot />
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
            <h2>Detalles del Resultados</h2>
            <p>
              <strong>Nombre:</strong> {selectedProject.proyecto.nombre}
            </p>
            <p>
              <strong>Cuce:</strong> {selectedProject.proyecto.cuce}
            </p>
            <p>
              <strong>Fecha Publicación:</strong> {convertirFecha(selectedProject.fechaPublicacion)}
            </p>
            <p>
              <strong>Estado:</strong> {selectedProject.proyecto.estado}
            </p>
            <p>
              <strong>Puntaje:</strong> {selectedProject.puntaje}
            </p>
            <p>
              <strong>Entidad:</strong> {selectedProject.proyecto.entidad}
            </p>
            <p>
              <strong>Departamento:</strong> {selectedProject.proyecto.departamento}
            </p>
            <p>
              <strong>Tipo Contratación:</strong> {selectedProject.proyecto.tipoContratacion}
            </p>
            <p>
              <strong>Modalidad:</strong> {selectedProject.proyecto.modalidad}
            </p>
            <p>
              <strong>Entidad:</strong>{selectedProject.proyecto.entidad}
            </p>
            <p>
              <strong>Contacto:</strong>{selectedProject.proyecto.contacto}
            </p>
            <p>
              <strong>Teléfono:</strong> {selectedProject.proyecto.telefono}
            </p>             
            <button type="button" className="close-button" onClick={closeModal}>
              Cerrar
            </button>
          </ModalContent>
        </Modal>
      )}
      </Container>
    </>
  );
};

export default Resultado;

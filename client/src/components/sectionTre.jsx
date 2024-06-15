import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../style/colores";
import { ButtonD, Form1, Table, Titulo2, Titulo3 } from "../style/formulariosStyleUno";
import { Link } from "react-router-dom";
import { useGetDelete } from "../hooks/useGetDelete";
import { ENDPOINTS } from "../routes/enpoints";
import { convertirFecha } from "../utils/dateformat";
import obras from '../data/obras.json';
import bienes from '../data/bienes.json';
import serviciosGenerales from '../data/serviciosGenerales.json';
import serviciosConsultoria from '../data/serviciosConsultoria.json';
import Modal from "react-modal";

Modal.setAppElement("#root");

const Card = styled.div`
  border-radius: 30px;
  margin-bottom: 20px;
`;

const CardBody = styled.div`
  width: 100%;
  height: 100%; 
  margin-top: 15px;
`;

const Scroll = styled.div`
  width: 100%;
  max-height: 550px;
  overflow-y: scroll;
`;

const CardBody1 = styled.div`
  width: 100%;
  margin-top: 5px;
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
  h1 {
    color: ${Colors.primary100};
    font-size: 40px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContainerForm = styled.div`
  width: 1250px;
  height: 100%;
  padding: 40px; 
`;

const SectionTwo = () => {
  const { res } = useGetDelete(ENDPOINTS.PROYECTO.GET);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const datoProceso = res?.data?.filter(v => v.estado === "En proceso");

  const openModal = (e,project) => {
    e.preventDefault();
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
  };

  return (
    <Container className="container py-5">
      <ContainerForm>
        <CardBody1>
          <Card1>
            <h1 className="text-center">PROYECTOS EN PROCESO</h1>
          </Card1>
        </CardBody1>
        <Card>
          <CardBody>
            <Form1>
              <Titulo3>
                <button><Link to="/obrasInicio">OBRAS</Link></button>
              </Titulo3>
              <Scroll>
                <Table>
                  <thead>
                    <tr>
                      <th>N°</th>
                      <th>DEPARTAMENTO</th>
                      <th>OBJETO</th>
                      <th>ESTADO</th>
                      <th>FECHA PUBLICACION</th>
                      <th>FECHA VENCIMIENTO</th>
                      <th>
                        <ImgOjo src="https://cdn.icon-icons.com/icons2/2483/PNG/512/eye_icon_149935.png" alt="" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {obras?.map((v, i) => (
                      <tr key={i}>
                        <th>{i + 1}</th>
                        <th>{v.departamento}</th>
                        <th>{v.nombre}</th>
                        <th>{v.estado}</th>
                        <th>{convertirFecha(v.fechaPublicacion)}</th>
                        <th>{convertirFecha(v.fechaPresentacion)}</th>
                        <th>
                          <ButtonD onClick={(e) => openModal(e,v)}>DETALLES</ButtonD>
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Scroll>
            </Form1>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Form1>
              <Titulo3>
                <button><Link to="/obrasInicio">BIENES</Link></button>
              </Titulo3>
              <Scroll>
                <Table>
                  <thead>
                    <tr>
                      <th>N°</th>
                      <th>DEPARTAMENTO</th>
                      <th>OBJETO</th>
                      <th>ESTADO</th>
                      <th>FECHA PUBLICACION</th>
                      <th>FECHA VENCIMIENTO</th>
                      <th>
                        <ImgOjo src="https://cdn.icon-icons.com/icons2/2483/PNG/512/eye_icon_149935.png" alt="" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {bienes?.map((v, i) => (
                      <tr key={i}>
                        <th>{i + 1}</th>
                        <th>{v.departamento}</th>
                        <th>{v.nombre}</th>
                        <th>{v.estado}</th>
                        <th>{convertirFecha(v.fechaPresentacion)}</th>
                        <th>{convertirFecha(v.fechaPublicacion)}</th>
                        <th>
                          <ButtonD onClick={(e) => openModal(e,v)}>DETALLES</ButtonD>
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Scroll>
            </Form1>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Form1>
              <Titulo3>
                <button><Link to="/obrasInicio">SERVICIOS GENERALES</Link></button>
              </Titulo3>
              <Scroll>
                <Table>
                  <thead>
                    <tr>
                      <th>N°</th>
                      <th>DEPARTAMENTO</th>
                      <th>OBJETO</th>
                      <th>ESTADO</th>
                      <th>FECHA PUBLICACION</th>
                      <th>FECHA VENCIMIENTO</th>
                      <th>
                        <ImgOjo src="https://cdn.icon-icons.com/icons2/2483/PNG/512/eye_icon_149935.png" alt="" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {serviciosGenerales?.map((v, i) => (
                      <tr key={i}>
                        <th>{i + 1}</th>
                        <th>{v.departamento}</th>
                        <th>{v.nombre}</th>
                        <th>{v.estado}</th>
                        <th>{convertirFecha(v.fechaPublicacion)}</th>
                        <th>{convertirFecha(v.fechaPresentacion)}</th>
                        <th>
                          <ButtonD onClick={(e) => openModal(e,v)}>DETALLES</ButtonD>
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Scroll>
            </Form1>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Form1>
              <Titulo3>
                <button><Link to="/obrasInicio">SERVICIOS CONSULTORIA</Link></button>
              </Titulo3>
              <Scroll>
                <Table>
                  <thead>
                    <tr>
                      <th>N°</th>
                      <th>DEPARTAMENTO</th>
                      <th>OBJETO</th>
                      <th>ESTADO</th>
                      <th>FECHA PUBLICACION</th>
                      <th>FECHA VENCIMIENTO</th>
                      <th>
                        <ImgOjo src="https://cdn.icon-icons.com/icons2/2483/PNG/512/eye_icon_149935.png" alt="" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {serviciosConsultoria?.map((v, i) => (
                      <tr key={i}>
                        <th>{i + 1}</th>
                        <th>{v.departamento}</th>
                        <th>{v.nombre}</th>
                        <th>{v.estado}</th>
                        <th>{convertirFecha(v.fechaPresentacion)}</th>
                        <th>{convertirFecha(v.fechaPublicacion)}</th>
                        <th>
                          <ButtonD onClick={(e) => openModal(e,v)}>DETALLES</ButtonD>
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Scroll>
            </Form1>
          </CardBody>
        </Card>
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
            <h2>Detalles del Proyecto En Proceso</h2>
            <p>
              <strong>Nombre:</strong> {selectedProject.nombre}
            </p>
            <p>
              <strong>Cuce:</strong> {selectedProject.cuce}
            </p>
            <p>
              <strong>Estado:</strong> {selectedProject.estado}
            </p>
            <p>
              <strong>Entidad:</strong> {selectedProject.entidad}
            </p>
            <p>
              <strong>Departamento:</strong> {selectedProject.departamento}
            </p>
            <p>
              <strong>Fecha Publicación:</strong> {convertirFecha(selectedProject.fechaPresentacion)}
            </p>
            <p>
              <strong>Fecha Presentación:</strong> {convertirFecha(selectedProject.fechaPublicacion)}
            </p>
            <p>
              <strong>Fecha Publicación:</strong>{selectedProject.contacto}
            </p>
            <p>
              <strong>Fecha Presentación:</strong>{selectedProject.telefono}
            </p>
            <p>
              <strong>Tipo Contratacion:</strong> {selectedProject.tipoContratacion}
            </p>    
            <p>
              <strong>Modalidad:</strong> {selectedProject.modalidad}
            </p>           
            <button type="button" className="close-button" onClick={closeModal}>
              Cerrar
            </button>
          </ModalContent>
        </Modal>
      )}
      </ContainerForm>
    </Container>
  );
};

export default SectionTwo;

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
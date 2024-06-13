import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../style/colores";
import { ButtonD, Cuce, Form1, Table, Th, Titulo, Titulo2, Titulo3 } from "../style/formulariosStyleUno";
import { InputD } from "../style/formulariosStyleDosTres";
import { Link } from "react-router-dom";
import { useGetDelete } from "../hooks/useGetDelete";
import { ENDPOINTS } from "../routes/enpoints";
import { convertirFecha } from "../utils/dateformat";

const Card = styled.div`
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.499) 0px 2px 4px 0px;
`;

const CardBody = styled.div`
  width: 100%;
  height: 1070px; 
  margin-top: 15px;
`;
const Scroll = styled.div`
  width: 100%;
  height: 848px; 
  overflow-y: scroll;
`;
const CardBody1 = styled.div`
  width: 100%;
  margin-top: 5px;
  background:${Colors.primary100};
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
  justify-content:center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  h1{
    color: ${Colors.primary500}
  }
`;
const ContainerForm = styled.div`
  width: 1519px;
  height: 100%;
  padding: 80px;
`;

const SectionTwo = () => {
  const { res } = useGetDelete(ENDPOINTS.PROYECTO.GET);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
  };

  return (
    <>
      <Container className="container py-5">
        <ContainerForm>
          <CardBody1>
            <Card1>
              <h1 className="text-center">PROYECTOS</h1>
            </Card1>
          </CardBody1>
          <Card>
            <CardBody>
              <Form1>
                <Titulo3>
                  <button><Link to="/obrasInicio">OBRAS</Link></button>
                </Titulo3>
                <Table>
                  <Scroll>
                    <thead>
                      <tr>
                        <th >N°</th>
                        <th >DEPARTAMENTO</th>
                        <th >OBJETO / TIPO DE CONTRATACIÓN / MODALIDAD</th>
                        <th >ESTADO / FECHA</th>
                        <th ><ImgOjo src="https://cdn.icon-icons.com/icons2/2483/PNG/512/eye_icon_149935.png" alt="" /></th>
                      </tr>
                    </thead>
                    <tbody>
                      {res?.data?.map((v, i) => (
                        <tr key={i}>
                          <th>{i + 1}</th>
                          <th>{v.departamento}</th>
                          <th>{v.nombre}</th>
                          <th>{convertirFecha(v.fechaPublicacion)}</th>
                          <th>{convertirFecha(v.fechaPresentacion)}</th>
                          <th ><ButtonD onClick={() => openModal(v)}>DETALLES</ButtonD></th>
                        </tr>
                      ))}
                    </tbody>
                  </Scroll>
                </Table>
                <Titulo2>
                </Titulo2>
              </Form1>
            </CardBody>
          </Card>
        </ContainerForm>
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
    </>
  );
};

export default SectionTwo;

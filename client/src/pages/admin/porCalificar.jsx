import React, { useState } from "react";
import { Tr, Table, Th, TableAdm } from "../../style/formulariosStyleUno";
import {
  Container,
  FormAdm2,
  Link,
  TableContainer,
  ThAccion,
  Titulo2,
} from "../../style/estilosAdm";
import { useGetDelete } from "../../hooks/useGetDelete";
import { ENDPOINTS } from "../../routes/enpoints";
import Modal from "react-modal";
import styled from "styled-components";
import { convertirFecha } from "../../utils/dateformat";
import { toast } from "react-toastify";
import PdfDocument from "../../components/pdf";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { PDFDownloadLink, pdf } from "@react-pdf/renderer";
import obras from "../../data/obras.json"

const PorCalificar = ({handleCambio}) => {
  const { handlePost, handleDelete, res, getData } =
    useGetDelete("proyectoEmpresa");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [puntaje, setPuntaje] = useState();
  const { res: resConvo }= useGetDelete(ENDPOINTS.CONVOCATORIA.GET);


  const handlePuntajeChange = (e) => {
    setPuntaje(e.target.value);
  };

  return (
    <Container>
      <FormAdm2>
        <Titulo2>
          <h1>Por calificar</h1>
        </Titulo2>
        <TableContainer>
          <ScrollableTable>
            <TableAdm>
              <thead>
                <Tr>
                  <th>Nombre Convocatoria</th>
                  <th>Descripción</th>
                  <th>Departamento</th>
                  <th>Modalidad</th>
                  <th>Fecha Publicación</th>
                  <th>Accion</th>
                </Tr>
              </thead>
              <tbody>
                {obras?.map((v, i) => (
                  <tr key={i}>
                    <th>{v.nombre}</th>
                    <th>{v.descripcion}</th>
                    <th>{v.departamento}</th>
                    <th>{v.modalidad}</th>
                    <th>{convertirFecha(v.fechaPublicacion)}</th>
                    <ThAccion>
                      <Th>
                        <button onClick={handleCambio}>
                          Calificar
                        </button>
                      </Th>
                    </ThAccion>
                  </tr>
                ))}
              </tbody>
            </TableAdm>
          </ScrollableTable>
        </TableContainer>
      </FormAdm2>
    </Container>
  );
};

export default PorCalificar;

const ScrollableTable = styled.div`
  max-height: 395px;
  overflow-y: auto;
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

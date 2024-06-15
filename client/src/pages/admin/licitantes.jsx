import React from "react";
import { Tr, Table, Th, TableAdm } from "../../style/formulariosStyleUno";
import {
  Container,
  FormAdm2,
  Link,
  TableContainer,
  ThAccion,
  Titulo,
  Titulo2,
} from "../../style/estilosAdm";
import { useGetDelete } from "../../hooks/useGetDelete";
import { ENDPOINTS } from "../../routes/enpoints";
import { convertirFecha } from "../../utils/dateformat";
import { PDFDownloadLink, pdf } from "@react-pdf/renderer";
import PdfDocument from "../../components/pdf";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import styled from "styled-components";

const exportToExcel = (data) => {
  const formattedData = data.map((v, i) => ({
    N: i + 1,
    "NOMBRE PROYECTO": v.nombre,
    ESTADO: v.estado,
    DEPARTAMENTO: v.departamento,
    "FECHA PUBLICACIÓN": convertirFecha(v.fechaPublicacion),
    "FECHA CIERRE": convertirFecha(v.fechaPresentacion),
    "TIPO CONTRATACIÓN": v.tipoContratacion,
  }));

  const worksheet = XLSX.utils.json_to_sheet(formattedData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Proyectos");
  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const dataBlob = new Blob([excelBuffer], {
    type: "application/octet-stream",
  });
  saveAs(dataBlob, "proyectos.xlsx");
};
const Licitantes = () => {
  const { res, handleDelete } = useGetDelete(ENDPOINTS.PROYECTO.GET);
  const handlePrintPdf = async (e) => {
    e.preventDefault();
    const blob = await pdf(<PdfDocument data={res?.data} />).toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "proyectos.pdf";
    a.click();
  };
  const getBackgroundColor = (estado) => {
    switch (estado) {
      case "Aceptado":
        return "#aed581"; 
      case "Rechazado":
        return "#f8d7da";
      case "Progreso":
        return "#fff"; 
      default:
        return "#ffffff"; 
    }
  };
  return (
    <Container>
      <FormAdm2>
        <Titulo2>
          <h1>Proyectos</h1>
          <div>
            <button onClick={() => exportToExcel(res?.data)}>Excel</button>
            <button onClick={handlePrintPdf}>PDF</button>
          </div>
        </Titulo2>
        <TableContainer>
          <TableAdm>
            <thead>
              <Tr>
                <th>N°</th>
                <th>NOMBRE PROYECTO</th>
                <th>ESTADO</th>
                <th>DEPARTAMENTO</th>
                <th>FECHA PUBLICACIÓN</th>
                <th>FECHA CIERRE</th>
                <th>TIPO CONTRATACIÓN</th>
                <th>ACCION</th>
              </Tr>
            </thead>
            <tbody>
              {res?.data?.map((v, i) => (
                <TableRow key={i}  bgColor={getBackgroundColor(v.estado)}>
                  <th>{i + 1}</th>
                  <th>{v.nombre}</th>
                  <th>{v.estado}</th>
                  <th>{v.departamento}</th>
                  <th>{convertirFecha(v.fechaPublicacion)}</th>
                  <th>{convertirFecha(v.fechaPresentacion)}</th>
                  <th>{v.tipoContratacion}</th>
                  <ThAccion>
                    <Th>
                      <button onClick={() => handleDelete(v.id)}>
                        Eliminar
                      </button>
                    </Th>
                  </ThAccion>
                </TableRow>
              ))}
            </tbody>
          </TableAdm>
        </TableContainer>
      </FormAdm2>
    </Container>
  );
};

export default Licitantes;
const TableRow = styled.tr`
  background-color: ${(props) => props.bgColor};
`;

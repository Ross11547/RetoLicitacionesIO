import React, { useState } from 'react'
import { ButtonSig, ContainerForm, DivButton, Table, Th  } from '../../style/formulariosStyleUno';
import { Form, Titulo, Titulo2, FormGroup, Cuce, InputD, FormDos} from '../../style/formulariosStyleDosTres';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toastify";

const Dos = ({setStep}) => {
    const [form, setForm] = useState({
        cuce: uuidv4(),
        objetoContratacion: "",
        empresasConstructorasUnipersonales: false,
        empresasConstructorasAportesDeSocios: false,
        empresasAsociacionesAccidentales: false,
    });
    console.log(form)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("http://localhost:5000/formulario", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(
              {
                descripcion: "Formulario2",
                archivo: form
              }
            ),
          });
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          toast.success("Formularios Enviados Correctamente");
          const data = await response.json();
        } catch (error) {
          console.error("Error:", error);
        }
      };
    return (
        <ContainerForm>
            <FormDos>
                <Titulo>
                    <label>PARTE III</label>
                    <label>ANEXO 1</label>
                    <label>FORMULARIO A-1</label>
                    <label>PRESENTACIÓN DE PROPUESTA</label>
                    <label>(Para Personas Naturales, Empresas Nacionales o Asociaciones Accidentales)</label>
                </Titulo>
                <Titulo2>
                    <label>1. DATOS DEL OBJETO DE LA CONTRATACIÓN</label>
                </Titulo2>
                <FormGroup>
                    <Cuce>
                        <div className="form-group">
                            <label>CUCE:</label>
                            <label>OBJETO DE LA CONTRATACIÓN:</label>
                        </div>
                        <div>
                            <InputD type="number" disabled value={form.cuce} onChange={(event) => setForm((old) => ({...old, cuce: event.target.value}))}/>
                            <InputD type="text" required value={form.objetoContratacion} onChange={(event) => setForm((old) => ({...old, objetoContratacion: event.target.value}))}/>
                        </div>
                    </Cuce>
                </FormGroup>
                <Titulo2>
                    <label>2. MÁRGENES DE PREFERENCIA</label>
                </Titulo2>
                <Table>
                    <tbody>
                        <Th rowSpan={4}>Solicito la aplicación del siguiente margen de preferencia para el proceso de contratación, conforme lo establecido en el inciso a) del parágrafo II, del Artículo 30 de las NB-SABS
                            (El proponente solo deberá marcar una de las opciones, el no marcado de la casilla se entenderá como la no solicitud de ningún  margen de preferencia)</Th>
                        <tr>
                            <th><input type="checkbox" checked={form.empresasConstructorasUnipersonales} onChange={(event) => setForm((old) => ({...old, empresasConstructorasUnipersonales: event.target.checked}))}/></th>
                            <Th>Para empresas constructoras unipersonales bolivianas.</Th>
                        </tr>
                        <tr>
                            <th><input type="checkbox" checked={form.empresasConstructorasAportesDeSocios} onChange={(event) => setForm((old) => ({...old, empresasConstructorasAportesDeSocios: event.target.checked}))}/></th>
                            <Th>Para empresas constructoras, donde la participación en aportes de los socios bolivianos sea igual o mayor al cincuenta y uno por ciento (51%)</Th>
                        </tr>
                        <tr>
                            <th><input type="checkbox" checked={form.empresasAsociacionesAccidentales} onChange={(event) => setForm((old) => ({...old, empresasAsociacionesAccidentales: event.target.checked}))}/></th>
                            <Th>Para asociaciones accidentales de empresas constructoras, donde los asociados bolivianos tengan una participación en aportes comunes en la Asociación Accidental igual o mayor al cincuenta y uno por ciento (51%).</Th>
                        </tr>
                    </tbody>
                </Table>
                <Titulo2>
                    <label></label>
                </Titulo2>
                <DivButton>
                    <ButtonSig onClick={() => setStep(3)}>Siguiente</ButtonSig>
                </DivButton>
            </FormDos>
        </ContainerForm>
    )
}

export default Dos;
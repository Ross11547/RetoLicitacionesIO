import React, { useState } from 'react'
import { ButtonSig, ContainerForm, DivButton, Table, Th, Tra } from '../../style/formulariosStyleUno'
import { Form, Titulo, Titulo2, FormGroup, Cuce, InputD, FormTres } from '../../style/formulariosStyleDosTres';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

const Tres = ({setStep}) => {
    const [form, setForm] = useState({
        nombreProponente: "",
        numeroIdentificaciónTributaria: 0,
        domicilio: "",
        telefonos: 0,
        procesoContratacion: false,
        sociosBolivianos: false,
        empresaConstructoras: false
    });
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
                        descripcion: "Formulario3",
                        archivo: form
                    }
                ),
            });
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            toast.success("Formulario Tres Enviado Correctamente");
            const data = await response.json();
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <ContainerForm>
            <FormTres>
                <Titulo>
                    <label>PFORMULARIO A-2a</label>
                    <label>IDENTIFICACIÓN DEL PROPONENTE</label>
                    <label>(Para Personas Naturales)</label>
                </Titulo>
                <Titulo2>
                    <label>1. DATOS GENERALES DEL PROPONENTE</label>
                </Titulo2>
                <FormGroup>
                    <Cuce>
                        <div className="form-group">
                            <label>Nombre del proponente:</label>
                            <label>Cédula de Identidad o Número de Identificación Tributaria:</label>
                            <label>Domicilio:</label>
                            <label>Teléfonos :</label>
                        </div>
                        <div>
                            <InputD type="text" value={form.nombreProponente} onChange={(event) => setForm((old) => ({...old, nombreProponente: event.target.value }))}/>
                            <InputD type="number" value={form.numeroIdentificaciónTributaria} onChange={(event) => setForm((old) => ({...old, numeroIdentificaciónTributaria: event.target.value}))}/>
                            <InputD type="text" value = {form.domicilio} onChange={(event) => setForm((old) => ({...old, domicilio: event.target.value }))}/>
                            <InputD type="number" value = {form.telefonos} onChange={(event) => setForm((old) => ({...old, telefonos: event.target.value }))}/>
                        </div>
                    </Cuce>
                </FormGroup>
                <Titulo2>
                    <label>2. INFORMACIÓN SOBRE NOTIFICACIONES/COMUNICACIONES</label>
                </Titulo2>
                <Table>
                    <tbody>
                        <Th rowSpan={4}>Solicito la aplicación del siguiente margen de preferencia para el proceso de contratación, conforme lo establecido en el inciso a) del parágrafo II, del Artículo 30 de las NB-SABS
                            (El proponente solo deberá marcar una de las opciones, el no marcado de la casilla se entenderá como la no solicitud de ningún  margen de preferencia)</Th>
                        <Tra>
                            <th><input type="checkbox" checked={form.procesoContratacion} onChange={(event) => setForm((old) => ({ ...old, procesoContratacion: event.target.checked }))} /></th>
                            <Th>Para empresas constructoras unipersonales bolivianas.</Th>
                        </Tra>
                        <Tra>
                            <th><input type="checkbox" checked={form.sociosBolivianos} onChange={(event) => setForm((old) => ({ ...old, sociosBolivianos: event.target.checked }))} /></th>
                            <Th>Para empresas constructoras, donde la participación en aportes de los socios bolivianos sea igual o mayor al cincuenta y uno por ciento (51%)</Th>
                        </Tra>
                        <Tra>
                            <th><input type="checkbox" checked={form.empresaConstructoras} onChange={(event) => setForm((old) => ({ ...old, empresaConstructoras: event.target.checked }))} /></th>
                            <Th>Para asociaciones accidentales de empresas constructoras, donde los asociados bolivianos tengan una participación en aportes comunes en la Asociación Accidental igual o mayor al cincuenta y uno por ciento (51%).</Th>
                        </Tra>
                    </tbody>
                </Table>
                <Titulo2>
                    <label></label>
                </Titulo2>
                <DivButton>
                    <ButtonSig onClick={() => setStep(4)}>Siguiente</ButtonSig>
                </DivButton>
            </FormTres>
        </ContainerForm>
    )
}

export default Tres;


import React, { useState } from 'react'
import { ButtonSig, ContainerForm, DivButton, Tr, Table, Th, Tra } from '../../style/formulariosStyleUno';
import { Form, Titulo, Titulo2 } from '../../style/formulariosStyleDosTres';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

const Cuatro = ({setStep}) => {
    const [form, setForm] = useState({
        nombreRazonSocial: "",
        proponente: false,
        empresaNacional: false,
        asociacionSinFines:false,
        pais: "",
        ciudad: "",
        direccion: "",
        telefono:0,
        numeroIdentificacionTributaria:0,
        numeroMatricula: 0,
        fechaRegistro: "",
        paisDos: "",
        ciudadDos: "",
        direccionDos: "",
        nombreRazonSocialDos: "",
        numeroTestimonio: 0,
        lugarEmision: "",
        fechaInscripcion: "",
        fax:0,
        correoElectronico: ""
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
                        descripcion: "Formulario4",
                        archivo: form
                    }
                ),
            });
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            toast.success("Formulario Cuatro Enviado Correctamente");
            const data = await response.json();
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <ContainerForm>
            <Form>
                <Titulo>
                    <label>PFORMULARIO A-2b</label>
                    <label>IDENTIFICACIÓN DEL PROPONENTE</label>
                    <label>(Para Empresas Nacionales y Asociaciones sin fines de Lucro)</label>
                </Titulo>
                <Titulo2>
                    <label>1. DATOS GENERALES DEL PROPONENTE</label>
                </Titulo2>
                <Table>
                    <tbody>
                        <Tra>
                            <th >Nombre del proponente o Razón Social</th>
                            <th colSpan={4}><input type="text" value={form.nombreRazonSocial} onChange={(event) => setForm((old) => ({...old, nombreRazonSocial:event.target.value}))}/></th>
                        </Tra>
                        <th rowSpan={2}>Proponente</th>
                        <Tra>
                            <th ><input type="checkbox" checked={form.proponente} onChange={(event) => setForm((old) => ({...old, proponente: event.target.checked}))} /></th>
                            <th>Empresa Nacional</th>
                            <th ><input type="checkbox" checked={form.empresaNacional} onChange={(event) => setForm((old) => ({...old, empresaNacional: event.target.checked}))}/></th>
                            <th>Asociación sin fines de lucro</th>
                        </Tra>
                        <th rowSpan={3} colSpan={2}>Domicilio Principal</th>
                        <Tra>
                            <th>País</th>
                            <th>Ciudad</th>
                            <th>Dirección</th>
                        </Tra>
                        <Tra>
                            <th><input type="text" value={form.pais} onChange={(event) => setForm((old) => ({...old, pais:event.target.value}))} /></th>
                            <th><input type="text" value={form.ciudad} onChange={(event) => setForm((old) => ({...old, ciudad:event.target.value}))} /></th>
                            <th ><input type="text" value={form.direccion} onChange={(event) => setForm((old) => ({...old, direccion:event.target.value}))} /></th>
                        </Tra>
                        <Tra>
                            <th >Teléfono</th>
                            <th ><input type="number" value={form.telefono} onChange={(event) => setForm((old) => ({...old, telefono:event.target.value}))} /></th>
                            <th colSpan={2}>Número de Identificación Tributaria</th>
                            <th ><input type="number" value={form.numeroIdentificacionTributaria} onChange={(event) => setForm((old) => ({...old, numeroIdentificacionTributaria:event.target.value}))} /></th>
                        </Tra>
                        <th rowSpan={3} colSpan={2}>Matrícula de Comercio</th>
                        <Tra>
                            <th colSpan={2}>Número de Matricula</th>
                            <th>Fecha de Registro</th>
                        </Tra>
                        <Tra>
                            <th colSpan={2}><input type="number" /></th>
                            <th><input type="date" value={form.fechaRegistro} onChange={(event) => setForm((old) => ({...old, fechaRegistro:event.target.value}))} /></th>
                        </Tra>
                    </tbody>
                </Table>
                <Titulo2>
                    <label>2. INFORMACIÓN DEL REPRESENTANTE LEGAL (Cuando el proponente sea una empresa unipersonal y éste no acredite a un Representante Legal no será necesario el llenado de la información del numeral 2 del presente formulario).</label>
                </Titulo2>
                <Table>
                    <tbody>
                        <th rowSpan={3} colSpan={2}>Domicilio Principal</th>
                        <Tra>
                            <th>País</th>
                            <th>Ciudad</th>
                            <th>Dirección</th>
                        </Tra>
                        <Tra>
                            <th><input type="text" value={form.paisDos} onChange={(event) => setForm((old) => ({...old, paisDos:event.target.value}))} /></th>
                            <th ><input type="text" value={form.ciudadDos} onChange={(event) => setForm((old) => ({...old, ciudadDos:event.target.value}))} /></th>
                            <th><input type="text"  value={form.direccionDos} onChange={(event) => setForm((old) => ({...old, direccionDos:event.target.value}))} /></th>
                        </Tra>
                        <Tra>
                            <th >Nombre del proponente o Razón Social</th>
                            <th colSpan={4}><input type="text" value={form.nombreRazonSocialDos} onChange={(event) => setForm((old) => ({...old, nombreRazonSocialDos:event.target.value}))} /></th>
                        </Tra>
                        <th rowSpan={3} colSpan={2}>Poder del Representante Legal</th>
                        <Tra>
                            <th>Número de Testimonio</th>
                            <th>Lugar de Emisión</th>
                            <th>Fecha de Inscripción</th>
                        </Tra>
                        <Tra>
                            <th><input type="number" value={form.numeroTestimonio} onChange={(event) => setForm((old) => ({...old, numeroTestimonio:event.target.value}))} /></th>
                            <th><input type="text" value={form.lugarEmision} onChange={(event) => setForm((old) => ({...old, lugarEmision:event.target.value}))} /></th>
                            <th ><input type="date" value={form.fechaInscripcion} onChange={(event) => setForm((old) => ({...old, fechaInscripcion:event.target.value}))}  /></th>
                        </Tra>
                        <Tra>
                            <Th colSpan={5}>{">"} Declaro en calidad de Representante Legal contar con un poder general amplio y suficiente con facultades para presentar propuestas y suscribir Contratos. </Th>
                        </Tra>
                        <Tra>
                            <Th colSpan={5}>{">"} Declaro que el poder del Representante Legal se encuentra inscrito en el Registro de Comercio. (Suprimir este texto cuando por la naturaleza jurídica del proponente no se requiera la inscripción en el Registro de Comercio de Bolivia y cuando el proponente sea una empresa unipersonal y éste no acredite a un Representante Legal). </Th>
                        </Tra>
                    </tbody>
                </Table>
                <Titulo2>
                    <label>3. INFORMACIÓN SOBRE NOTIFICACIONES</label>
                </Titulo2>
                <Table>
                    <tbody>
                        <Th rowSpan={3}>Solicito que las notificaciones/comunicaciones me sean remitidas vía</Th>
                        <Tra>
                            <Th>Fax:</Th>
                            <th><input type="text" value={form.fax} onChange={(event) => setForm((old) => ({...old, fax:event.target.value}))} /></th>
                        </Tra>
                        <Tra>
                            <Th>Correo Electrónico</Th>
                            <th><input type="text" value={form.correoElectronico} onChange={(event) => setForm((old) => ({...old, correoElectronico:event.target.value}))} /></th>
                        </Tra>
                    </tbody>
                </Table>
                <Titulo2>
                    <label></label>
                </Titulo2>
                <DivButton>
                <ButtonSig onClick={() => setStep(5)}>Siguiente</ButtonSig>
                </DivButton>
            </Form>
        </ContainerForm>
    )
}

export default Cuatro


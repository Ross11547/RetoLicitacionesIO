import React, { useState } from 'react'
import { ButtonSig, ContainerForm, DivButton, Table, Th, Tr, Tra } from '../../style/formulariosStyleUno';
import { Form, Titulo, Titulo2 } from '../../style/formulariosStyleDosTres';
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';

const Cinco = () => {
    const [form, setForm] = useState({
        denominacionAsociacion: "",
        nombreAsociado: "",
        nombreAsociadoDos: "",
        nombreAsociadoTres: "",
        porceParticipacion: "",
        porceParticipacionDos: "",
        porceParticipacionTres: "",
        numeroTestimonio: 0,
        lugar: "",
        fechaInscripcion: "",
        pais: "",
        ciudad: "",
        direccionPrincipal: "",
        telefono: 0,
        fax: 0,
        correoElectronico: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        nombres: "",
        identidadRepresentante: 0,
        telefonoDos: 0,
        faxDos: 0,
        numeroTestimonioDos: 0,
        lugarDos: "",
        fechaInscripcionDos: "",
        direccionRepresentante: "",
        correoElectronicoDos: "",
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
                    <label>PFORMULARIO A-2c</label>
                    <label>IDENTIFICACIÓN DEL PROPONENTE</label>
                    <label>(Para Asociaciones Accidentales)</label>
                </Titulo>
                <Titulo2>
                    <label>1. DATOS GENERALES DE LA ASOCIACIÓN ACCIDENTAL</label>
                </Titulo2>
                <Table>
                    <tbody>
                        <Tra>
                            <Th>Denominación de la Asociación Accidental</Th>
                            <th colSpan={4}><input type="text" value={form.denominacionAsociacion} onChange={(event) => setForm((old) => ({...old,denominacionAsociacion:event.target.value}))}/></th>
                        </Tra>
                        <Th rowSpan={5}>Asociados:</Th>
                        <Tra>
                            <Th colSpan={2}>Nombre del Asociado</Th>
                            <Th>% de Participación</Th>
                        </Tra>
                        <Tra>
                            <th colSpan={2}><input type="text" value={form.nombreAsociado} onChange={(event) => setForm((old) => ({...old, nombreAsociado:event.target.value}))}/></th>
                            <th><input type="number" value={form.porceParticipacion} onChange={(event) => setForm((old) => ({...old, porceParticipacion:event.target.value}))}/></th>
                        </Tra>
                        <Tra>
                            <th colSpan={2}><input type="text" value={form.nombreAsociadoDos} onChange={(event) => setForm((old) => ({...old, nombreAsociadoDos:event.target.value}))}/></th>
                            <th><input type="number" value={form.porceParticipacionDos} onChange={(event) => setForm((old) => ({...old, porceParticipacionDos:event.target.value}))}/></th>
                        </Tra>
                        <Tra>
                            <th colSpan={2}><input type="text" value={form.nombreAsociadoTres} onChange={(event) => setForm((old) => ({...old, nombreAsociadoTres:event.target.value}))}/></th>
                            <th><input type="number" value={form.porceParticipacionTres} onChange={(event) => setForm((old) => ({...old, porceParticipacionTres:event.target.value}))}/></th>
                        </Tra>
                        <Th rowSpan={3}>Nombre de la Empresa Líder</Th>
                        <Tra>
                            <Th>Número de Testimonio</Th>
                            <Th>Lugar</Th>
                            <Th>Fecha de Inscripción</Th>
                        </Tra>
                        <Tra>
                            <th><input type="number" value={form.numeroTestimonio} onChange={(event) => setForm((old) => ({...old, numeroTestimonio:event.target.value}))}/></th>
                            <th><input type="text" value={form.lugar} onChange={(event) => setForm((old) => ({...old, lugar:event.target.value}))}/></th>
                            <th><input type="date" value={form.fechaInscripcion} onChange={(event) => setForm((old) => ({...old, fechaInscripcion:event.target.value}))}/></th>
                        </Tra>
                    </tbody>
                </Table>
                <Titulo2>
                    <label>2. DATOS GENERALES DE LA ASOCIACIÓN ACCIDENTAL</label>
                </Titulo2>
                <Table>
                    <tbody>
                        <Tra>
                            <Th>País:</Th>
                            <input type="text" value={form.pais} onChange={(event) => setForm((old) => ({...old, pais:event.target.value}))}/>
                            <Th>Ciudad: </Th>
                            <input type="text" value={form.ciudad} onChange={(event) => setForm((old) => ({...old, ciudad:event.target.value}))}/>
                        </Tra>
                        <Tra>
                            <Th>Dirección Principal</Th>
                            <th colSpan={3}><input type="text" value={form.direccionPrincipal} onChange={(event) => setForm((old) => ({...old, direccionPrincipal:event.target.value}))}/></th>
                        </Tra>
                        <Tra>
                            <Th>Teléfono:</Th>
                            <input type="text" value={form.telefono} onChange={(event) => setForm((old) => ({...old, telefono:event.target.value}))}/>
                            <Th>Fax: </Th>
                            <input type="text" value={form.fax} onChange={(event) => setForm((old) => ({...old, fax:event.target.value}))}/>
                        </Tra>
                        <Tra>
                            <Th>Correo Electrónico</Th>
                            <th colSpan={3}><input type="text" value={form.correoElectronico} onChange={(event) => setForm((old) => ({...old, correoElectronico:event.target.value}))}/></th>
                        </Tra>
                    </tbody>
                </Table>
                <Titulo2>
                    <label>3. DATOS GENERALES DE LA ASOCIACIÓN ACCIDENTAL</label>
                </Titulo2>
                <Table>
                    <tbody>
                        <Th rowSpan={3}>Nombre del Representante Legal</Th>
                        <Tra>
                            <Th>Apellido Paterno</Th>
                            <Th>Apellido Materno</Th>
                            <Th>Nombre(s)</Th>
                        </Tra>
                        <Tra>
                            <th><input type="text" value={form.apellidoPaterno} onChange={(event) => setForm((old) => ({...old, apellidoPaterno:event.target.value}))}/></th>
                            <th><input type="text" value={form.apellidoMaterno} onChange={(event) => setForm((old) => ({...old, apellidoMaterno:event.target.value}))}/></th>
                            <th><input type="text" value={form.nombres} onChange={(event) => setForm((old) => ({...old, nombres:event.target.value}))}/></th>
                        </Tra>
                        <Tra>
                            <Th>Cédula de Identidad del  Representante Legal</Th>
                            <Th>Teléfono</Th>
                            <Th colSpan={2}>Fax</Th>
                        </Tra>
                        <Tra>
                            <th><input type="number" value={form.identidadRepresentante} onChange={(event) => setForm((old) => ({...old, identidadRepresentante:event.target.value}))}/></th>
                            <th><input type="number" value={form.telefonoDos} onChange={(event) => setForm((old) => ({...old, telefonoDos:event.target.value}))}/></th>
                            <th colSpan={2}><input type="number" value={form} onChange={(event) => setForm((old) => ({...old, event}))}/></th>
                        </Tra>
                        <Th rowSpan={3}>Poder del Representante Legal</Th>
                        <Tra>
                            <Th>Número de Testimonio</Th>
                            <Th>Lugar</Th>
                            <Th>Fecha de Inscripción</Th>
                        </Tra>
                        <Tra>
                            <th><input type="text" value={form.numeroTestimonioDos} onChange={(event) => setForm((old) => ({...old, numeroTestimonioDos:event.target.value}))}/></th>
                            <th><input type="text" value={form.fechaInscripcionDos} onChange={(event) => setForm((old) => ({...old, fechaInscripcionDos:event.target.value}))}/></th>
                            <th><input type="date"/></th>
                        </Tra>
                        <Tra>
                            <Th>Dirección del Representante Legal</Th>
                            <th colSpan={3}><input type="text" value={form.direccionRepresentante} onChange={(event) => setForm((old) => ({...old, direccionRepresentante:event.target.value}))}/></th>
                        </Tra>
                        <Tra>
                            <Th>Correo Electrónico</Th>
                            <th colSpan={3}><input type="email" value={form.correoElectronicoDos} onChange={(event) => setForm((old) => ({...old, correoElectronicoDos:event.target.value}))}/></th>
                        </Tra>
                        <Th colSpan={4}>Declaro en calidad de Representante Legal de la Asociación Accidental contar con un poder general amplio y suficiente con facultades para presentar propuestas y suscribir Contratos.</Th>
                    </tbody>
                </Table>
                <Titulo2>
                    <label>4. DATOS GENERALES DE LA ASOCIACIÓN ACCIDENTAL</label>
                </Titulo2>
                <Table>
                    <tbody>
                        <Th rowSpan={3}>Solicito que las notificaciones/comunicaciones me sean remitidas vía</Th>
                        <Tra>
                            <Th>Fax:</Th>
                            <th><input type="text" value={form.faxDos} onChange={(event) => setForm((old) => ({...old, faxDos:event.target.value}))}/></th>
                        </Tra>
                        <Tra>
                            <Th>Correo Electrónico</Th>
                            <th><input type="text" value={form.correoElectronicoDos} onChange={(event) => setForm((old) => ({...old, correoElectronicoDos:event.target.value}))}/></th>
                        </Tra>
                    </tbody>
                </Table>
                <Titulo2>
                    <label></label>
                </Titulo2>
                <DivButton>
                    <ButtonSig onClick={handleSubmit}><Link to="/cinco">ENVIAR</Link></ButtonSig>
                </DivButton>
            </Form>
        </ContainerForm>
    )
}

export default Cinco
import React, { useState } from 'react';
import { ButtonSig, ContainerForm, DivButton, Tr, Table, Th, Tra } from '../../style/formulariosStyleUno';
import { Form, Titulo, Titulo2 } from '../../style/formulariosStyleDosTres';
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';

const Seis = ({setStep}) => {
    const [form, setForm] = useState({
        denominacionAsociacion: "",
        nit: 0,
        matriculaComercio:0,
        fechaRegistro: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        nombres: "",
        ciRepresentante:0,
        numTestimonio:0,
        lugarEmision: "",
        fechaInscripcion: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/formulario", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    descripcion: "Formulario4",
                    archivo: form
                }),
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
            <Form onSubmit={handleSubmit}>
                <Titulo>
                    <label>FORMULARIO A-2c</label>
                    <label>IDENTIFICACIÓN DE INTEGRANTES DE LA ASOCIACIÓN ACCIDENTAL</label>
                </Titulo>
                <Titulo2>
                    <label>1. DATOS GENERALES DEL PROPONENTE</label>
                </Titulo2>
                <Table>
                    <tbody>
                        <Tra>
                            <Th>Nombre del proponente o Razón Social</Th>
                            <th colSpan={4}>
                                <input 
                                    type="text" 
                                    value={form.denominacionAsociacion} 
                                    onChange={(event) => setForm((old) => ({ ...old, denominacionAsociacion: event.target.value }))}
                                />
                            </th>
                        </Tra>
                        <Tra>
                            <Th>Número de Identificación Tributaria /NIT</Th>
                            <Th colSpan={2}>Número de Matrícula de Comercio</Th>
                            <Th>Fecha de Registro</Th>
                        </Tra>
                        <Tra>
                            <th>
                                <input 
                                    type="number" 
                                    value={form.nit} 
                                    onChange={(event) => setForm((old) => ({ ...old, nit: event.target.value }))}
                                />
                            </th>
                            <th colSpan={2}>
                                <input 
                                    type="number" 
                                    value={form.matriculaComercio} 
                                    onChange={(event) => setForm((old) => ({ ...old, matriculaComercio: event.target.value }))}
                                />
                            </th>
                            <th>
                                <input 
                                    type="date" 
                                    value={form.fechaRegistro} 
                                    onChange={(event) => setForm((old) => ({ ...old, fechaRegistro: event.target.value }))}
                                />
                            </th>
                        </Tra>
                    </tbody>
                </Table>
                <Titulo2>
                    <label>2. INFORMACIÓN DEL REPRESENTANTE LEGAL (Cuando el proponente sea una empresa unipersonal y éste no acredite a un Representante Legal no será necesario el llenado de la información del numeral 2 del presente formulario).</label>
                </Titulo2>
                <Table>
                    <tbody>
                        <Th rowSpan={3} colSpan={2}>Nombre del Representante Legal</Th>
                        <Tra>
                            <Th>Apellido Paterno</Th>
                            <Th>Apellido Materno</Th>
                            <Th>Nombre(s)</Th>
                        </Tra>
                        <Tra>
                            <th>
                                <input 
                                    type="text" 
                                    value={form.apellidoPaterno} 
                                    onChange={(event) => setForm((old) => ({ ...old, apellidoPaterno: event.target.value }))}
                                />
                            </th>
                            <th>
                                <input 
                                    type="text" 
                                    value={form.apellidoMaterno} 
                                    onChange={(event) => setForm((old) => ({ ...old, apellidoMaterno: event.target.value }))}
                                />
                            </th>
                            <th>
                                <input 
                                    type="text" 
                                    value={form.nombres} 
                                    onChange={(event) => setForm((old) => ({ ...old, nombres: event.target.value }))}
                                />
                            </th>
                        </Tra>
                        <Th rowSpan={3}>Cédula de Identidad del Representante Legal</Th>
                        <Tra>
                            <Th colSpan={4}>Número</Th>
                        </Tra>
                        <Tra>
                            <th colSpan={4}>
                                <input 
                                    type="text" 
                                    value={form.ciRepresentante} 
                                    onChange={(event) => setForm((old) => ({ ...old, ciRepresentante: event.target.value }))}
                                />
                            </th>
                        </Tra>
                        <Th rowSpan={3} colSpan={2}>Poder del Representante Legal</Th>
                        <Tra>
                            <Th>Número de Testimonio</Th>
                            <Th>Lugar de Emisión</Th>
                            <Th>Fecha de Inscripción</Th>
                        </Tra>
                        <Tra>
                            <th>
                                <input 
                                    type="number" 
                                    value={form.numTestimonio} 
                                    onChange={(event) => setForm((old) => ({ ...old, numTestimonio: event.target.value }))}
                                />
                            </th>
                            <th>
                                <input 
                                    type="text" 
                                    value={form.lugarEmision} 
                                    onChange={(event) => setForm((old) => ({ ...old, lugarEmision: event.target.value }))}
                                />
                            </th>
                            <th>
                                <input 
                                    type="date" 
                                    value={form.fechaInscripcion} 
                                    onChange={(event) => setForm((old) => ({ ...old, fechaInscripcion: event.target.value }))}
                                />
                            </th>
                        </Tra>
                    </tbody>
                </Table>
                <Titulo2>
                    <label></label>
                </Titulo2>
                <DivButton>
                <ButtonSig onClick={() => setStep(7)}>Siguiente</ButtonSig>
                </DivButton>
            </Form>
        </ContainerForm>
    )
}

export default Seis;

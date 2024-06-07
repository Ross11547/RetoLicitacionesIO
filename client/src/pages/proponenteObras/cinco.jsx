import React from 'react'
import { ButtonSig, ContainerForm, DivButton, Table, Th, Tr, Tra } from '../../style/formulariosStyleUno';
import {Form, Titulo, Titulo2 } from '../../style/formulariosStyleDosTres';

const Cinco = () => {
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
                            <th colSpan={4}><input type="text"></input></th>
                        </Tra>
                        <Th rowSpan={5}>Asociados:</Th>
                        <Tra>
                            <Th colSpan={2}>Nombre del Asociado</Th>
                            <Th>% de Participación</Th>
                        </Tra>
                        <Tra>
                            <th colSpan={2}><input type="text"></input></th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tra>
                            <th colSpan={2}><input type="text"></input></th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tra>
                            <th colSpan={2}><input type="text"></input></th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Th rowSpan={3}>Nombre de la Empresa Líder</Th>
                        <Tra>
                            <Th>Número de Testimonio</Th>
                            <Th>Lugar</Th>
                            <Th>Fecha de Inscripción</Th>
                        </Tra>
                        <Tra>
                            <th><input type="number"></input></th>
                            <th><input type="text"></input></th>
                            <th><input type="date"></input></th>
                        </Tra>
                    </tbody>
                </Table>
                <Titulo2>
                    <label>1. DATOS GENERALES DE LA ASOCIACIÓN ACCIDENTAL</label>
                </Titulo2>
                <Table>
                    <tbody>
                        <Tra>
                            <Th>País:</Th>
                            <input type="text"></input>
                            <Th>Ciudad: </Th>
                            <input type="text"></input>
                        </Tra>
                        <Tra>
                            <Th>Dirección Principal</Th>
                            <th colSpan={3}><input type="text"></input></th>
                        </Tra>
                        <Tra>
                            <Th>Teléfono:</Th>
                            <input type="text"></input>
                            <Th>Fax: </Th>
                            <input type="text"></input>
                        </Tra>
                        <Tra>
                            <Th>Correo Electrónico</Th>
                            <th colSpan={3}><input type="text"></input></th>
                        </Tra>
                    </tbody>
                </Table>
                <Titulo2>
                    <label>1. DATOS GENERALES DE LA ASOCIACIÓN ACCIDENTAL</label>
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
                            <th><input type="text"></input></th>
                            <th><input type="text"></input></th>
                            <th><input type="text"></input></th>
                        </Tra>
                        <Tra>
                            <Th>Cédula de Identidad del  Representante Legal</Th>
                            <Th>Teléfono</Th>
                            <Th colSpan={2}>Fax</Th>
                        </Tra>
                        <Tra>
                            <th><input type="text"></input></th>
                            <th><input type="Number"></input></th>
                            <th colSpan={2}><input type="text"></input></th>
                        </Tra>
                        <Th rowSpan={3}>Poder del Representante Legal</Th>
                        <Tra>
                            <Th>Número de Testimonio</Th>
                            <Th>Lugar</Th>
                            <Th>Fecha de Inscripción</Th>
                        </Tra>
                        <Tra>
                            <th><input type="text"></input></th>
                            <th><input type="text"></input></th>
                            <th><input type="date"></input></th>
                        </Tra>
                        <Tra>
                            <Th>Dirección del Representante Legal</Th>
                            <th colSpan={3}><input type="text"></input></th>
                        </Tra>
                        <Tra>
                            <Th>Correo Electrónico</Th>
                            <th colSpan={3}><input type="email"></input></th>
                        </Tra>
                        <Th colSpan={4}>Declaro en calidad de Representante Legal de la Asociación Accidental contar con un poder general amplio y suficiente con facultades para presentar propuestas y suscribir Contratos.</Th>
                    </tbody>
                </Table>
                <Titulo2>
                    <label>1. DATOS GENERALES DE LA ASOCIACIÓN ACCIDENTAL</label>
                </Titulo2>
                <Table>
                    <tbody>
                        <Th rowSpan={3}>Solicito que las notificaciones/comunicaciones me sean remitidas vía</Th>
                        <Tra>
                            <Th>Fax:</Th>
                            <th><input type="text"></input></th>
                        </Tra>
                        <Tra>
                            <Th>Correo Electrónico</Th>
                            <th><input type="text"></input></th>
                        </Tra>
                    </tbody>
                </Table>
                <Titulo2>
                    <label></label>
                </Titulo2>
                <DivButton>
                    <ButtonSig>SIGUIENTE</ButtonSig>
                </DivButton>
            </Form>
        </ContainerForm>
    )
}

export default Cinco
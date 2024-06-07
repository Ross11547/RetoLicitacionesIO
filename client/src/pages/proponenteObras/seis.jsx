import React from 'react'
import { ButtonSig, ContainerForm, DivButton, Tr, Table, Th, Tra } from '../../style/formulariosStyleUno';
import {Form, Titulo, Titulo2} from '../../style/formulariosStyleDosTres';


const Seis = () => {
    return (
        <ContainerForm>
            <Form>
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
                            <th colSpan={4}><input type="text"></input></th>
                        </Tra>
                        <Tra>
                            <Th>Número de Identificación Tributaria /NIT</Th>
                            <Th colSpan={2}>Número de Matrícula de Comercio</Th>
                            <Th>Fecha de Registro</Th>
                        </Tra>
                        <Tra>
                            <th><input type="number"></input></th>
                            <th colSpan={2}><input type="Number"></input></th>
                            <th><input type="date"></input></th>
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
                            <th><input type="text"></input></th>
                            <th><input type="text"></input></th>
                            <th><input type="text"></input></th>
                        </Tra>
                        <Th rowSpan={3} >Cédula de Identidad del Representante Legal</Th>
                        <Tra>
                            <Th colSpan={4}>Número</Th>
                        </Tra>
                        <Tra>
                            <th colSpan={4}><input type="text"></input></th>
                        </Tra>
                        <Th rowSpan={3} colSpan={2}>Poder del Representante Legal</Th>
                        <Tra>
                            <Th>Número de Testimonio</Th>
                            <Th>Lugar de Emisión</Th>
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
                    <label></label>
                </Titulo2>
                <DivButton>
                    <ButtonSig>SIGUIENTE</ButtonSig>
                </DivButton>
            </Form>
        </ContainerForm>
    )
}

export default Seis


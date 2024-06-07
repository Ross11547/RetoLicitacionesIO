import React from 'react'
import { ButtonSig, ContainerForm, DivButton, Tr, Th, Table, Tra, Titulo2 } from '../../style/formulariosStyleUno';
import { Form, Titulo } from '../../style/formulariosStyleDosTres';
import { Colors } from '../../style/colores';
import styled from 'styled-components';


const Catorce = () => {
    return (
        <ContainerForm>
            <Form>
                <Titulo>
                    <label>FORMULARIO V-4</label>
                    <label>RESUMEN DE LA EVALUACIÓN TÉCNICA Y ECONÓMICA</label>
                    <label>(Este formulario es aplicable solo cuando se emplee el Método de Selección y Adjudicación Calidad, Propuesta Técnica y Costo. Caso contrario suprimir este Formulario)</label>
                </Titulo>
                <Table>
                    <thead>
                        <tr>
                            <th>ABREVIACIÓN</th>
                            <th>DESCRIPCIÓN</th>
                            <th>PUNTAJE ASIGNADO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Tra>
                            <th> PE </th>
                            <th>Puntaje de la Evaluación de la Propuesta Económica</th>
                            <th>20 puntos</th>
                        </Tra>
                        <Tra>
                            <th> PT </th>
                            <th>Puntaje de la Evaluación de la Propuesta Técnica</th>
                            <th>80 puntos</th>
                        </Tra>
                        <Tra>
                            <th> PTE </th>
                            <th>PUNTAJE TOTAL DE LA PROPUESTA EVALUADA</th>
                            <th>100 puntos</th>
                        </Tra>
                    </tbody>
                </Table>
                <Titulo2>
                </Titulo2>
                <Table>
                    <thead>
                        <tr>
                            <th rowSpan={2}>CONDICIONES ADICIONALES FORMULARIO C-2 (Llenado por la entidad)</th>
                            <th colSpan={4}> PROPONENTES</th>
                        </tr>
                        <tr>
                            <th>PROPONENTE A</th>
                            <th>PROPONENTE B</th>
                            <th>PROPONENTE C</th>
                            <th>PROPONENTE n</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Tra>
                            <th> PUNTAJE DE LA EVALUACIÓN CUMPLE/NO CUMPLE</th>
                            <th>30</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>

                        </Tra>
                        <Tra>
                            <th> PUNTAJE DE LAS CONDICIONES ADICIONALES </th>
                            <th>50</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tr>
                            <th>PUNTAJE TOTAL DE LA EVALUACIÓN DE LA PROPUESTA TÉCNICA (PT)</th>
                            <th>80</th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </Tr>
                    </tbody>
                </Table>
                <DivButton>
                    <ButtonSig>SIGUIENTE</ButtonSig>
                </DivButton>
            </Form>
        </ContainerForm>
    )
}

export default Catorce;
import React from 'react'
import { ButtonSig, ContainerForm, DivButton, Tr, Th, Table, Tra, Titulo2 } from '../../style/formulariosStyleUno';
import { Form, Titulo } from '../../style/formulariosStyleDosTres';
import { Colors } from '../../style/colores';
import styled from 'styled-components';


const Trece = () => {
    return (
        <ContainerForm>
            <Form>
                <Titulo>
                    <label>CONDICIONES ADICIONALES</label>
                    <label>FORMULARIO C-2</label>
                    <label>(Llenado por la entidad)</label>
                </Titulo>
                <Table>
                    <thead>
                        <tr>
                            <th rowSpan={3}>CONDICIONES ADICIONALES FORMULARIO C-2 (Llenado por la entidad)</th>
                            <th rowSpan={3}>Puntaje Asignado</th>
                            <th colSpan={4}> PROPONENTES</th>
                        </tr>
                        <tr>
                            <th>PROPONENTE A</th>
                            <th>PROPONENTE B</th>
                            <th>PROPONENTE C</th>
                            <th>PROPONENTE n</th>
                        </tr>
                        <tr>
                            <th>Puntaje Obtenido</th>
                            <th>Puntaje Obtenido</th>
                            <th>Puntaje Obtenido</th>
                            <th>Puntaje Obtenido</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Tra>
                            <th> Criterio 1 </th>
                            <th><input type="number"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </Tra>
                        <Tra>
                            <th> Criterio 2 </th>
                            <th><input type="number"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </Tra>
                        <Tra>
                            <th> Criterio 3 </th>
                            <th><input type="number"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </Tra>
                        <Tra>
                            <th> Criterio 4 </th>
                            <th><input type="number"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </Tra>
                        <Tra>
                            <th> Criterio 5 </th>
                            <th><input type="number"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </Tra>
                        <Tra>
                            <th>Criterio 6 </th>
                            <th><input type="number"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </Tra>
                        <Tra>
                            <th>Criterio 7 </th>
                            <th><input type="number"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </Tra>
                        <Tra>
                            <th>Criterio 8 </th>
                            <th><input type="number"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </Tra>
                        <Tra>
                            <th>Criterio 9 </th>
                            <th><input type="number"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </Tra>
                        <Tra>
                            <th> Criterio 10 </th>
                            <th><input type="number"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </Tra>
                        <Tr>
                            <th>METODOLOGÍA CUMPLE/NO CUMPLE</th>
                            <th>0 al 5</th>
                            <th>(señalar si cumple o no cumple)</th>
                            <th>(señalar si cumple o no cumple)</th>
                            <th>(señalar si cumple o no cumple)</th>
                            <th>(señalar si cumple o no cumple)</th>
                        </Tr>
                    </tbody>
                </Table>
                <Titulo2>
                </Titulo2>
                <Table>
                    <thead>
                        <tr>
                            <th>RESUMEN DE LA EVALUACION TÉCNICA</th>
                            <th>Puntaje Asignado</th>
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
                            <th><input type="number"></input></th>

                        </Tra>
                        <Tra>
                            <th> PUNTAJE DE LAS CONDICIONES ADICIONALES </th>
                            <th>50</th>
                            <th><input type="number"></input></th>
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

export default Trece;
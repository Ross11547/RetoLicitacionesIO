import React from 'react'
import { ButtonSig, ContainerForm, DivButton, Table, Th, Tra } from '../../style/formulariosStyleUno'
import {Form, Titulo, Titulo2, FormGroup, Cuce, InputD} from '../../style/formulariosStyleDosTres';

const Tres = () => {
    return (
        <ContainerForm>
            <Form>
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
                            <label>SCédula de Identidad o Número de Identificación Tributaria:</label>
                            <label>Domicilio:</label>
                            <label>Teléfonos :</label>
                        </div>
                        <div>
                            <InputD type="text" placeholder />
                            <InputD type="number" placeholder='Número CI/NIT' />
                            <InputD type="text" placeholder />
                            <InputD type="number" placeholder />
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
                            <th><input type="checkbox"></input></th>
                            <Th>Para empresas constructoras unipersonales bolivianas.</Th>
                        </Tra>
                        <Tra>
                            <th><input type="checkbox"></input></th>
                            <Th>Para empresas constructoras, donde la participación en aportes de los socios bolivianos sea igual o mayor al cincuenta y uno por ciento (51%)</Th>
                        </Tra>
                        <Tra>
                            <th><input type="checkbox"></input></th>
                            <Th>Para asociaciones accidentales de empresas constructoras, donde los asociados bolivianos tengan una participación en aportes comunes en la Asociación Accidental igual o mayor al cincuenta y uno por ciento (51%).</Th>
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

export default Tres;


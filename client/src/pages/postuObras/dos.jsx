import React from 'react'
import { ButtonSig, ContainerForm, DivButton, Table, Th  } from '../../style/formulariosStyleUno';
import { Form, Titulo, Titulo2, FormGroup, Cuce, InputD} from '../../style/formulariosStyleDosTres';
import { Link } from 'react-router-dom';

const Dos = () => {
    return (
        <ContainerForm>
            <Form>
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
                            <label>SEÑALAR EL OBJETO DE LA CONTRATACIÓN:</label>
                        </div>
                        <div>
                            <InputD type="number" placeholder />
                            <InputD type="text" placeholder />
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
                            <th><input type="checkbox"></input></th>
                            <Th>Para empresas constructoras unipersonales bolivianas.</Th>
                        </tr>
                        <tr>
                            <th><input type="checkbox"></input></th>
                            <Th>Para empresas constructoras, donde la participación en aportes de los socios bolivianos sea igual o mayor al cincuenta y uno por ciento (51%)</Th>
                        </tr>
                        <tr>
                            <th><input type="checkbox"></input></th>
                            <Th>Para asociaciones accidentales de empresas constructoras, donde los asociados bolivianos tengan una participación en aportes comunes en la Asociación Accidental igual o mayor al cincuenta y uno por ciento (51%).</Th>
                        </tr>
                    </tbody>
                </Table>
                <Titulo2>
                    <label></label>
                </Titulo2>
                <DivButton>
                    <ButtonSig><Link to="/">ENVIAR</Link></ButtonSig>
                </DivButton>
            </Form>
        </ContainerForm>
    )
}

export default Dos;



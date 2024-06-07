import React from 'react'
import { ButtonSig, ContainerForm, DivButton, Tr, Table, Th, Tra  } from '../../style/formulariosStyleUno';
import { Form, Titulo, Titulo2, FormGroup, Cuce, InputD} from '../../style/formulariosStyleDosTres';


const Diez = () => {
    return (
        <ContainerForm>
            <Form>
                <Titulo>
                    <label>FORMULARIO V-1b</label>
                    <label>EVALUACIÓN PRELIMINAR</label>
                    <label>(Para Asociaciones Accidentales)</label>
                </Titulo>
                <Titulo2>
                    <label>DATOS GENERALES DEL PROCESO</label>
                </Titulo2>
                <FormGroup>
                    <Cuce>
                        <div className="form-group">
                            <label>CUCE:</label>
                            <label>Objeto de la contratación:</label>
                            <label>Nombre del Proponente:</label>
                            <label>Propuesta Económica:</label>
                        </div>
                        <div>
                            <InputD type="number" placeholder />
                            <InputD type="text" placeholder />
                            <InputD type="text" placeholder />
                            <InputD type="text" placeholder />

                        </div>
                    </Cuce>
                </FormGroup>
                <Table>
                    <thead>
                        <tr>
                            <th rowSpan={3}>REQUISITOS EVALUADOS</th>
                            <th colSpan={2}> Verificación (Acto de Apertura)</th>
                            <th rowSpan={2} colSpan={2}>Evaluación Preliminar (Sesión Reservada)</th>
                        </tr>
                        <tr>
                            <th colSpan={2}>PRESENTÓ</th>
                        </tr>
                        <tr>
                            <th>SI</th>
                            <th>NO</th>
                            <th>CONTINUA</th>
                            <th>DESCALIFICADA</th>
                        </tr>
                        <tr>
                            <th colSpan={1}>DOCUMENTOS LEGALES Y ADMINISTRATIVOS</th>
                            <th colSpan={4}></th>
                        </tr>
                    </thead>
                    <tbody>
                        <Tra>
                            <Th>1. FORMULARIO A-1 Presentación de Propuesta.</Th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>

                        </Tra>
                        <Tra>
                            <Th>2. FORMULARIO A-2c. Identificación del Proponente, según corresponda.</Th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </Tra>
                        <Tra>
                            <Th>3. Además, cada socio en forma independiente presentará:
                                FORMULARIO A-2d Identificación de Integrantes de la Asociación Accidental.</Th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </Tra>
                        <Tra>
                            <Th>4. Garantía de Seriedad de Propuesta o Depósito.</Th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </Tra>
                        <Tr>
                            <th colSpan={1}>PROPUESTA TÉCNICA</th>
                            <th colSpan={4}></th>
                        </Tr>
                        <Tra>
                            <Th>5. FORMULARIO C-1.
                                Señalar (Por ej.: Organigrama, Métodos Constructivos, Número de frentes a utilizar, otros).</Th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </Tra>
                        <Tra>
                            <Th>6. FORMULARIO C-2. Condiciones Adicionales (cuando corresponda)</Th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </Tra>
                        <Tr>
                            <th colSpan={1}>PROPUESTA ECONÓMICA</th>
                            <th colSpan={4}></th>
                        </Tr>
                        <Tra>
                            <Th>7. FORMULARIO B-1. Presupuesto por Ítems y General de la Obra</Th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </Tra>
                        <Tra>
                            <Th>8. Otros (señalar).</Th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </Tra>
                    </tbody>
                </Table>
                <Titulo2>
                </Titulo2>
                <DivButton>
                    <ButtonSig>SIGUIENTE</ButtonSig>
                </DivButton>
            </Form>
        </ContainerForm>
    )
}

export default Diez

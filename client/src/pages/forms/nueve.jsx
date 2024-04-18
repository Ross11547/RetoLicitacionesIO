import React from 'react'
import styled from 'styled-components';

const Nueve = () => {
    return (
        <ContainerForm>
            <Form>
                <Titulo>
                    <label>FORMULARIO V-1a</label>
                    <label>EVALUACIÓN PRELIMINAR</label>
                    <label>(Para Personas Naturales y Empresas)</label>
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
                        <tr>
                            <Th>1. FORMULARIO A-1 Presentación de Propuesta.</Th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>

                        </tr>
                        <tr>
                            <Th>2. FORMULARIO A-2a o A-2b. Identificación del Proponente, según corresponda.</Th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </tr>
                        <tr>
                            <Th>3. Garantía de Seriedad de Propuesta, cuando corresponda o Depósito.</Th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </tr>
                        <Tr>
                            <th colSpan={1}>PROPUESTA TÉCNICA</th>
                            <th colSpan={4}></th>
                        </Tr>
                        <tr>
                            <Th>4.FORMULARIO C-1.
                                Señalar (Por ej.: Organigrama, Métodos Constructivos, Número de frentes a utilizar, otros).</Th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </tr>
                        <tr>
                            <Th>5. FORMULARIO C-2.
                            Condiciones Adicionales (cuando corresponda).</Th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </tr>
                        <Tr>
                            <th colSpan={1}>PROPUESTA ECONÓMICA</th>
                            <th colSpan={4}></th>
                        </Tr>
                        <tr>
                            <Th>6. FORMULARIO B-1. Presupuesto por ítems y General de la Obra.</Th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </tr>
                        <tr>
                            <Th>7. Otros (señalar)</Th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </tr>
                    </tbody>
                </Table>
            </Form>
        </ContainerForm>
    )
}

export default Nueve

const ContainerForm = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
    background: #ffffff;
`;

const Titulo = styled.div`
    width: 100%;  
    height: 130px;
    margin-bottom: 15px;
    background:#336699;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 17px;
    font-weight: bold;
    gap:13px;
    border-radius: 5px;
    label{
        color: #FFFFFF;
    }
`;
const Titulo2 = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    font-weight: bold;
    background: #003366;
    border-radius: 5px;
    label{
        color: #FFFFFF;
    }
`;
const Form = styled.form`
    width: 80%;
    padding: 30px;
    display: flex;
    flex-direction: column;
`;

const FormGroup = styled.div`
    margin-bottom: 12px;
    padding: 10px;
    border-radius: 5px;
    text-align: end;
    background: #C1CAD6;

`;

const InputFD = styled.input`
    width: 190px;
    margin-left: 10px;
    padding: 2px;
    border-radius: 3px;
    border: 1px solid #ccc;
`;
const InputO = styled.input`
    width: 710px;
    margin-left: 10px;
    padding: 2px;
    border-radius: 3px;
    border: 1px solid #ccc;
    outline: none;
`;
const InputD = styled.input`
    width: 500px;
    margin-left: 10px;
    padding: 2px;
    border-radius: 3px;
    border: 1px solid #ccc;
    outline: none;
`;

const Cuce = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 16px 0;
    gap: 15px;
    div{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .form-group{
        display: flex;
        flex-direction: column;
        text-align: end;
    }
`;

const FechaLugar = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px 0;
    gap: 10px;
`;

const FechaDireccion = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    font-weight: bold;
    gap: 15px;
    color: #FFFFFF;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    th, tr {
        border: 1px solid #336699;
        padding: 8px;
        height: 20px;
        
    }
    thead{
         background-color: #003366;
         color:#fff;
         font-size: 15px;
    }
    tbody{
        tr{
            height: 50px;
        }
    }
    input{
        background: #C1CAD6;
        border: none;
        outline: none;
        text-align:center;
    }
`;
const Tr = styled.tr`
    background-color: #003366;
    color:#fff;
    font-size: 15px;
`;
const Th = styled.th`
    border: 1px solid #336699;
    text-align: left;
`;

const Abbreviation = styled.th`
width:100%;
padding:none;
`;
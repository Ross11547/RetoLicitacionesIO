import React from 'react'
import styled from 'styled-components';

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
                <Table>
                    <thead>
                        <tr>
                            <Th colSpan={3}>2. MÁRGENES DE PREFERENCIA</Th>
                        </tr>
                    </thead>
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
                        <Tr>
                            <th colSpan={4}></th>
                        </Tr>
                    </tbody>
                </Table>
            </Form>
        </ContainerForm>
    )
}

export default Dos;

const ContainerForm = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
    background: #C1CAD6;
`;

const Titulo = styled.div`
    width: 100%;  
    height: 190px;
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
    margin-bottom: 10px;
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
    width: 100%;
    height: 100%;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 5px solid #003366;
    text-align: end;
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
        gap: 20px;
    }
    .form-group{
        display: flex;
        flex-direction: column;
        text-align: end;
    }
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

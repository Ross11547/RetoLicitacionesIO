import React from 'react'
import styled from 'styled-components';

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
                <Table3>
                    <tbody>
                        <tr>
                            <Th>Nombre del proponente o Razón Social</Th>
                            <th colSpan={4}><input type="text"></input></th>
                        </tr>
                        <tr>
                            <Th>Número de Identificación Tributaria /NIT</Th>
                            <Th colSpan={2}>Número de Matrícula de Comercio</Th>
                            <Th>Fecha de Registro</Th>
                        </tr>
                        <tr>
                            <th><input type="number"></input></th>
                            <th colSpan={2}><input type="Number"></input></th>
                            <th><input type="date"></input></th>
                        </tr>
                    </tbody>
                </Table3>
                <Titulo2>
                    <label>2. INFORMACIÓN DEL REPRESENTANTE LEGAL (Cuando el proponente sea una empresa unipersonal y éste no acredite a un Representante Legal no será necesario el llenado de la información del numeral 2 del presente formulario).</label>
                </Titulo2>
                <Table3>
                    <tbody>
                        <Th rowSpan={3} colSpan={2}>Nombre del Representante Legal</Th>
                        <tr>
                            <Th>Apellido Paterno</Th>
                            <Th>Apellido Materno</Th>
                            <Th>Nombre(s)</Th>
                        </tr>
                        <tr>
                            <th><input type="text"></input></th>
                            <th><input type="text"></input></th>
                            <th><input type="text"></input></th>
                        </tr>
                        <Th rowSpan={3} >Cédula de Identidad del Representante Legal</Th>
                        <tr>
                            <Th colSpan={4}>Número</Th>
                        </tr>
                        <tr>
                            <th colSpan={4}><input type="text"></input></th>
                        </tr>
                        <Th rowSpan={3} colSpan={2}>Poder del Representante Legal</Th>
                        <tr>
                            <Th>Número de Testimonio</Th>
                            <Th>Lugar de Emisión</Th>
                            <Th>Fecha de Inscripción</Th>
                        </tr>
                        <tr>
                            <th><input type="number"></input></th>
                            <th><input type="text"></input></th>
                            <th><input type="date"></input></th>
                        </tr>
                    </tbody>
                </Table3>
                <Titulo2>
                    <label></label>
                </Titulo2>
            </Form>
        </ContainerForm>
    )
}

export default Seis

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
    height: 100px;
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
    height: 55px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: bold;
    background: #003366;
    border-radius: 5px;
    label{
        color: #FFFFFF;
        margin-left:15px;
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
    height: 550px;
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

const Table3 = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-block-end: 12px;
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

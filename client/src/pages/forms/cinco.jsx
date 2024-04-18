import React from 'react'
import styled from 'styled-components';

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
                <Table3>
                    <tbody>
                        <tr>
                            <Th>Denominación de la Asociación Accidental</Th>
                            <th colSpan={4}><input type="text"></input></th>
                        </tr>
                        <Th rowSpan={5}>Asociados:</Th>
                        <tr>
                            <Th colSpan={2}>Nombre del Asociado</Th>
                            <Th>% de Participación</Th>
                        </tr>
                        <tr>
                            <th colSpan={2}><input type="text"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th colSpan={2}><input type="text"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th colSpan={2}><input type="text"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <Th rowSpan={3}>Nombre de la Empresa Líder</Th>
                        <tr>
                            <Th>Número de Testimonio</Th>
                            <Th>Lugar</Th>
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
                    <label>1. DATOS GENERALES DE LA ASOCIACIÓN ACCIDENTAL</label>
                </Titulo2>
                <Table3>
                    <tbody>
                        <tr>
                            <Th>País:</Th>
                            <input type="text"></input>
                            <Th>Ciudad: </Th>
                            <input type="text"></input>
                        </tr>
                        <tr>
                            <Th>Dirección Principal</Th>
                            <th colSpan={3}><input type="text"></input></th>
                        </tr>
                        <tr>
                            <Th>Teléfono:</Th>
                            <input type="text"></input>
                            <Th>Fax: </Th>
                            <input type="text"></input>
                        </tr>
                        <tr>
                            <Th>Correo Electrónico</Th>
                            <th colSpan={3}><input type="text"></input></th>
                        </tr>
                    </tbody>
                </Table3>
                <Titulo2>
                    <label>1. DATOS GENERALES DE LA ASOCIACIÓN ACCIDENTAL</label>
                </Titulo2>
                <Table3>
                    <tbody>
                        <Th rowSpan={3}>Nombre del Representante Legal</Th>
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
                        <tr>
                            <Th>Cédula de Identidad del  Representante Legal</Th>
                            <Th>Teléfono</Th>
                            <Th colSpan={2}>Fax</Th>
                        </tr>
                        <tr>
                            <th><input type="text"></input></th>
                            <th><input type="Number"></input></th>
                            <th colSpan={2}><input type="text"></input></th>
                        </tr>
                        <Th rowSpan={3}>Poder del Representante Legal</Th>
                        <tr>
                            <Th>Número de Testimonio</Th>
                            <Th>Lugar</Th>
                            <Th>Fecha de Inscripción</Th>
                        </tr>
                        <tr>
                            <th><input type="text"></input></th>
                            <th><input type="text"></input></th>
                            <th><input type="date"></input></th>
                        </tr>
                        <tr>
                            <Th>Dirección del Representante Legal</Th>
                            <th colSpan={3}><input type="text"></input></th>
                        </tr>
                        <tr>
                            <Th>Correo Electrónico</Th>
                            <th colSpan={3}><input type="email"></input></th>
                        </tr>
                        <Th colSpan={4}>Declaro en calidad de Representante Legal de la Asociación Accidental contar con un poder general amplio y suficiente con facultades para presentar propuestas y suscribir Contratos.</Th>
                    </tbody>
                </Table3>
                <Titulo2>
                    <label>1. DATOS GENERALES DE LA ASOCIACIÓN ACCIDENTAL</label>
                </Titulo2>
                <Table3>
                    <tbody>
                        <Th rowSpan={3}>Solicito que las notificaciones/comunicaciones me sean remitidas vía</Th>
                        <tr>
                            <Th>Fax:</Th>
                            <th><input type="text"></input></th>
                        </tr>
                        <tr>
                            <Th>Correo Electrónico</Th>
                            <th><input type="text"></input></th>
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

export default Cinco

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
    height: 140px;
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

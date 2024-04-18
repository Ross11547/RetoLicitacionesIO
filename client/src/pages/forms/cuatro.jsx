import React from 'react'
import styled from 'styled-components';

const Cuatro = () => {
    return (
        <ContainerForm>
            <Form>
                <Titulo>
                    <label>PFORMULARIO A-2b</label>
                    <label>IDENTIFICACIÓN DEL PROPONENTE</label>
                    <label>(Para Empresas Nacionales y Asociaciones sin fines de Lucro)</label>
                </Titulo>
                <Titulo2>
                    <label>1. DATOS GENERALES DEL PROPONENTE</label>
                </Titulo2>
                <Table3>
                    <tbody>
                        <tr>
                            <th >Nombre del proponente o Razón Social</th>
                            <th colSpan={4}><input type="text"></input></th>
                        </tr>
                        <th rowSpan={2}>Proponente</th>
                        <tr>
                            <th ><input type="checkbox"></input></th>
                            <th>Empresa Nacional</th>
                            <th ><input type="checkbox"></input></th>
                            <th>Asociación sin fines de lucro</th>
                        </tr>
                        <th rowSpan={3} colSpan={2}>Domicilio Principal</th>
                        <tr>
                            <th>País</th>
                            <th>Ciudad</th>
                            <th>Dirección</th>
                        </tr>
                        <tr>
                            <th><input type="text"></input></th>
                            <th><input type="text"></input></th>
                            <th ><input type="text"></input></th>
                        </tr>
                        <tr>
                            <th >Teléfono</th>
                            <th ><input type="number"></input></th>
                            <th colSpan={2}>Número de Identificación Tributaria</th>
                            <th ><input type="number"></input></th>
                        </tr>
                        <th rowSpan={3} colSpan={2}>Matrícula de Comercio</th>
                        <tr>
                            <th colSpan={2}>Número de Matricula</th>
                            <th>Fecha de Registro</th>
                        </tr>
                        <tr>
                            <th colSpan={2}><input type="number"></input></th>
                            <th><input type="date"></input></th>
                        </tr>
                    </tbody>
                </Table3>
                <Titulo2>
                    <label>2. INFORMACIÓN DEL REPRESENTANTE LEGAL (Cuando el proponente sea una empresa unipersonal y éste no acredite a un Representante Legal no será necesario el llenado de la información del numeral 2 del presente formulario).</label>
                </Titulo2>
                <Table3>
                    <tbody>
                        <th rowSpan={3} colSpan={2}>Domicilio Principal</th>
                        <tr>
                            <th>País</th>
                            <th>Ciudad</th>
                            <th>Dirección</th>
                        </tr>
                        <tr>
                            <th><input type="number"></input></th>
                            <th><input type="text"></input></th>
                            <th ><input type="text"></input></th>
                        </tr>
                        <tr>
                            <th >Nombre del proponente o Razón Social</th>
                            <th colSpan={4}><input type="text"></input></th>
                        </tr>
                        <th rowSpan={3} colSpan={2}>Poder del Representante Legal</th>
                        <tr>
                            <th>Número de Testimonio</th>
                            <th>Lugar de Emisión</th>
                            <th>Fecha de Inscripción</th>
                        </tr>
                        <tr>
                            <th><input type="number"></input></th>
                            <th><input type="text"></input></th>
                            <th ><input type="date"></input></th>
                        </tr>
                        <tr>
                            <th colSpan={5}>{">"} Declaro en calidad de Representante Legal contar con un poder general amplio y suficiente con facultades para presentar propuestas y suscribir Contratos. </th>
                        </tr>
                        <tr>
                            <th colSpan={5}>{">"} Declaro que el poder del Representante Legal se encuentra inscrito en el Registro de Comercio. (Suprimir este texto cuando por la naturaleza jurídica del proponente no se requiera la inscripción en el Registro de Comercio de Bolivia y cuando el proponente sea una empresa unipersonal y éste no acredite a un Representante Legal). </th>
                        </tr>
                    </tbody>
                </Table3>
                <Titulo2>
                    <label>3. INFORMACIÓN SOBRE NOTIFICACIONES</label>
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

export default Cuatro

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
    align-items: center;
    font-size: 17px;
    font-weight: bold;
    background: #003366;
    border-radius: 5px;
    label{
        color: #FFFFFF;
        margin-left: 15px;
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
        background: #ffffff;
        border: none;
        outline: none;
        text-align:center;
        width: 90%;
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

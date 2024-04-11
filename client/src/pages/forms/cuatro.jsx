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
                <FormGroup>
                    <Cuce>
                        <div className="form-group">
                            <label>Nombre del proponente o Razón social:</label>
                            <label>Proponente:</label>
                            <div>
                                <label><InputD type="checkbox" placeholder /> Empresa Nacional</label>
                                <label><InputD type="checkbox" placeholder />Asociación sin fines de lucro</label>
                            </div>
                            <label>Domicilio Principal:</label>
                            <div>
                                <InputD type="text" placeholder='País' />
                                <InputD type="text" placeholder='Ciudad' />
                                <InputD type="text" placeholder='Dirección' />
                            </div>
                            <label>Teléfonos :</label>
                            <labe>Númereo de Identificación Tributaria <InputD type="text" placeholder /></labe>
                            <label>Matrícula de Convenio <InputD type="text" placeholder='Número de Matrícula' /></label>
                            <label>Fecha de Registro <InputD type="date" placeholder /></label>
                        </div>
                        <div>
                            <InputD type="text" placeholder />
                        </div>
                    </Cuce>
                </FormGroup>
                <Titulo2>
                    <label>2. INFORMACIÓN DEL REPRESENTANTE LEGAL (Cuando el proponente sea una empresa unipersonal y éste no acredite a un Representante Legal no será necesario el llenado de la información del numeral 2 del presente formulario).</label>
                </Titulo2>
                <FormGroup>
                    <Cuce2>
                        <div className="form-group">
                            <label>Nombre del Representante Legal</label>
                            <div>
                                <InputD type="text" placeholder='Apellido Paterno' />
                                <InputD type="text" placeholder='Apellido Materno' />
                                <InputD type="text" placeholder='Nombre(s)' />
                            </div>
                            <label>Número de Cédula de Identidad del Representante Legal</label>
                            <div>
                                <InputD type="text" placeholder />
                            </div>
                            <label>Poder del Representante Legal</label>
                            <div>
                                <InputD type="text" placeholder='Número de Testimonio' />
                                <InputD type="text" placeholder='Lugar de Emisión' />
                                <InputD type="date" placeholder='Fecha de Inscripción' />
                            </div>
                        </div>
                        <div>
                            <InputD type="text" placeholder='Nombre(s)' />
                        </div>
                    </Cuce2>
                </FormGroup>
                <Table>
                    <thead>
                        <tr>
                            <Th colSpan={3}>3. INFORMACIÓN SOBRE NOTIFICACIONES</Th>
                        </tr>
                    </thead>
                    <tbody>
                        <Th rowSpan={3}>Solicito la aplicación del siguiente margen de preferencia para el proceso de contratación, conforme lo establecido en el inciso a) del parágrafo II, del Artículo 30 de las NB-SABS
                            (El proponente solo deberá marcar una de las opciones, el no marcado de la casilla se entenderá como la no solicitud de ningún  margen de preferencia)</Th>
                        <tr>
                            <Th>Fax:</Th>
                            <th><input type="text"></input></th>
                        </tr>
                        <tr>
                            <Th>Correo Electrónico</Th>
                            <th><input type="text"></input></th>
                        </tr>
                        <Tr>
                            <th colSpan={3}></th>
                        </Tr>
                    </tbody>
                </Table>
            </Form>
        </ContainerForm>
    )
}

export default Cuatro;

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
    height: 150px;
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
    height: 60px;
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
        margin-left: 10px;
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
    height: 540px;
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

const Cuce2 = styled.div`
width: 100%;
height: 410px;
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

const Cuce3 = styled.div`
    width: 100%;
    height: 10px;
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

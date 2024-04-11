import React from 'react';
import styled from 'styled-components';

const Evalucion_propuesta = () => {
    return (
        <ContainerForm>
            <Form>
                <Titulo>
                    <label>FORMULARIO V-2</label>
                    <label>EVALUACIÓN DE LA PROPUESTA</label>
                </Titulo>
                <Titulo2>
                    <label>DATOS DEL PROCESO</label>
                </Titulo2>
                <FormGroup>
                    <Cuce>
                        <div className="form-group">
                            <label>CUCE:</label>
                            <label>Objeto de la contratación:</label>
                            <label>Fecha y lugar del Acto de Apertura:</label>
                            <label>Dirección:</label>
                        </div>
                        <div>
                            <InputD type="number" placeholder />
                            <InputD type="text" placeholder />
                            <InputFD type="date" placeholder />
                            <InputD type="text" placeholder />
                        </div>
                    </Cuce>
                    <FechaLugar>
                        <div>
                        </div>
                        <FechaDireccion>
                        </FechaDireccion>
                    </FechaLugar>
                </FormGroup>
                <Table>
                    <thead>
                        <tr>
                            <th rowSpan={3}>N</th>
                            <th rowSpan={3}>NOMBRE DE PROPONENTE</th>
                            <th >VALOR LEÍDO DE LA PROPUESTA</th>
                            <th>MONTO AJUSTADO POR REVISIÓN ARITMÉTICA</th>
                            <th>FACTOR DE AJUSTE POR MARGEN DE PREFERENCIA</th>
                            <th>PRECIO AJUSTADO</th>

                        </tr>
                        <tr>
                            <th>PP</th>
                            <th>MAPRA(*)</th>
                            <th>(fx)</th>
                            <th>(PA = MAPRA * fa)</th>
                        </tr>
                        <tr>
                            <th>(a)</th>
                            <th>(b)</th>
                            <th>(c)</th>
                            <th>(b)*(c)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <th><input type="text"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>

                        </tr>
                        <tr>
                            <th>2</th>
                            <th><input type="text"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>3</th>
                            <th><input type="text"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>4</th>
                            <th><input type="text"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>5</th>
                            <th><input type="text"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>6</th>
                            <th><input type="text"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>7</th>
                            <th><input type="text"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>8</th>
                            <th><input type="text"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>9</th>
                            <th><input type="text"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>10</th>
                            <th><input type="text"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <th>n...</th>
                            <th><input type="text"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                            <th><input type="number"></input></th>
                        </tr>
                    </tbody>
                </Table>
            </Form>
        </ContainerForm>
    );
};

export default Evalucion_propuesta;

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
    height: 90px;
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
    margin-bottom: 2px;
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
    margin-bottom: 20px;
    background: #336699;
    padding: 10px;
    border-radius: 5px;
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

    th, td {
        border: 1px solid #336699;
        padding: 8px;
        text-align: center;
        height: 30px;
        
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
    }
`;



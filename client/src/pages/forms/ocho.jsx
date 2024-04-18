import React from 'react'
import styled from 'styled-components';

const Ocho = () => {
    return (
        <ContainerForm>
            <Form>
                <Titulo>
                    <label>FORMULARIO C-2</label>
                    <label>CONDICIONES ADICIONALES</label>
                </Titulo>
                <Table>
                    <thead>
                        <tr>
                            <th colspan={4}>Volúmenes de Obra requeridos por la entidad convocante
                                (Información que debe ser registrada por la entidad convocante)</th>
                        </tr>
                        <tr>
                            <th>#</th>
                            <th>Condiciones Adicionales Solicitadas (*)</th>
                            <th>Puntaje a Asignar</th>
                            <th>Puntaje Asignado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <th rowSpan={4}>1</th>
                        <tr>
                            <Th>Experiencia General de la Empresa en Obras Ejecutadas los</Th>
                            <th>9</th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <Th>Mayor o igual a 6 veces el precio referencial de la convocatoria</Th>
                            <th>9</th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <Th>Menor a 6 y Mayor o igual a 5 veces el precio referencial de la convocatoria</Th>
                            <th>4</th>
                            <th><input type="number"></input></th>
                        </tr>
                        <th rowSpan={4}>2</th>
                        <tr>
                            <Th>Experiencia Específica de la Empresa en Obras Ejecutadas los</Th>
                            <th>9</th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <Th>Mayor o igual a 4 veces el precio referencial de la convocatoria</Th>
                            <th>9</th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <Th>Menor a 4 y Mayor o igual a 3 veces el precio referencial de la convocatoria</Th>
                            <th>4</th>
                            <th><input type="number"></input></th>
                        </tr>
                        <th rowSpan={9}>3</th>
                        <tr>
                            <Th>RESIDENTE DE OBRA</Th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <Th>Experiencia General del Residente de Obra (En cargis similares). Ejecutadas los pultimos 10 años</Th>
                            <th>5</th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <Th>Mayor a 4 años según lo solicitado</Th>
                            <th>5</th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <Th>Menor o igual a 2 años  según solicitud</Th>
                            <th>2</th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <Th>Experiencia Específica del Residente de Obre (En cargos similares). Ejecutadas los últimos 10 años:</Th>
                            <th>5</th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <Th>Mayot o igual a 2 años segpun lo solicitado</Th>
                            <th>5</th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <Th>Menor a 2 y mayor o igual a 1 año según lo solicitado</Th>
                            <th>3</th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <Th>Igual a lo solicitado</Th>
                            <th>1</th>
                            <th><input type="number"></input></th>
                        </tr>
                        <th rowSpan={5}>4</th>
                        <tr>
                            <Th>FORMACIÓN COMPLEMENTARIA</Th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <Th>Formación Académica (En obras similares)</Th>
                            <th>4</th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <Th>Posgrado (Maestría, Especialidad y Diplomados)</Th>
                            <th>4</th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <Th>Cursos (Proyectos similares)</Th>
                            <th>2</th>
                            <th><input type="number"></input></th>
                        </tr>
                        <th rowSpan={3}>5</th>
                        <tr>
                            <Th>ORGANIGRAMA</Th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <Th>Supera lo requerido (detallado y permitiendo un mejor control en la obra, indicando materiales, herramientas, actividades de cada personal en cada item)</Th>
                            <th>4</th>
                            <th><input type="number"></input></th>
                        </tr>
                        <th rowSpan={5}>6</th>
                        <tr>
                            <Th>MÉTODOS CONSTRUCTIVOS</Th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <Th>Se ha optimizado la calidad de los materiales y trabajos solicitados en las especificaciones técnicas. 
                                El porponente deberá detallar que materiales o items se está mejorando (Cada actividad mejorada se ponderará
                                con 2 puntos, hasta llegar a un máximo de 6 puntos), donde el proponente deberá indicar las mejoras en una tabla</Th>
                            <th>6</th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <Th>Menor de lo solicitado</Th>
                            <th>6</th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <Th>Cumple exactamente con lo solicitado</Th>
                            <th>3</th>
                            <th><input type="number"></input></th>
                        </tr>
                        <th rowSpan={5}>7</th>
                        <tr>
                            <Th>NÚMERO DE FRENTES A UTILIZAR</Th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <Th>Número de frentes mayor a lo solicitado, cada frente extra se le asigna 2 describiendo de forma amplia y detallada
                                cada tarea o actividad a ejecutar según el tipo de obra tomando en consideración aspectos de logpistica en cuanto a 
                                materiales, maquinaria, herramientas y equipo, personal obrero técnico y operativo.
                            </Th>
                            <th>5</th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <Th>Mayor a lo solicitado y tiene coherencua con el organigrama</Th>
                            <th>5</th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <Th>Cumple exactamente con lo solicitado</Th>
                            <th>2</th>
                            <th><input type="number"></input></th>
                        </tr>
                        <th rowSpan={4}>8</th>
                        <tr>
                            <Th>Mejor tiempo de ejecución</Th>
                            <th>3</th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <Th>Igual a lo solicitado</Th>
                            <th>2</th>
                            <th><input type="number"></input></th>
                        </tr>
                        <tr>
                            <Th>{">"}90% y {"100"}% de tiempo solicitado</Th>
                            <th>1</th>
                            <th><input type="number"></input></th>
                        </tr>
                        <Tr>
                            <Th colSpan={2} >TOTAL PUNTAJE</Th>
                            <th >50 PUNTOS (**)</th>
                            <th><input type="number"></input></th>
                        </Tr>
                    </tbody>
                </Table>
            </Form>
        </ContainerForm>
    )
}

export default Ocho

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
    height: 120px;
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

const Form = styled.form`
    width: 80%;
    padding: 30px;
    display: flex;
    flex-direction: column;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    th, td {
        border: 1px solid #336699;
        padding: 8px;
        height: 30px;
        
    }
    thead{
         background-color: #003366;
         color:#FFFFFF;
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
    }
`;

const Tr = styled.tr`
    border: 1px solid #336699;
    background:#003366;
    color: #FFFFFF;
    input{
        background: #003366;
        border: none;
        outline: none;
        color: #FFFFFF;
    }
`;

const Th = styled.th`
    padding: 8px;
    height: 30px;
    text-align: start;
`;

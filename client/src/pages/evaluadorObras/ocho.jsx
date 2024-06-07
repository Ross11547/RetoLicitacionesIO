import React from 'react'
import { ButtonSig, ContainerForm, DivButton, Tr , Table, Th, Tra } from '../../style/formulariosStyleUno';
import { Form, Titulo, Titulo2} from '../../style/formulariosStyleDosTres';


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
                        <Tra>
                            <Th>Experiencia General de la Empresa en Obras Ejecutadas los</Th>
                            <th>9</th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tra>
                            <Th>Mayor o igual a 6 veces el precio referencial de la convocatoria</Th>
                            <th>9</th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tra>
                            <Th>Menor a 6 y Mayor o igual a 5 veces el precio referencial de la convocatoria</Th>
                            <th>4</th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <th rowSpan={4}>2</th>
                        <Tra>
                            <Th>Experiencia Específica de la Empresa en Obras Ejecutadas los</Th>
                            <th>9</th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tra>
                            <Th>Mayor o igual a 4 veces el precio referencial de la convocatoria</Th>
                            <th>9</th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tra>
                            <Th>Menor a 4 y Mayor o igual a 3 veces el precio referencial de la convocatoria</Th>
                            <th>4</th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <th rowSpan={9}>3</th>
                        <Tra>
                            <Th>RESIDENTE DE OBRA</Th>
                            <th></th>
                            <th></th>
                        </Tra>
                        <Tra>
                            <Th>Experiencia General del Residente de Obra (En cargis similares). Ejecutadas los pultimos 10 años</Th>
                            <th>5</th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tra>
                            <Th>Mayor a 4 años según lo solicitado</Th>
                            <th>5</th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tra>
                            <Th>Menor o igual a 2 años  según solicitud</Th>
                            <th>2</th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tra>
                            <Th>Experiencia Específica del Residente de Obre (En cargos similares). Ejecutadas los últimos 10 años:</Th>
                            <th>5</th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tra>
                            <Th>Mayot o igual a 2 años segpun lo solicitado</Th>
                            <th>5</th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tra>
                            <Th>Menor a 2 y mayor o igual a 1 año según lo solicitado</Th>
                            <th>3</th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tra>
                            <Th>Igual a lo solicitado</Th>
                            <th>1</th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <th rowSpan={5}>4</th>
                        <Tra>
                            <Th>FORMACIÓN COMPLEMENTARIA</Th>
                            <th></th>
                            <th></th>
                        </Tra>
                        <Tra>
                            <Th>Formación Académica (En obras similares)</Th>
                            <th>4</th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tra>
                            <Th>Posgrado (Maestría, Especialidad y Diplomados)</Th>
                            <th>4</th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tra>
                            <Th>Cursos (Proyectos similares)</Th>
                            <th>2</th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <th rowSpan={3}>5</th>
                        <Tra>
                            <Th>ORGANIGRAMA</Th>
                            <th></th>
                            <th></th>
                        </Tra>
                        <Tra>
                            <Th>Supera lo requerido (detallado y permitiendo un mejor control en la obra, indicando materiales, herramientas, actividades de cada personal en cada item)</Th>
                            <th>4</th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <th rowSpan={5}>6</th>
                        <Tra>
                            <Th>MÉTODOS CONSTRUCTIVOS</Th>
                            <th></th>
                            <th></th>
                        </Tra>
                        <Tra>
                            <Th>Se ha optimizado la calidad de los materiales y trabajos solicitados en las especificaciones técnicas.
                                El porponente deberá detallar que materiales o items se está mejorando (Cada actividad mejorada se ponderará
                                con 2 puntos, hasta llegar a un máximo de 6 puntos), donde el proponente deberá indicar las mejoras en una tabla</Th>
                            <th>6</th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tra>
                            <Th>Menor de lo solicitado</Th>
                            <th>6</th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tra>
                            <Th>Cumple exactamente con lo solicitado</Th>
                            <th>3</th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <th rowSpan={5}>7</th>
                        <Tra>
                            <Th>NÚMERO DE FRENTES A UTILIZAR</Th>
                            <th></th>
                            <th></th>
                        </Tra>
                        <Tra>
                            <Th>Número de frentes mayor a lo solicitado, cada frente extra se le asigna 2 describiendo de forma amplia y detallada
                                cada tarea o actividad a ejecutar según el tipo de obra tomando en consideración aspectos de logpistica en cuanto a
                                materiales, maquinaria, herramientas y equipo, personal obrero técnico y operativo.
                            </Th>
                            <th>5</th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tra>
                            <Th>Mayor a lo solicitado y tiene coherencua con el organigrama</Th>
                            <th>5</th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tra>
                            <Th>Cumple exactamente con lo solicitado</Th>
                            <th>2</th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <th rowSpan={4}>8</th>
                        <Tra>
                            <Th>Mejor tiempo de ejecución</Th>
                            <th>3</th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tra>
                            <Th>Igual a lo solicitado</Th>
                            <th>2</th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tra>
                            <Th>{">"}90% y {"100"}% de tiempo solicitado</Th>
                            <th>1</th>
                            <th><input type="number"></input></th>
                        </Tra>
                        <Tr>
                            <Th colSpan={2} >TOTAL PUNTAJE</Th>
                            <th >50 PUNTOS (**)</th>
                            <th><input type="number"></input></th>
                        </Tr>
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

export default Ocho


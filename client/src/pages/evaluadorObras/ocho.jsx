import React, { useState } from 'react'
import { ButtonSig, ContainerForm, DivButton, Tr, Table, Th, Tra } from '../../style/formulariosStyleUno';
import { Form, Titulo, Titulo2 } from '../../style/formulariosStyleDosTres';
import { Link } from 'react-router-dom';


const Ocho = () => {
    const [form, setForm] = useState({
        puntoUnoAsignadoUno: 0,
        puntoDosAsignadoUno: 0,
        puntoTresAsignadoUno: 0,
        puntoUnoAsignadoDoS: 0,
        puntoDosAsignadoDoS: 0,
        puntoTresAsignadoDoS: 0,
        puntoUnoAsignadoTres: 0,
        puntoDosAsignadoTres: 0,
        puntoTresAsignadoTres: 0,
        puntoCuatroAsignadoTres: 0,
        puntoCincoAsignadoTres: 0,
        puntoSeisAsignadoTres: 0,
        puntoSieteAsignadoTres: 0,
        puntoUnoAsignadoCuatro: 0,
        puntoDossAsignadoCuatro: 0,
        puntoTresAsignadoCuatro: 0,
        puntoCuatroAsignadoCuatro: 0,
        puntoUnoAsignadoCinco: 0,
        puntoUnoAsignadoSeis: 0,
        puntoDosAsignadoSeis: 0,
        puntoTresAsignadoSeis: 0,
        puntoUnoAsignadoSiete: 0,
        puntoDosAsignadoSiete: 0,
        puntoTresAsignadoSiete: 0,
        puntoUnoAsignadoOcho: 0,
        puntoDosAsignadoOcho: 0,
        puntoTresAsignadoOcho: 0,
        totalPuntaje: 0
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("http://localhost:5000/formulario", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(
              {
                descripcion: "Formulario2",
                archivo: form
              }
            ),
          });
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          toast.success("Formularios Enviados Correctamente");
          const data = await response.json();
        } catch (error) {
          console.error("Error:", error);
        }
      };
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
                            <th><input type="number" value={form.puntoUnoAsignadoUno} onChange={(event) => setForm((old) => ({ ...old, puntoUnoAsignadoUno: event.target.value }))} /></th>
                        </Tra>
                        <Tra>
                            <Th>Mayor o igual a 6 veces el precio referencial de la convocatoria</Th>
                            <th>9</th>
                            <th><input type="number" value={form.puntoDosAsignadoUno} onChange={(event) => setForm((old) => ({ ...old, puntoDosAsignadoUno: event.target.value }))} /></th>
                        </Tra>
                        <Tra>
                            <Th>Menor a 6 y Mayor o igual a 5 veces el precio referencial de la convocatoria</Th>
                            <th>4</th>
                            <th><input type="number" value={form.puntoTresAsignadoUno} onChange={(event) => setForm((old) => ({ ...old, puntoTresAsignadoUno: event.target.value }))} /></th>
                        </Tra>
                        <th rowSpan={4}>2</th>
                        <Tra>
                            <Th>Experiencia Específica de la Empresa en Obras Ejecutadas los</Th>
                            <th>9</th>
                            <th><input type="number" value={form.puntoUnoAsignadoDoS} onChange={(event) => setForm((old) => ({ ...old, puntoUnoAsignadoDoS: event.target.value }))} /></th>
                        </Tra>
                        <Tra>
                            <Th>Mayor o igual a 4 veces el precio referencial de la convocatoria</Th>
                            <th>9</th>
                            <th><input type="number" value={form.puntoDosAsignadoDoS} onChange={(event) => setForm((old) => ({ ...old, puntoDosAsignadoDoS: event.target.value }))} /></th>
                        </Tra>
                        <Tra>
                            <Th>Menor a 4 y Mayor o igual a 3 veces el precio referencial de la convocatoria</Th>
                            <th>4</th>
                            <th><input type="number" value={form.puntoTresAsignadoDoS} onChange={(event) => setForm((old) => ({ ...old, puntoTresAsignadoDoS: event.target.value }))} /></th>
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
                            <th><input type="number" value={form.puntoUnoAsignadoTres} onChange={(event) => setForm((old) => ({ ...old, puntoUnoAsignadoTres: event.target.value }))} /></th>
                        </Tra>
                        <Tra>
                            <Th>Mayor a 4 años según lo solicitado</Th>
                            <th>5</th>
                            <th><input type="number" value={form.puntoDosAsignadoTres} onChange={(event) => setForm((old) => ({ ...old, puntoDosAsignadoTres: event.target.value }))} /></th>
                        </Tra>
                        <Tra>
                            <Th>Menor o igual a 2 años  según solicitud</Th>
                            <th>2</th>
                            <th><input type="number" value={form.puntoTresAsignadoTres} onChange={(event) => setForm((old) => ({ ...old, puntoTresAsignadoTres: event.target.value }))} /></th>
                        </Tra>
                        <Tra>
                            <Th>Experiencia Específica del Residente de Obre (En cargos similares). Ejecutadas los últimos 10 años:</Th>
                            <th>5</th>
                            <th><input type="number" value={form.puntoCuatroAsignadoTres} onChange={(event) => setForm((old) => ({ ...old, puntoCuatroAsignadoTres: event.target.value }))} /></th>
                        </Tra>
                        <Tra>
                            <Th>Mayot o igual a 2 años segpun lo solicitado</Th>
                            <th>5</th>
                            <th><input type="number" value={form.puntoCincoAsignadoTres} onChange={(event) => setForm((old) => ({ ...old, puntoCincoAsignadoTres: event.target.value }))} /></th>
                        </Tra>
                        <Tra>
                            <Th>Menor a 2 y mayor o igual a 1 año según lo solicitado</Th>
                            <th>3</th>
                            <th><input type="number" value={form.puntoSeisAsignadoTres} onChange={(event) => setForm((old) => ({ ...old, puntoSeisAsignadoTres: event.target.value }))} /></th>
                        </Tra>
                        <Tra>
                            <Th>Igual a lo solicitado</Th>
                            <th>1</th>
                            <th><input type="number" value={form.puntoSieteAsignadoTres} onChange={(event) => setForm((old) => ({ ...old, puntoSieteAsignadoTres: event.target.value }))} /></th>
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
                            <th><input type="number" value={form.puntoUnoAsignadoCuatro} onChange={(event) => setForm((old) => ({ ...old, puntoUnoAsignadoCuatro: event.target.value }))} /></th>
                        </Tra>
                        <Tra>
                            <Th>Posgrado (Maestría, Especialidad y Diplomados)</Th>
                            <th>4</th>
                            <th><input type="number" value={form.puntoDossAsignadoCuatro} onChange={(event) => setForm((old) => ({ ...old, puntoDossAsignadoCuatro: event.target.value }))} /></th>
                        </Tra>
                        <Tra>
                            <Th>Cursos (Proyectos similares)</Th>
                            <th>2</th>
                            <th><input type="number" value={form.puntoTresAsignadoCuatro} onChange={(event) => setForm((old) => ({ ...old, puntoTresAsignadoCuatro: event.target.value }))} /></th>
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
                            <th><input type="number" value={form.puntoUnoAsignadoCinco} onChange={(event) => setForm((old) => ({ ...old, puntoUnoAsignadoCinco: event.target.value }))} /></th>
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
                            <th><input type="number" value={form.puntoUnoAsignadoSeis} onChange={(event) => setForm((old) => ({ ...old, puntoUnoAsignadoSeis: event.target.value }))} /></th>
                        </Tra>
                        <Tra>
                            <Th>Menor de lo solicitado</Th>
                            <th>6</th>
                            <th><input type="number" value={form.puntoDosAsignadoSeis} onChange={(event) => setForm((old) => ({ ...old, puntoDosAsignadoSeis: event.target.value }))} /></th>
                        </Tra>
                        <Tra>
                            <Th>Cumple exactamente con lo solicitado</Th>
                            <th>3</th>
                            <th><input type="number" value={form.puntoTresAsignadoSeis} onChange={(event) => setForm((old) => ({ ...old, puntoTresAsignadoSeis: event.target.value }))} /></th>
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
                            <th><input type="number" value={form.puntoUnoAsignadoSiete} onChange={(event) => setForm((old) => ({ ...old, puntoUnoAsignadoSiete: event.target.value }))} /></th>
                        </Tra>
                        <Tra>
                            <Th>Mayor a lo solicitado y tiene coherencua con el organigrama</Th>
                            <th>5</th>
                            <th><input type="number" value={form.puntoDosAsignadoSiete} onChange={(event) => setForm((old) => ({ ...old, puntoDosAsignadoSiete: event.target.value }))} /></th>
                        </Tra>
                        <Tra>
                            <Th>Cumple exactamente con lo solicitado</Th>
                            <th>2</th>
                            <th><input type="number" value={form.puntoTresAsignadoSiete} onChange={(event) => setForm((old) => ({ ...old, puntoTresAsignadoSiete: event.target.value }))} /></th>
                        </Tra>
                        <th rowSpan={4}>8</th>
                        <Tra>
                            <Th>Mejor tiempo de ejecución</Th>
                            <th>3</th>
                            <th><input type="number" value={form.puntoUnoAsignadoOcho} onChange={(event) => setForm((old) => ({ ...old, puntoUnoAsignadoOcho: event.target.value }))} /></th>
                        </Tra>
                        <Tra>
                            <Th>Igual a lo solicitado</Th>
                            <th>2</th>
                            <th><input type="number" value={form.puntoDosAsignadoOcho} onChange={(event) => setForm((old) => ({ ...old, puntoDosAsignadoOcho: event.target.value }))} /></th>
                        </Tra>
                        <Tra>
                            <Th>{">"}90% y {"100"}% de tiempo solicitado</Th>
                            <th>1</th>
                            <th><input type="number" value={form.puntoTresAsignadoOcho} onChange={(event) => setForm((old) => ({ ...old, puntoTresAsignadoOcho: event.target.value }))} /></th>
                        </Tra>
                        <Tr>
                            <Th colSpan={2} >TOTAL PUNTAJE</Th>
                            <th >50 PUNTOS (**)</th>
                            <th><input type="number" value={form.totalPuntaje} onChange={(event) => setForm((old) => ({ ...old, totalPuntaje: event.target.value }))} /></th>
                        </Tr>
                    </tbody>
                </Table>
                <Titulo2>
                </Titulo2>
                <DivButton>
                    <ButtonSig onClick={handleSubmit}><Link to="/ocho">ENVIAR</Link></ButtonSig>
                </DivButton>
            </Form>
        </ContainerForm>
    )
}

export default Ocho


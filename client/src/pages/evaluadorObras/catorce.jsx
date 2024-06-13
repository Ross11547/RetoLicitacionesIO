import React, { useState } from 'react';
import { ButtonSig, ContainerForm, DivButton, Tr, Th, Table, Tra, Titulo2 } from '../../style/formulariosStyleUno';
import { Form, Titulo } from '../../style/formulariosStyleDosTres';
import { Colors } from '../../style/colores';
import styled from 'styled-components';
import { toast } from 'react-toastify';


const Catorce = () => {
    const [columns, setColumns] = useState([
        "PROPONENTE A",
        "PROPONENTE B",
        "PROPONENTE C",
        "PROPONENTE D"
    ]);

    const [data, setData] = useState([
        { description: "PUNTAJE DE LA EVALUACIÓN CUMPLE/NO CUMPLE", values: Array(columns.length).fill("") },
        { description: "PUNTAJE DE LAS CONDICIONES ADICIONALES", values: Array(columns.length).fill("") },
    ]);
    const [datas, setDatas] = useState([
        { description: "PUNTAJE TOTAL DE LA EVALUACIÓN DE LA PROPUESTA TÉCNICA (PT)", values: Array(columns.length).fill("") },
    ]);

    const handleInputChange = (event, rowIndex, colIndex) => {
        const { value } = event.target;
        const newData = [...data];
        newData[rowIndex].values[colIndex] = value;
        setData(newData);
    };

    const addColumn = (e) => {
        e.preventDefault();
        const newColumn = `PROPONENTE ${String.fromCharCode(65 + columns.length)}`;
        setColumns([...columns, newColumn]);
        setData(data.map(row => ({
            ...row,
            values: [...row.values, ""]
        })));
        setDatas(datas.map(row => ({
            ...row,
            values: [...row.values, ""]
        })));
    };

    const removeColumn = (e) => {
        e.preventDefault();
        if (columns.length > 1) { // Ensure at least one column remains
            setColumns(columns.slice(0, -1));
            setData(data.map(row => ({
                ...row,
                values: row.values.slice(0, -1)
            })));
            setDatas(datas.map(row => ({
                ...row,
                values: row.values.slice(0, -1)
            })));
        }
    };
    const jsonData = {
        columns,
        data
    };
    console.log(JSON.stringify(jsonData, null, 2));
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
                archivo: jsonData
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
                    <label>FORMULARIO V-4</label>
                    <label>RESUMEN DE LA EVALUACIÓN TÉCNICA Y ECONÓMICA</label>
                    <label>(Este formulario es aplicable solo cuando se emplee el Método de Selección y Adjudicación Calidad, Propuesta Técnica y Costo. Caso contrario suprimir este Formulario)</label>
                </Titulo>
                <Table>
                    <thead>
                        <tr>
                            <th>ABREVIACIÓN</th>
                            <th>DESCRIPCIÓN</th>
                            <th>PUNTAJE ASIGNADO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Tra>
                            <th> PE </th>
                            <th>Puntaje de la Evaluación de la Propuesta Económica</th>
                            <th>20 puntos</th>
                        </Tra>
                        <Tra>
                            <th> PT </th>
                            <th>Puntaje de la Evaluación de la Propuesta Técnica</th>
                            <th>80 puntos</th>
                        </Tra>
                        <Tra>
                            <th> PTE </th>
                            <th>PUNTAJE TOTAL DE LA PROPUESTA EVALUADA</th>
                            <th>100 puntos</th>
                        </Tra>
                    </tbody>
                </Table>
                <Titulo2 />
                <Table>
                    <thead>
                        <Tr>
                            <th rowSpan={2}>CONDICIONES ADICIONALES FORMULARIO C-2 (Llenado por la entidad)</th>
                            <th colSpan={columns.length}>PROPONENTES</th>
                        </Tr>
                        <Tr>
                            {columns.map((column, index) => (
                                <th key={index}>{column}</th>
                            ))}
                        </Tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <Tra key={rowIndex}>
                                <th>{row.description}</th>
                                {row.values.map((value, colIndex) => (
                                    <td key={colIndex}>
                                        <input
                                            type="number"
                                            value={value}
                                            onChange={(event) => handleInputChange(event, rowIndex, colIndex)}
                                        />
                                    </td>
                                ))}
                            </Tra>
                        ))}
                        {datas.map((row, rowIndex) => (
                            <Tr key={rowIndex}>
                                <th>{row.description}</th>
                                {row.values.map((value, colIndex) => (
                                    <td key={colIndex}>
                                        <input
                                            type="number"
                                            value={value}
                                            onChange={(event) => handleInputChange(event, rowIndex, colIndex)}
                                        />
                                    </td>
                                ))}
                            </Tr>
                        ))}
                    </tbody>
                </Table>
                <button onClick={addColumn}>Agregar Columna</button>
                <button onClick={removeColumn}>Eliminar Columna</button>
                <DivButton>
                    <ButtonSig onClick={handleSubmit}>GUARDAR</ButtonSig>
                </DivButton>
            </Form>
        </ContainerForm>
    );
}

export default Catorce;

import React, { useState } from 'react'
import { ButtonSig, ContainerForm, DivButton, Tr, Th, Table, Tra } from '../../style/formulariosStyleUno';
import { Form, Titulo } from '../../style/formulariosStyleDosTres';


const Doce = () => {
    const [table, setTable] = useState({
        rows: [{ values: ["", false, false, false, false, false, false, false, false] }]
    });
    const addRow = (e) => {
        e.preventDefault();
        setTable((prevTable) => ({
            ...prevTable,
            rows: [...prevTable.rows, { values: ["", false, false, false, false, false, false, false, false] }],
        }));
    };

    const removeRow = (e, rowIndex) => {
        e.preventDefault();
        setTable((prevTable) => {
            const newRows = prevTable.rows.filter((_, index) => index !== rowIndex);
            return { ...prevTable, rows: newRows };
        });
    };

    const jsonData = {
        tableData: table.rows.map((row) => row.values),
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/formulario", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    descripcion: "Formulario2",
                    archivo: jsonData
                }),
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
                    <label>FORMULARIO V-3</label>
                    <label>EVALUACIÓN DE LA PROPUESTA TÉCNICA</label>
                </Titulo>
                <Table>
                    <thead>
                        <tr>
                            <th rowSpan={3}>N°</th>
                            <Th rowSpan={3}>PROPUESTA TÉCNICA EN BASE A LAS ESPECIFICACIONES TÉCNICAS
                                (Señalar los Documentos Técnicos a evaluarse pudiendo ser entre otros: Métodos constructivos, Organigrama, número de frentes de trabajo y otros que se consideren necesarios).</Th>
                            <th colSpan={8}> PROPONENTES</th>
                            <th rowSpan={3}>ACCION</th>
                        </tr>
                        <tr>
                            <th colSpan={2}>PROPONENTE A</th>
                            <th colSpan={2}>PROPONENTE B</th>
                            <th colSpan={2}>PROPONENTE C</th>
                            <th colSpan={2}>PROPONENTE n</th>
                        </tr>
                        <tr>
                            <th>CUMPLE</th>
                            <th>NO CUMPLE</th>
                            <th>CUMPLE</th>
                            <th>NO CUMPLE</th>
                            <th>CUMPLE</th>
                            <th>NO CUMPLE</th>
                            <th>CUMPLE</th>
                            <th>NO CUMPLE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table.rows.map((row, rowIndex) => (
                            <Tra key={rowIndex}>
                                <th>{rowIndex + 1 }</th>
                                {row.values.map((value, colIndex) => (
                                    <td key={colIndex}>
                                        {colIndex === 0 ? (
                                            <input
                                                type="text"
                                                value={value}
                                                onChange={(event) => handleInputChange(event, rowIndex, colIndex)}
                                            />
                                        ) : (
                                            <input
                                                type="checkbox"
                                                checked={value}
                                                onChange={(event) => handleInputChange(event, rowIndex, colIndex)}
                                            />
                                        )}
                                    </td>
                                ))}
                                <td>
                                    <button type="button" onClick={(event) => removeRow(event, rowIndex)}>x</button>
                                </td>
                            </Tra>
                        ))}
                        <Tr>
                            <th></th>
                            <th>METODOLOGÍA CUMPLE/NO CUMPLE</th>
                            <th colSpan={2}>(señalar si cumple o no cumple)</th>
                            <th colSpan={2}>(señalar si cumple o no cumple)</th>
                            <th colSpan={2}>(señalar si cumple o no cumple)</th>
                            <th colSpan={2}>(señalar si cumple o no cumple)</th>
                            <th>
                                <button type="button" onClick={addRow}>+</button>
                            </th>
                        </Tr>
                    </tbody>
                    <DivButton>
                        <ButtonSig onClick={handleSubmit}>GUARDAR</ButtonSig>
                    </DivButton>
                </Table>
            </Form>
        </ContainerForm>
    )
}

export default Doce


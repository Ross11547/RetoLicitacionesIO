import React from 'react'
import { ButtonSig, ContainerForm, DivButton, Tr , Th, Table, Tra} from '../../style/formulariosStyleUno';
import { Form, Titulo} from '../../style/formulariosStyleDosTres';


const Doce = () => {
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
                            <Th rowSpan={3}>PROPUESTA TÉCNICA EN BASE A LAS ESPECIFICACIONES TÉCNICAS
                                (Señalar los Documentos Técnicos a evaluarse pudiendo ser entre otros: Métodos constructivos, Organigrama, número de frentes de trabajo y otros que se consideren necesarios).</Th>
                            <th colSpan={8}> PROPONENTES</th>
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
                        <Tra>
                            <Th>1. <input type="text"></input></Th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </Tra>
                        <Tra>
                            <Th>2. <input type="text"></input></Th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </Tra>
                        <Tra>
                            <Th>3. <input type="text"></input></Th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </Tra>
                        <Tra>
                            <Th>4. <input type="text"></input></Th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </Tra>
                        <Tra>
                            <Th>5. <input type="text"></input></Th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </Tra>
                        <Tra>
                            <Th>6. <input type="text"></input></Th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </Tra>
                        <Tra>
                            <Th>7. <input type="text"></input></Th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </Tra>
                        <Tra>
                            <Th>8. <input type="text"></input></Th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </Tra>
                        <Tra>
                            <Th>9. <input type="text"></input></Th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </Tra>
                        <Tra>
                            <Th>10. <input type="text"></input></Th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </Tra>
                        <Tr>
                            <th>METODOLOGÍA CUMPLE/NO CUMPLE</th>
                            <th colSpan={2}>(señalar si cumple o no cumple)</th>
                            <th colSpan={2}>(señalar si cumple o no cumple)</th>
                            <th colSpan={2}>(señalar si cumple o no cumple)</th>
                            <th colSpan={2}>(señalar si cumple o no cumple)</th>
                        </Tr>
                    </tbody>
                </Table>
                <DivButton>
                    <ButtonSig>SIGUIENTE</ButtonSig>
                </DivButton>
            </Form>
        </ContainerForm>
    )
}

export default Doce


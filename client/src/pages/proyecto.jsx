import React from 'react'
import { ButtonSig, ContainerForm, DivButton, Table, Th  } from '../style/formulariosStyleUno';
import { Form, Titulo, Titulo2, FormGroup, Cuce, InputD} from '../style/formulariosStyleDosTres';
import { Link } from 'react-router-dom';

const Proyecto = () => {
    return (
        <ContainerForm>
            <Form>
                <Titulo>
                    <label>REGISTRO DE LICITACIÓN PARA POSTULARSE A CONVOCATORIA</label>
                    <label>(Por favor llene todos los campos)</label>
                </Titulo>
                <Titulo2>
                    <label>1. DATOS DEL OBJETO DE LA CONTRATACIÓN</label>
                </Titulo2>
                <FormGroup>
                    <Cuce>
                        <div className="form-group">
                            <label>Nombre Licitación:</label>
                            <label>CUCE:</label>
                            <label>Entidad:</label>
                            <label>Departamento:</label>
                            <label>Contacto:</label>
                            <label>Teléfono:</label>
                            <label>Tipo Contratación:</label>
                            <label>Modalidad:</label>
                        </div>
                        <div>
                            <InputD type="text" required />
                            <InputD type="number" required />
                            <InputD type="text" required />
                            <InputD type="text" required />
                            <InputD type="text" required />
                            <InputD type="number" required />
                            <InputD type="text" required />
                            <InputD type="text" required />

                        </div>
                    </Cuce>
                </FormGroup>
                <Titulo2>
                    <label></label>
                </Titulo2>
                <DivButton>
                    <ButtonSig><Link to="/siguiente">SIGUIENTE</Link></ButtonSig>
                </DivButton>
            </Form>
        </ContainerForm>
    )
}

export default Proyecto;



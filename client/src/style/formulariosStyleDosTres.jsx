import styled from 'styled-components';
import { Colors } from './colores';

export const Titulo = styled.div`
    width: 100%;  
    margin-bottom: 15px;
    background: ${Colors.primary100};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 17px;
    font-weight: bold;
    gap: 13px;
    border-radius: 5px;
    padding: 20px;
    label {
        color: ${Colors.primary500};
    }
`;

export const Titulo3 = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: bold;
    background: ${Colors.primary300};
    border-radius: 5px;
    padding: 15px;
    label {
        color: ${Colors.primary500};
    }
`;

export const Titulo2 = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: bold;
    background: ${Colors.primary100};
    border-radius: 5px;
    padding: 15px;
    label {
        color: ${Colors.primary500};
    }
`;

export const Form = styled.form`
    width: 100%;
    padding: 30px;
    display: flex;
    justify-content:start;
    align-items:start;
    flex-direction: column;
`;
export const FormDos = styled.form`
    width: 100%;
    padding: 30px;
    display: flex;
    margin-top:120px;
    flex-direction: column;
`;
export const FormTres = styled.form`
    width: 100%;
    padding: 30px;
    display: flex;
    margin-top:150px;
    flex-direction: column;
`;
export const FormCuatro = styled.form`
    width: 100%;
    padding: 30px;
    display: flex;
    margin-top:760px;
    flex-direction: column;
`;
export const FormCinco = styled.form`
    width: 100%;
    padding: 30px;
    display: flex;
    margin-top:1200px;
    flex-direction: column;
`;
export const FormSeis = styled.form`
    width: 100%;
    padding: 30px;
    display: flex;
    margin-top:90px;
    flex-direction: column;
`;
export const FormSiete = styled.form`
    width: 100%;
    padding: 30px;
    display: flex;
    margin-top:3870px;
    flex-direction: column;
`;

export const FormGroup = styled.div`
    width: 100%;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 5px;
    text-align: end;
    background: ${Colors.primary400};
`;

export const InputD = styled.input`
    width: 100%;
    max-width: 500px;
    margin-left: 10px;
    padding: 5px;
    border-radius: 3px;
    border: 1px solid ${Colors.primary400};
    outline: none;
`;

export const Cuce = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 16px 0;
    gap: 15px;
    div {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .form-group {
        display: flex;
        flex-direction: column;
        text-align: end;
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-block-end: 12px;

    th, td {
        border: 1px solid ${Colors.primary100};
        padding: 8px;
        text-align: left;
    }
    thead {
        background-color: ${Colors.primary100};
        color: ${Colors.primary500};
        font-size: 15px;
    }
    tbody tr {
        height: 50px;
        background-color: ${Colors.primary300};
    }
    input {
        background: ${Colors.primary400};
        border: none;
        outline: none;
        text-align: center;
        width: 100%;
    }
`;

export const Tr = styled.tr`
    background-color: ${Colors.primary300};
    color: ${Colors.primary500};
    font-size: 15px;
`;

export const Th = styled.th`
    border: 1px solid ${Colors.primary100};
    text-align: left;
`;

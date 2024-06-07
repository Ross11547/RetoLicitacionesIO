import styled from 'styled-components';
import { Colors } from './colores';

export const Titulo = styled.div`
    width: 100%;  
    height: 190px;
    margin-bottom: 15px;
    background:${Colors.primary100};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 17px;
    font-weight: bold;
    gap:13px;
    border-radius: 5px;
    label{
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

    label{
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

    label{
        color: ${Colors.primary500};
    }
`;
export const Form = styled.form`
    width: 80%;
    padding: 30px;
    display: flex;
    flex-direction: column;
`;

export const FormGroup = styled.form`
    width: 100%;
    height: 100%;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 5px solid ${Colors.primary300};
    text-align: end;
    background: ${Colors.primary400};

`;

export const InputD = styled.input`
    width: 500px;
    margin-left: 10px;
    padding: 2px;
    border-radius: 3px;
    border: 1px solid ${Colors.primary400};
    outline: none;
`;
export const Cuce = styled.div`
    width: 100%;
    height: 350px;
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

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-block-end: 12px;

    th, tr {
        border: 1px solid ${Colors.primary100};
        padding: 8px;
        height: 20px;
        
    }
    thead{
        background-color: ${Colors.primary100};
        color:${Colors.primary500};
        font-size: 15px;
    }
    tbody{
        tr{
            height: 50px;
        }
    }
    input{
        background: ${Colors.primary400};
        border: none;
        outline: none;
        text-align:center;
    }
    `;
export const Tr = styled.tr`
    background-color: ${Colors.primary300};
    color:${Colors.primary500};
    font-size: 15px;
    `;
export const Th = styled.th`
    border: 1px solid ${Colors.primary100};
    text-align: left;
`;
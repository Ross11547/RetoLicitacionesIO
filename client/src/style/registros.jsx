import styled from 'styled-components';
import { Colors } from './colores';

export const Container = styled.div`
  width: 100%;
  height: 673px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 150px;
`;

export const DivImg = styled.div`
  width: 950px;
  height: 650px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const Form = styled.form`
  width: 30%; 
  height: 650px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.221);
  backdrop-filter: blur(20px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginForm = styled.form`
  width: 480px; 
  height: 600px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px;
  gap: 10px;
`;

export const LoginForm2 = styled.form`
  width: 480px; 
  height: 650px; 
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  margin-bottom: 15px;
  color: ${Colors.primary100};
  font-size: 29px;
  text-align: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 35px;
  a{
    text-decoration:none;
    color: ${Colors.primary300}
  }
  a:hover {
    color: ${Colors.primary200};
  }
`;

export const Label = styled.label`
  margin-bottom: 5px;
  color: ${Colors.primary100};
  a{
    text-decoration:none;
    color: ${Colors.primary300}
  }
  a:hover {
    color: ${Colors.primary200};
    border-bottom: 1px solid ${Colors.primary200};
  }
`;

export const Input = styled.input`
  width: 350px;
  height: 40px;
  padding: 15px;
  background: transparent;
  border: 1px solid ${Colors.primary100};
  border-radius: 10px;
  color: ${Colors.primary300};
  outline: none;

  &::placeholder {
    color: ${Colors.primary300};
  }
`;

export const ButtonInicio = styled.button`
  width: 335px;
  height: 40px;
  border: transparent;
  border-radius: 10px;
  color: ${Colors.primary400};
  font-size: 15px;
  cursor: pointer;
  background: ${Colors.primary100};
  transition: background-color 0.3s ease;
  &:hover {
    background: ${Colors.primary200};
    color: ${Colors.primary500};
  }
`;

export const CheckboxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  a{
    text-decoration:none;
    color: ${Colors.primary300}
  }
  a:hover {
    color: ${Colors.primary200};
    border-bottom: 1px solid ${Colors.primary200};
  }
`;

export const CheckboxLabel = styled.label`
  color: ${Colors.primary100};
`;

export const CheckboxInput = styled.input`
  width: 13px;
  height: 13px;
`;
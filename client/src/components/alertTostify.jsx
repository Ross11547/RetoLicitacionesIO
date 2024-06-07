import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AlertSuccess = ({text}) => {
    toast.success(`${text}`, {
      position: toast.POSITION.TOP_RIGHT,
    });
};
export const AlertError = ({text}) => {
    toast.error(`${text}`, {
      position: toast.POSITION.TOP_RIGHT,
    });
};
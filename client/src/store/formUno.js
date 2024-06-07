import { create } from "zustand";
export const useFormUno = create((set) => {
  return {
    formUno: JSON.parse(localStorage.getItem("formUno")) || null,
    setFormUno: (uno) => {
      localStorage.setItem("formUno", JSON.stringify(uno));
      set((old) => ({ ...old, uno }));
    },
    deleteUno: () => {
      localStorage.removeItem("formUno");
      set((old) => ({ ...old, formUno: null }));
    },
  };
});

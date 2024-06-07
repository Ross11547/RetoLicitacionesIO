export const convertirFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);
    const year = fecha.getFullYear();
    const month = fecha.getMonth() + 1;
    const day = fecha.getDate();
    const fechaFormateada = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    return fechaFormateada;
  };

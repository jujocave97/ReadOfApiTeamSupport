// metodo para cambiar el formato de la fecha

const swapEngCalendar = (dateString) => {
    if (!dateString) return null; // Si la fecha es nula, regresar nulo
  
    // Dividir la fecha y la hora
    const [datePart, timePart] = dateString.split(' ');
  
    // Dividir la parte de la fecha
    const [day, month, year] = datePart.split('/');
  
    // Reconstruir la fecha intercambiando día y mes
    const newDatePart = `${month}/${day}/${year}`;
  
    // Si hay una parte de hora, incluirla
    return timePart ? `${newDatePart} ${timePart}` : newDatePart;
  };

module.exports = {swapEngCalendar};
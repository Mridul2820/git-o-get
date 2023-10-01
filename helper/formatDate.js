export function formatDate(inputDate) {
    const [year, month, day] = inputDate.split('-');
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }
  
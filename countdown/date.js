function parseDate(str) {
  let date =  Date.parse(str);
  if (isNaN(date)) {
    return null;
  }
  return new Date(date);
}

export const ValidationPatterns = {
  Name: /^.{2,60}$/,
  Email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  Phone: /(?:\+1)?\d{10}/,
  DateDash: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/,
  DateSlash: /(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/\d{4}/,
  LicenseNumber: /^[\dA-Za-z]{6}$/,
};

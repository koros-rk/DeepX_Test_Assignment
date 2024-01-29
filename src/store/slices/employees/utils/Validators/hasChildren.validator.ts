import { EmployeeField } from '../../../../../models/Employee';

export const createHasChildrenValidator = () => {
  return (value: string): EmployeeField<string> => {
    const isTrueOrFalse = /\b(?:true|false)\b/.test(value.toLowerCase().trim());
    const isEmpty = !Boolean(value);

    console.log(isTrueOrFalse);

    return {
      value: value ? value.toLowerCase() : 'false',
      isValid: isEmpty || isTrueOrFalse,
    };
  };
};

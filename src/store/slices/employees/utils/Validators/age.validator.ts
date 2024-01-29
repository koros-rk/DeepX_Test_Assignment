import { EmployeeField } from '../../../../../models/Employee';

export const createAgeValidator = (min = 1, max = 100) => {
  return (age: number): EmployeeField<number> => ({
    value: age,
    isValid: age >= min && age <= max,
  });
};

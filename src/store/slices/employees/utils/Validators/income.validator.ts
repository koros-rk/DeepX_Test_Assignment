import { EmployeeField } from '../../../../../models/Employee';

export const createIncomeValidator = (max: number) => {
  return (income: number): EmployeeField<string> => ({
    value: income.toFixed(2),
    isValid: income >= 0 && income <= max,
  });
};

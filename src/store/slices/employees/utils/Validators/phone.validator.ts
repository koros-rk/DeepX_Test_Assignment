import { EmployeeField } from '../../../../../models/Employee';

export const createPhoneValidator = (patterns: RegExp[]) => {
  return (value: string): EmployeeField<string> => {
    return {
      value,
      isValid: patterns.some((pattern) => {
        return pattern.test(value);
      }),
    };
  };
};

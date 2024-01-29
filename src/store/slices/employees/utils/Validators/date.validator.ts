import { EmployeeField } from '../../../../../models/Employee';

export const createDateValidator = (patterns: RegExp[]) => {
  return (dateString: string): EmployeeField<string> => {
    const date = new Date(dateString);

    if (date.getTime()) {
      const isDateValid = date.getTime() >= new Date().getTime();
      const isStringValid = patterns.some((pattern) => {
        return pattern.test(dateString);
      });

      return {
        value: dateString,
        isValid: isStringValid && isDateValid,
      };
    }

    return {
      value: dateString,
      isValid: false,
    };
  };
};

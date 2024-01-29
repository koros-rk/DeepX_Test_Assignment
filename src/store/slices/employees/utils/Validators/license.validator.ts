import { EmployeeField } from '../../../../../models/Employee';
import { usStates } from '../../../../../models/States';

export const createLicenseNumberValidator = (patterns: RegExp[]) => {
  return (value: string): EmployeeField<string> => {
    return {
      value,
      isValid: patterns.some((pattern) => {
        return pattern.test(value);
      }),
    };
  };
};

export const createLicenseStateValidator = () => {
  return (value: string): EmployeeField<string> => {
    const states = value
      .split('|')
      .map((state) => state.trim().toUpperCase())
      .map((state) => {
        const stateObject = usStates.find(
          (item) => item.name === state || item.abbreviation === state
        );

        return stateObject ? stateObject.abbreviation : state;
      })
      .filter((item) => item);

    return {
      value: states.join(' | '),
      isValid: states.length > 0,
    };
  };
};

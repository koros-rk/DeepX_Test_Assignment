import { EmployeeField } from '../../../../../models/Employee';

export const createExperienceValidator = (employeeAge: number) => {
  return (experience: number): EmployeeField<number> => ({
    value: experience,
    isValid: experience >= 0 && experience <= employeeAge - 21,
  });
};

export interface EmployeeField<T> {
  value: T;
  isValid: boolean;
}

export type Employee = {
  id: number;
  name: string;
  phone: EmployeeField<string>;
  email: EmployeeField<string>;
  age: EmployeeField<number>;
  experience: EmployeeField<number>;
  income: EmployeeField<string>;
  hasChildren: EmployeeField<string>;
  licenseStates: EmployeeField<string>;
  expirationDate: EmployeeField<string>;
  licenseNumber: EmployeeField<string>;
  duplicate: number | null;
};

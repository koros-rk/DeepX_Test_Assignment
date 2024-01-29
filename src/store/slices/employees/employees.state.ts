import { Employee } from '../../../models/Employee';

export const InitialEmployeesState: EmployeesState = {
  employees: [],
  errorMessage: '',
  status: 'Idle',
};

export type EmployeesState = {
  employees: Employee[];
  errorMessage: string;
  status: 'Idle' | 'Loading';
};

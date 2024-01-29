import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../index';
import { InitialEmployeesState } from './employees.state';
import { createPhoneValidator } from './utils/Validators/phone.validator';
import { ValidationPatterns } from '../../../models/Patterns';
import { createAgeValidator } from './utils/Validators/age.validator';
import { createExperienceValidator } from './utils/Validators/experience.validator';
import { createHasChildrenValidator } from './utils/Validators/hasChildren.validator';
import { createIncomeValidator } from './utils/Validators/income.validator';
import { createDateValidator } from './utils/Validators/date.validator';
import {
  createLicenseNumberValidator,
  createLicenseStateValidator,
} from './utils/Validators/license.validator';

export const { reducer, actions } = createSlice({
  name: 'employees',
  initialState: InitialEmployeesState,
  reducers: {
    clearEmployees(state) {
      state.employees = [];
    },
    addEmployee(state, action: PayloadAction<string[]>) {
      if (action.payload.length >= 10) {
        const [
          name,
          phone,
          email,
          age,
          experience,
          income,
          hasChildren,
          licenseStates,
          expirationDate,
          licenseNumber,
        ] = action.payload;

        if (!name || !phone || !email) {
          state.errorMessage = 'File content is not correct';
          return;
        }

        const lastEmployee = [...state.employees].sort(
          (a, b) => b.id - a.id
        )[0];
        const duplicate = state.employees.find((employee) => {
          return (
            employee.email.value.toLowerCase().trim() ===
            email.toLowerCase().trim()
          );
        });

        state.employees.push({
          id: lastEmployee ? lastEmployee.id + 1 : 1,
          name: name.trim(),
          phone: createPhoneValidator([ValidationPatterns.Phone])(phone),
          age: createAgeValidator(21)(+age),
          email: {
            value: email.trim(),
            isValid: !duplicate,
          },
          experience: createExperienceValidator(+age)(+experience),
          hasChildren: createHasChildrenValidator()(hasChildren),
          income: createIncomeValidator(1000000)(+income),
          expirationDate: createDateValidator([
            ValidationPatterns.DateDash,
            ValidationPatterns.DateSlash,
          ])(expirationDate),
          licenseNumber: createLicenseNumberValidator([
            ValidationPatterns.LicenseNumber,
          ])(licenseNumber),
          licenseStates: createLicenseStateValidator()(licenseStates),
          duplicate: duplicate ? duplicate.id : null,
        });

        return;
      }

      state.errorMessage = 'File content is not correct';
    },
    setErrorMessage(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
    },
    setStatus(state, action: PayloadAction<'Idle' | 'Loading'>) {
      state.status = action.payload;
    },
  },
});

export const EmployeesSelector = (state: RootState) => state.employees;

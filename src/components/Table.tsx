import React, { FC } from 'react';
import md5 from 'md5';
import LoadButton from './LoadButton';
import { useAppSelector } from '../store/hooks';
import { EmployeesSelector } from '../store/slices/employees/employees.slice';
import TableRow from './TableRow';
import TableCaption from './TableCaption';
import { Loader } from './Loader';

const Table: FC = () => {
  const { employees, errorMessage, status } = useAppSelector(EmployeesSelector);

  return (
    <div className="flex flex-col items-center gap-5 mt-4 ">
      <LoadButton styles="w-[200px]" />
      <table className="table relative">
        <thead>
          <tr>
            <th className="table-head-cell">ID</th>
            <th className="table-head-cell">Full Name</th>
            <th className="table-head-cell">Phone</th>
            <th className="table-head-cell">Age</th>
            <th className="table-head-cell">Email</th>
            <th className="table-head-cell">Experience</th>
            <th className="table-head-cell">Has children</th>
            <th className="table-head-cell">Yearly Income</th>
            <th className="table-head-cell">Expiration date</th>
            <th className="table-head-cell">License number</th>
            <th className="table-head-cell">License states</th>
            <th className="table-head-cell">Duplicate with</th>
          </tr>
        </thead>
        {!errorMessage && (
          <tbody>
            {employees &&
              employees.length >= 0 &&
              employees.map((employee) => (
                <tr key={employee.id}>
                  {Object.values(employee).map((value) => {
                    if (value instanceof Object) {
                      return (
                        <TableRow
                          key={`${employee.id}-${md5(value.value.toString())}`}
                          value={value.value.toString()}
                          isValid={value.isValid}
                        />
                      );
                    }

                    return (
                      <TableRow
                        key={`${employee.id}-${value}`}
                        value={value ? value.toString() : ''}
                        isValid={true}
                      />
                    );
                  })}
                </tr>
              ))}
          </tbody>
        )}
        {!errorMessage && employees.length === 0 && (
          <TableCaption type={'info'} visible>
            Select .csv file to load data
          </TableCaption>
        )}
        {errorMessage && (
          <TableCaption type={'error'} visible>
            {errorMessage}
          </TableCaption>
        )}
      </table>
      {status === 'Loading' && <Loader />}
    </div>
  );
};

export default Table;

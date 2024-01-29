import React, { FC } from 'react';

import classNames from 'classnames';

interface Props {
  value: string;
  isValid: boolean;
}

const TableRow: FC<Props> = ({ value, isValid }) => {
  return (
    <th
      className={classNames('table-body-cell', {
        'table-body-cell-error': !isValid,
      })}
    >
      {value}
    </th>
  );
};

export default TableRow;

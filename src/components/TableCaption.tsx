import React, { FC } from 'react';
import classNames from 'classnames';

interface Props {
  type: 'error' | 'info';
  visible: boolean;
  children: React.ReactNode;
}

const TableCaption: FC<Props> = ({ type, visible, children }) => {
  return (
    <caption
      className={classNames('table-caption', {
        'table-caption-visible': visible,
        'table-caption-info': type === 'info',
        'table-caption-error': type === 'error',
      })}
    >
      {children}
    </caption>
  );
};

export default TableCaption;

import { ChangeEvent, FC, useRef } from 'react';
import Papa from 'papaparse';
import { useAppDispatch } from '../store/hooks';
import { actions } from '../store/slices/employees/employees.slice';

interface Props {
  styles: string;
}

const LoadButton: FC<Props> = ({ styles }) => {
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);
  const handleSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.item(0) || null;
    dispatch(actions.setStatus('Loading'));

    if (!file?.type.toString().includes('csv')) {
      dispatch(actions.setErrorMessage('File type should be .csv'));
      return;
    }

    if (file) {
      file
        .text()
        .then((csvText) => {
          const parsed = Papa.parse<string[]>(csvText);
          dispatch(actions.clearEmployees());

          for (const rawEmployee of parsed.data.slice(1)) {
            dispatch(actions.addEmployee(rawEmployee as string[]));
          }
        })
        .finally(() => dispatch(actions.setStatus('Idle')));
    }
  };

  return (
    <>
      <button
        className={`${styles} bg-emerald-400 border border-solid border-slate-950 rounded px-2 py-3 hover:bg-emerald-200`}
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.click();
          }
        }}
      >
        Load data
      </button>
      <input
        type="file"
        className="hidden"
        onChange={handleSelect}
        ref={inputRef}
      />
    </>
  );
};

export default LoadButton;

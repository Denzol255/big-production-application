import { ChangeEvent, FC, memo, useMemo } from 'react';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import styles from './Select.module.scss';

export interface SelectOption {
  value: string;
  text: string;
}

interface SelectProps {
  className?: string;
  options: SelectOption[];
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select: FC<SelectProps> = memo((props) => {
  const { className, options, label, value, onChange, readonly } = props;

  const optionsList = useMemo(() => {
    return options.map(({ value, text }) => (
      <option key={value} className={styles.selectOption} value={value}>
        {text}
      </option>
    ));
  }, [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div
      className={getClassNames(
        styles.selectWrapper,
        { [styles.readonly]: readonly },
        [className]
      )}
    >
      {label && <span className={styles.selectLabel}>{label}</span>}
      <select
        disabled={readonly}
        value={value}
        onChange={onChangeHandler}
        name='main-select'
        id=''
        className={styles.selectMain}
      >
        {optionsList}
      </select>
    </div>
  );
});

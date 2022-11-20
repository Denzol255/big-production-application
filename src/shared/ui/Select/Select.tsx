import { ChangeEvent, useMemo } from 'react';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import styles from './Select.module.scss';

export interface SelectOption<T extends string> {
  value: T;
  text: string;
}

interface SelectProps<T extends string> {
  className?: string;
  options: SelectOption<T>[];
  label?: string;
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, options, label, value, onChange, readonly } = props;

  const optionsList = useMemo(() => {
    return options.map(({ value, text }) => (
      <option key={value} className={styles.selectOption} value={value}>
        {text}
      </option>
    ));
  }, [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
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
};

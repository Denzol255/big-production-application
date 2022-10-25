import {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import styles from './Input.module.scss';

export const enum InputTheme {
  INVERTED_LABEL = 'inverted_label',
}

interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
  > {
  className?: string;
  inputName: string;
  value: string | number;
  onChange?: (value: string) => void;
  type?: string;
  placeholder?: string;
  autofocus?: boolean;
  theme?: InputTheme;
  readonly?: boolean;
}

export const Input: FC<InputProps> = memo((props) => {
  const { t } = useTranslation();
  const {
    className,
    inputName,
    onChange,
    value,
    type = 'text',
    placeholder,
    autofocus,
    theme = '',
    readonly = false,
    ...otherProps
  } = props;
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  return (
    <label
      className={getClassNames(styles.label, { [styles.readonly]: readonly }, [
        className,
        styles[theme],
      ])}
      htmlFor={inputName}
    >
      {`${t('Enter')} ${placeholder ? placeholder.toLowerCase() : t('Field')}`}
      <input
        ref={ref}
        autoFocus={isFocused}
        type={type}
        onChange={handleOnChange}
        value={value}
        name={inputName}
        className={styles.input}
        {...otherProps}
        onFocus={handleFocus}
        readOnly={readonly}
      ></input>
    </label>
  );
});

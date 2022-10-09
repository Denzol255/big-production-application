import { ButtonHTMLAttributes, FC } from 'react';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import styles from './Button.module.scss';

export const enum ButtonTheme {
  CLEAR = 'clear',
  PRIMARY = 'primary',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUNDINVERTED = 'background-inverted',
}

export const enum ButtonSize {
  SIZE_S = 'size-s',
  SIZE_M = 'size-m',
  SIZE_L = 'size-l',
  SIZE_XL = 'size-xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
  square?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    theme,
    children,
    size = ButtonSize.SIZE_M,
    square,
    ...otherProps
  } = props;
  return (
    <button
      {...otherProps}
      className={getClassNames(styles.button, { [styles.square]: square }, [
        className,
        styles[theme],
        styles[size],
      ])}
    >
      {children}
    </button>
  );
};

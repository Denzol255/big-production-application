import { ButtonHTMLAttributes } from 'react';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import styles from './Button.module.scss';

export const enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  PRIMARY = 'primary',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
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

export const Button = (props: ButtonProps) => {
  const {
    className,
    theme = ButtonTheme.PRIMARY,
    children,
    size = ButtonSize.SIZE_M,
    square,
    disabled,
    ...otherProps
  } = props;
  return (
    <button
      {...otherProps}
      className={getClassNames(
        styles.button,
        { [styles.square]: square, [styles.disabled]: disabled },
        [className, styles[theme], styles[size]]
      )}
    >
      {children}
    </button>
  );
};

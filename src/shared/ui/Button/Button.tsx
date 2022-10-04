import { getClassNames } from '@/shared/lib/getClassNames/getClassNames';
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';

export const enum ButtonTheme {
  CLEAR = 'clear',
  PRIMARY = 'primary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, theme, children, ...otherProps } = props;
  return (
    <button
      {...otherProps}
      className={getClassNames(styles.button, {}, [className, styles[theme]])}
    >
      {children}
    </button>
  );
};

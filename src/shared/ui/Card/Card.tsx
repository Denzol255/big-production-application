import { FC, HTMLAttributes, ReactNode } from 'react';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import styles from './Card.module.scss';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINE = 'outline',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
}

export const Card: FC<CardProps> = (props) => {
  const {
    className,
    children,
    theme = CardTheme.NORMAL,
    ...otherProps
  } = props;
  return (
    <div
      {...otherProps}
      className={getClassNames(styles.card, {}, [className, styles[theme]])}
    >
      {children}
    </div>
  );
};

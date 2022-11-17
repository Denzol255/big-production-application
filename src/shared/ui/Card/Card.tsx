import { FC, HTMLAttributes, ReactNode } from 'react';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import styles from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card: FC<CardProps> = (props) => {
  const { className, children, ...otherProps } = props;
  return (
    <div
      {...otherProps}
      className={getClassNames(styles.card, {}, [className])}
    >
      {children}
    </div>
  );
};

import { getClassNames } from '@/shared/lib/getClassNames/getClassNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Box.module.scss';

interface BoxProps {
  className?: string;
}

export const Box: FC<BoxProps> = (props) => {
  const { t } = useTranslation();
  const { className } = props;
  return (
    <div className={getClassNames(styles.box, {}, [className])}></div>
  );
};

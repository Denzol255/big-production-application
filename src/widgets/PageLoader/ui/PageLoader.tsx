import { getClassNames } from '@/shared/lib/getClassNames/getClassNames';
import { MainLoader } from '@/shared/ui';
import { FC } from 'react';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
  const { className } = props;
  return (
    <div className={getClassNames(styles.pageLoader, {}, [className])}>
      <MainLoader />
    </div>
  );
};

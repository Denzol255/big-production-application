import { FC } from 'react';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Loader } from 'shared/ui/Loader/Loader';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
  const { className } = props;
  return (
    <div className={getClassNames(styles.pageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};

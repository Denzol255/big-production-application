import { ReactNode } from 'react';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import styles from './CenterWrapper.module.scss';

interface CenterWrapperProps {
  children: ReactNode;
}

const CenterWrapper = ({ children }: CenterWrapperProps) => {
  return (
    <div className={getClassNames(styles.centerWrapper, {}, [])}>
      {children}
    </div>
  );
};

export default CenterWrapper;

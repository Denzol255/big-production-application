import { CSSProperties, FC } from 'react';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import styles from './Skeleton.module.scss';
interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton: FC<SkeletonProps> = (props) => {
  const { className, width, height, border } = props;

  const styleInline: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div
      style={styleInline}
      className={getClassNames(styles.skeleton, {}, [className])}
    ></div>
  );
};

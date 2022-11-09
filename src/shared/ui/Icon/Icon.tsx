import { FC } from 'react';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import styles from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon: FC<IconProps> = (props) => {
  const { className, Svg } = props;
  return <Svg className={getClassNames(styles.icon, {}, [className])}></Svg>;
};

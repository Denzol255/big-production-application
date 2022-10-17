import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import './Loader.scss';

export const enum LoaderTheme {
  WHITE = 'white',
}

interface LoaderProps {
  className?: string;
  theme?: LoaderTheme;
}

export const Loader = ({ className, theme }: LoaderProps) => (
  <div className={getClassNames('lds-ellipsis', {}, [className, theme])}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

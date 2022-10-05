import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import styles from './AppLink.module.scss';

export const enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { to, className, children, theme, ...otherProps } = props;
  return (
    <Link
      to={to}
      className={getClassNames(styles.appLink, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

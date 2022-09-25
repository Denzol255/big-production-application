import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import DarkIcon from '@/shared/assets/icons/themeDark.svg';
import LightIcon from '@/shared/assets/icons/themeLight.svg';
import { getClassNames } from '@/shared/lib/getClassNames';
import { Button } from '@/shared/ui';
import { ButtonTheme } from '@/shared/ui/Button/Button';
import { FC } from 'react';
import styles from './ToggleTheme.module.scss';

interface ToggleThemeProps {
  className?: string;
}

export const ToggleTheme: FC<ToggleThemeProps> = (props) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
      className={getClassNames(styles.toogleTheme, {}, [className])}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};

import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { FC, memo } from 'react';
import DarkIcon from 'shared/assets/icons/themeDark.svg';
import LightIcon from 'shared/assets/icons/themeLight.svg';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import styles from './ToggleTheme.module.scss';

interface ToggleThemeProps {
  className?: string;
}

export const ToggleTheme: FC<ToggleThemeProps> = memo((props) => {
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
});

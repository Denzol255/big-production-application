import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Button } from 'shared/ui';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ToggleTheme } from 'widgets/ToggleTheme';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const handleShowSidebar = () => setCollapsed(!collapsed);
  return (
    <div
      data-testid='sidebar'
      className={getClassNames(
        styles.sidebar,
        { [styles.collapsed]: collapsed },
        [className]
      )}
    >
      <Button data-testid='sidebar-toggle' onClick={handleShowSidebar}>
        {t('Toggle sidebar')}
      </Button>
      <div className={styles.switchers}>
        <ToggleTheme />
        <LanguageSwitcher />
      </div>
    </div>
  );
};

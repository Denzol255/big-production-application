import { getClassNames } from '@/shared/lib/getClassNames';
import { Button } from '@/shared/ui';
import { LanguageSwitcher } from '@/widgets/LanguageSwitcher';
import { ToggleTheme } from '@/widgets/ToggleTheme';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
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
      className={getClassNames(
        styles.sidebar,
        { [styles.collapsed]: collapsed },
        [className]
      )}
    >
      <Button onClick={handleShowSidebar}>{t('Toggle sidebar')}</Button>
      <div className={styles.switchers}>
        <ToggleTheme />
        <LanguageSwitcher />
      </div>
    </div>
  );
};

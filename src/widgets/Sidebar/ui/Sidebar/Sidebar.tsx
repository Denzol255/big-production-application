import { FC, memo, useState } from 'react';

import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ToggleTheme } from 'widgets/ToggleTheme';
import { SidebarItems } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo((props) => {
  const { className } = props;
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
      <div className={styles.sidebarItems}>
        {SidebarItems.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </div>
      <Button
        className={styles.sidebarToggleBtn}
        theme={ButtonTheme.BACKGROUND}
        size={ButtonSize.SIZE_XL}
        square
        data-testid='sidebar-toggle'
        onClick={handleShowSidebar}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={styles.switchers}>
        <ToggleTheme />
        <LanguageSwitcher className={styles.langSwitcher} short={collapsed} />
      </div>
    </div>
  );
});

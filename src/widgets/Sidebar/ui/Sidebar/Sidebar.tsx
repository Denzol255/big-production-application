import { FC, memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ToggleTheme } from 'widgets/ToggleTheme';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo((props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const handleShowSidebar = () => setCollapsed(!collapsed);
  const sidebarItems = useSelector(getSidebarItems);

  const itemsList = useMemo(
    () =>
      sidebarItems.map((item) => (
        <SidebarItem key={item.path} item={item} collapsed={collapsed} />
      )),
    [collapsed, sidebarItems]
  );

  return (
    <menu
      data-testid='sidebar'
      className={getClassNames(
        styles.sidebar,
        { [styles.collapsed]: collapsed },
        [className]
      )}
    >
      <div className={styles.sidebarItems}>{itemsList}</div>
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
    </menu>
  );
});

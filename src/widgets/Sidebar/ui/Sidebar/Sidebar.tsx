import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import IconAbout from 'shared/assets/icons/aboutIcon.svg';
import IconMain from 'shared/assets/icons/mainIcon.svg';
import { RoutePath } from 'shared/config/routerConfig/RouteConfig';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
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
      <div className={styles.sidebarItems}>
        <AppLink
          theme={AppLinkTheme.PRIMARY_INVERTED}
          className={styles.sidebarItem}
          to={RoutePath.main}
        >
          <IconMain className={styles.sidebarItemIcon} />
          <span className={styles.sidebarItemText}>{t('Main')}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.PRIMARY_INVERTED}
          className={styles.sidebarItem}
          to={RoutePath.about}
        >
          <IconAbout className={styles.sidebarItemIcon} />
          <span className={styles.sidebarItemText}>{t('About')}</span>
        </AppLink>
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
};

import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routerConfig/RouteConfig';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { AppLink, Button } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ToggleTheme } from 'widgets/ToggleTheme';
import styles from './Sidebar.module.scss';
import IconMain from 'shared/assets/icons/mainIcon.svg';
import IconAbout from 'shared/assets/icons/aboutIcon.svg';

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
          theme={AppLinkTheme.SECONDARY}
          className={styles.sidebarItem}
          to={RoutePath.main}
        >
          <IconMain className={styles.sidebarItemIcon} />
          <span className={styles.sidebarItemText}>{t('Main')}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
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

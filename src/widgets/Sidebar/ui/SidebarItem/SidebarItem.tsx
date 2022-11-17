import { getUserAuthData } from 'entities/User';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from '../../model/types/sidebarItem';
import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo((props) => {
  const { item, collapsed } = props;
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      theme={AppLinkTheme.PRIMARY_INVERTED}
      className={getClassNames(styles.sidebarItem, {
        [styles.collapsed]: collapsed,
      })}
      to={item.path}
    >
      <item.Icon className={styles.sidebarItemIcon} />
      <span className={styles.sidebarItemText}>{t(item.text)}</span>
    </AppLink>
  );
});

import {
  getUserAuthData,
  getUserIsAdmin,
  getUserIsManager,
  userActions,
} from 'entities/User';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routerConfig/RouteConfig';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localstorage';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Dropdown } from 'shared/ui/Popovers';
import styles from './AvatarDropdown.module.scss';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);
  const isUserAdmin = useSelector(getUserIsAdmin);
  const isUserManager = useSelector(getUserIsManager);
  const isAdminPanelAvailable = isUserAdmin || isUserManager;
  const handleLogOut = useCallback(() => {
    dispatch(userActions.logOut());
    localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
  }, [dispatch]);

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      className={getClassNames(styles.avatarDropdown, {}, [className])}
      trigger={<Avatar size={45} src={authData.avatar} />}
      optionsDirection='bottomLeft'
      items={[
        ...(isAdminPanelAvailable
          ? [
              {
                content: t('Admin panel'),
                href: RoutePath.admin,
              },
            ]
          : []),
        {
          content: t('Profile'),
          href: RoutePath.profile + authData.id,
        },
        {
          content: t('Sign out'),
          onClick: handleLogOut,
        },
      ]}
    />
  );
});

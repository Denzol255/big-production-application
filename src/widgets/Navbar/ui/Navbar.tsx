import {
  getUserAuthData,
  getUserIsAdmin,
  getUserIsManager,
  userActions,
} from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Logo from 'shared/assets/icons/logo.svg';
import { RoutePath } from 'shared/config/routerConfig/RouteConfig';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localstorage';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);

  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
  const isUserAdmin = useSelector(getUserIsAdmin);
  const isUserManager = useSelector(getUserIsManager);
  const isAdminPanelAvailable = isUserAdmin || isUserManager;

  const handleCloseModal = () => {
    setIsAuthModal(false);
    dispatch(loginActions.clearError());
  };

  const handleShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const handleLogOut = useCallback(() => {
    dispatch(userActions.logOut());
    localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
  }, [dispatch]);

  if (authData) {
    return (
      <header className={getClassNames(styles.navbar, {}, [className])}>
        <div className={styles.navbarLogoContainer}>
          <Logo fill='#FAA508' className={styles.navbarLogoImage} />
          <span className={styles.navbarLogoText}>{t('My App')}</span>
        </div>
        <AppLink
          className={styles.navbarCreateArticle}
          theme={AppLinkTheme.PRIMARY_INVERTED}
          to={RoutePath.article_create}
        >
          {t('Create Article')}
        </AppLink>
        <Dropdown
          className={styles.navbarDropdown}
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
      </header>
    );
  }

  return (
    <header className={getClassNames(styles.navbar, {}, [className])}>
      <div className={styles.navbarLogoContainer}>
        <Logo fill='#FAA508' className={styles.navbarLogoImage} />
        <span className={styles.navbarLogoText}>{t('My App')}</span>
      </div>
      <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={handleShowModal}>
        {t('Sign in')}
      </Button>

      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={handleCloseModal} />
      )}
    </header>
  );
});

import { getUserAuthData } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { AvatarDropdown } from 'features/avatarDropdown';
import { NotificationsButton } from 'features/notificationButton';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Logo from 'shared/assets/icons/logo.svg';
import { RoutePath } from 'shared/config/routerConfig/RouteConfig';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setIsAuthModal(false);
    dispatch(loginActions.clearError());
  };

  const handleShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  if (authData) {
    return (
      <header className={getClassNames(styles.navbar, {}, [className])}>
        <div className={styles.navbarLogoContainer}>
          <Logo fill='#FAA508' className={styles.navbarLogoImage} />
          <span className={styles.navbarLogoText}>{t('My App')}</span>
        </div>

        <HStack className={styles.navbarButtons}>
          <AppLink
            className={styles.navbarCreateArticle}
            theme={AppLinkTheme.PRIMARY_INVERTED}
            to={RoutePath.article_create}
          >
            {t('Create Article')}
          </AppLink>
          <NotificationsButton />
          <AvatarDropdown className={styles.navbarAvatarDropdown} />
        </HStack>
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

import { LoginModal } from 'features/AuthByUsername/ui/LoginModal/LoginModal';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Logo from 'shared/assets/icons/logo.svg';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setIsAuthModal(false);
  };

  const handleOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={getClassNames(styles.navbar, {}, [className])}>
      <div className={styles.navbarLogoContainer}>
        <Logo fill='#FAA508' className={styles.navbarLogoImage} />
        <span className={styles.navbarLogoText}>{t('My App')}</span>
      </div>
      <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={handleOpenModal}>
        {t('Sign in')}
      </Button>

      <LoginModal isOpen={isAuthModal} onClose={handleCloseModal} />
    </div>
  );
};

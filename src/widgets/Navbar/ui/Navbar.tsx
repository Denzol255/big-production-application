/* eslint-disable i18next/no-literal-string */
// import logo from '@/shared/assets/icons/logo.svg';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Logo from 'shared/assets/icons/logo.svg';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  // const handleOpen = () => {
  //   setIsAuthModal(true);
  // };

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={getClassNames(styles.navbar, {}, [className])}>
      <div className={styles.navbarLogoContainer}>
        <Logo fill='#FAA508' className={styles.navbarLogoImage} />
        <span className={styles.navbarLogoText}>{t('My App')}</span>
      </div>
      <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>
        Open
      </Button>

      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
        consequuntur doloribus. Minus eligendi, officiis molestias sapiente
        aperiam rerum excepturi ut rem labore cum aspernatur magni autem alias
        blanditiis molestiae. Fugiat.
      </Modal>
    </div>
  );
};

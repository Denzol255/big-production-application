// import logo from '@/shared/assets/icons/logo.svg';
import { useTranslation } from 'react-i18next';
import Logo from 'shared/assets/icons/logo.svg';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={getClassNames(styles.navbar, {}, [className])}>
      <div className={styles.navbarLogoContainer}>
        <Logo fill='#FAA508' className={styles.navbarLogoImage} />
        <span className={styles.navbarLogoText}>{t('My App')}</span>
      </div>
    </div>
  );
};

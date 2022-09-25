// import logo from '@/shared/assets/icons/logo.svg';
import Logo from '@/shared/assets/icons/logo.svg';
import { getClassNames } from '@/shared/lib/getClassNames';
import { AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { AppLink } from '@/shared/ui/index';
import { ToggleTheme } from '@/widgets/ToggleTheme';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={getClassNames(styles.navbar, {}, [className])}>
      <div className={styles.navbarLogoContainer}>
        <Logo fill='#FAA508' className={styles.navbarLogoImage} />
        <span className={styles.navbarLogoText}>My App</span>
      </div>
      <div className={styles.navbarLinksContainer}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={styles.navbarLink}
          to={'/'}
        >
          Main
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={styles.navbarLink}
          to={'/about'}
        >
          About
        </AppLink>
      </div>
      <ToggleTheme className={styles.navbarToggleTheme} />
    </div>
  );
};

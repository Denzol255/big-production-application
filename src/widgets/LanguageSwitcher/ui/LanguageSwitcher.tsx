import i18n from '@/shared/config/i18n/i18n';
import { getClassNames } from '@/shared/lib/getClassNames/getClassNames';
import { Button } from '@/shared/ui';
import { ButtonTheme } from '@/shared/ui/Button/Button';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
  const { t } = useTranslation();
  const { className } = props;
  const toggleLanguage = () => {
    i18n.changeLanguage(
      i18n.language === 'ru' ? 'en' : i18n.language === 'en' ? 'se' : 'ru'
    );
  };
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleLanguage}
      className={getClassNames(styles.languageSwitcher, {}, [
        styles.handleLanguageBtn,
      ])}
    >
      {t('_Language_')}
    </Button>
  );
};

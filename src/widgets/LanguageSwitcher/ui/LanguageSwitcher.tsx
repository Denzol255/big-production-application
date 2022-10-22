import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import styles from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = memo((props) => {
  const { t } = useTranslation();
  const { short, className } = props;
  const toggleLanguage = () => {
    i18n.changeLanguage(
      i18n.language === 'ru' ? 'en' : i18n.language === 'en' ? 'se' : 'ru'
    );
  };
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleLanguage}
      className={getClassNames('', {}, [styles.handleLanguageBtn, className])}
    >
      {short ? t('_LanguageShort_') : t('_Language_')}
    </Button>
  );
});

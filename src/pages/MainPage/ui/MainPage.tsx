import { useTranslation } from 'react-i18next';
import { BugButton } from 'shared/ui/BugButton/BugButton';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <BugButton />
      <div>{t('Page Main')}</div>
    </div>
  );
};

export default MainPage;

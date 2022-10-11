import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'shared/ui/BugButton/BugButton';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <BugButton />
      <div>{t('Page Main')}</div>
      <Counter />
    </div>
  );
};

export default MainPage;

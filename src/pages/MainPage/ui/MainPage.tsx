import { Counter } from 'entities/Counter';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'shared/ui/BugButton/BugButton';
import { Page } from 'shared/ui/Page/Page';

const MainPage = memo(() => {
  const { t } = useTranslation();
  return (
    <Page>
      <BugButton />
      <div>{t('Page Main')}</div>
      <Counter />
    </Page>
  );
});

export default MainPage;

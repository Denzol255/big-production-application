import { Counter } from 'entities/Counter';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'shared/ui/BugButton/BugButton';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

const MainPage = memo(() => {
  const { t } = useTranslation();
  return (
    <PageWrapper>
      <BugButton />
      <div>{t('Page Main')}</div>
      <Counter />
    </PageWrapper>
  );
});

export default MainPage;

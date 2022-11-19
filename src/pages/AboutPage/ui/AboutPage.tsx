import { Counter } from 'entities/Counter';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

const AboutPage = memo(() => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <div>{t('Page about')}</div>
      <Counter />
    </PageWrapper>
  );
});

export default AboutPage;

import { Counter } from 'entities/Counter';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const AboutPage = memo(() => {
  const { t } = useTranslation();

  return (
    <Page>
      <div>{t('Page about')}</div>
      <Counter />
    </Page>
  );
});

export default AboutPage;

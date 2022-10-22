import { Counter } from 'entities/Counter';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = memo(() => {
  const { t } = useTranslation();

  return (
    <>
      <div>{t('Page about')}</div>
      <Counter />
    </>
  );
});

export default AboutPage;

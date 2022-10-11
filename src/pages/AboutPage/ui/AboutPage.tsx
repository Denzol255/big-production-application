import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>{t('Page about')}</div>
      <Counter />
    </>
  );
};

export default AboutPage;

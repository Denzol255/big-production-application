import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = memo((props) => {
  const { t } = useTranslation();
  const { className } = props;
  return (
    <PageWrapper className={getClassNames(styles.notFound, {}, [className])}>
      {t('Not Found')}
    </PageWrapper>
  );
});

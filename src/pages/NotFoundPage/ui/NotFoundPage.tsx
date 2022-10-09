import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  const { t } = useTranslation();
  const { className } = props;
  return (
    <div className={getClassNames(styles.notFound, {}, [className])}>
      {t('Not Found')}
    </div>
  );
};

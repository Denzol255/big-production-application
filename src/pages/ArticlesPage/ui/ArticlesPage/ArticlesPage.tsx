import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { t } = useTranslation();
  const { className } = props;
  return (
    <div className={getClassNames(styles.articlesPage, {}, [className])}>
      Articles page
    </div>
  );
};

export default ArticlesPage;

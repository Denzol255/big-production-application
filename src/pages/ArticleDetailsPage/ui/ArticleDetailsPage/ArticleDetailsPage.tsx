import { ArticleDetails } from 'entities/Article';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { t } = useTranslation();
  const { className } = props;
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div
        className={getClassNames(styles.articleDetailsPage, {}, [className])}
      >
        {t('Article is not found')}
      </div>
    );
  }

  return (
    <div className={getClassNames(styles.articleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default ArticleDetailsPage;

import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { t } = useTranslation();
  const { className } = props;
  return (
    <div className={getClassNames(styles.articleDetailsPage, {}, [className])}>
      Article details
    </div>
  );
};

export default ArticleDetailsPage;

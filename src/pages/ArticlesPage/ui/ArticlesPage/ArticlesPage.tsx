import { FC } from 'react';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props;
  return (
    <div className={getClassNames(styles.articlesPage, {}, [className])}></div>
  );
};

export default ArticlesPage;

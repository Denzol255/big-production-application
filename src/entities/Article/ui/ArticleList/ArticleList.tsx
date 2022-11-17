import { memo } from 'react';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Article, ArticleView } from '../../model/types/article';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import ArticleListItemSceleton from '../ArticleListItem/ArticleListItemSceleton';
import styles from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSceletons = (view: ArticleView) => {
  return new Array(view === ArticleView.GRID ? 9 : 3)
    .fill(0)
    .map((item, index) => <ArticleListItemSceleton view={view} key={index} />);
};

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, articles, isLoading, view = ArticleView.LIST } = props;
  const renderArticle = (article: Article) => {
    return <ArticleListItem view={view} article={article} key={article.id} />;
  };

  if (isLoading) {
    return (
      <div
        className={getClassNames(styles.articleList, {}, [
          className,
          styles[view],
        ])}
      >
        {getSceletons(view)}
      </div>
    );
  }

  return (
    <div
      className={getClassNames(styles.articleList, {}, [
        className,
        styles[view],
      ])}
    >
      {articles?.length > 0 ? articles.map(renderArticle) : null}
    </div>
  );
});

import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleView } from '../../model/const/articleConst';
import { Article } from '../../model/types/article';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import ArticleListItemSceleton from '../ArticleListItem/ArticleListItemSceleton';
import styles from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSceletons = (view: ArticleView) => {
  return new Array(view === ArticleView.GRID ? 9 : 3)
    .fill(0)
    .map((item, index) => <ArticleListItemSceleton view={view} key={index} />);
};

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.LIST,
    target,
  } = props;
  const renderArticle = (article: Article) => {
    return (
      <ArticleListItem
        target={target}
        view={view}
        article={article}
        key={article.id}
      />
    );
  };
  const { t } = useTranslation();

  if (!isLoading && !articles.length) {
    return (
      <div className={getClassNames(styles.articlesPage, {}, [className])}>
        <Text size={TextSize.LARGE} title={t('Not found any articles')} />
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
      {isLoading && getSceletons(view)}
    </div>
  );
});

import { ArticleList } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import {
  getArticlesError,
  getArticlesIsLoading,
  getArticlesView,
} from '../../model/selectors/articlesPage';
import { initArticles } from '../../model/services/initArticles/initArticles';
import { getArticles } from '../../model/slices/articlePageSlice';

interface ArticleInfiniteListProps {
  className?: string;
}

const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const articles = useSelector(getArticles.selectAll);
  const articlesIsLoading = useSelector(getArticlesIsLoading);
  const articlesView = useSelector(getArticlesView);
  const [searchParams] = useSearchParams();
  const articlesError = useSelector(getArticlesError);
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(initArticles(searchParams));
  });

  if (articlesError) {
    return (
      <div className={getClassNames('', {}, [className])}>
        <Text
          align={TextAlign.CENTER}
          theme={TextTheme.ERROR}
          title={t('Error while loading artiles list')}
          text={t('Try to reload the page')}
        />
      </div>
    );
  }

  return (
    <ArticleList
      isLoading={articlesIsLoading}
      view={articlesView}
      articles={articles}
      className={className}
    />
  );
});

export default ArticleInfiniteList;

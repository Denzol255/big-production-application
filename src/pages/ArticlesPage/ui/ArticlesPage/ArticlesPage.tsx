import { ArticleList } from 'entities/Article';
import { t } from 'i18next';
import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import {
  getArticlesError,
  getArticlesIsLoading,
  getArticlesView,
} from '../../model/selectors/articlesPage';
import { fetchArticlesNextPage } from '../../model/services/fetchArticlesNextPage/fetchArticlesNextPage';
import { initArticles } from '../../model/services/initArticles/initArticles';
import {
  articlesPageReducer,
  getArticles,
} from '../../model/slices/articlePageSlice';
import ArticlesPageFilters from '../ArticlesPageFilters/ArticlesPageFilters';
import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const articlesIsLoading = useSelector(getArticlesIsLoading);
  const articlesError = useSelector(getArticlesError);
  const articlesView = useSelector(getArticlesView);
  const [searchParams] = useSearchParams();
  console.log(searchParams);

  const handleNextPart = useCallback(() => {
    dispatch(fetchArticlesNextPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticles(searchParams));
  });

  if (articlesError) {
    return (
      <div className={getClassNames(styles.articlesPage, {}, [className])}>
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
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <PageWrapper
        onScrollEnd={handleNextPart}
        className={getClassNames(styles.articlesPage, {}, [className])}
      >
        <ArticlesPageFilters />
        <ArticleList
          className={styles.list}
          isLoading={articlesIsLoading}
          view={articlesView}
          articles={articles}
        />
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;

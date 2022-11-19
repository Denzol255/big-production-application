import {
  ArticleList,
  ArticleView,
  ArticleViewSelector,
} from 'entities/Article';
import { t } from 'i18next';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList';
import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text } from 'shared/ui/Text/Text';
import {
  getArticlesError,
  getArticlesIsLoading,
  getArticlesView,
} from '../../model/selectors/articlesPage';
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from '../../model/slices/articlePageSlice';
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

  const handleChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  useInitialEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(articlesPageActions.initState());
  });

  if (articlesError) {
    return (
      <div className={getClassNames(styles.articlesPage, {}, [className])}>
        <Text
          title={t('Error while loading artiles list')}
          text={t('Try to reload the page')}
        />
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={getClassNames(styles.articlesPage, {}, [className])}>
        <ArticleViewSelector
          view={articlesView}
          onViewClick={handleChangeView}
        />
        <ArticleList
          isLoading={articlesIsLoading}
          view={articlesView}
          articles={articles}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;

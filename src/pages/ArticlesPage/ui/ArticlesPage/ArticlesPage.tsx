import { FC, useCallback } from 'react';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { fetchArticlesNextPage } from '../../model/services/fetchArticlesNextPage/fetchArticlesNextPage';
import { articlesPageReducer } from '../../model/slices/articlePageSlice';
import ArticleInfiniteList from '../ArticleInfiniteList/ArticleInfiniteList';
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

  const handleNextPart = useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticlesNextPage());
    }
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <PageWrapper
        onScrollEnd={handleNextPart}
        className={getClassNames('', {}, [className])}
      >
        <ArticlesPageFilters />
        <ArticleInfiniteList className={styles.list} />
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;

import {
  ArticlesSortField,
  ArticlesSortSelector,
  ArticlesTypeTabs,
  ArticleType,
  ArticleView,
  ArticleViewSelector,
} from 'entities/Article';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from 'shared/types/sort';
import { Card } from 'shared/ui/Card/Card';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import { TabItem } from 'shared/ui/Tabs/Tabs';
import {
  getArticlesOrder,
  getArticlesSearch,
  getArticlesSortField,
  getArticlesType,
  getArticlesView,
} from '../../model/selectors/articlesPage';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../model/slices/articlePageSlice';
import styles from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
  className?: string;
}

const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const articlesView = useSelector(getArticlesView);
  const articlesSortOrder = useSelector(getArticlesOrder);
  const articlesSearchValue = useSelector(getArticlesSearch);
  const articlesSortField = useSelector(getArticlesSortField);
  const articlesType = useSelector(getArticlesType);

  const fetchArticlesData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchArticlesData, 500);

  const handleChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  const handleChangeOrder = useCallback(
    (order: SortOrder) => {
      dispatch(articlesPageActions.setOrder(order));
      dispatch(articlesPageActions.setPage(1));
      fetchArticlesData();
    },
    [dispatch, fetchArticlesData]
  );

  const handleChangeSortField = useCallback(
    (sortField: ArticlesSortField) => {
      dispatch(articlesPageActions.setSort(sortField));
      dispatch(articlesPageActions.setPage(1));
      fetchArticlesData();
    },
    [dispatch, fetchArticlesData]
  );

  const handleChangeSearch = useCallback(
    (searchValue: string) => {
      dispatch(articlesPageActions.setSearch(searchValue));
      dispatch(articlesPageActions.setPage(1));
      debouncedFetchData();
    },
    [dispatch, debouncedFetchData]
  );

  const handleTabClick = useCallback(
    (tab: TabItem) => {
      dispatch(articlesPageActions.setType(tab.value as ArticleType));
      dispatch(articlesPageActions.setPage(1));
      fetchArticlesData();
    },
    [dispatch, fetchArticlesData]
  );

  return (
    <div className={getClassNames(styles.articlesPageFilters, {}, [className])}>
      <div className={styles.sortWrapper}>
        <ArticlesSortSelector
          order={articlesSortOrder}
          onChangeOrder={handleChangeOrder}
          sort={articlesSortField}
          onChangeSort={handleChangeSortField}
        />
        <ArticleViewSelector
          view={articlesView}
          onViewClick={handleChangeView}
        />
      </div>
      <Card className={styles.search}>
        <Input
          theme={InputTheme.INVERTED_LABEL}
          placeholder={t('Search value')}
          inputName='search'
          value={articlesSearchValue}
          onChange={handleChangeSearch}
        />
      </Card>
      <ArticlesTypeTabs
        articlesType={articlesType}
        handleTabClick={handleTabClick}
      />
    </div>
  );
});

export default ArticlesPageFilters;

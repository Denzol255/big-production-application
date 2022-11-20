import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticlesSortField } from 'entities/Article';
import { SortOrder } from 'shared/types/sort';
import { getArticlesInited } from '../../selectors/articlesPage';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticles = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>('articlesPage/initArticles', async (searchParams, thunkAPI) => {
  const { dispatch, getState } = thunkAPI;
  const articlesInited = getArticlesInited(getState());
  if (!articlesInited) {
    const orderFormURL = searchParams.get('articlesSortOrder') as SortOrder;
    const sortFormURL = searchParams.get(
      'articlesSortField'
    ) as ArticlesSortField;
    const searchFormURL = searchParams.get('articlesSearchValue');

    if (orderFormURL) {
      dispatch(articlesPageActions.setOrder(orderFormURL));
    }
    if (sortFormURL) {
      dispatch(articlesPageActions.setSort(sortFormURL));
    }
    if (searchFormURL) {
      dispatch(articlesPageActions.setSearch(searchFormURL));
    }
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({}));
  }
});

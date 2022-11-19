import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  getArticlesHasMore,
  getArticlesIsLoading,
  getArticlesPage,
} from '../../selectors/articlesPage';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchArticlesNextPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/fetchArticlesNextPage', async (_, thunkAPI) => {
  const { dispatch, getState } = thunkAPI;
  const articlesHasMore = getArticlesHasMore(getState());
  const articlesPage = getArticlesPage(getState());
  const articlesIsLoading = getArticlesIsLoading(getState());

  if (articlesHasMore && !articlesIsLoading) {
    dispatch(articlesPageActions.setPage(articlesPage + 1));
    dispatch(fetchArticlesList({ page: articlesPage + 1 }));
  }
});

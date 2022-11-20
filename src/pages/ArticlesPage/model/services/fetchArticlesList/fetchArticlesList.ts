import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AxiosError } from 'axios';
import { Article } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
  getArticlesLimit,
  getArticlesOrder,
  getArticlesPage,
  getArticlesSearch,
  getArticlesSortField,
} from '../../selectors/articlesPage';

interface FetchArticlesListProps {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (_, thunkAPI) => {
  const { rejectWithValue, extra, getState } = thunkAPI;
  const limit = getArticlesLimit(getState());
  const articlesSortOrder = getArticlesOrder(getState());
  const articlesSearchValue = getArticlesSearch(getState());
  const articlesSortField = getArticlesSortField(getState());
  const articlesPage = getArticlesPage(getState());

  try {
    addQueryParams({
      articlesSortField,
      articlesSortOrder,
      articlesSearchValue,
    });
    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: articlesPage,
        q: articlesSearchValue,
        _sort: articlesSortField,
        _order: articlesSortOrder,
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (err) {
    const error = err as AxiosError<MyAxiosResponseDataError>;
    return rejectWithValue(
      error?.response?.data.message || 'default error message'
    );
  }
});

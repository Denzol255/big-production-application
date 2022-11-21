import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AxiosError } from 'axios';
import { Article, ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
  getArticlesLimit,
  getArticlesOrder,
  getArticlesPage,
  getArticlesSearch,
  getArticlesSortField,
  getArticlesType,
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
  const articlesType = getArticlesType(getState());

  try {
    addQueryParams({
      articlesSortField,
      articlesSortOrder,
      articlesSearchValue,
      articlesType,
    });
    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: articlesPage,
        q: articlesSearchValue,
        _sort: articlesSortField,
        _order: articlesSortOrder,
        type: articlesType === ArticleType.ALL ? undefined : articlesType,
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

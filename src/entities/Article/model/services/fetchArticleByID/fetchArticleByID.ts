import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AxiosError } from 'axios';
import { Article } from '../../types/article';

export const fetchArticleByID = createAsyncThunk<
  Article,
  string | undefined,
  ThunkConfig<string>
>('article/fetchArticleByID', async (articleID, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI;

  try {
    if (!articleID) {
      throw new Error('');
    }
    const response = await extra.api.get<Article>(`/articles/${articleID}`, {
      params: {
        _expand: 'user',
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

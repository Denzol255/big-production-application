import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AxiosError } from 'axios';
import { Article } from 'entities/Article';

export const fetchArticleRecommendations = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>('articlesDetailsPage/fetchArticleRecommendations', async (_, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI;

  try {
    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _limit: 4,
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

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AxiosError } from 'axios';
import { CommentItem } from 'entities/Comment/model/types/comment';

export const fetchCommentsByArticleId = createAsyncThunk<
  CommentItem[],
  string | undefined,
  ThunkConfig<string>
>('articleDetails/fetchCommentsByArticleId', async (articleId, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI;

  if (!articleId) {
    return rejectWithValue('error');
  }

  try {
    const response = await extra.api.get<CommentItem[]>(`/comments`, {
      params: {
        articleId,
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

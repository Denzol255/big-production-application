import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AxiosError } from 'axios';
import { CommentItem } from 'entities/Comment/model/types/comment';

export const fetchCommentsByArticleId = createAsyncThunk<
  CommentItem[],
  string | undefined,
  ThunkConfig<string>
>('articleDetails/fetchCommentsByArticleId', async (articleID, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI;

  try {
    const response = await extra.api.get<CommentItem[]>(`/comments`, {
      params: {
        articleID,
        _expand: 'user',
      },
    });

    if (!articleID) {
      return rejectWithValue('error');
    }

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

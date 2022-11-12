import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { CommentItem } from 'entities/Comment/model/types/comment';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

const articleDetailsCommentsAdapter = createEntityAdapter<CommentItem>({
  selectId: (comment) => comment.id,
});

export const getArticleComments =
  articleDetailsCommentsAdapter.getSelectors<StateSchema>(
    (state) =>
      state.articleDetailsComments ||
      articleDetailsCommentsAdapter.getInitialState()
  );

const articleDetailsCommentsSlice = createSlice({
  name: 'books',
  initialState:
    articleDetailsCommentsAdapter.getInitialState<ArticleDetailsCommentsSchema>(
      {
        isLoading: false,
        ids: [],
        entities: {},
        error: undefined,
      }
    ),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(
        fetchCommentsByArticleId.fulfilled,
        (state, action: PayloadAction<CommentItem[]>) => {
          state.isLoading = false;
          articleDetailsCommentsAdapter.setAll(state, action.payload);
        }
      )
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsCommentsReducer } =
  articleDetailsCommentsSlice;

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesInited } from '../../selectors/articlesPage';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticles = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/initArticles',
  async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    const articlesInited = getArticlesInited(getState());
    if (!articlesInited) {
      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesList({ page: 1 }));
    }
  }
);

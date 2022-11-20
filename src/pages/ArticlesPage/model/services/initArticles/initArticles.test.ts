import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { initArticles } from './initArticles';

jest.mock('../fetchArticlesList/fetchArticlesList');
jest.mock('../../slices/articlePageSlice');

describe('initArticles.test test', () => {
  const params = new URLSearchParams();
  test('inited', async () => {
    const newTestAsyncThunk = new TestAsyncThunk(initArticles, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        _inited: true,
      },
    });
    await newTestAsyncThunk.callThunk(params);
    expect(articlesPageActions.initState).not.toHaveBeenCalled();
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });

  test('not inited', async () => {
    const newTestAsyncThunk = new TestAsyncThunk(initArticles, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        _inited: false,
      },
    });
    await newTestAsyncThunk.callThunk(params);
    expect(articlesPageActions.initState).toHaveBeenCalled();
    expect(fetchArticlesList).toHaveBeenCalled();
  });
});

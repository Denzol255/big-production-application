import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { fetchArticlesNextPage } from './fetchArticlesNextPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchArticlesNextPage test', () => {
  test('success', async () => {
    const newTestAsyncThunk = new TestAsyncThunk(fetchArticlesNextPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });
    await newTestAsyncThunk.callThunk();
    expect(newTestAsyncThunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
  });

  test('no more data from server', async () => {
    const newTestAsyncThunk = new TestAsyncThunk(fetchArticlesNextPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: true,
        hasMore: false,
      },
    });
    await newTestAsyncThunk.callThunk();
    expect(newTestAsyncThunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});

import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { ArticlesSortField } from 'entities/Article/model/types/article';
import { ARTICLES_VIEW_LOCAL_STORAGE_KEY } from 'shared/constants/localstorage';
import { SortOrder } from 'shared/types/sort';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ArticlesPageSchema } from '../types/articlesPageSchema';

const articlesPageAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesPageAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesPageAdapter.getInitialState()
);

const articlesPageSlice = createSlice({
  name: 'articlePageSlice',
  initialState: articlesPageAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    ids: [],
    entities: {},
    error: undefined,
    view: ArticleView.GRID,
    page: 1,
    hasMore: true,
    _inited: false,
    limit: 9,
    search: '',
    sort: ArticlesSortField.CREATED,
    order: 'asc',
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticlesSortField>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(
        ARTICLES_VIEW_LOCAL_STORAGE_KEY
      ) as ArticleView;
      state.view = view;
      state.limit = view === ArticleView.LIST ? 4 : 12;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        if (action.meta.arg.replace) {
          articlesPageAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.meta.arg.replace) {
          articlesPageAdapter.setAll(state, action.payload);
        } else {
          articlesPageAdapter.addMany(state, action.payload);
        }
        state.hasMore = action.payload.length > state.limit;
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlesPageReducer, actions: articlesPageActions } =
  articlesPageSlice;

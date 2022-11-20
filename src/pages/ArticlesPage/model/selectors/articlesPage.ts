import { StateSchema } from 'app/providers/StoreProvider';
import { ArticlesSortField, ArticleView } from 'entities/Article';

export const getArticlesIsLoading = (state: StateSchema) =>
  state.articlesPage?.isLoading;

export const getArticlesError = (state: StateSchema) =>
  state.articlesPage?.error;

export const getArticlesView = (state: StateSchema) =>
  state.articlesPage?.view || ArticleView.GRID;

export const getArticlesPage = (state: StateSchema) =>
  state.articlesPage?.page || 1;

export const getArticlesLimit = (state: StateSchema) =>
  state.articlesPage?.limit || 9;

export const getArticlesHasMore = (state: StateSchema) =>
  state.articlesPage?.hasMore;

export const getArticlesInited = (state: StateSchema) =>
  state.articlesPage?._inited;

export const getArticlesSortField = (state: StateSchema) =>
  state.articlesPage?.sort ?? ArticlesSortField.CREATED;

export const getArticlesOrder = (state: StateSchema) =>
  state.articlesPage?.order ?? 'desc';

export const getArticlesSearch = (state: StateSchema) =>
  state.articlesPage?.search ?? '';

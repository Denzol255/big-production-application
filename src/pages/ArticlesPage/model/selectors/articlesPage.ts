import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const getArticlesIsLoading = (state: StateSchema) =>
  state.articlesPage?.isLoading;

export const getArticlesError = (state: StateSchema) =>
  state.articlesPage?.error;

export const getArticlesView = (state: StateSchema) =>
  state.articlesPage?.view || ArticleView.GRID;

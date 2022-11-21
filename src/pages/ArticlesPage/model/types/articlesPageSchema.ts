import { EntityState } from '@reduxjs/toolkit';
import {
  Article,
  ArticlesSortField,
  ArticleType,
  ArticleView,
} from 'entities/Article';
import { SortOrder } from 'shared/types/sort';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;
  // filters
  view: ArticleView;
  order: SortOrder;
  sort: ArticlesSortField;
  search: string;
  type: ArticleType;

  _inited: boolean;
}

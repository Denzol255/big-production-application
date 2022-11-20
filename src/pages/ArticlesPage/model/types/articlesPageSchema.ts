import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';
import { ArticlesSortField } from 'entities/Article/model/types/article';
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

  _inited: boolean;
}

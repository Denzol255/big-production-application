import { User } from 'entities/User';
import { ArticleBlockType, ArticleType } from '../const/articleConst';

export interface ArticleBlockBase {
  id: string;

  paragraphs: string[];
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  title?: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}

export type ArticleBlock =
  | ArticleImageBlock
  | ArticleTextBlock
  | ArticleCodeBlock;

export interface Article {
  blocks: ArticleBlock[];
  createdAt: string;
  id: string;
  img: string;
  subtitle: string;
  title: string;
  type: ArticleType[];
  views: number;
  user: User;
}

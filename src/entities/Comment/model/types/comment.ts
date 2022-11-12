import { User } from 'entities/User';

export interface CommentItem {
  id: string;
  text: string;
  user: User;
}

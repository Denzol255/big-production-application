import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticlesSortField, ArticleView } from 'entities/Article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import ArticlesPageFilters from './ArticlesPageFilters';

export default {
  title: 'pages/Article/ArticlesPageFilters',
  component: ArticlesPageFilters,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = () => (
  <ArticlesPageFilters />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  StoreDecorator({
    articlesPage: {
      order: 'asc',
      search: 'Java news',
      sort: ArticlesSortField.TITLE,
      view: ArticleView.GRID,
    },
  }),
];

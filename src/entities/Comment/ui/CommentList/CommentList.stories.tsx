import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
  title: 'entities/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  comments: [
    {
      id: '1',
      text: 'some text',
      user: {
        id: '1',
        avatar:
          'https://avatars.mds.yandex.net/i?id=b9a0ef17313b1e0c8ba40be45c333855-5236630-images-thumbs&n=13&exp=1',
        username: 'Olga',
      },
    },
    {
      id: '2',
      text: 'some text',
      user: {
        id: '2',
        avatar:
          'https://best-fly.ru/wp-content/uploads/2020/08/ikonka-malchik.jpg',
        username: 'Kolya',
      },
    },
    {
      id: '3',
      text: 'some text',
      user: {
        id: '3',
        username: 'Pasha',
      },
    },
  ],
};

export const WithError = Template.bind({});
WithError.args = {
  error: '123',
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  isLoading: true,
};

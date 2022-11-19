import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import AddCommentForm from './AddCommentForm';

export default {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => (
  <AddCommentForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  handleSendComment: action('handleSendComment'),
};
Primary.decorators = [StoreDecorator({})];

export const Error = Template.bind({});
Error.args = {
  handleSendComment: action('handleSendComment'),
};
Error.decorators = [
  StoreDecorator({
    addCommentForm: {
      error: 'error',
    },
  }),
];

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <div
    style={{
      width: '400px',
      height: '250px',
      background: '#000',
    }}
  >
    <LoginForm {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  StoreDecorator({
    login: {
      username: '123',
      password: '123',
    },
  }),
];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [
  StoreDecorator({
    login: {
      username: 'Vasya',
      password: 'Pumpkin',
      error: 'Vasya - loch',
    },
  }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
  StoreDecorator({
    login: {
      isLoading: true,
    },
  }),
];

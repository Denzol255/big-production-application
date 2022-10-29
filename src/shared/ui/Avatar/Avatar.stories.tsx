import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: 'https://img.freepik.com/premium-photo/emoji-with-medical-mask-sunglass-royal-crown-3d_286925-127.jpg?w=826',
  size: 150,
};
export const Small = Template.bind({});
Small.args = {
  src: 'https://img.freepik.com/premium-photo/emoji-with-medical-mask-sunglass-royal-crown-3d_286925-127.jpg?w=826',
  size: 50,
};

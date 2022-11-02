import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Skeleton } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: '100%',
  height: '200px',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  width: '100%',
  height: '200px',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Circle = Template.bind({});
Primary.args = {
  border: '50%',
  width: '100px',
  height: '100px',
};

export const CircleDark = Template.bind({});
CircleDark.args = {
  border: '50%',
  width: '100px',
  height: '100px',
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];

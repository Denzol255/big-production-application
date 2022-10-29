import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  options: [
    { value: '123', text: '123' },
    { value: '1234', text: '1234' },
    { value: '123456', text: '12345' },
    { value: '123456', text: '123456' },
  ],
  label: 'Label',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  options: [
    { value: '123', text: '123' },
    { value: '1234', text: '1234' },
    { value: '123456', text: '12345' },
    { value: '123456', text: '123456' },
  ],
  label: 'Label',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

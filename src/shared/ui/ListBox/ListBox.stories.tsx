import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import CenterWrapper from 'shared/config/storybook/CenterWrapper/CenterWrapper';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ListBox, ListBoxItem } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ListBox>;

const items: ListBoxItem<string>[] = [
  {
    value: 'Potato',
    content: 'Potato',
  },
  {
    value: 'Onion',
    content: <span>Onion</span>,
  },
  {
    value: 'Carrot',
    content: 'Carrot',
    disabled: true,
  },
  {
    value: 'Tomato',
    content: <span>Tomato</span>,
  },
];

const Template: ComponentStory<typeof ListBox> = (args) => (
  <CenterWrapper>
    <ListBox {...args} />
  </CenterWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  defaultValue: 'Choose value',
  onChange: action('onChange'),
  value: 'Potato',
  items,
  label: 'Choose vegatable',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  defaultValue: 'Choose value',
  onChange: action('onChange'),
  value: 'Potato',
  items,
  label: 'Choose vegatable',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryBlue = Template.bind({});
PrimaryBlue.args = {
  defaultValue: 'Choose value',
  onChange: action('onChange'),
  value: 'Potato',
  items,
  label: 'Choose vegatable',
  optionsDirection: 'top',
};
PrimaryBlue.decorators = [ThemeDecorator(Theme.BLUE)];

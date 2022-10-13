import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Navbar } from './Navbar';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const PrimaryWithoutUser = Template.bind({});
PrimaryWithoutUser.args = {};
PrimaryWithoutUser.decorators = [StoreDecorator({})];

export const PrimaryWithUser = Template.bind({});
PrimaryWithUser.args = {};
PrimaryWithUser.decorators = [StoreDecorator({ user: { authData: {} } })];

export const DarkWithoutUser = Template.bind({});
DarkWithoutUser.args = {};
DarkWithoutUser.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const DarkWithUser = Template.bind({});
DarkWithUser.args = {};
DarkWithUser.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ user: { authData: {} } }),
];

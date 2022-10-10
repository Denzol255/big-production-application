import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
  theme: ButtonTheme.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Text',
  theme: ButtonTheme.PRIMARY,
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR_INVERTED,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUNDINVERTED,
};
BackgroundInverted.decorators = [ThemeDecorator(Theme.DARK)];

export const Square = Template.bind({});
Square.args = {
  children: '+',
  theme: ButtonTheme.BACKGROUND,
  square: true,
};

export const SizeS = Template.bind({});
SizeS.args = {
  children: '>',
  size: ButtonSize.SIZE_S,
  square: true,
  theme: ButtonTheme.BACKGROUND,
};

export const SizeM = Template.bind({});
SizeM.args = {
  children: '>',
  size: ButtonSize.SIZE_M,
  square: true,
  theme: ButtonTheme.BACKGROUND,
};

export const SizeL = Template.bind({});
SizeL.args = {
  children: '>',
  size: ButtonSize.SIZE_L,
  square: true,
  theme: ButtonTheme.BACKGROUND,
};

export const SizeXL = Template.bind({});
SizeXL.args = {
  children: '>',
  size: ButtonSize.SIZE_XL,
  square: true,
  theme: ButtonTheme.BACKGROUND,
};

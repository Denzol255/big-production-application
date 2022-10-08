import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { FallbackComponent } from './FallbackComponent';

export default {
  title: 'widgets/FallbackComponent',
  component: FallbackComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof FallbackComponent>;

const Template: ComponentStory<typeof FallbackComponent> = (args) => (
  <FallbackComponent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

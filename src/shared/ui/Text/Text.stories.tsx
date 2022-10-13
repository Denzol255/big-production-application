import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;
const DarkTemplate: ComponentStory<typeof Text> = (args) => (
  <div
    style={{
      width: '100%',
      height: '100px',
      background: '#000',
      padding: '20px',
    }}
  >
    <Text {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  text: 'Description Description Description Description',
};

export const PrimaryInverted = DarkTemplate.bind({});
PrimaryInverted.args = {
  title: 'Title',
  text: 'Description Description Description Description',
  theme: TextTheme.PRIMARY_INVERTED,
};

export const Error = Template.bind({});
Error.args = {
  title: 'Title',
  text: 'Description Description Description Description',
  theme: TextTheme.ERROR,
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  title: 'Title',
  text: 'Description Description Description Description',
};
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title',
  text: 'Description Description Description Description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const NoTitle = Template.bind({});
NoTitle.args = {
  text: 'Description Description Description Description',
};

export const NoText = Template.bind({});
NoText.args = {
  title: 'Title',
};

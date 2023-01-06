import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import CenterWrapper from 'shared/config/storybook/CenterWrapper/CenterWrapper';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Popover } from './Popover';

export default {
  title: 'shared/Popover',
  component: Popover,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Popover>;

// const items: string[] = [
//   {
//     value: 'Potato',
//     content: 'Potato',
//   },
//   {
//     value: 'Onion',
//     content: <span>Onion</span>,
//   },
//   {
//     value: 'Carrot',
//     content: 'Carrot',
//     disabled: true,
//   },
//   {
//     value: 'Tomato',
//     content: <span>Tomato</span>,
//   },
// ];

const Template: ComponentStory<typeof Popover> = (args) => (
  <CenterWrapper>
    <Popover {...args} />
  </CenterWrapper>
);

export const Primary = Template.bind({});
Primary.args = {};

Primary.decorators = [ThemeDecorator(Theme.BLUE)];

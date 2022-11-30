import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from './Flex';

export default {
  title: 'shared/Stack/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

const children = (
  <>
    <div>first</div>
    <div>second</div>
    <div>third</div>
  </>
);

export const Default = Template.bind({});
Default.args = {
  children: children,
};

export const Column = Template.bind({});
Column.args = {
  children: children,
  direction: 'column',
};

export const JustifyCenter = Template.bind({});
JustifyCenter.args = {
  children: children,
  justify: 'center',
};

export const AlignCenter = Template.bind({});
AlignCenter.args = {
  children: children,
  align: 'center',
};

export const Center = Template.bind({});
Center.args = {
  children: children,
  align: 'center',
  justify: 'center',
};

export const BetweenCenter = Template.bind({});
BetweenCenter.args = {
  children: children,
  align: 'center',
  justify: 'between',
};

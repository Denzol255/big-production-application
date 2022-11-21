import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Tabs } from './Tabs';

export default {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  tabs: [
    {
      value: '1',
      content: '123',
    },
    {
      value: '2',
      content: <div>333</div>,
    },
    {
      value: '3',
      content: <div>222</div>,
    },
  ],
  value: '2',
  onTabClick: action('onTabClick'),
};

/* eslint-disable */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from 'shared/ui/Text/Text';
import { Page } from './Page';

export default {
  title: 'shared/Page',
  component: Page,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <div>
      <Text title='123 123 21 3 12 31 2' />
      <Text text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quisquam saepe laborum aperiam vitae, sit esse, quod adipisci dolore eos iste libero maxime possimus vel numquam ut itaque eveniet consectetur!' />
    </div>
  ),
};

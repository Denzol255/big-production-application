import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { EditableProfileHeader } from './EditableProfileHeader';

export default {
  title: 'features/EditableProfileHeader',
  component: EditableProfileHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof EditableProfileHeader>;

const Template: ComponentStory<typeof EditableProfileHeader> = (args) => (
  <EditableProfileHeader {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

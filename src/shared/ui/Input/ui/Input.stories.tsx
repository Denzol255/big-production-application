import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
const DarkTemplate: ComponentStory<typeof Input> = (args) => (
  <div
    style={{
      width: '250px',
      height: '100px',
      background: '#000',
      padding: '20px',
    }}
  >
    <Input {...args} />
  </div>
);

export const Primary = DarkTemplate.bind({});
Primary.args = {
  placeholder: 'text',
  value: '123',
};

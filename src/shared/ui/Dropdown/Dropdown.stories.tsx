import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CenterWrapper from 'shared/config/storybook/CenterWrapper/CenterWrapper';
import { Button } from '../Button/Button';
import { Dropdown } from './Dropdown';

export default {
  title: 'shared/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <CenterWrapper>
    <Dropdown {...args} />
  </CenterWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  items: [
    {
      content: 'first',
      onClick: action('onClick'),
    },
    {
      content: 'second',
      onClick: action('onClick'),
    },
    {
      content: 'third',
      disabled: true,
      onClick: action('onClick'),
    },
    {
      content: 'Google',
      href: 'www.google.com',
      onClick: action('onClick'),
    },
  ],
  trigger: <Button>Button</Button>,
};

export const Top = Template.bind({});
Top.args = {
  items: [
    {
      content: 'first',
      onClick: action('onClick'),
    },
    {
      content: 'second',
      onClick: action('onClick'),
    },
    {
      content: 'third',
      disabled: true,
      onClick: action('onClick'),
    },
    {
      content: 'Google',
      href: 'www.google.com',
      onClick: action('onClick'),
    },
  ],
  trigger: <Button>Button</Button>,
  optionsDirection: 'top',
};
export const Bottom = Template.bind({});
Bottom.args = {
  items: [
    {
      content: 'first',
      onClick: action('onClick'),
    },
    {
      content: 'second',
      onClick: action('onClick'),
    },
    {
      content: 'third',
      disabled: true,
      onClick: action('onClick'),
    },
    {
      content: 'Google',
      href: 'www.google.com',
      onClick: action('onClick'),
    },
  ],
  trigger: <Button>Button</Button>,
  optionsDirection: 'bottom',
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  items: [
    {
      content: 'first',
      onClick: action('onClick'),
    },
    {
      content: 'second',
      onClick: action('onClick'),
    },
    {
      content: 'third',
      disabled: true,
      onClick: action('onClick'),
    },
    {
      content: 'Google',
      href: 'www.google.com',
      onClick: action('onClick'),
    },
  ],
  trigger: <Button>Button</Button>,
  optionsDirection: 'topLeft',
};

export const TopRight = Template.bind({});
TopRight.args = {
  items: [
    {
      content: 'first',
      onClick: action('onClick'),
    },
    {
      content: 'second',
      onClick: action('onClick'),
    },
    {
      content: 'third',
      disabled: true,
      onClick: action('onClick'),
    },
    {
      content: 'Google',
      href: 'www.google.com',
      onClick: action('onClick'),
    },
  ],
  trigger: <Button>Button</Button>,
  optionsDirection: 'topRight',
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  items: [
    {
      content: 'first',
      onClick: action('onClick'),
    },
    {
      content: 'second',
      onClick: action('onClick'),
    },
    {
      content: 'third',
      disabled: true,
      onClick: action('onClick'),
    },
    {
      content: 'Google',
      href: 'www.google.com',
      onClick: action('onClick'),
    },
  ],
  trigger: <Button>Button</Button>,
  optionsDirection: 'bottomLeft',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  items: [
    {
      content: 'first',
      onClick: action('onClick'),
    },
    {
      content: 'second',
      onClick: action('onClick'),
    },
    {
      content: 'third',
      disabled: true,
      onClick: action('onClick'),
    },
    {
      content: 'Google',
      href: 'www.google.com',
      onClick: action('onClick'),
    },
  ],
  trigger: <Button>Button</Button>,
  optionsDirection: 'bottomRight',
};

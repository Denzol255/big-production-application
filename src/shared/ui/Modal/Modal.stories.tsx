import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
      vitae, commodi ipsum asperiores exercitationem reiciendis sequi possimus
      voluptatibus eveniet reprehenderit totam ad dolores consequuntur vel quas
      explicabo cum sint provident.
    </div>
  ),
  isOpen: true,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
      vitae, commodi ipsum asperiores exercitationem reiciendis sequi possimus
      voluptatibus eveniet reprehenderit totam ad dolores consequuntur vel quas
      explicabo cum sint provident.
    </div>
  ),
  isOpen: true,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

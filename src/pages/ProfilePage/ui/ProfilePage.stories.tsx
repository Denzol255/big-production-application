import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <div style={{ padding: '20px' }}>
    <ProfilePage {...(args as {})} />
  </div>
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  ThemeDecorator(Theme.LIGHT),
  StoreDecorator({
    profile: {
      formData: {
        age: 22,
        avatar: '',
        city: '',
        country: Country.RUSSIA,
        first: 'Pupa',
        lastname: 'Lupa',
        currency: Currency.RUB,
      },
      readonly: true,
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      formData: {
        age: 22,
        avatar: '',
        city: '',
        country: Country.RUSSIA,
        first: 'Pupa',
        lastname: 'Lupa',
        currency: Currency.RUB,
      },
      readonly: true,
    },
  }),
];

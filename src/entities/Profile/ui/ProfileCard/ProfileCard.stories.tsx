import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <div style={{ padding: '20px' }}>
    <ProfileCard {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  readonly: true,
  formData: {
    age: 22,
    avatar: '',
    city: '',
    country: Country.RUSSIA,
    first: 'Pupa',
    lastname: 'Lupa',
    currency: Currency.RUB,
  },
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  readonly: true,
  formData: {
    age: 22,
    avatar:
      'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000',
    city: 'Vologda',
    country: Country.RUSSIA,
    first: 'Pupa',
    lastname: 'Lupa',
    currency: Currency.RUB,
  },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithError = Template.bind({});
WithError.args = {
  error: 'error',
};
WithError.decorators = [];

export const WithErrorDark = Template.bind({});
WithErrorDark.args = {
  error: 'error',
};
WithErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const IsLoading = Template.bind({});
IsLoading.args = {
  isLoading: true,
};
IsLoading.decorators = [];
